/*sticky header*/
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 0);
})


/*Modificando las cajas o box*/
let bx = document.querySelectorAll('.box');



for (let i = 0, len = bx.length; i < len; i++) {

    bx[i].addEventListener('mouseenter', function() {
        this.classList.add('active');
        bx[1].classList.remove('active');
    })
    bx[i].addEventListener('mouseleave', function() {
        this.classList.remove('active');
        if (!bx[1].classList.contains('active')) {
            bx[1].classList.add('active');
        } else {
            bx[1].classList.remove('active');
        }
        bx[1].classList.add('active');

    })



}



/*Api consumible del proyecto */
const urlAPI = `https://api.covid19api.com/total/dayone/country/mexico`;

/*Variables donde se remplazaron los datos*/
const con = document.querySelector('#confirm');
const neg = document.querySelector('#recovered');
const sos = document.querySelector('#sospect');
const def = document.querySelector('#deaths');
const act = document.querySelector('#active')
let fecha = document.querySelector('#fecha');
/*El consumo de datos*/
fetch(urlAPI)
    .then(res => res.json())
    .then((json) => {
        /*Recorro el json para enterder los datos y poder usarlos */
        console.log(json)
        for (let i = 0, len = json.length; i < len; i++) {
            if (i == (len - 1)) {

                /*console.log(json[i]);*/
                let l = new Date(json[i].Date);
                let y = l.getFullYear();
                let m = l.getMonth() + 1;
                let dy = l.getDate();
                let dateComplete = `${dy}/${m}/${y}`

                fecha.innerHTML = `Última actualización ${dateComplete}`;
                act.dataset.cantidadTotal = json[i].Active;
                neg.dataset.cantidadTotal = json[i].Confirmed;
                def.dataset.cantidadTotal = json[i].Deaths;
                      //console.log(neg.dataset.cantidadTotal = json[i].Confirmed);
                
                /*
                 let activos = parseInt(json[i].Active).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                let recuperados = parseInt(json[i].Recovered).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                let muertes = parseInt(json[i].Deaths).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                act.innerHTML = activos;
                neg.innerHTML = recuperados;
                def.innerHTML = muertes;*/

                const contadores = document.querySelectorAll('.info__numero');
                const vel = 500;

                const animarContadores = () => {
                    for (const contador of contadores) {
                        const actualizar_contador = () => {
                            let cantidad_maxima = +contador.dataset.cantidadTotal,
                                valor_actual = +contador.innerText,
                                incremento = cantidad_maxima / vel

                            if (valor_actual < cantidad_maxima) {
                                contador.innerText = Math.ceil(valor_actual + incremento);
                                setTimeout(actualizar_contador, 5)

                            } else {

                                contador.innerText = parseInt(cantidad_maxima).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

                            }
                        }
                        actualizar_contador();
                    }
                }
                animarContadores();

            }
        }
    });