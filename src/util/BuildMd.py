import os
import shutil
import subprocess
import stat
from pathlib import Path

# todo:
#  1. Find alternative for os.walk in Pathlib package.
#  2. Check whether 'stat' works on other OS platforms.
#  3. Find out why cannot clone git repo from a script.

# To use:
# Clone (cloned by running 'git clone https://github.com/ideafast/ideafast-devicesupportdocs-web.git ./SupportDocumentation'
# in the root repo).

# Structure will be: { device: [ path1, path2,... ] }
DOCS_PATH_STORE = {}

DOCS_PATH = Path(r'../../SupportDocumentation')


# returns
def fill_keys(lang_extension: Path) -> dict:
    DOCS_PATH_STORE.clear()
    return {f.name: [] for f in (DOCS_PATH / "_i18n" / lang_extension / "_common").glob('**/*') if f.is_dir()}


def fill_values(lang_extension: Path):
    documents = [p for p in (DOCS_PATH / "_i18n" / lang_extension).iterdir() if p.name != '_misc']
    for device_path in documents:
        for device in DOCS_PATH_STORE.keys():
            DOCS_PATH_STORE[device] += [Path(p) for p in device_path.iterdir() if p.name == device]


def move_files(target_dir: Path):
    for dev, num in DOCS_PATH_STORE.items():
        target_dir2 = target_dir / dev
        if not target_dir2.resolve().is_dir():
            target_dir2.mkdir()
        else:
            shutil.rmtree(target_dir2.resolve())
            target_dir2.mkdir()
        for device_path in num:
            [shutil.copy(document_path.resolve(), target_dir2.resolve()) for document_path in device_path.iterdir()]


def read_and_copy(lang_extension: Path):
    fill_values(lang_extension)
    dir_path = Path(f'../i18n/docs/{lang}')
    if dir_path.is_dir():
        shutil.rmtree(dir_path)
    dir_path.mkdir()
    move_files(dir_path)


def delete_repo():
    for root, dirs, files in os.walk("../../SupportDocumentation"):
        for directory in dirs:
            Path.chmod((Path(root) / directory), stat.S_IRWXU)
        for file in files:
            Path.chmod((Path(root) / file), stat.S_IRWXU)
    shutil.rmtree('../../SupportDocumentation')


def copy_images():
    images_from = DOCS_PATH / 'images'
    images_to = Path('../assets/devices/')
    for image_directory in images_from.iterdir():
        _path = Path(images_to / image_directory.name)
        if _path.is_dir():
            shutil.rmtree(_path.resolve())
        shutil.copytree(image_directory.resolve(), _path.resolve())


# def clone_repo():
    # subprocess.call(['git clone git@github.com:ideafast/ideafast-devicesupportdocs-web.git '
    #                  '../../SupportDocumentation'], shell=True)
    # subprocess.Popen(['git', 'clone', 'git@github.com:ideafast/ideafast-devicesupportdocs-web.git',
    #                  '/SupportDocumentation'])


if __name__ == '__main__':
    docs = Path('./docs/_i18n')
    # clone_repo()

    for lang in [Path('en'), Path('de'), Path('nl')]:
        DOCS_PATH_STORE.update(fill_keys(lang))
        read_and_copy(lang)
    copy_images()
    delete_repo()
