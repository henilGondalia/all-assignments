## Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const content = 'This is the content that will be written to the file.';

fs.writeFile('output.txt', content, 'utf8', (err) => {
if (err) {
console.error(err);
return;
}

console.log('File write operation completed!');
});
