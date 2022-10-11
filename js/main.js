const listItems = document.querySelectorAll('.galerija li');
const allimages = document.querySelectorAll('.galerija .container2 .images');
 
function toggleActiveClass(active){
    listItems.forEach(item => {
      item.classList.remove('active');
    })
    active.classList.add('active');
}
 
function toggleimages(dataClass){
    if(dataClass === 'all'){
        for(let i = 0; i<allimages.length; i++){
            allimages[i].style.display = 'block';
        }
    }else{
        for(let i = 0; i<allimages.length; i++)
            allimages[i].dataset.class === dataClass ? allimages[i].style.display = 'block' : allimages[i].style.display = 'none';
    }
}
 
for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', function(){
        toggleActiveClass(listItems[i]);
        toggleimages(listItems[i].dataset.class);
    });
}

/******
 * ******** FORM
*******************/


// $(".polje").on("click", function(){
//     // let polje = $(".polje").val();
//     if ($(this == 0)){
//         $(this).css({"background-color": "lightgrey"});
// }
// });

// $(".polje").keypress(function(){
//     //console.log( "Handler for .keypress() called." );
//     let polje = $(".polje").val();
//     if (polje == " "){
//         $(this).css({"background-color": "lightgrey"});
//     }else{
//         $(this).css({"background-color": "grey"});
//     }
// });

$("#forma_ime").keyup(function() {
    let max = 8;
    if ($(this).val().length > max) {
        $(this).val($(this).val().substr(0, max));
        
        //Take action, alert or whatever suits
        alert("This field can take a maximum of 8 characters");
    }
});
$('#forma_ime').on('input', function() {
	let input=$(this);
	let is_name=input.val();
	if(is_name){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

$('#forma_email').on('input', function() {
	let input=$(this);
	let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let is_email=re.test(input.val());
	if(is_email){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

$('#forma_poruka').keyup(function(event) {
	let input=$(this);
	let message=$(this).val();
	console.log(message);
	if(message){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}	
});
$("#forma_submit").click(function(event){
	var form_data=$("#forma").serializeArray();
	var error_free=true;
	for (var input in form_data){
		var element=$("#forma_"+form_data[input]['name']);
		var valid=element.hasClass("valid");
		var error_element=$("span", element.parent());
		if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
		else{error_element.removeClass("error_show").addClass("error");}
	}
	if (!error_free){
		event.preventDefault(); 
	}
	else{
		alert('No errors: Form will be submitted');
	}
});

$(window).scroll(function() {    // kada skrolamo ovo ce raditi
	let height = $(window).scrollTop();  //visina skrol nava
	if(height  > 10) {
		$(".nav").css({"position": "fixed"});
	} else{
		$(".nav").css({"position": "relative"});
	}
});