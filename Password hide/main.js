let image = document.querySelector('#image')
let input = document.querySelector('#password')

image.addEventListener('click',function(){
    if(image.getAttribute('value') == 'view'){
        image.setAttribute('value','hide')
        input.setAttribute('type','text')
        image.src = 'images/hide.png'
    }else{
        image.setAttribute('value','hide')
        input.setAttribute('type','text')
        image.src = 'images/view.png'
    }
})