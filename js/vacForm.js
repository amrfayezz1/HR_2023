import {forms, Form} from './forms.js';

const vac= document.getElementById("vac-form");
const urlParams = new URLSearchParams(window.location.search);
const idG = urlParams.get('id');
const nameG = urlParams.get('name');
vac.id.value=idG;
vac.name.value=nameG;


vac.addEventListener("submit", (e)=>{
    e.preventDefault();
    const from= vac.from.value;
    const to= vac.to.value;
    const reason= vac.reason.value;
    const id= vac.id.value;
    const name= vac.name.value;
    
    const newForm = new Form(id,name,from,to,reason);
    forms.push(newForm);
    // window.location.href="./vacations.html";
    console.log(forms);
});
console.log(forms);