//creation table
let bodyBody = document.getElementById("body1")
let new_table = document.createElement("table");
bodyBody.appendChild(new_table)

//creation tr 1
let new_tr1 = document.createElement("tr");
new_table.appendChild(new_tr1)

//creation td 1
let new_td1 = document.createElement("td");
new_tr1.appendChild(new_td1)
new_td1.innerText = "AAA"

//creation td 2
let new_td2 = document.createElement("td");
new_tr1.appendChild(new_td2)
new_td2.innerText = "BBB"

//creation tr 2
let new_tr2 = document.createElement("tr");
new_table.appendChild(new_tr2)

//creation td 3
let new_td3 = document.createElement("td");
new_tr2.appendChild(new_td3)
new_td3.innerText = "CCC"

//creation td 4
let new_td4 = document.createElement("td");
new_tr2.appendChild(new_td4)
new_td4.innerText = "DDD"

