let t = 0;
let c = document.querySelector("canvas");
let $ = c.getContext('2d');
c.width = window.innerWidth;
c.height = window.innerHeight;
$.fillStyle = 'hsla(0, 0%, 0%, .1)';

window.addEventListener('resize', function(){
    c.width = window.innerWidth;
    c.height = window.innerHeight;

}, false);

function draw(){
     $.globalCompositeOperation = 'source-over';
     $.fillStyle = 'hsla(0, 0%, 0%, .1)';
     $.fillRect(0, 0, c.width, c.height);
     
     let foo, i, j, r;
     foo = Math.sin(t) * 2 * Math.PI;
}