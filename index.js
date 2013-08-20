var fs = require('fs');
//var a,b,i,lines,line,start;

var run = function(filename) {
	fs.exists(filename, function(exists) {
		if (exists) {
			fs.readFile(filename,'utf8', function (err,data) {
				if (err) {
					console.log(err);
				} else {
					var a = true;
					var b = true;
					var c = true;
					var i = 0;
					var lines = data.split('\r\n');
					var line = "";
					var start = 0;
					while (b) {
						line = lines[i];
						if (line.indexOf("/*") != -1 && line.indexOf("RHELP:") != -1) {
							if (line.indexOf("*/") == -1) {
								line = line.slice(2,-1);
								a = false;
								b = false;
								start = i + 1;
							} else {
								a = false;
								b = false;
								c = false;
								console.log(line.slice(line.indexOf("RHELP:")+6,line.indexOf("*/")));
							}
						}
						i++;
						if (i >= lines.length) {
							b = false;
						}
					}
					if (!a && c) {
						while (lines.indexOf("*/") != -1) {
							console.log(lines[start]);
							start++;
						}
					}
					if (a) {
						console.log("No help content was found for this file.");
					}
				}
			});
		} else {
			console.log("File not found.")
		}
	});
}

module.exports = run;
