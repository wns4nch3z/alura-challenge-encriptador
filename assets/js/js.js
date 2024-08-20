const textEncrypt    = document.querySelector(".section__one__textarea");
const textDecrypt    = document.querySelector(".section__two__textarea");
const alertMsg       = document.querySelector(".section__one__h4");
const btnEncrypt     = document.querySelector(".section__one__enc");
const btnDecrypt     = document.querySelector(".section__one__dec");
const btnCopy        = document.querySelector(".section__two__cpy");
const pattern        = /[A-ZÁÉÍÓÚÜÑáéíóúüñ]/;

// Mensaje de alerta
function alertText() {
    alertMsg.style.color = "black";
    alertMsg.style.border = "1px solid var(--dark-blue-500)";

    setTimeout(() => {
        alertMsg.style.color = "";
        alertMsg.style.border = "";
    }, 2000);
}
// Quitar banner y agregar resultados
function rmBanner() {
    document.querySelector(".section__two__hidden").style.display = "none";
    document.querySelector(".section__two__view").style.display = "block";
}

// Mostrar encriptación y desencriptación
function viewEncrypt(view) {
    textDecrypt.innerHTML = view; 
    textDecrypt.classList.remove("section__one__hidden");
}

//Proceso de encriptación
function getEncrypt() {
    const  text =  textEncrypt.value;
    if (pattern.test(text)) {
        alertText();
    } else if (text) {
        const encrypt = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
        rmBanner();
        viewEncrypt(encrypt);

    } 
}
//Proceso de desencriptación
function getDecrypt() {
    const  text =  textEncrypt.value;
    if (pattern.test(text)) {
        alertText();
    } else if (text) {
        const decrypt = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
        rmBanner();
        viewEncrypt(decrypt);
    }
}

// Copiar la encriptación o desencriptación
async function copy() {
    const text = textDecrypt.innerHTML;
    try {
        await navigator.clipboard.writeText(text);
        // console.log(text);
    }catch {
        // console.log("Error al copiar");
    }
    
}

//Agregar función
btnEncrypt.addEventListener('click', getEncrypt);
btnDecrypt.addEventListener('click', getDecrypt);
btnCopy.addEventListener('click', copy)