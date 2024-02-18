window.addEventListener("scroll" , () => {
    const header = document.getElementById("header");
    
    if (window.scrollY > 400) {
        header.classList.add("header-bg")
    } else {
        header.classList.remove("header-bg")
    }
})

