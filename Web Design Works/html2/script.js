//code for opening menu in mobile screen
function menu(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}


//code for closing menu in mobile
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.setAttribute(
        "style",
        "transform : translateY(-500px);"
    );
    
}
