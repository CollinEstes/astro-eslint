/**
*
* astro-eslint: astro module that executes eslint against a user's current working directory
*
**/
'use strict';

var buildArgs = require('./src/buildArgs')
	, path = require('path')
	, fs = require('fs')
	;

module.exports = function (projectDir, options) {
	var args = buildArgs(projectDir, options)
	, cmd = path.resolve(fs.realpathSync(__dirname), './node_modules/.bin/eslint');

	//setup
	return { cmd: cmd, args: args };
}