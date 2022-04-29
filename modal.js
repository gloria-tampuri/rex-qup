const menuBtn = document.querySelector('#menu svg');
const closeBtn = document.getElementById('hide');
const backdrop = document.querySelector('.backdrop');
const modalMenu = document.querySelector('.modal');
const exploreDropdown = document.querySelector('.explore__btn');
const exploreDropUp = document.querySelector('.explore__close');
const firstDrop = document.querySelector('.explore__dropdown');
const plusIcon = document.querySelector('.plustoggle');
const minusIcon =document.querySelector('.minustoggle');
const plusIcon2 = document.querySelector('.plustoggle2');
const minusIcon2 =document.querySelector('.minustoggle2');
const secondDrop = document.querySelector('.drop__toggle');
const secondDrop2 = document.querySelector('.drop__toggle2');// Added by KBQ
const dropdownIcon = document.querySelector('.dropicon')



// funtions
function showSideMenu (){
   
    backdrop.style.display = 'block';
    modalMenu.style.display = 'block'

}
function hideModal(){
    backdrop.style.display = 'none';
    modalMenu.style.display = 'none'
    firstDrop.style.display = 'none'
    exploreDropUp.style.display = 'none'
    exploreDropdown.style.display = 'block'
    hideToggle2();
    return hideToggle();
    // secondDrop.style.display = 'none'
}
function firstToggle(){
        firstDrop.style.display = 'grid'
        minusIcon2.style.display= 'none'//Added by KBQ
        plusIcon.style.display = 'block'
        exploreDropUp.style.display = 'block'
        exploreDropdown.style.display = 'none'
}

function closeToggle(){
    exploreDropUp.style.display = 'none'
    exploreDropdown.style.display = 'block';
    firstDrop.style.display='none'
       
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

function secondToggle2(){
    secondDrop2.style.display = 'block'
    minusIcon2.style.display = 'block'//Added by KBQ
    plusIcon2.style.display = 'none' //Added by KBQ
    }
    

function hideToggle2(){
    minusIcon2.style.display = 'none';
    plusIcon2.style.display = 'block'
    secondDrop2.style.display = 'none' 
}


//  call to action;
menuBtn.addEventListener('click', showSideMenu);
closeBtn.addEventListener('click', hideModal);
exploreDropdown.addEventListener('click', firstToggle);
plusIcon.addEventListener('click', secondToggle);
minusIcon.addEventListener('click', hideToggle)
minusIcon2.addEventListener('click', hideToggle2)
plusIcon2.addEventListener('click', secondToggle2);
exploreDropUp.addEventListener('click', closeToggle)

