# phoenix-startup-template

[![Node](https://img.shields.io/badge/node--version-v10.8.0-green.svg?longCache=true&style=flat-square
)](https://nodejs.org/en/)
[![Express](https://img.shields.io/badge/express-4.16.3-yellow.svg?longCache=true&style=flat-square
)](http://expressjs.com/fr/)
[![Gulp](https://img.shields.io/badge/gulp-3.9.1-d4444a.svg?longCache=true&style=flat-square
)](https://gulpjs.com/)


Template from: https://phoenix-startup.com/

### Run 

* `npm run build-css` to build css from sass
* `npm start`
* go to localhost:3000
    
##### Gulp Commands

* `gulp main-js`
* `gulp css`
* `gulp jade`
* `gulp compress-img`
    
Local server is created using Express.js and HTTP server

### Strucure 

**bin** --> [`www`][www] (local HTTP server setup)


**build** --> . (statics version of website)


**controllers** --> [`error.js`][error] (error handlers)


**routes** --> . (routes to index and error)


**src** --> css --> . (scss files)

**src** --> public --> . (static public fils: img, js, compiled css)
    
**src** --> templates --> . (jade templates)
    
### ToDO
 * add hot reload for sass 
 * replace jade by react components 
 
 <!-- Relative Links -->
 [error]: ./controllers/error.js
 [www]: ./bin/www
