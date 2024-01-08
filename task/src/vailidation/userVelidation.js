const slugify = require('slugify');

function createSlug(text) {
    return slugify(text, {
        replacement: '-',
        lower: true,
        remove: /[*+~.()'"!:@]/g,
    });
}

module.exports = createSlug;