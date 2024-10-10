var e=document.querySelector("table"),t=e.querySelectorAll("th"),n=Array(t.length).fill(!0),a=null,r=null;t.forEach(function(t,r){t.addEventListener("click",function(){var t=Array.from(e.querySelectorAll("tbody tr"));a!==r&&(n.fill(!0),a=r),t.sort(function(e,t){var a=e.cells[r].textContent.trim().replace(/[$,]/g,""),l=t.cells[r].textContent.trim().replace(/[$,]/g,"");return isFinite(a)&&isFinite(l)?n[r]?a-l:l-a:n[r]?a.localeCompare(l):l.localeCompare(a)}),n[r]=!n[r],t.forEach(function(t){return e.querySelector("tbody").appendChild(t)})})}),e.querySelectorAll("tbody tr").forEach(function(t){t.addEventListener("click",function(){e.querySelectorAll("tbody tr").forEach(function(e){return e.classList.remove("active")}),t.classList.add("active")})});var l=document.createElement("form");l.classList.add("new-employee-form");var o=[{label:"Name:",name:"name",type:"text",qa:"name"},{label:"Position:",name:"position",type:"text",qa:"position"},{label:"Office:",name:"office",type:"select",qa:"office"},{label:"Age:",name:"age",type:"number",qa:"age"},{label:"Salary:",name:"salary",type:"number",qa:"salary"}];o.forEach(function(e){var t=document.createElement("label");if(t.textContent=e.label,"select"===e.type){var n=document.createElement("select");n.setAttribute("name",e.name),n.setAttribute("data-qa",e.qa),["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"].forEach(function(e){var t=document.createElement("option");t.textContent=e,n.appendChild(t)}),t.appendChild(n)}else{var a=document.createElement("input");a.setAttribute("name",e.name),a.setAttribute("type",e.type),a.setAttribute("data-qa",e.qa),t.appendChild(a)}l.appendChild(t)});var c=document.createElement("button");c.textContent="Save to table",c.type="submit",l.appendChild(c),document.body.appendChild(l);var i=function(e,t,n,a){var r=document.createElement("div"),l=document.createElement("h2");l.innerText=n,l.classList.add("title"),r.classList.add("notification","".concat(a)),r.setAttribute("data-qa","notification"),r.appendChild(l),document.body.insertAdjacentElement("afterbegin",r),r.style.top="".concat(e,"px"),r.style.right="".concat(t,"px"),setTimeout(function(){r.style.display="none"},2e3)};l.addEventListener("submit",function(t){t.preventDefault(),document.querySelectorAll('[data-qa="notification"]').forEach(function(e){return e.remove()});var n=document.createElement("tr"),a=!0;o.forEach(function(e){var t="select"===e.type?l.querySelector("select[name=".concat(e.name,"]")).value:l.querySelector("input[name=".concat(e.name,"]")).value;if("name"===e.name&&t.length<4&&(i(20,20,"Error: Name must be at least 4 characters long.","error"),a=!1),t||(i(20,20,"Error: All fields must be filled.","error"),a=!1),"age"===e.name&&(t<18||t>90)&&(i(20,20,"Error: Age must be between 18 and 90.","error"),a=!1),a){var r=document.createElement("td");"salary"===e.name?r.textContent="$".concat(parseFloat(t).toLocaleString("en-US")):r.textContent=t,n.appendChild(r)}}),a&&(e.querySelector("tbody").appendChild(n),l.reset(),i(20,20,"Success: Employee added to the table!","success"))}),e.addEventListener("dblclick",function(e){var t=e.target;if("TD"===t.tagName&&null===r){var n=t.textContent,a=document.createElement("input");a.value=n,a.classList.add("cell-input"),t.appendChild(a),a.focus(),r=t,a.addEventListener("blur",function(){var e=a.value.trim()||n;t.textContent=e,r=null}),a.addEventListener("keydown",function(e){if("Enter"===e.key){var l=a.value.trim()||n;t.textContent=l,r=null}})}});
//# sourceMappingURL=index.b034e893.js.map
