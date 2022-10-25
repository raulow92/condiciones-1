let imagen = document.querySelector(".imagen");

imagen.addEventListener("click", ponerBorde);

function ponerBorde() {
    if (imagen.style.border != "2px solid red"){
        imagen.style.border = "2px solid red";

    } else {
        imagen.style.border = "0px solid red";
    }
}