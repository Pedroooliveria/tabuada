const forms = document.getElementById("form");
const inputs = document.getElementById("input");
const btn = document.getElementById("button");
const tables = document.getElementById("table");

// const tr = document.createElement("tr");
// document.getElementById.appendChild(tr);
let result = 1;

forms.addEventListener("submit", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", () => {
  for (i = 0; i < 11; i++) {

    result = inputs.value * i;
    console.log(result);
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");

    tr.appendChild(td);
    td.innerHTML = inputs.value;
    td1.innerHTML = "*";
    tr.appendChild(td1);
    td2.innerHTML = i;
    tr.appendChild(td2);
    td3.innerHTML = "=";
    tr.appendChild(td3);
    td4.innerHTML = result;
    tr.appendChild(td4);
    tables.appendChild(tr);
    
  }
});


