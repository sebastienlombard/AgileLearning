$(function() {


	$(".draggable").draggable();
	$(".droppable").droppable({
    /*drop: function(event, ui) {
      $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
    },*/
    over: function(event, ui) {
      $('.display').html( this.id );
      $('.verif', this).text(ui.draggable.select('p', this).text());
    }
	});

	var all=true;

	/*$('#verify').click(function(){
   		all = ($('#SAV .verif').text().trim() == $('#SAV').attr('id'));

		if(all){
			$('#correction p:first').text("test reussi");
		}else {
			$('#correction p:first').text("T'es con !");
		}
	});*/


	$('#verify').click(function(){
		$('#dropline div').each( function(index, value) { 
			alert($('.verif' ,value).text().trim());
    		all = all & ($('.verif' ,value).text().trim() == value.attr('id'));
    	/*if ($('p',value).text().trim() == value.attr('id')){
    		value.css('background', 'green');
    	}*/
  		});


		if(all){
			$('#correction p:first').text("Test reussi ! Bravo");
		}else{
			$('#correction p:first').text("Stupide !");
		}
	});


});
