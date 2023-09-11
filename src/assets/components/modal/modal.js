// import {Fancybox} from "@fancyapps/ui";

const callbackButton = document.querySelectorAll('[data-modal=callback]');
const leasingButton = document.querySelectorAll('[data-modal=leasing]');
const callbackModal = document.querySelector('.callback-modal');
const closeModal = document.querySelectorAll('.close-modal');
const closeModalButton = document.querySelectorAll('.close-button');


callbackButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        callbackModal.style.display = 'flex';
        if (event.target.dataset.title) {
            callbackModal.querySelector('.modal__title').textContent = event.target.dataset.title;
        }
        if (event.target.dataset.text) {
            callbackModal.querySelector('.modal__text').textContent = event.target.dataset.text;
        }
        if (event.target.dataset.comment) {
            callbackModal.querySelector('input[name=comment]').value = event.target.dataset.comment;
        }
        
        // Fancybox.show([{
        //     src: callbackModal,
        //     type: 'html',
        //     autoFocus: false,
        //     dragToClose: false,
        // }]);
    })
})

leasingButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        callbackModal.style.display = 'flex';
        if (event.target.dataset.title) {
            callbackModal.querySelector('.modal__title').textContent = event.target.dataset.title;
        }
        if (event.target.dataset.text) {
            callbackModal.querySelector('.modal__text').textContent = event.target.dataset.text;
        }
        if (event.target.dataset.comment) {
            callbackModal.querySelector('input[name=comment]').value = event.target.dataset.comment;
        }
        
        // Fancybox.show([{
        //     src: callbackModal,
        //     type: 'html',
        //     autoFocus: false,
        //     dragToClose: false,
        // }]);
    })
})

closeModalButton.forEach(item =>{
    item.addEventListener ('click', function(e){
        callbackModal.style.display = 'none';
    });
})

closeModal.forEach((item) => {
    item.addEventListener ('click', function(e){
        if(e.target == item){
            callbackModal.style.display = 'none';
            
        }
    });
})