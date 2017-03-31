console.log("Sanity Check: JS is working!");

var rick_roll_youtube_embed_code = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";

$(document).ready(function(){

  $("#time").text( Date.now() );

  // Select form elements (include  both forms). On submit, run function preventSubmit
  $('form').on('submit', preventSubmit);
  // Function with parameter event, runs event.PreventDefault which stops submits
  function preventSubmit(event){
  	event.preventDefault();
  	// Add rick roll youtube embed once any of the two are submitted
  	$('body').append(rick_roll_youtube_embed_code);
  }


})
