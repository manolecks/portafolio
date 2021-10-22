
document.addEventListener("DOMContentLoaded", () => {
    renderInfo();
    
})
const key_text = "lans.json";
const  getInfo= () => {
    const url = key_text;

    return fetch(url)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log(error))
}


const renderInfo = async () => {
    const info = await getInfo();

    let trans = document.querySelectorAll('.translate');
    let langs = document.querySelectorAll('.lang');
   
/*Localstorage start*/
    if(!localStorage.getItem('lang')){
        localStorage.setItem("lang", "en");
        
    }
    let def = localStorage.getItem("lang");
 
    langs.forEach((textos)=>{
        let formulaIdioma = info[def];
        let tex = formulaIdioma[textos.attributes['key'].value];
        textos.innerHTML = tex;  
    })
    
    /*Localstorage end*/
   
    trans.forEach((idioma)=>{
        
        
        idioma.addEventListener('click',()=>{
            let lang = idioma.getAttribute('id');
              
           
           //console.log(idioma.setAttribute("disabled",""));
           localStorage.setItem('lang',lang);
        
            
            langs.forEach((textos)=>{
                let formulaIdioma = info[lang];
                /*console.log(textos.attributes['key'].value, formulaIdioma[textos.attributes['key'].value]);*/
                let tex = formulaIdioma[textos.attributes['key'].value];
                textos.innerHTML = tex;  
            });
        });
    });
}