// File used to remove unused CSS
const fs = require('fs');

var Purgecss = require('purgecss')
var purgecss = new Purgecss({
  content: ['_site/**/*.html', '_includes/*.html', '_layouts/**.*', '_posts/**.*'],
  css: ['stylesheets/style.css']
})
var purgecssResult = purgecss.purge()
let final = ''
for(const file of purgecssResult){
final += file['css'] + '\n'
}
fs.writeFile('./stylesheets/cleaned.css', final, error => {
  if (error) {
    console.log('Error creating file:', error);
  } else {
    console.log('File saved');
  }
});
console.log(purgecssResult)