const rp = require('request-promise');
const argv = require('yargs').argv;
const $ = require('cheerio');
const colors = require('colors');

const formatDate = require('./formatDate');

function init() {
  let location = '';
  if (argv.location) {
    location = argv.location.replace(' ', '+');
  }
  const url = (location) ? 
      `https://www.secretflying.com/search2/?cityFrom=${location}&cityTo=&month=`
    : 'https://www.secretflying.com/search2/?cityFrom=Copenhagen&cityTo=&month=';
  
  rp(url)
    .then(function (html) {
      const numEntries = $('.entry-title > a', html).length;
      if (numEntries === 0) {
        console.log('');
        console.log('Sorry, no flight deals could be found for that location. Please try something else.');
        console.log('');
      } else {
        location = (location === '') ? 'Copenhagen' : location;
        console.log('');
        console.log('You searched for ' + location.bold + '. Here are the results:');
        console.log('');
        console.log('DATE -------- FLIGHT DEAL --------');
        for (let i = 0; i < numEntries; i++) {
          const formattedDate = formatDate(html, i, $);
          const title = $('.entry-title > a', html)[i].children[0].data;
          const postUrl = $('.entry-title > a', html)[i].attribs.href;      
          console.log(formattedDate.bold + `: ${title}`);
          console.log(postUrl);
          if (i < numEntries - 1) console.log('~');
        }
        console.log('');
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

exports.init = init;