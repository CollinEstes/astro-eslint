/**
*
* buildArgs.js - processes the arguments provided
*
**/

var path = require('path')
	, fs = require('fs')
	;

var getIgnoreFile = require('./getIgnoreFilePath');

function buildArgs (projectDir, options) {
	var args = []
		, defaultGlobals = 'require,exports:true,'
		, excludePath = path.relative(projectDir, getIgnoreFile(projectDir));
	// currently there are no additional options available for this module

	// add exclude path
	args.push('--ignore-path');
	args.push(excludePath);

	args.push('--global');
	args.push((options.globals) ? options.globals : defaultGlobals);


	// add projectDir as source
	args.push('.');

	return args;
}

module.exports = buildArgs;