'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.show-modal')

//function to open modal
const openModal = function(){
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

//function to close modals
const closeModal = function(){
  modal.classList.add('hidden')
  overlay.classList.add("hidden")
}

for(let i = 0; i < buttonsOpenModal.length; i++)
  buttonsOpenModal[i].addEventListener('click', openModal)

//listners to close modals
buttonCloseModal.addEventListener('click',closeModal)
overlay.addEventListener('click', closeModal)

//key press event

document.addEventListener('keydown', function (e){
  if(e.key === 'Escape' && !modal.classList.contains('hidden')){
      closeModal()
  }
})
























//
