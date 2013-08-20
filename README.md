NHelp - v0.0.1
=============

Show help data in the console when a user runs

% nhelp <scriptname>.js

Looks for multi-line javascript comments that look like this:
/* RHELP:
This will show up.
So will this.
This too.
*/

Normal comments won't show up:
/*
This won't show up
*/