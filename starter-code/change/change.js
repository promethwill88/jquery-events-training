console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $('#left').on('change', inputLeft);

  function inputLeft(event){
  	var $leftValue = $('#left').val();
  }

  $('#right').on('change', inputRight);

  function inputRight(event){
  	var $rightValue = $('#right').val();
  }


  let result = $leftValue + $rightValue;
  $('#total').val(result);
})
// Checked solution, gave up