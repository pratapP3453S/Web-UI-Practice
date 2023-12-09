let typed = new Typed('.autoType',{
    strings: ['Developer','Engineer','Artist','Student'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true,
}); 
function rotateBarIcon(){
    let showMenu = document.querySelector('.menuContainer');
    showMenu.style.display = "flex";
}
function rotateCloseIcon(){
    let closeMenu = document.querySelector('.menuContainer');
    closeMenu.style.display = "none";
}

function showDetails(inp){
    let write = document.querySelector('.contactInfo');
    if(inp == 1){ 
        write.innerText = 'pratap ka facebook id';
    }
    else if(inp == 2){
        write.innerText = 'pratap ka insta id';
    }
    else if(inp == 3){
        write.innerText = 'pratap ka twitter';
    }
    else if(inp == 4){
        write.innerText = 'pratap ka whatsapp number';
    }
    else{
        write.innerText = '';
    }
}