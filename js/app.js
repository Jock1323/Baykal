const toggleEnd=document.querySelector('.toggle__end');
const toggleStart=document.querySelectorAll('.toggle__start');
const nav=document.querySelector('.footer__nav');
const btnType=document.querySelector('.footer__flexed--1 .type');
toggleEnd.addEventListener('click',()=>{
    nav.style.left='-100%';
});
for(let i=0;i<toggleStart.length;i++){
    toggleStart[i].addEventListener('click',()=>{
       nav.style.left='0';
    });
}
btnType.addEventListener('click',()=>{
  
    nav.style.left='-100%';
})



