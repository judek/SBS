<!-- Begin POP-UP SIZES AND OPTIONS CODE


// ONLY USE lowercase FOR ALL OPTIONS


// CHANGE ANY OF THESE VARIABLES TO "no" OR "yes" TO TURN AN OPTION OFF OR ON



var right_click_on	= "no"		// RIGHT CLICK PROTECTION ON
var block_imagebar	= "yes"		// BLOCK WINDOWS IMAGE TOOL BAR
var hide_status		= "yes"		// HIDE LINK IN STATUS BAR

var status_text 	= "Welcome"	// TEXT IN THE STATUS BAR
var right_click_text	= "You may not right mouse click this page."	// RIGHT CLICK TEXT







// YOU DO NOT NEED TO EDIT BELOW THIS LINE

// COPYRIGHT 2006 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law




// BEGIN GALLERY IMAGE CHANGER CODE


function Changer(direction)
{

if (null == direction)
{

if ((lastTime + delay) > new Date().getTime())
{
direction = 0;
}

else
{
direction = currentDirection;
}
}

else
{
currentDirection = direction;
}

if (direction != 0)
{

if (direction > 0)
{

currentSlide++;

if (currentSlide > (slides.length - 1))
{
currentSlide = 0;
}
}

else
{

currentSlide = currentSlide-1;

if (currentSlide < 0)
{
currentSlide = (slides.length - 1);
}
}

lastTime = new Date().getTime();

update(slides[currentSlide]);

setTimeout("Changer();",delay);
}
}
var currentIndex = 0;

function update(url, index) 
{
currentIndex = index;
document['MainImage'].src=url;
{

}
return;
}




// MOUSEOVER STATUS

   if (hide_status == "yes") {

function hidestatus(){
window.status=status_text
return true
}

if (document.layers)
document.captureEvents(Event.MOUSEOVER | Event.MOUSEOUT)

document.onmouseover=hidestatus
document.onmouseout=hidestatus

}



// BLOCK IMAGE TOOLBAR


   if (block_imagebar == "yes") {
document.write('<META HTTP-EQUIV="imagetoolbar" CONTENT="no">')
}



// RIGHT CLICK PROTECTION


if (right_click_on == "yes") {
var message=right_click_text;
if (navigator.appName == 'Microsoft Internet Explorer'){
function NOclickIE(e) {
if (event.button == 2 || event.button == 3) {
alert(message);
return false;
}
return true;
}
document.onmousedown=NOclickIE;
document.onmouseup=NOclickIE;
window.onmousedown=NOclickIE;
window.onmouseup=NOclickIE;
}
else {
function NOclickNN(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
alert(message);
return false;
}}}
if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=NOclickNN; }
document.oncontextmenu=new Function("alert(message);return false")
}
}



//  End -->