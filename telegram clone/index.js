let header = document.querySelector('.header'),
 inputSearch = document.querySelector('.searchbar input'),
 arrowLeft = document.querySelector('.fa-arrow-left'),
 files = document.querySelector('.files'),
 chatbox =document.querySelector('#chatBox'),
 msg =document.querySelector('#msg');



 inputSearch.addEventListener('focus',()=>{
    header.classList.add('focus')
    files.classList.add('show')
 });


 arrowLeft.addEventListener('click',()=>{
    header.classList.remove('focus'),
     files.classList.remove('show');

 })

 msg.addEventListener('click', ()=>{
   chatbox.classList.add('show');
 })
 