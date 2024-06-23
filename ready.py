import os
import re
os.chdir("./app")
files = []
for root ,dir , file  in os.walk('.'):
    #reading the file content  
    for f in file :
        if f.endswith('.tsx'):
            with open(f , 'r') as file :
                content = file.read()
                #get all the Image tags attribute 
                img_tags = re.findall(r'<Image\s+[^>]*src=\"([^\"]+)\"', content)
                print(img_tags)