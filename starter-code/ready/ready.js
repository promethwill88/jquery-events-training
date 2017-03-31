/*
  What needs to change so that the page says "Go!"?
*/

$(document).ready(function(){
  console.log( "The page says:", $("h1").text() );


// Selects h1 and change to "Go!""
$("h1").text("Go!");

if ( $("h1").text() === "Ready?" ){
  	console.log( "The page says:", $("h1").text() );
  	console.log("Success!");
// Currently, failing to else
} else {
 	console.log( 'Can you make it say "Go!"?' );
  
}
});
//changed bracket to here from line 7 to include code AFTER page loads.