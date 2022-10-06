const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')



function dragStart(e){
    e.target.classList.add('hold')
    setTimeout(() =>  e.target.classList.add('hide'), 0 )
   
}

function dragEnd(e){
    e.target.classList.remove('hold')
    e.target.classList.remove('hide')
    
}

function dragover(e) {
    e.preventDefault()
}


function dragenter(e) {
    e.target.classList.add('hovered')
}


function dragleave(e) {
    e.target.classList.remove('hovered')
}


function drop(e) {
    e.target.append(item) 
    e.target.classList.remove('hovered')

}



placeholders.forEach((item) => {
    item.addEventListener('dragover',dragover)
    item.addEventListener('dragenter',dragenter)
    item.addEventListener('dragleave' ,dragleave)
    item.addEventListener('drop',drop)
})

item.addEventListener('dragstart',dragStart)
item.addEventListener('dragend', dragEnd)