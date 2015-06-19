#!/usr/bin/env node
'use strict';
var meow = require('meow');
var userHome = require('user-home');

meow({
	help: [
		'Example',
		'  $ user-home',
		'  /Users/sindresorhus'
	]
});

console.log(userHome);
