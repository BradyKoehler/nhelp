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
					var i = 0;
					var lines = data.split('\r\n');
					var line = "";
					var start = 0;
					while (b) {
						line = lines[i];
						if (line.slice(0,2) == "/*" && line.indexOf("RHELP:") != -1) {
							line = line.slice(2,-1);
							a = false;
							b = false;
							start = i + 1;
						}
						i++;
						if (i >= lines.length) {
							b = false;
						}
					}
					if (!a) {
						while (lines[start].slice(0,2) != "*/") {
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
