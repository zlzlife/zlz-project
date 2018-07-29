//nodejs 的jQuery
// https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');
const $ = cheerio.load('<h2 class="title">Hello world</h2>',{decodeEntities: false});

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

$.html();
//=> <html><head></head><body><h2 class="title welcome">Hello there!</h2></body></html>