const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeListWithIngredients = (items) => {
return items.map(item => {
  const createEl = document.createElement(`li`)
createEl.classList.add(`item`)
createEl.textContent = item

return createEl
})
}

const elements = makeListWithIngredients(ingredients)

const list = document.querySelector(`#ingredients`)
list.append(...elements)

