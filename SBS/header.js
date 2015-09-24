<!-- Begin

// NOTE: If you use a ' add a slash before it like this \'


var color		= "C2C9C7"		// HEADER BACKGROUND COLOR
var flashheight		= "650"			// HEIGHT OF THE FLASH (IN PIXELS)
var flashwidth		= "60"			// WIDTH OF THE FLASH (IN PIXELS)
var bordercolor		= "C2C9C7"		// BORDER COLOR
var borderwidth		= "0"			// BORDER WIDTH
var headerwidth		= "100"			// HEADER TOTAL WIDTH
var pageheight		= "40"			// GLOBAL PAGE HEIGHT



// COPYRIGHT 2006 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE

// START FLASH HEADER

document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="'+headerwidth+'" BGCOLOR="#'+color+'" style="border: #'+bordercolor+' '+borderwidth+'px solid;" width="'+headerwidth+'"><tr><td align="left">');
document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH="'+flashwidth+'" HEIGHT="'+flashheight+'" id="logo" ALIGN="">');
document.write('<PARAM NAME=movie VALUE="logo.swf">');
document.write('<PARAM NAME=quality VALUE=high> <PARAM NAME=bgcolor VALUE="#'+color+'">');
document.write('<EMBED src="logo.swf" quality=high bgcolor="#'+color+'"  WIDTH="'+flashwidth+'" HEIGHT="'+flashheight+'" NAME="logo" ALIGN="" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED></OBJECT><br>');

document.write('<IMG SRC="picts/spacer.gif" height="'+pageheight+'" width="'+headerwidth+'" border="0"><br>');

document.write('</td></tr></table>');




//  End -->