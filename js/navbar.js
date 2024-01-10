const menu = document.querySelector('#navbar_menu')
const showClass = 'show'

const openNavBarMenu = () => menu.classList.toggle(showClass)
const closeNavBarMenu = () => menu.classList.remove(showClass);