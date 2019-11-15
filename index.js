'use strict';

const help = "Merges an array of objects into a single object. Last in wins.";

function merge(input) {
    if (!Array.isArray(input)) throw new SyntaxError('Invalid input.');
    return Object.assign(...input);
}

merge.study = () => help;

module.exports = merge;
