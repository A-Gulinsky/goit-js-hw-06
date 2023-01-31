const input = document.querySelector(`input`)

const makeBorderColor = (event) => {
  return event.addEventListener('blur' , (option) => {
    const inputValueLength = option.currentTarget.value.length
   const inputDataSetLength = event.dataset.length


  if(inputValueLength != inputDataSetLength) {
    input.classList.add(`invalid`)
  } else {
    input.classList.replace(`invalid`, `valid`)
    }
  })
}

makeBorderColor(input)