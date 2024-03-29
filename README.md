# Michael Field
Live Version: http://mf.dev.cdhsc.org/home
### Getting Started
---
#### Prerequisites
* [Node](https://nodejs.org/en/) version 8.5.0 or higher
* [NPM](https://www.npmjs.com/) version 5.3.0 or higher
  * [Download Node and NPM](https://nodejs.org/en/)
* [Angular CLI](https://cli.angular.io/) version 1.4.4 or higher (*should be saved in devDependencies*)
  * ```npm install -g @angular/cli@latest```
* [MongoDB](https://docs.mongodb.com/getting-started/shell/installation/)
* Nodemon
  * ```npm install -g nodemon```

#### Installing
* Clone this repo
  * ```git clone https://github.com/CDH-SC/mf.git```
* Install Prerequisites (Check the above section)
* ```cd <path>/mf```
  * ```cd mf-api/```
    * ```npm install```
  * ```cd mf-angular/```
    * ```npm install```
* Note: If the npm install throws an error:
  * If it says a module is not installed, run ```npm install --save <module name>```
  * If it says that an invalid character was read at the end of the line, delete the node_module folder and the package-lock.json file and try the ```npm install``` command again
  * If its an npm permission error see [here](https://docs.npmjs.com/getting-started/fixing-npm-permissions)


* Create a local database
  * A binary BSON dump of the database can be found: mf/mf-database/dump
  * Ensure Mongo has been started on your local machine:
   * Linux:
    * ```$ sudo service mongod start```
  or
    * ```$ sudo service mongod restart```
   * Mac (if mongodb was installed via homebrew):
    * ```brew services start mongodb```
    * to restart:
     * ```brew services stop mongodb```
     * ```brew services start mongodb```
* Use mongorestore to restore the dump file to your local machine
* MongoDB default port number: 27017
  * ```$ mongorestore <path to the backup>```
* Example:
  * ```$ mongorestore mf/mf-database/dump```
 * Troubleshooting assitance can be found [here](https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/)

#### Tar Archiving Utility, Upload Script - Dealing with Michael Field Archives
* Please refer to README found [here](https://github.com/CDH-SC/mf/tree/master/mf-archive)

#### Git LFS - Dealing with Michael Field images
* Installing Git LFS
  * Mac:
    * To use Homebrew, run ```brew install git-lfs```
    * To use MacPorts, run ```port install git-lfs```
    * Verify install with ```git lfs install```
  * Linux:
    * Download Git LFS from https://git-lfs.github.com/
    * Unzip the file and cd into the folder.
    * Install the file with ```$ ./install.sh```
    * Verify installation by running ```$ git lfs install```

* Using Git LFS
  * To save time when cloning the project LFS is configured to ignore all of the notebook images by default.
  * Cache your GitHub password
    * Ref: https://help.github.com/articles/caching-your-github-password-in-git/
    * Cache it by running a git command before running a git lfs command.
  * To download all the images:
    * ```$ git lfs fetch --all``` and ```$ git lfs checkout```
  * To only download a specific notebook:
    * ```$ git lfs fetch -I mf-angular/src/images/<notebook wanted>```
    * ```$ git lfs checkout mf-angular/src/images/<notebook wanted>/*```
  * To get notebook images to appear on the site:
    * First build project with ```$ ng build --watch```
    * Then copy the images with ```$ cp -R mf-angular/src/images mf-angular/dist/images```
    * Any notebooks that are downloaded should now have images on the site.

### Deployment
---
* 3 Terminal Setup
* Terminal 1 : Runs the mongo database
  * ```mongod``` or ```sudo mongod```
* Terminal 2 : Runs the Express server
  * ```cd <path>/mf/mf-api/```
  * ```nodemon server```
  * If cannot find module ```npm install --save <module>```
* Terminal 3 : Builds the webapp to the dist directory to be served by the Express server
  * ```cd <path>/mf/mf-angular/```
  * ```ng build --watch```
* The Michael Field application should now be available at http://localhost:3000/home

### Creating Documentation
* Install compdoc package
  * ```npm i -g @compodoc/compodoc```
* Create the documentation for Angular
  * ```cd <path>/mf/mf-angular/```
  * ```npm run doc:buildandserve```
  * ```Open broswer at http://localhost:8080```

### Unit Tests
---
* Run ```ng test``` to execute the unit tests via [Karma](https://karma-runner.github.io).
* To execute unit tests for Angular
  * ```cd <path>/mf/mf-angular/```
  * ```npm test ``` which runs the tests found in the directory ```<path>/mf/mf-angular/spec/```

### Built With
* [Angular4](https://angular.io/)
* [NodeJS](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)

### Contributing
1. **Fork** the repo
2. **Clone** the project to your own machine
3. **Commit** changes to your own branch
4. **Push** your work back up to your fork
5. Submit a **Pull request** so that we can review your changes

Note: Be sure to merge the latest from "upstream" before making a pull request!:

### Extended Contributing
* **Component**  ``` ng g component my-new-component ```
* **Service**  ``` ng g service my-new-service ```
* **Module**  ``` ng g module my-new-module ```
* **IF YOU DON'T KNOW WHERE SOMETHING GOES... ASK**

* npm install [packages] --save or --save-dev for development only

### Versioning

### Contributors
* **Pierce Matthews**
* **Tyler Moon**
* **Lawton Mizell**
* **Jerrod Mathis**
* **Caleb Kitzmann**
* **Samyu Comandur**

### License
MIT

### Acknowledgments

