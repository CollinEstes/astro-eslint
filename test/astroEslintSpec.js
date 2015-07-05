/**
*
* astroEslintSpec.js - main test
*
**/

var astroEslint = require('../')
	, cwd = '/test';

describe('astro-eslint', function () {

	it('should return command as jshint', function () {
		var result = astroEslint(cwd, {});
		expect(result.cmd.indexOf('astro-jshint/node_modules/.bin/eslint')).to.not.equal(-1);
	});

	it('should return proper options', function () {
		var result = astroEslint(cwd, {});
		expect(result.args[result.args.length -1]).to.be.equal(cwd);
		expect(result.args.length).to.be.equal(3);
	});
});