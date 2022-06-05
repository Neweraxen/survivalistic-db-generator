# Generate Database Files for Survivalistic Stardew Valley mod

Survivalistic Mod here: [https://www.nexusmods.com/stardewvalley/mods/12179](https://www.nexusmods.com/stardewvalley/mods/12179)

Some outputs of this script can be downloaded here: [link](https://drive.google.com/file/d/165C_M5in3p-3RC9UubTNdElHHSsH6k0H/view?usp=sharing)

The download above currently includes database jsons for: 
- [Milkshakes](https://www.nexusmods.com/stardewvalley/mods/4433)
- [Sweet Tooth](https://www.nexusmods.com/stardewvalley/mods/1897)
- [Bugmeat Recipes](https://www.nexusmods.com/stardewvalley/mods/4502)
- [Bonster's Recipes](https://www.nexusmods.com/stardewvalley/mods/3468)
- [Edible Gels](https://www.nexusmods.com/stardewvalley/mods/12064)
- [Champagne Wishes](https://www.nexusmods.com/stardewvalley/mods/5721)
- [Elfin Tea](https://blog.naver.com/ssm4031/222230452532)
- [Tea Time](https://www.nexusmods.com/stardewvalley/mods/2607)
- [Cherry Blossom Cafe](https://kayainsdv.postype.com/post/10234395)
- [Kaya Jam](https://kayainsdv.postype.com/post/10330397)
- [Turkish Dessert](https://kayainsdv.postype.com/post/10481004)
- [Farmer to Florist](https://www.nexusmods.com/stardewvalley/mods/2075)
- [Mizu's Flowers](https://www.nexusmods.com/stardewvalley/mods/2028)
- [Fresh Meat](https://www.nexusmods.com/stardewvalley/mods/1721)
- [More Recipes](https://www.nexusmods.com/stardewvalley/mods/1670)
- [Artisan Valley](https://www.nexusmods.com/stardewvalley/mods/1926)
- [Christmas Sweets](https://www.nexusmods.com/stardewvalley/mods/4950)
- [Even More Recipes](https://www.nexusmods.com/stardewvalley/mods/1742)
- [More Trees](https://www.nexusmods.com/stardewvalley/mods/1671)
- [Starbrew Valley](https://www.nexusmods.com/stardewvalley/mods/1764)
- [Baker's Life](https://www.nexusmods.com/stardewvalley/mods/5213)
- [Chocolatier](https://www.nexusmods.com/stardewvalley/mods/5403)
- [English Country Garden - Herbal Teas](https://www.nexusmods.com/stardewvalley/mods/12039)
- [SSaturn's Oriental Kitchen](https://www.nexusmods.com/stardewvalley/mods/6010)
- [SSaturn's Tropical Farm](https://www.nexusmods.com/stardewvalley/mods/5585)
- [Floral Liqueurs](https://www.nexusmods.com/stardewvalley/mods/11752)
- [Lunar New Year Foods](https://www.nexusmods.com/stardewvalley/mods/10890)

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
