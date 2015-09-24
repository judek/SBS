<!-- Begin OPTIONS CODE

// IMAGE CHANGER OPTIONS FILE


// CHANGE ANY OF THESE VARIABLES


var flashwidth		= "200"		// WIDTH OF THE FLASH (IN PIXELS)
var flashheight		= "250"		// HEIGHT OF THE FLASH (IN PIXELS)
var color		= "C2C9C7"	// IMAGE CHANGER BACKGROUND COLOR




// COPYRIGHT 2006 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE



document.write('<div id="flash">');
document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="'+flashwidth+'" class="borders"><tr><td valign="middle" align="center">');
document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH="'+flashwidth+'" HEIGHT="'+flashheight+'" id="imagechanger">');
document.write('<PARAM NAME="movie" VALUE="imagechanger.swf">');
document.write('<PARAM NAME="quality" VALUE="high">');
document.write('<PARAM NAME="wmode" VALUE="transparent">');
document.write('<PARAM NAME="bgcolor" VALUE="#'+color+'">');
document.write('<EMBED src="imagechanger.swf" quality="high" wmode="transparent" bgcolor="#'+color+'"  WIDTH="'+flashwidth+'" HEIGHT="'+flashheight+'" NAME="imagechanger" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED></OBJECT><br>');
document.write('</td></tr></table>');
document.write('</div>');




//  End -->