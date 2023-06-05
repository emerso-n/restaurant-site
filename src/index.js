import CreateElement from './create.js'
import './css/base.css'
import './css/normalize.css'
import './css/style.css'

const pageCon = CreateElement(document.body, { id: 'page-con' })

const main = CreateElement(pageCon, { id: 'main' })

const sidebar = CreateElement(main, { id: 'sidebar' })
CreateElement(sidebar, { innerHTML: 'The Flying Fan', id: 'logo' })
CreateElement(sidebar, { type: 'button', innerHTML: 'Home', classList: 'btn-active' })
CreateElement(sidebar, { type: 'button', innerHTML: 'Menu' })
CreateElement(sidebar, { type: 'button', innerHTML: 'About' })

CreateElement(main, { id: 'main-content', innerHTML: 'Here is some text for the content on the homepage' })

CreateElement(pageCon, { type: 'footer', innerHTML: 'A website by emerso-n (2023)' })
