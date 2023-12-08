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