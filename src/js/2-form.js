const formData = {
    email: "", message: "",

    setData(newEmail, newMessage) {
        this.email = newEmail;
        this.message = newMessage;
}}
const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

form.addEventListener("input", formInput);
function formInput(event) {
    switch (event.target.name) {
        case "email":
            formData.email = event.target.value.trim();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
            break;
        case "message":
            formData.message = event.target.value.trim()
            localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
            break;
    }
}
function getValueOfLocalStorage() {
    const localData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (localData !== null) {
        formData.setData(localData.email, localData.message)
        form.email.value = localData.email;
        form.message.value = localData.message;
      
       
        
    }
}
getValueOfLocalStorage();



form.addEventListener("submit", formSubmit)
function formSubmit(event) {
    event.preventDefault()
    if (
        formData.email === "" || formData.message === "") {
        return alert("Fill please all fields")
        
       
    }
    console.table(formData);
    formData.setData("", "");
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
       
}
function onSubmit(event) {
  event.preventDefault();
  if (formData.email === "" || formData.message === "") {
    return alert("Fill please all fields");
  }
  console.table(formData);
  localStorage.removeItem(STORAGE_KEY);
  formMessage.reset();
}
getValueOfLocalStorage();