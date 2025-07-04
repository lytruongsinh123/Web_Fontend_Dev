let btnopen = document.querySelector('.open-modal-btn');
let modal = document.querySelector('.modal');
let iconclose = document.querySelector('.modal_header i')
let btnclose = document.querySelector('.modal_footer button')

function toggleModal(e) {
    console.log(e.target);
    modal.classList.toggle('hide') /*thêm và gỡ CSS hide cho class*/ 
}
btnopen.addEventListener('click', toggleModal)
btnclose.addEventListener('click', toggleModal)
iconclose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e) {
    if(e.target == e.currentTarget) {
        toggleModal()
    }
})
