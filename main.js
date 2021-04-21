// Exercise 1: Move the box //

function myMove() {

    let pos = 0;
    let animate = document.getElementById('animate');

    let id = setInterval(function () {
        animate.style.left = pos + "px";
        pos += 50;
        if (pos == 400) {
            clearInterval(id)
        }
    }, 500);
    
}

// Exercise 2: Drag & Drop //


const square1 = document.querySelector('.square1')
const square2 = document.querySelector('.square2')
const square3 = document.querySelector('.square3')

square1.setAttribute('draggable', true)

square1.addEventListener('dragstart', () => {
    square1.classList.add('dragging');
})
square1.addEventListener('dragend', () => {
    square1.classList.remove('dragging')
})

square2.addEventListener('dragover', e => {
    e.preventDefault()
    const draggable = document.querySelector('.dragging')
    square2.appendChild(draggable)
})

square3.addEventListener('dragover', e => {
    e.preventDefault()
    const draggable = document.querySelector('.dragging')
    square3.appendChild(draggable)
})