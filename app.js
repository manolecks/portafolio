 /*Filter portafolio*/

 let list = document.querySelectorAll('.list');
 let itemBox = document.querySelectorAll('.itemBox');


 for (let i = 0; i < list.length; i++) {
     list[i].addEventListener('click', function() {
         for (let j = 0; j < list.length; j++) {
             list[j].classList.remove('active');
         }
         this.classList.add('active');
         let dataFilter = this.getAttribute('data-filter');
         for (let k = 0; k < itemBox.length; k++) {
             itemBox[k].classList.remove('active');
             itemBox[k].classList.add('hide')
             if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
                 itemBox[k].classList.remove('hide');
                 itemBox[k].classList.add('active');
             }
         }
     })
 }


 let light = document.querySelectorAll('.container__img');
 let bigImg = document.querySelector('#bigSmallImg');
 let expanImg = document.querySelectorAll('.expand');

 expanImg.forEach((popup, i) => {
     let selectIMG = popup.querySelector('img').src;
     
     
     popup.addEventListener('click', function() {
         light[0].classList.add('active');
         bigImg.src = selectIMG;
         
     })
 })
 light[0].addEventListener('click', () => {
     light[0].classList.remove('active');
 })
/*Ligth box video*/
let expanVideo = document.querySelectorAll('.videoX');
let bigVx = document.querySelector('#bigVideo');



expanVideo.forEach((video) => {
    let selectSrcVideo = video.dataset.srcVideo;
    
    /*console.log(selectSrcVideo)*/
    video.addEventListener('click', function() {
        light[1].classList.add('active');
        bigVx.src = selectSrcVideo;
        bigVx.volume = 0.2;
        
    })
   
    
    
})

light[1].addEventListener('click', () => {
    light[1].classList.remove('active');
    bigVx.pause();
    bigVx.currentTime = 0;
})

 const itemLinks = document.querySelectorAll('.item__link');
 itemLinks.forEach((ele, i) => {
     ele.addEventListener('click', () => {
         ele.classList.toggle('active');
     })


 });

 /*Fecha de la web o pie*/
 const fecha = (ele) => {
     let now = new Date();
     let y = now.getFullYear();
     document.querySelector(`${ele}`).innerHTML = y;
 }

 fecha("#fecha");

 /*Fixed*/
 let botones = document.querySelectorAll('.scrollYell');

 window.onscroll = function() {
    var y = window.scrollY;
    if(y >= 400){
      botones.forEach(ele=>{
        ele.classList.add('active');
      })
        
    }else{
        botones.forEach(ele=>{
            ele.classList.remove('active');
          })
    }
   /* console.log(y);**/
  };
 
    
