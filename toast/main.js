let all_btn = document.querySelectorAll('.btn')
 let message = document.querySelector('#message') 
 for(let btn of all_btn){
    btn.addEventListener('click',function(){
       if(btn.getAttribute('id') == 'success'){
          let div = document.createElement('div')
          div.setAttribute('class', 'text')
          div.style.backgroundColor = 'rgb(153, 251, 153)'
          message.appendChild(div)
          div.appendChild(toast('Success'))
          expire(div)
       }else if(btn.getAttribute('id') == 'error'){
        let div = document.createElement('div')
        div.setAttribute('class', 'text')
        div.style.backgroundColor = 'rgb(253, 117, 117)'
        message.appendChild(div)
        div.appendChild(toast('Error'))
        expire(div)
       }
    })
 }

 function toast(msg){
     return document.createTextNode(msg);
 } 

function expire(div){
    setTimeout(function(){
            div.style.opacity = 0;
     },1500)
}

