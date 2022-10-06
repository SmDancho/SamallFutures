const slide = document.querySelectorAll('.slide');





console.log(slide)



slide.forEach((item) => {
    
    item.addEventListener('click', () => {
        changeBackGround()
        clearActive()
        item.classList.add('active');
    })
    
})


function changeBackGround() {
    const arr = ['#6B1D1D' , '#0E1631' ,'#ffffff']
    let indexOfArr = Math.floor(Math.random() * 3)
    let backColor = document.body.style.backgroundColor = arr[indexOfArr];
}

function clearActive() {
    
slide.forEach((item) => {
    
    item.classList.remove('active');
    
})


   
}