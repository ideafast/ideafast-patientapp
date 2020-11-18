import os
import shutil
import subprocess
import stat 
from pathlib import Path


# Structure will be: { device: [ path1, path2,... ] }
DOCS_PATH_STORE = {}

DOCS_PATH = Path(r'../../SupportDocumentation')


def fill_keys(lang_extension: Path) -> dict:
    DOCS_PATH_STORE.clear()
    _files = (DOCS_PATH / "_i18n" / lang_extension / "_common").glob('**/*')
    return {f.name: [] for f in _files if f.is_dir()}


def fill_values(lang_extension: Path):
    documents = [p for p in (DOCS_PATH / "_i18n" / lang_extension).iterdir() if p.name != '_misc']
    for device_path in documents:
        for device in DOCS_PATH_STORE.keys():
            DOCS_PATH_STORE[device] += [Path(p) for p in device_path.iterdir() if p.name == device]


def move_files(target_dir: Path):
    for dev, num in DOCS_PATH_STORE.items():
        _target_dir = target_dir / dev
        
        if _target_dir.resolve().is_dir():
            shutil.rmtree(target_dir2.resolve())
        _target_dir.mkdir()

        for device_path in num:
            for document_path in device_path.iterdir():
                shutil.copy(document_path.resolve(), _target_dir.resolve())


def read_and_copy(lang_extension: Path):
    fill_values(lang_extension)
    dir_path = Path(f'../i18n/docs/{lang_extension}')
    if dir_path.is_dir():
        shutil.rmtree(dir_path)
    dir_path.mkdir()
    move_files(dir_path)


def delete_repo():
    # note: this is only required for windows
    for root, dirs, files in os.walk(DOCS_PATH):
        for directory in dirs:
            Path.chmod((Path(root) / directory), stat.S_IRWXU)
        for file in files:
            Path.chmod((Path(root) / file), stat.S_IRWXU)
    shutil.rmtree(DOCS_PATH)


def copy_images():
    images_from = DOCS_PATH / 'images'
    images_to = Path('../assets/devices/')
    for image_directory in images_from.iterdir():
        _path = Path(images_to / image_directory.name)
        if _path.is_dir():
            shutil.rmtree(_path.resolve())
        shutil.copytree(image_directory.resolve(), _path.resolve())


def copy_markdown():
    for lang in [Path('en'), Path('de'), Path('nl')]:
        DOCS_PATH_STORE.update(fill_keys(lang))
        read_and_copy(lang)


def clone_repo():
    url = 'git@github.com:ideafast/ideafast-devicesupportdocs-web.git'
    subprocess.call([f'git clone {url} {DOCS_PATH}'], shell=True)


if __name__ == '__main__':
    clone_repo()
    copy_markdown()
    copy_images()
    delete_repo()
