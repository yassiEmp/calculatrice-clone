import os
import re

def isAbsolutePath(path):
    return path.startswith('/')

def makeRelativePath(path):
    if path.startswith('/'):
        return './' + path.lstrip('/')
    return path

def makeAbsolutePath(path):
    if path.startswith('./'):
        return '/' + path.lstrip('./')
    return path

def Make(path_type):
    os.chdir("./app")
    for root, dirs, files in os.walk('.'):
        for f in files:
            if f.endswith('.tsx'):
                file_path = os.path.join(root, f)
                with open(file_path, 'r', encoding='utf-8') as file:
                    content = file.read()
                    imagePaths = re.findall(r'<Image\s+[^>]*src="([^"]+)"', content)
                    
                    new_content = content
                    for path in imagePaths:
                        if path_type == "relative" and isAbsolutePath(path):
                            new_path = makeRelativePath(path)
                            new_content = new_content.replace(f'src="{path}"', f'src="{new_path}"')
                        elif path_type == "absolute" and not isAbsolutePath(path):
                            new_path = makeAbsolutePath(path)
                            new_content = new_content.replace(f'src="{path}"', f'src="{new_path}"')
                    
                    if new_content != content:
                        with open(file_path, 'w', encoding='utf-8') as file:
                            print(f'{file_path} has been modified')
                            file.write(new_content)

Make("relative")
