NHelp - v0.0.4
=============

Show help data in the console when a user runs

	% nhelp <scriptname>.js

Looks for multi-line javascript comments that look like this:

  	/* RHELP:
  	This will show up.
  	So will this.
  	This too.
  	*/

Or single-line comments like this:

	/* RHELP: This will show up. */

Normal comments won't show up:

  	/*
  	This won't show up
  	*/

The script stops looking for help data after it finds one occurence of an RHELP identifier.
