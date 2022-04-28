const menuBtn = document.querySelector('#menu svg');
const closeBtn = document.getElementById('hide');
const backdrop = document.querySelector('.backdrop');
const modalMenu = document.querySelector('.modal');
const exploreDropdown = document.querySelector('.dropdowns');
const firstDrop = document.querySelector('.dropdown');
const plusIcon = document.querySelector('.plustoggle');
const minusIcon =document.querySelector('.minustoggle')
const secondDrop = document.querySelector('.drop__toggle')



// funtions
function showSideMenu (){
   
    backdrop.style.display = 'block';
    modalMenu.style.display = 'block'

}
function hideModal(){
    backdrop.style.display = 'none';
    modalMenu.style.display = 'none'
    firstDrop.style.display = 'none'
    return hideToggle();
    // secondDrop.style.display = 'none'
}
function firstToggle(){
firstDrop.style.display = 'flex'
plusIcon.style.display = 'block'
}

function secondToggle(){
secondDrop.style.display = 'block'
plusIcon.style.display = 'none';
minusIcon.style.display = 'block'
}

function hideToggle(){
    minusIcon.style.display = 'none';
    plusIcon.style.display = 'block'
    secondDrop.style.display = 'none'
    
}


//  call to action;
menuBtn.addEventListener('click', showSideMenu);
closeBtn.addEventListener('click', hideModal);
exploreDropdown.addEventListener('click', firstToggle);
plusIcon.addEventListener('click', secondToggle);
minusIcon.addEventListener('click', hideToggle)

