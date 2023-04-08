import {Emp, data} from './data.js';
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const id = form.id.value;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const gender = form.gender.value;
    const maritalStatus = form.marital_status.value;
    const salary = form.salary.value;
    const dob = form.birth.value;

    const newEmp = new Emp(id,name,email,address,phone,gender,maritalStatus,salary,dob);
    data.push(newEmp);
    // window.location.href="index.html";
    console.log(data);
});
console.log(data);