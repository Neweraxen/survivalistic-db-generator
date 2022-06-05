# Generate Database Files for Survivalistic Stardew Valley mod

Survivalistic Mod here: [https://www.nexusmods.com/stardewvalley/mods/12179](https://www.nexusmods.com/stardewvalley/mods/12179)

Some outputs of this script can be downloaded here: [link](https://drive.google.com/file/d/165C_M5in3p-3RC9UubTNdElHHSsH6k0H/view?usp=sharing)

The download above currently includes database jsons for: 
- Milkshakes
- Sweet Tooth
- Bugmeat Recipes
- Bonster's Recipes
- Gel Foods
- Champagne Wishes
- Elfin Tea
- Tea Time
- Cherry Blossom Cafe
- Kaya Jam
- Turkish Dessert
- Farmer to Florist
- Mizu's Flowers
- Fresh Meat
- More Food
- Artisan Valley
- Christmas Sweets
- Even More Recipes
- More Trees
- Starbrew Valley
- Baker's Life
- Chocolatier
- Herbal Tea Garden
- SSaturn's Oriental Kitchen
- SSaturn's Tropical Farm
- Floral Liqueurs
- Lunar Foods

If you download that, remember to place them inside the `Databases` directory, found at `Survivalistic/assets/Databases`.

## Setup
1. clone the project from GitHub
2. open the terminal, and run `npm install`

## Instructions
1. Create two empty directories in the `survivalistic-db-generator` directory, one called `input` and one called `output`.
2. Copy the Object directory of the package you want to convert into the `input` directory
3. Open the terminal inside the `survivalistic-db-generator` directory, then run `npm start [mod.uniqueId]` (the mod's unique ID can be found in its `manifest.json`
4. Move the json generated in the `output` directory to Survivalistic's database directory (found in `Surivalistic/assets/Databases`)


## New To Programming? 
You'll need node.js and npm, instructions found [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)

I use Windows Terminal, download found [here](https://apps.microsoft.com/store/detail/9N0DX20HK701?hl=en-us&gl=US)
