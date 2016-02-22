/*

Vragen aan stijn:
Hoe kunnen we mooi het click event oplossen van de li?
	Op deze manier krijg je honderden click events die op alle afgaan.

*/

$(function(){

	var index = 0;
	$( ".box" ).bind( "taphold", tapholdHandler );

	function tapholdHandler( event ){
		$('#toWatchList').append('<li class="liDing">' + event.target.innerHTML+ '<span class="spanRight" data-id="' + index + '" id="deleteLi">delete</span></li>').click(removeLi);
		window.location.href = "#watchlist";
		index += 1;
	}

	function removeLi( event ){
		var id = $(event.target).data('id');
		var elem = $("#toWatchList").find("[data-id='" + id + "']").parent().remove();
	}
});