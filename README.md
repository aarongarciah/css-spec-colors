# 🎨 css-spec-colors

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Netlify Status](https://api.netlify.com/api/v1/badges/7c4bb19f-5cc8-4e39-8d0b-ec931ba4dcd6/deploy-status)](https://app.netlify.com/sites/css-spec-colors/deploys)

A JSON with all CSS color keywords and their corresponding values in hex, RGB and HSL.

The color list is generating by scrapping the W3C spec (https://www.w3.org/TR/css-color-4/#named-colors).

## Install

Using npm:

```bash
$ npm install css-spec-colors
```

Or yarn:

```bash
$ yarn add css-spec-colors
```

You can also download the JSON file directly from https://css-spec-colors.netlify.app/colors.json without installing any dependency.

## Usage

> Colors are sorted alphabetically

```javascript
import colors from 'css-spec-colors'; // or const colors = require('css-spec-colors');

// All colors
console.log(colors);
/*
{
  aliceblue: {
    name: 'aliceblue',
    hex: '#f0f8ff',
    rgb: 'rgb(240, 248, 255)',
    hsl: 'hsl(208, 100%, 97.1%)'
  },
  antiquewhite: {
    name: 'antiquewhite',
    hex: '#faebd7',
    rgb: 'rgb(250, 235, 215)',
    hsl: 'hsl(34, 77.8%, 91.2%)'
  }
  ...
}
*/

// Get a color by name
console.log(colors.aliceblue);
/*
{
  name: 'aliceblue',
  hex: '#f0f8ff',
  rgb: 'rgb(240, 248, 255)',
  hsl: 'hsl(208, 100%, 97.1%)'
}
*/

// Get the hex value of a color
console.log(colors.aliceblue.hex); // '#ff0000'

// Get the RGB value of a color
console.log(colors.aliceblue.rgb); // 'rgb(255, 0, 0)'

// Get the HSL value of a color
console.log(colors.aliceblue.hsl); // 'hsl(0, 100%, 50%)'
```

## License

MIT

---

Made with ♥️ by [Aarón García Hervás](https://aarongarciah.com)
