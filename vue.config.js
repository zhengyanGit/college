const fs = require('fs')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/assets/css/variate.scss', 'utf-8')
      }
    }
  }
}