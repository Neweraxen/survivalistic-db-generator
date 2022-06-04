const fsPromises = require('fs').promises;
const loadJson5File = require("read-json5-file");
const _ = require('lodash');
const jsonFile = require('jsonfile')
const path = require('path');

const commandLineArgs = require('command-line-args')
const optionDefinitions = [
   { name: 'packageName', type: String, defaultOption: true },
];
const options = commandLineArgs(optionDefinitions)

// empty out anything that previously was generated in the output folder,
// then recreate the output folder
// then start execution of reading/translating/writing
fsPromises.rm('./output', {recursive: true}).then(() => {
  fsPromises.mkdir('./output').then(() => {
    fsPromises.readdir('./input').then((fileNames) => {
      // =============== INPUTS HERE ==========================
      //let packageName = "BlatantDecoy.BugmeatRecipes";
      let {packageName} = options;
      // ======================================================


      let ediblesDatabase = [];
      fileNames.forEach((fileName) => {
        console.log(`working on ${fileName}...`)
        const fixture = path.join(__dirname, `/input/${fileName}/object.json`)
        const fileContents = loadJson5File.sync(fixture);

        let {Name, Edibility, EdibleIsDrink, Category} = fileContents;
        if (!Name) {
          throw new Error(`json file ${fileName} invalid`);
        }

        let entry = [];

        entry.push(Name);

        // Hunger part
        let foodValues = Edibility;
        if (Number(foodValues) > 100) {
          foodValues = "100";
        }
        if (Number(foodValues) < -100) {
          foodValues = "-100";
        }
        foodValues += "/";
        // Thirst part
        if (Number(Edibility) < 0) {
          foodValues += String(Math.max(Number(Edibility), -100));
        } else if (EdibleIsDrink) {
          foodValues += "80";
        } else if (Category == "Cooking") {
          const soupArray = ['Stew', 'Soup', 'Gumbo', 'Broth', 'Ramen'];
          let isSoup = !_.isEmpty(_.intersection(_.words(Name), soupArray));
          if (isSoup) {
            foodValues += "40";
          } else {
            foodValues += "10";
          }
        } else {
          foodValues += "0";
        }
        entry.push(foodValues);


        ediblesDatabase.push(entry);
      });


      let output = {
        edibles: ediblesDatabase
      };
      console.log('');
      fsPromises.writeFile(`./output/${packageName}_edibles.json`, JSON.stringify(output, null, "\t")).then(() => {
        console.log('database created for ' + packageName);
      }).catch((e) => {
        console.log('failed to create database for ' + packageName);
        console.log(e);
      });


    });
  });
});
