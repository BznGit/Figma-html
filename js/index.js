window.onscroll = () => {

    const header = document.querySelector(".header");

    const Y = window.scrollY;
    if (Y > 100) {
        header.classList.add('ops');
    } else if  (Y < 35) {
        header.classList.remove('ops');
    }
    console.log(document.body.scrollHeight, Y)
 if (Y > document.body.scrollHeight-1900){
    header.classList.remove('ops');
 } 
}
