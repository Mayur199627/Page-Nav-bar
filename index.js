const docLogo = document.getElementById('logo');
const subName = document.querySelectorAll('.item')
const str = document.getElementById('star')
console.log(subName)












// Event Listner //

docLogo.addEventListener('mouseover',()=>{
    docLogo.setAttribute('class','back-ground')
})

docLogo.addEventListener('mouseout',()=>{
    docLogo.setAttribute('class','')
    
})

subName.forEach(e=>{
    e.addEventListener('mouseover',()=>{
        e.setAttribute('class','back-ground')
    })
})

subName.forEach(e=>{
    e.addEventListener('mouseout',()=>{
        e.setAttribute('class','')
    })
})