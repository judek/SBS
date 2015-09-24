<!-- Begin SEARCH OPTIONS

// CHANGE ANY OF THESE VARIABLES TO "no" OR "yes" TO TURN AN OPTION OFF OR ON

// ONLY USE lowercase FOR ALL OPTIONS


var showsearch		= "no"		// SHOW THE SEARCH FORM


var showtext		= "yes"		// SHOW TEXT ABOVE SEARCH
var searchtext		= "Google"	// TEXT ABOVE SEARCH FORM
var bottomspace		= "7"		// FORM BOTTOM SPACE



// COPYRIGHT 2006 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE




// SEARCH FORM
   if (showsearch == "yes") {
document.write('<TABLE cellpadding="0" cellspacing="3" border="0" class="printhide"><tr><td class="search-font">')
   if (showtext == "yes") {
document.write(''+searchtext+'<br>')
document.write('</td><td>')
document.write('&nbsp;<br>')
document.write('</td></tr><tr><td>')
}
document.write('<form action="http://www.google.com/search" name="f" target="_blank" style="margin: 0px">')
document.write('<input type="hidden" name="any selected">')
document.write('<input size="15" name="q" value="" class="searchform">')
document.write('</td><td align="left">')
document.write('<INPUT TYPE="image" SRC="picts/search-off.gif" border="0" onmouseover="this.src=\'picts/search-on.gif\'" onmouseout="this.src=\'picts/search-off.gif\'" alt="Search"><br>')
document.write('</form>')
document.write('</td></tr></table>')
document.write('<IMG SRC="picts/spacer.gif" height="'+bottomspace+'" width="30" border="0"><br>');
}



// -- END -->