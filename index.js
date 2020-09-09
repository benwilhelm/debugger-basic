const totalIndicator = document.querySelector('.total')
const addButton = document.querySelector('[name=add]')
addButton.addEventListener('click', addButtonHandler)

function getCurrentTotal() {
  return +totalIndicator.innerHTML
}

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error(`add() only accepts numbers.`)
  }

  return a + b
}

function updateTotal(total) {
  totalIndicator.innerHTML = total
}

function addButtonHandler(evt) {

  setTimeout(() => {
    console.log('clicked!')
  })

  const currentTotal = getCurrentTotal()
  const addValue = +evt.target.dataset.value
  const newTotal = add(currentTotal, addValue)
  updateTotal(newTotal)
}
