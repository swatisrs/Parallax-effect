let parallax = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;

    parallax.forEach((prllx) => {
        // console.log(offset- prllx.offsetTop);

        prllx.style.backgroundPositionY = (offset- prllx.offsetTop) * .7 + "px";
    })
})

