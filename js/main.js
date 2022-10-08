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


$(".polje").on("click", function(){
    // let polje = $(".polje").val();
    if ($(this == 0)){
        $(this).css({"background-color": "lightblue"});
}
})

$(".polje").keypress(function(){
    //console.log( "Handler for .keypress() called." );
    let polje = $(".polje").val();
    if (polje == " "){
        $(this).css({"background-color": "lightblue"});
    }else{
        $(this).css({"background-color": "lightgreen"});
    }55
})

$(".polje").keyup(function() {
    let max = 5;
    if ($(this).val().length > max) {
        $(this).val($(this).val().substr(0, max));
        
        //Take action, alert or whatever suits
        alert("This field can take a maximum of 5 characters");
    }
});