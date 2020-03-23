# css-spec-colors

A JSON with all CSS color keywords and their corresponding values in hex, RGB and HSL. Color list generated from W3C spec (https://www.w3.org/TR/css-color-4/#named-colors).

## Install

Using npm:

```bash
$ npm install css-spec-colors
```

Using yarn:

```bash
$ yarn add css-spec-colors
```

## Usage

```javascript
import colors from 'css-spec-colors'; // or const colors = require('css-spec-colors');

// All colors
console.log(colors);

/**
 * {
 *   aliceblue: {
 *     name: 'aliceblue',
 *     hex: '#f0f8ff',
 *     rgb: 'rgb(240, 248, 255)',
 *     hsl: 'hsl(208, 100%, 97.1%)'
 *   },
 *   ...
 * }
 *
 */

// Get a color by name
console.log(colors['aliceblue']);

/**
 * {
 *   name: 'aliceblue',
 *   hex: '#f0f8ff',
 *   rgb: 'rgb(240, 248, 255)',
 *   hsl: 'hsl(208, 100%, 97.1%)'
 * }
 */

// Get the hex value of a color
console.log(colors['aliceblue'].hex); // '#ff0000'

// Get the RGB value of a color
console.log(colors['aliceblue'].rgb); // 'rgb(255, 0, 0)'

// Get the HSL value of a color
console.log(colors['aliceblue'].hsl); // 'hsl(0, 100%, 50%)'
```

Colors are sorted alphabetically.

## License

MIT &copy; [Aarón García](https://aarongarciah.com)
