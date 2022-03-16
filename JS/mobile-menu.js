document.querySelector('#mobile-menu').addEventListener('click',()=>{
    let menu = document.querySelector('#menuheader')
    
    if(menu.className === 'notactive'){
        menu.className = 'active'
    }else{
        menu.className = 'notactive'
    }
})