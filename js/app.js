const toggleEnd=document.querySelector('.toggle__end');
const toggleStart=document.querySelector('.toggle__start')
const nav=document.querySelector('.footer__nav');
toggleEnd.addEventListener('click',()=>{
    nav.style.left='-100%';
});
toggleStart.addEventListener('click',()=>{
    nav.style.left='0';
})


