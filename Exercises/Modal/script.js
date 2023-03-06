const openModal =  document.getElementById('openModal');

const modalWrapper = document.querySelector('.modal-wrapper');

openModal.onclick = () => {
    modalWrapper.classList.remove('invisible');
    openModal.classList.add('visible');
}

document.addEventListener('keydown', (event) => {
    const isEscKey = event.key === 'Escape'

    if(isEscKey) {
        modalWrapper.classList.add('invisible');
        openModal.classList.remove('visible');
    }
})