const ghpahes = require('gh-pages');
const path = require('path');

ghpahes.publish('dist', () => {
  console.log('publish done.')
})
