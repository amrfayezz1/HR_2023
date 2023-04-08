import {forms, Form} from './forms.js';
import {data} from './data.js';

const table = document.getElementById("table");
const header = document.createElement("tr");
header.innerHTML="<th>ID</th>\
                <th>Name</th>\
                <th>remaining vacation days</th>\
                <th>approved vacation days</th>\
                <th>from</th>\
                <th>to</th>\
                <th>Reason</th>\
                <th>Status</th>";
table.appendChild(header);
for (let i = 0; i < forms.length; i++) {
    const selectedObject = data.find(obj => obj.id == forms[i].id);
    console.log(selectedObject);
    const row = document.createElement("tr");
    row.classList.add("rw"+i);
    row.innerHTML="<td>"+forms[i].id+"</td>\
                    <td>"+forms[i].name+"</td>\
                    <td class='rem'>"+selectedObject.remVac+"</td>\
                    <td class='app'>"+selectedObject.appVac+"</td>\
                    <td>"+forms[i].from+"</td>\
                    <td>"+forms[i].to+"</td>\
                    <td>"+forms[i].reason+"</td>\
                    <td class='status'>"+forms[i].status+"</td>\
                    <td><button class='accept'>Approve</button></td>\
                    <td><button class='reject'>Decline</button></td></td>";
    table.appendChild(row);
    const acc = document.querySelector(".rw"+i+" .accept");
    const rej = document.querySelector(".rw"+i+" .reject");
    acc.addEventListener("click", ()=>{
        const date1 = new Date(forms[i].from);
        const date2 = new Date(forms[i].to);
        const timeDiff = date2.getTime() - date1.getTime();
        const dayDiff = timeDiff / (1000 * 3600 * 24);
        document.getElementsByClassName("rem")[i].innerHTML -= dayDiff;
        document.getElementsByClassName("app")[i].innerHTML = Number(document.getElementsByClassName("app")[i].innerHTML)+ dayDiff;
        document.getElementsByClassName("status")[i].innerHTML = "Approved";
        selectedObject.remVac-=dayDiff;
        selectedObject.appVac=Number(selectedObject.appVac) + dayDiff;
        forms.splice(i,1);
        acc.disabled=true;
        rej.disabled=true;
        // window.location.reload();
        console.log(selectedObject);
    })
    rej.addEventListener("click", ()=>{
        document.getElementsByClassName("status")[i].innerHTML = "Declined";
        forms.splice(i,1);
        acc.disabled=true;
        rej.disabled=true;
        // window.location.reload();
    })
}
