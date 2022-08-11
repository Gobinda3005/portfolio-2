// const header = document.querySelector('.navbar');

// window.onscroll = function() {
//     var top = window.scrollY;
//     if(top >=100) {
//         header.classList.add('navbarDark');
//     }
//     else {
//         header.classList.remove('navbarDark');
//     }
// }



function changeBg(){
    var navbarSupportedContent = document.getElementById('navbarSupportedContent');
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        navbarSupportedContent.classList.remove('bgColor');
    } else{
        navbarSupportedContent.classList.add('bgColor');
    }
    // console.log(scrollValue);
}

window.addEventListener('scroll' , changeBg);