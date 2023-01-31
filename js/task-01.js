
const categoriesList = document.querySelector('#categories')
console.log(`Number of Categories : ${categoriesList.children.length}`)
console.log(``)

const nameOfCategory = categoriesList.querySelectorAll('.item h2')
const sumOfElementsOfCategory = categoriesList.querySelectorAll(`ul`)

// first category
console.log(`Category : ${nameOfCategory[0].textContent}`)
console.log(`Elements : ${sumOfElementsOfCategory[0].children.length}`)

// second categories
console.log(``)
console.log(`Category : ${nameOfCategory[1].textContent}`)
console.log(`Elements : ${sumOfElementsOfCategory[1].children.length}`)

// last categories
console.log(``)
console.log(`Category : ${nameOfCategory[2].textContent}`)
console.log(`Elements : ${sumOfElementsOfCategory[2].children.length}`)