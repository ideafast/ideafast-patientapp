import os
import shutil
from pathlib import Path

# todo:
#  1. Check whether script works on MAC OS
#  2. Find a solution to clone repo.
#  3. Figure out permissions to delete cloned repo

# To use:
# COPY this script into cloned repo
# (cloned by running 'git clone https://github.com/ideafast/ideafast-devicesupportdocs-web.git ./SupportDocumentation'
# in the root repo).

# Create dictionary
# Structure will be: { device: [ path1, path2,... ] }
newStructure = {}


def fill_keys():
    os.chdir(Path.cwd() / Path('_common'))
    newStructure.clear()
    for dev in os.listdir():
        newStructure[dev] = []
    os.chdir(Path('../../'))


def fill_values():
    for file in os.listdir():
        if file == '_misc':
            continue
        else:
            try:
                os.chdir(file)
                for deviceName in os.listdir():
                    for device in newStructure.keys():
                        if deviceName == device:
                            try:
                                os.chdir(device)
                            except OSError:
                                print(f'OS ERROR: Failed to change dir from {path.cwd()} to {device}')
                            for docs in os.listdir():
                                newStructure[device].append(Path.cwd() / docs)
                            os.chdir(Path('../../'))
                            break
                os.chdir(Path('../../'))
            except:
                print(f'Failed to changed directory: {Path.cwd()} to {file}')


def move_files(target_dir):
    target_dir = Path(target_dir)
    for dev, num in newStructure.items():
        target_dir2 = target_dir / dev
        try:
            if not os.path.isdir(target_dir2):
                os.mkdir(target_dir2)
        except FileExistsError:
            print(f'FILE EXISTS ERROR: {target_dir2} already exists.')
        except OSError:
            print(f'OS ERROR: Path {target_dir2} is wrong.')
        for document_path in num:
            try:
                shutil.copy(document_path, target_dir2)
                print(f'\n{document_path} successfully copied into {target_dir2} ')
            except IOError:
                print(f'OS ERROR: Failed to move {document_path} to {target_dir2}.')


def read_and_copy(lang_extension):
    os.chdir(Path(lang_extension))
    fill_keys()
    fill_values()
    dir_path = Path(f'C:/Users/test/IdeaProjects/ideafast-patientapp/src/i18n/docs/{lang}')

    try:
        shutil.rmtree(dir_path)
        os.mkdir(dir_path)
    except OSError:
        print(f'OS ERROR: Failed to delete {dir_path} and create empty directory.')
    move_files(dir_path)


def copy_images(root_path):
    try:
        images_from = root_path / 'images'
        images_to = root_path / '../src/assets/devices'
        os.chdir(images_from)
        for directory in os.listdir():
            if os.path.isdir(images_to / directory):
                shutil.rmtree(images_to / directory)
            shutil.copytree(directory, images_to / directory)
    except IOError:
        print(f'IO ERROR: Failed to copy images')


if __name__ == '__main__':
    path = Path
    ideafastPath = path.cwd()

    # subprocess.run(['git clone https://github.com/ideafast/ideafast-devicesupportdocs-web.git ./SupportDocumentation']
    # , check=True, shell=True)

    try:
        os.chdir(path.cwd() / '_i18n/')
    except OSError:
        print(f'OS ERROR: Failed to changed directory: {Path.cwd()} to _i18n/')

    lang_path = os.getcwd()
    for lang in os.listdir():

        if lang == 'en':
            read_and_copy(lang)
            os.chdir(lang_path)

        elif lang == 'de':
            read_and_copy(lang)
            os.chdir(lang_path)

        elif lang == 'nl':
            read_and_copy(lang)
            os.chdir(lang_path)
    copy_images(ideafastPath)
    try:
        shutil.rmtree(ideafastPath / '../')
    except:
        print(f'Failed to delete Support Documentation repo')
