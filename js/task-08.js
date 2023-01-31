
const form = document.querySelector(`.login-form`)
const inputs = document.querySelectorAll(`.login-form input`)

form.addEventListener(`submit`, onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault()
   
  const inputElements = event.currentTarget.elements
  // email/password
  const email = inputElements.email.value
  const password = inputElements.password.value
   
   const result = {
  [inputs[0].type] : email,
  [inputs[1].type] : password
  }
  console.log(result)

  // valid / reset
  inputs.forEach(input => {
    if(input.value.trim() !== '') {
      form.reset()
    } else {
        alert(`All fields need to full`)
      }
  })
}