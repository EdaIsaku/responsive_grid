var d = window.document;
var modal = d.getElementsByClassName('modalBackground')[0];

function openModal(_src){
var modalImage = d.querySelectorAll('.modalContainer img')[0];
	modal.style.display='flex';
  modalImage.src = _src;
      modal.addEventListener('click',function(e){
      if (modal !== e.target) return;
      closeModal()
      })
}

function closeModal(){
  	modal.style.display = "none";
}
