const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = dument.querySelector('.modal-wrapper')

//chama um evento que entra na class modal e remove o atributo invisible da class
buttonOpenModal.onclick = function(){
  modalWrapper.classList.remove('invisiblle')
}

