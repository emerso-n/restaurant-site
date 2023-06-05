function CreateElement (parent, { type = 'div', classList = '', id = '', innerHTML = '' }) {
  const element = document.createElement(type)

  if (classList) element.classList = classList
  if (id) element.id = id
  if (innerHTML) element.innerHTML = innerHTML

  parent.appendChild(element)
  return element
}
export default CreateElement
