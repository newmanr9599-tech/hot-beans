function ValidateVacancyForm() {
    
    const firstNameField = document.querySelector(".firstName");
    const lastNameField  = document.querySelector(".lastName");
    const addressField   = document.querySelector(".address");
    const phoneField     = document.querySelector(".phone");

    const nameErrorEl    = document.querySelector(".nameError");
    const addressErrorEl = document.querySelector(".addressError");
    const phoneErrorEl   = document.querySelector(".phoneError");

    let nameError = "";
    let addressError = "";
    let phoneError = "";

    let noFirstName = false;
    let noLastName = false;
    let noInputAddress = false;
    let noPhoneNumber = false;

    if (!firstNameField.value.trim()) {
        noFirstName = true;
    }
    if (!lastNameField.value.trim()) {
        noLastName = true;
    }
    if (!addressField.value.trim()) {
        noInputAddress = true;
        addressError = "Please enter Address, City, Borough, Zip Code";
    }
   
       
        if (phoneField.value.trim().length !== 11 ||Number.isNaN(Number(phoneField.value.trim()))){
             noPhoneNumber = true;
            phoneError = "Make sure input is within range";
        }
         if (!phoneField.value.trim()) {
             noPhoneNumber = true;
             phoneError = "Please enter your Phone Number";

         }
       
    if (noFirstName && noLastName) {
        nameError = "Please enter your First Name and Last Name";
    } else if (noFirstName) {
        nameError = "Please enter your First Name";
    } else if (noLastName) {
        nameError = "Please enter your Last Name";
    }

    nameErrorEl.textContent = nameError;
    addressErrorEl.textContent = addressError;
    phoneErrorEl.textContent = phoneError;

    if (noFirstName || noLastName || noInputAddress || noPhoneNumber) {
        return false;
    }

    return true;
}
