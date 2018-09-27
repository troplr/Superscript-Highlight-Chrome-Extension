
$( "body" ).wrapInner( "<div id='y' />");


var $div = $("<div>", {class: 'myClass'});


$("body").append($div)

var $divs = $("<div>", {id: 'sub3'});
$("body").append($divs)

var $divss = $("<div>", {id: 'sub4'});
$("body").append($divss)

var $divsss = $("<div>", {id: 'sub5'});
$("body").append($divsss)


$(".myClass").append('<span id="MyButton">X</span>');

 $("#MyButton").click(function() {
    location.reload(true);
  }); 

        $(".myClass").append("<select id='t0'><option value='#y'>Normal</option><option value='sup'>Superscript</option><option value='sub' >Subscript</option></select><select id='t1'><option value='&reg;' >&reg;</option><option value='&trade;'>&trade;</option></select>");

       var e = $('<button>Search</button>');
$('.myClass').append(e);    
e.attr('id', 'myid');


jQuery.fn.highlight = function (str, className) 
{
    var regex = new RegExp(str, "g");

    return this.each(function () 
    {
        this.innerHTML = this.innerHTML.replace(
        	regex, function(matched) {
        	return "<span class=\"" + className + "\">" + matched + "</span>"; 
        });
    });
};

 
    

	$('#myid').click(function() {
	  $('.supp').removeClass('supp');
	  $('.supc').removeClass('supc');
	  $('.sub').removeClass('sub');
	  $('.mydiv').removeClass('mydiv');
	  $('.normal').removeClass('normal');
	  var text = $('#t1').val();


	  if($('#t0').val() == '#y'){ 
		$($('#t0').val()+":contains('"+text+"')").highlight(text, "mydiv");

		$("sub:contains('"+text+"')").highlight(text, "normal");
		$("sup:contains('"+text+"')").highlight(text, "normal");
		

 $("#sub3").html("<div>"+$($('#t0').val()+":contains('"+text+"')").length+" Normal Script Found for "+text+"</div>").animate({ marginRight: "10px"} , 1000).delay(3000) .hide('slide', {direction: 'right'});
 $("#sub3").show()
 return false;
 		

	  }


	 if($('#t0').val() == 'sup'){ 
		$($('#t0').val()+":contains('"+text+"')").highlight(text, "supp");
		//alert($($('#t0').val()+":contains('"+text+"')").length+" Superscript Found for "+text);
 $("#sub4").html("<div>"+$($('#t0').val()+":contains('"+text+"')").length+" Superscript Found for "+text+"</div>").animate({ marginRight: "10px"} , 1000).delay(3000).hide('slide', {direction: 'right'});
 $("#sub4").show()
 return false;
	  }




	  if($('#t0').val() == 'sub'){ 
		$($('#t0').val()+":contains('"+text+"')").highlight(text, "sub");
		//alert($($('#t0').val()+":contains('"+text+"')").length+" Subscript Found for "+text);
		 $("#sub5").html("<div>"+$($('#t0').val()+":contains('"+text+"')").length+" Subscript Found for "+text+"</div>").animate({ marginRight: "10px"} , 1000).delay(3000).hide('slide', {direction: 'right'});
 		$("#sub5").show()
 		return false;
	  }

		
	  
	  
	 	



	 
	 });