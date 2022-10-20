const listItems = document.querySelectorAll('.galerija li'); //dugmad
const allimages = document.querySelectorAll('.galerija .container2 .images');

function toggleActiveClass(active) { // za svako dugme uklanja i dodale klasu active 
	listItems.forEach(item => {
		item.classList.remove('active');
	})
	active.classList.add('active');
}

function toggleimages(dataClass) { //za svaku sliku ukoliko je klasa all tj dugme all, prikazuje kao blok
	if (dataClass === 'all') {
		for (let i = 0; i < allimages.length; i++) {
			allimages[i].style.display = 'block';
		}
	} else { //a u slucaju da je klasa jednaka klasi dugmeta vrti petlju i prikazuje samo te slike
		for (let i = 0; i < allimages.length; i++)
			allimages[i].dataset.class === dataClass ? allimages[i].style.display = 'block' : allimages[i].style.display = 'none';
	}
}

for (let i = 0; i < listItems.length; i++) { //radi na klik odredjenog dugmeta sa odredjenom klasom
	listItems[i].addEventListener('click', function () {
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

$("#forma_ime").keyup(function () {
	let max = 8;
	if ($(this).val().length > max) {
		$(this).val($(this).val().substr(0, max));

		//Take action, alert or whatever suits
		alert("Ovo polje može imati najviše 8 karaktera!");
	}
});
$('#forma_ime').on('input', function () {
	let input = $(this);
	let is_name = input.val();
	if (is_name) { input.removeClass("invalid").addClass("valid"); }
	else { input.removeClass("valid").addClass("invalid"); }
});

$('#forma_email').on('input', function () {
	let input = $(this);
	let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let is_email = re.test(input.val());
	if (is_email) { input.removeClass("invalid").addClass("valid"); }
	else { input.removeClass("valid").addClass("invalid"); }
});

$('#forma_poruka').keyup(function (event) {
	event.preventDefault();
	let input = $(this);
	let message = $(this).val();
	console.log(message);
	if (message) { input.removeClass("invalid").addClass("valid"); }
	else { input.removeClass("valid").addClass("invalid"); }
});
$("#forma_submit").click(function (event) {
	let form_data = $("#forma").serializeArray();
	let error_free = true;
	for (let input in form_data) {
		let element = $("#forma_" + form_data[input]['name']);
		let valid = element.hasClass("valid");
		let error_element = $("span", element.parent());
		if (!valid) { error_element.removeClass("error").addClass("error_show"); error_free = false; }
		else {
			error_element.removeClass("error_show").addClass("error");
			alert('No errors: Form will be submitted');
		}
	}
	if (!error_free) {
		event.preventDefault();
	}
});
//navigacioni meni scroll
$(window).scroll(function () {    // kada skrolamo ovo ce raditi
	let height = $(window).scrollTop();  //visina skrol nava
	if (height > 10) {
		$(".nav").css({ "position": "fixed" });
	} else {
		$(".nav").css({ "position": "relative" });
	}
});
//hamburger meni on click
function menuOnClick() {
	document.getElementById("menu-bar").classList.toggle("change");
	document.getElementById("burger-nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}