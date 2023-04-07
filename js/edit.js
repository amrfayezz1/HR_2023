import {data} from './data.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const idInput = document.querySelector('input[name="id"]');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const addressInput = document.querySelector('input[name="address"]');
const phoneInput = document.querySelector('input[name="phone"]');
const maleRadio = document.querySelector('input[value="male"]');
const femaleRadio = document.querySelector('input[value="female"]');
const maritalSelect = document.getElementById('marital_status');
const vacationLeftInput = document.querySelector('input[name="vacation_left"]');
const vacationApprovedInput = document.querySelector('input[name="vacation_approved"]');
const salaryInput = document.querySelector('input[name="salary"]');
const birthInput = document.querySelector('input[name="birth"]');

const selectedObject = data.find(obj => obj.id === id);

idInput.value = selectedObject.id;
nameInput.value = selectedObject.name;
emailInput.value = selectedObject.email;
addressInput.value = selectedObject.address;
phoneInput.value = selectedObject.phone;
if (selectedObject.gender === 'male') {
  maleRadio.checked = true;
} else if (selectedObject.gender === 'female') {
  femaleRadio.checked = true;
}
maritalSelect.value = selectedObject.marital_status;
vacationLeftInput.value = selectedObject.remVac;
vacationApprovedInput.value = selectedObject.appVac;
salaryInput.value = selectedObject.salary;
birthInput.value = selectedObject.dob;


console.log(data);
const del = document.getElementById("del");
del.addEventListener("click", flag);
function flag(){
    if(confirm("Are you sure you want to delete employee?")){
        data.splice(data.indexOf(selectedObject),1);
        console.log(data);
        window.location.href="index.html";
    }
}