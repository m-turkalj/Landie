//use window.scrollY
var scrollpos = window.scrollY;
var header = document.getElementById("header");

function add_class_on_scroll() {
    header.classList.add("header--scrolling");
}

function remove_class_on_scroll() {
    header.classList.remove("header--scrolling");
}

window.addEventListener('scroll', function(){ 

    scrollpos = window.scrollY;

    if(scrollpos > 10){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    console.log(scrollpos);
});