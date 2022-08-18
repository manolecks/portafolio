const content = document.getElementById('imgQR');
const formu  =  document.getElementById('formiulario');

//new QRCode(content,"https://google.com");
const QR = new QRCode(content,{
    correctLevel : QRCode.CorrectLevel.H
});

formu.addEventListener('submit', (e)=>{
    e.preventDefault();
    QR.clear();
    QR.makeCode(formu.link.value);
});