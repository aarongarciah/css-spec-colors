const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const jsdom = require('jsdom');
const { hexToRGB, hexToHSL } = require('./utils');

const { JSDOM } = jsdom;
const url = 'https://www.w3.org/TR/css-color-4/#named-colors';

/**
 * Generates the output object for a given color name and its corresponding hex value
 * @param {string} name - The color name
 * @param {string} hex - The hex value
 * @return {object} The color object
 */
function colorObject(name, hex) {
  return {
    name,
    hex,
    rgb: hexToRGB(hex),
    hsl: hexToHSL(hex)
  };
}

/**
 * Removes line breaks, tabs and spaces from a string
 * @param {string} str - The string to be
 * @return {string} The string sanitized
 */
function sanitizeString(str) {
  return str.replace(/(\r\n(\s*)+|\n(\s*)+|\r(\s*)+|(\s*)+)/gm, '')
}

/**
 * Scraps the source url to get the list of CSS color keywords
 * and generates the output object
 * @return {string} The colors object
 *
 * {
 *   aliceblue: {
 *     name: 'aliceblue',
 *     hex: '#f0f8ff',
 *     rgb: 'rgb(240, 248, 255)',
 *     hsl: 'hsl(208, 100%, 97.1%)'
 *   },
 *   ...
 * }
 */
async function getColors() {
  let response;
  try {
    console.info(`🎨 Fetching ${url}`);
    response = await fetch(url);
  } catch (error) {
    throw new Error(`🎨 ERROR: Couldn't connet to the source URL. Check that ${url} is alive.`);
  }

  const text = await response.text();
  const dom = new JSDOM(text);
  const document = dom.window.document;
  const tableSelector = '.named-color-table';
  const table = document.querySelector(tableSelector);

  if (!table) {
    throw new Error(`🎨 ERROR: Couldn't find \`${tableSelector}\` in ${url}. Check that exists.`);
  }

  console.info(`🎨 Generating colors`);

  const rows = [...table.querySelectorAll('tbody tr')];
  const colors = rows.reduce((acc, tr) => {
    const cols = tr.querySelectorAll(':scope > *');
    const totalCols = cols.length;

    if (!totalCols) {
      return acc;
    }

    const name = sanitizeString(cols[2].textContent);
    const hex = sanitizeString(cols[3].textContent);
    const rgb = hexToRGB(hex);
    const hsl = hexToHSL(hex);

    acc[name] = colorObject(name, hex);

    return acc;
  }, {});

  return colors;
}

(async function () {
  const colors = await getColors();

  // Write the colors to a JSON file
  const jsonPath = `${process.cwd()}/dist/colors.json`;

  try {
    console.info(`🎨 Writing colors to ${jsonPath}`);
    fs.writeFileSync(jsonPath, JSON.stringify(colors))
  } catch (err) {
    throw new Error(`🎨 ERROR: Couldn't write the data to ${jsonPath}.`);
  }
})();



