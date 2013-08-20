#!/usr/bin/env node

var app = require('../index.js');

if (process.argv.length < 3) {
	console.log("Expected file name");
} else {
	app(process.argv[2]);
}
