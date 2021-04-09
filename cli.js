#!/usr/bin/env node
import {homedir} from 'os';
import meow from 'meow';

meow(`
	Example
	  $ user-home
	  /Users/sindresorhus
`);

console.log(homedir());
