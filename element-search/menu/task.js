const menuItem = document.getElementsByClassName('menu__item');
const menuLink = document.querySelectorAll('.menu__link');
const arrLink = Array.from(menuLink);
const arrItem = Array.from(menuItem);

arrLink.forEach((link) => {
    link.onclick = () => {
    const parent = link.parentElement;
    if (parent.querySelector('.menu_sub') !== null) {
        if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {            
            //visible OFF all previous submenu
            arrItem.forEach((element, index) => {
                                if (element.querySelector('.menu_active')) {
                                    arrItem[index].querySelector('.menu_sub').classList.remove('menu_active');
                                }
            }) 
            //visible ON current submenu
            parent.querySelector('.menu_sub').classList.add('menu_active');
        } 
 
        if (link.closest('.menu_main')) {
			return false
        }    
    }
    }
});