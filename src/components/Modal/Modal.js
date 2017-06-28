// const Modal = (props) => 
//   `
//     <div class="main__app__modal__content">
//       some text<br>some text<br>some text<br>some text<br>some text<br>some text<br>
//     </div>
//   `
  
const initModal = function() {
    const el = document.querySelector('.main')
    const backContent = document.querySelector('.app')
    
    const modal = document.createElement('div')
    const content = document.createElement('div')
    const bg = document.createElement('div')

    backContent.style.filter = 'blur(12px)'

    modal.className = 'main__app__modal'
    bg.className = 'main__app__modal__bg'
    content.className = 'main__app__modal__content'
    content.innerHTML = 'Romans form'

    
    bg.addEventListener('click', function() {
        el.removeChild(modal)
        backContent.style.filter = 'none'
    })
    
    modal.appendChild(bg)
    modal.appendChild(content)
    el.appendChild(modal)
}


