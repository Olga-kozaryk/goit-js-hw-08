import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
initForm();
  
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    formData.forEach((value, name) => console.log(value, name));
      
   
    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    })

form.addEventListener('input', throttle(event => {
   let inputForm = localStorage.getItem(LOCALSTORAGE_KEY);
   inputForm = inputForm ? JSON.parse(inputForm) : {};
   inputForm[event.target.name] = event.target.value;
   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputForm))
}, 500));

function initForm() {
    let inputForm = localStorage.getItem(LOCALSTORAGE_KEY);
    if (inputForm) {
        inputForm = JSON.parse(inputForm);
        Object.entries(inputForm).forEach(([name, value]) =>
         {form.elements[name].value = value;
        });
    }
}






