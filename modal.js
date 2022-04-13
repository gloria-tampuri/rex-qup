const menuBtn = document.querySelector('#menu svg');
const closeBtn = document.getElementById('hide');
const backdrop = document.querySelector('.backdrop');
const modalMenu = document.querySelector('.modal');

function showSideMenu (){
   
    backdrop.style.display = 'block';
    modalMenu.style.display = 'block'

}

menuBtn.addEventListener('click', showSideMenu)

function hideModal(){
    backdrop.style.display = 'none';
    modalMenu.style.display = 'none'
}

closeBtn.addEventListener('click', hideModal);