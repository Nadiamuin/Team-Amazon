
// /////////////////aos animation////////////////////////
AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 300, // values from 0 to 3000, with step 50ms
    duration: 1000,
});

// on load animation

var preloder= document.getElementById("loader")
function myFunction(){
    preloder.style.display = "none"
}