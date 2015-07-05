/**
*
* getIgnoreFilePath.js - gets the .eslintignore or the .gitignore file of the project
*
**/
var path = require('path')
	, fs = require('fs')
	;

var checkForProjectFile = require('./checkForProjectFile.js');

function getDefault () {
	return path.join(path.dirname(fs.realpathSync(__filename)), '../defaults/.eslintignore');
}

module.exports = function (projectDir) {
	var eslintIgnore = checkForProjectFile(projectDir, '.eslintignore');

	if (eslintIgnore) {
		return eslintIgnore;
	}


	return getDefault();
}