import {data} from './data.js';

const table = document.getElementById("table");
// short data
const header = document.createElement("tr");
header.innerHTML="<th>ID</th>\
                <th>Name</th>\
                <th>remaining vacation days</th>\
                <th>approved vacation days</th>";
table.appendChild(header);
for (let i = 0; i < data.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML="<td>"+data[i].id+"</td>\
                    <td>"+data[i].name+"</td>\
                    <td>"+data[i].remVac+"</td>\
                    <td>"+data[i].appVac+"</td>\
                    <td><a href='edit.html?id="+data[i].id+"'>Edit</a></td>\
                    <td><a href='vacForm.html?id="+data[i].id+"'>Submit Vacation</a></td>";
    table.appendChild(row);
}
// long data
const info=document.getElementById("btn");
info.addEventListener("click", ()=>{
    table.innerHTML="";
    header.innerHTML+="<th>Email</th>\
                        <th>address</th>\
                        <th>phone no.</th>\
                        <th>gender</th>\
                        <th>marital status</th>\
                        <th>salary</th>\
                        <th>date of birth</th>"
    table.appendChild(header);
    for (let i = 0; i < data.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML="<td>"+data[i].id+"</td>\
                        <td>"+data[i].name+"</td>\
                        <td>"+data[i].remVac+"</td>\
                        <td>"+data[i].appVac+"</td>\
                        <td>"+data[i].email+"</td>\
                        <td>"+data[i].address+"</td>\
                        <td>"+data[i].phone+"</td>\
                        <td>"+data[i].gender+"</td>\
                        <td>"+data[i].marital+"</td>\
                        <td>"+data[i].salary+"</td>\
                        <td>"+data[i].dob+"</td>\
                        <td><a href='edit.html?id="+data[i].id+"'>Edit</a></td>\
                        <td><a href='vacForm.html?id="+data[i].id+"'>Submit Vacation</a></td>";
        table.appendChild(row);
    }
    info.remove();
})

const search = document.getElementById('search');
search.addEventListener('submit', (e)=>{
    e.preventDefault();
    const sName = document.getElementById("sName");
    if(sName.value==""){
        newData=data;
    }else{
        newData = data.filter(x=>x.name.toLowerCase().includes(sName.value.toLowerCase()));
    }
    table.innerHTML="";
    header.innerHTML+="<th>Email</th>\
                        <th>address</th>\
                        <th>phone no.</th>\
                        <th>gender</th>\
                        <th>marital status</th>\
                        <th>salary</th>\
                        <th>date of birth</th>"
    table.appendChild(header);
    for (let i = 0; i < newData.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML="<td>"+newData[i].id+"</td>\
                        <td>"+newData[i].name+"</td>\
                        <td>"+newData[i].remVac+"</td>\
                        <td>"+newData[i].appVac+"</td>\
                        <td>"+newData[i].email+"</td>\
                        <td>"+newData[i].address+"</td>\
                        <td>"+newData[i].phone+"</td>\
                        <td>"+newData[i].gender+"</td>\
                        <td>"+newData[i].marital+"</td>\
                        <td>"+newData[i].salary+"</td>\
                        <td>"+newData[i].dob+"</td>\
                        <td><a href='edit.html?id="+newData[i].id+"'>Edit</a></td>\
                        <td><a href='vacForm.html?id="+newData[i].id+"'>Submit Vacation</a></td>";
        table.appendChild(row);
    }
    info.remove();
    sName.value="";
});