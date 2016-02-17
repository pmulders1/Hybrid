var arr = [];

$(function(){
  $( ".box" ).bind( "taphold", tapholdHandler );
 
  function tapholdHandler( event ){
  	arr.push(event.target.innerHTML);
    window.location.href = "#settings";
    console.log(arr);
  }
});