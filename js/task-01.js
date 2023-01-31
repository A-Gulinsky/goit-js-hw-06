const ul = document.querySelector(`#categories`)
const itemList = ul.querySelectorAll(`.item`)

const names = itemList.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.querySelector("ul").children.length);
    });