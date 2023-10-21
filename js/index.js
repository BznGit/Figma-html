window.onscroll = () => {
    console.log('eded')
    const header = document.querySelector(".header");
    console.log(header)
    const Y = window.scrollY;
    if (Y > 100) {
        header.classList.add('ops');
    } else if  (Y < 35) {
        header.classList.remove('ops');
    }
}
