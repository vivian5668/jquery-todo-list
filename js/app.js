

$(document).ready(function() {
	$('#submitButton').on('click', function(e) {
		e.preventDefault(); //prevent the default action of submit
		//add input to list
		var newItem = $('<li>');
		newItem.html($('#input').val());

		var btn = $('<button>');
		btn.attr("type", "button");
		btn.addClass('listButton').text('Delete');

		$('#listTable').append(newItem);
		$(newItem).append(btn);

		//remove input
		$('#input').val(""); //usual text -- html  but this this is form input, it needs to be value

		$('#input').focus();

		//add delete button
		var deleteButton = $('<li>');
		// deleteButton.type('button'); //how to make this a form / input type?
		// $('#listTable').append(deleteButton);
	})


	// $("ul").on("click", "li", function() {
	// 	$(this).remove();
	// })

	$('ul').on('click', 'li', function(e) {
		$(this).remove();
	})

})