$(document).ready(function (){

    // scroll check for fade in
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {

            $('nav').addClass('active');
        }
        if ($(window).scrollTop() > 300) {

            $('.features').addClass('active');
        }
    });

});
function toast(msg) {
    // Get the snackbar DIV
    console.log("Toaster");
    var toaster = document.getElementById('snackbar');
    toaster.innerHTML = msg;
    // Add the "show" class to DIV
    toaster.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        toaster.className = toaster.className.replace("show", "");
    }, 3000);
}

function permToast(msg){
    var toaster = document.getElementById('snackbar');
    toaster.innerHTML = msg;
    // Add the "show" class to DIV
    toaster.className = "show";
}

