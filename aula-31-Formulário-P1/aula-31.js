function desenha(){
    let canvas = document.getElementById('teleDesenho');
    let ctx = canvas.getContext('2d');
    ctx.fillRect(25, 25, 100, 100);
}
desenha();