const fs = require('fs');

// Path to the calculatrices folder
const calculatricesFolderPath = './app/calculatrices/(calculatrice)';

// creating the calculatrice folder structure variable

const calculatricesFolderStructure = [
    "standard",
    "scientifique",
    "graphique",
    "programmeur",
    "date"
]

//for each folder in the calculatrices folder structure
for (const folder of calculatricesFolderStructure) {
    // Create the folder in the calculatricesFolderPath folder
    fs.mkdirSync(`${calculatricesFolderPath}/${folder}`, { recursive: true });
    //in each folder create a page.tsx file that contain this code 
    // import React from 'react'

    // const layout = () => {
    //   return (
    //     <div>
    //       i am the calculator <folder name>
    //     </div>
    //   )
    // }

    // export default layout
    fs.writeFileSync(`${calculatricesFolderPath}/${folder}/page.tsx`, 
    `import React from 'react'
    
    const layout = () => {
      return (
        <div>
          i am the calculator ${folder}
        </div>
      )
    }
    
    export default layout`)
};

// Path to the converter folder
const converterFolderPath = './app/calculatrices/(convertisseur)';

// creating the calculatrice folder structure variable

const converterFolderStructure = [
    "devise",
    "volume",
    "longueur",
    "poidsMasse",
    "temperature",
    "energie",
    "surface",
    "vitesse",
    "heure",
    "puissance",
    "donnée",
    "pression",
    "angle"
]

for( folder of converterFolderStructure){
    //creating the folder
    fs.mkdirSync(`${converterFolderPath}/${folder}`, { recursive: true });
    //creating the page.tsx file
    fs.writeFileSync(`${converterFolderPath}/${folder}/page.tsx`, 
    `import React from 'react'
    
    const layout = () => {
      return (
        <div>
          i am the calculator ${folder}
        </div>
      )
    }
    
    export default layout`)
}






