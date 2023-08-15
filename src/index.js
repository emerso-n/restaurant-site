import CreateElement from './create.js'
import './css/base.css'
import './css/normalize.css'
import './css/style.css'

const pageCon = CreateElement(document.body, { id: 'page-con' })

const pageheader = CreateElement(pageCon, { id: 'page-header' })
CreateElement(pageheader, { classList: 'header-stripe' })
CreateElement(pageheader, { innerHTML: 'Restaurant', id: 'logo' })
CreateElement(pageheader, { classList: 'header-stripe' })

// const navmain = CreateElement(main, { id: 'nav_main' })
const main = CreateElement(pageCon, { id: 'main' })
const navbtns = CreateElement(main, { type: 'nav', id: 'nav' })
const homebtn = CreateElement(navbtns, { type: 'button', innerHTML: 'Home', classList: 'btn-active' })
const menubtn = CreateElement(navbtns, { type: 'button', innerHTML: 'Menu' })
const aboutusbtn = CreateElement(navbtns, { type: 'button', innerHTML: 'About Us' })
CreateElement(pageCon, { type: 'footer', innerHTML: 'A website by emerso-n (2023)' })

const navs = [homebtn, menubtn, aboutusbtn]
navs.forEach(element => {
  element.addEventListener('click', changepage)
})

function changepage (e) {
  maincontent.remove()
  navs.forEach(element => {
    element.classList.remove('btn-active')
  })
  switch (e.target.innerHTML) {
    case 'Home':
      home()
      break
    case 'Menu':
      menu()
      break
    case 'About Us':
      aboutus()
      break
    default:
      break
  }
  e.target.classList = 'btn-active'
}

let maincontent
function home () {
  maincontent = CreateElement(main, { id: 'main-content', classList: 'main-homepage' })
  homebtn.classList = 'btn-active'
  const textcon = CreateElement(maincontent, { id: 'text_con' })
  CreateElement(maincontent, { id: 'fill_con' })
  CreateElement(textcon, { type: 'h1', innerHTML: 'This is: Restaurant:' })
  CreateElement(textcon, { type: 'p', innerHTML: 'We serve Food' })
  CreateElement(textcon, { type: 'p', innerHTML: 'Here at Restaurant, we are committed to making food and giving it to you for you to eat. We strive to fullfil every order we receive within a timely manner and to a quality that is acceptably good-tasting and will not harm the patron. We promise that it will be a pleasant experience so come and try for yourself.' })
}
home()

const menuitems = [['Water', 'Drink some water / 3.00'], ['Bread', 'Made from wheat / 5.00'], ['Sandwich', 'Made from bread / 8.00'], ['Tacos', 'Has real meat it in / 12.00'], ['Cake', 'Good for birthdays / 6.00'], ['Ice Cream', 'It\'s delicious / 5.00']]
function menu () {
  menubtn.classList = 'btn-active'
  maincontent = CreateElement(main, { id: 'main-content', classList: 'main-menu' })
  CreateElement(maincontent, { classList: 'menu-side' })
  const menucon = CreateElement(maincontent, { id: 'menu-items_con' })
  for (let i = 0; i < menuitems.length; i++) {
    const menuitem = CreateElement(menucon, { classList: 'menu-item' })
    CreateElement(menuitem, { classList: 'item-name', innerHTML: menuitems[i][0] })
    CreateElement(menuitem, { classList: 'item-desc', innerHTML: menuitems[i][1] })
  }
  CreateElement(maincontent, { classList: 'menu-side' })
}
// menu()

function aboutus () {
  aboutusbtn.classList = 'btn-active'
  maincontent = CreateElement(main, { id: 'main-content', classList: 'aboutus-main' })
  CreateElement(maincontent, { id: 'aboutus-text', innerHTML: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ci dont feel like writing thisonsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' })
}
// aboutus()
