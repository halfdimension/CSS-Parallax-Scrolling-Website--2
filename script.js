let dubaiText = document.getElementById('dubaitext');
let burjkhalifa = document.getElementById('burjkhalifa');
let stars = document.getElementById('stars');
let building = document.getElementById('building');



window.addEventListener('scroll',()=>{
    let value = window.scrollY;

    dubaiText.style.left = value*-2+ 'px';
    burjkhalifa.style.top = value*1.2+ 'px';
    stars.style.top = value*1.2+ 'px';
    building.style.top = value*1.4+ 'px';
    
});