const toggleEnd=document.querySelector('.toggle__end');
const toggleStart=document.querySelectorAll('.toggle__start');
const nav=document.querySelector('.footer__nav');
toggleEnd.addEventListener('click',()=>{
    nav.style.left='-100%';
});
for(let i=0;i<toggleStart.length;i++){
    toggleStart[i].addEventListener('click',()=>{
       nav.style.left='0';
    });
}


