const totalIndicator = document.querySelector('.total')
const addButton = document.querySelector('[name=add]')
addButton.addEventListener('click', addButtonHandler)

function getCurrentTotal() {
  return +totalIndicator.innerHTML
}

function add(a, b) {
  return a + b
}

function updateTotal(total) {
  totalIndicator.innerHTML = total
}

function addButtonHandler(evt) {
  const currentTotal = getCurrentTotal()
  const addValue = +evt.target.dataset.value
  const newTotal = add(currentTotal, addValue)
  updateTotal(newTotal)
}
