// Data Entry 

// Navaigation 

let field = document.getElementById("wrapper2");
let container = document.getElementById("form");
let empContainer = document.getElementById("empContainer");
let empData = document.querySelector("#empData");
let empRegister = document.querySelector("#empRegister");

const showData = () => {
    
    container.style.display = "none";
    // console.log(container);
    empContainer.style.display = "block";
    
    let email = document.getElementById("email");

        if (email.value == 0)
        {
            let message = document.getElementById("message");

            message.innerHTML =
            `
                <div class="data_field">
                    <div class="data" id="data2">No Record found</div>
                </div>
            `;
        }    
        else 
        {
            message.style.display = "none";
        }
        
        // console.log("hello")
}    
            
            
let popup = document.getElementById("up");

const checkData = (show) => {

    let data = document.getElementById(show);
    let showdata = document.getElementById("showdata");

    popup.classList.add("open-pop");
    
    
    let mail = document.getElementById(show).textContent;
    // console.log(mail);
    
    let field = document.getElementById("showdata");
    // console.log(field)
    field.innerHTML = mail;

    // console.log(show);
    // console.log(mail[show]);

    // let name = document.getElementsByName("id[]");
    // console.log(mail[show].value);

}

const closepop = () => {

    popup.classList.remove("open-pop");
    // popup.style.display = "none";
}

const DeleteData = (deleteId) => {

    // let dataField = document.querySelectorAll(".data_field");
    let dataField = document.getElementById(deleteId);
    
    // console.log("ID: ",dataField);
    dataField.style.display = "none";

    // obj.parentChild.style.display = "none";
}

// let deleteData = document.getElementsByClassName(".delete");

// deleteData.addEventListener("click",DeleteData);
    
const showRegister = () => {
    container.style.display = "block";
    empContainer.style.display = "none";
}    

empRegister.addEventListener("click", showRegister);
empData.addEventListener("click", showData);


// console.log(empData);


let id = 0;
function dataEntry()
{
    // document.querySelector("data").innerHTML = "azaadmottan";
    
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let ph_number = document.getElementById("ph_number").value;
    let address = document.getElementById("address").value;

    // <div class="otherdata" id="otherdata" style="display: none;"><br>Name: ${name}<br>Username: ${username}<br>Ph.no.: ${ph_number}<br>Address: ${address}</div>
    field.innerHTML +=
    `
        <div class="data_field" id="${id}">
            <div class="data" id="data2">Email: ${email}</div>
            <br>
            <div class="data" style="display: none;">Name: ${name}</div>
            <br>
            <div class="data" style="display: none;">Username: ${username}</div>
            <br>
            <div class="data" style="display: none;">Ph.No.: ${ph_number}</div>
            <br>
            <div class="data" style="display: none;">Address: ${address}</div>
                <div>
                    <button class="edit" id="edit" onclick="checkData(${id})">
                        <img src="/HTML/01 Images/view-data-icon.png">
                    </button>
                <div>
                <div>
                    <button class="delete" id="delete" onclick="DeleteData(${id})">
                        <img src="/HTML/01 Images/delete.png">
                    </button>
                </div>
            </div>
        </div>
    `;

    id++;
    // console.log("heelo",email);
}

// submit = document.querySelector("#submit").onclick = function (){
const validation = () => {

    if (
            ((document.querySelector("#name").value.length) === 0) ||  
            ((document.querySelector("#username").value.length) === 0) ||
            ((document.querySelector("#email").value.length) === 0) ||
            ((document.querySelector("#ph_number").value.length) === 0) || 
            ((document.querySelector("#pass_1").value.length) === 0) ||
            ((document.querySelector("#pass_2").value.length) === 0)
       )
    {
        alert ("Please Enter the Required Field");
    }
    else
    {
        alert ("Registration Successfully");

        // let input = document.getElementById("name").input = "";
        // console.log(input)
        
        dataEntry();
        
        // location.reload(true);
    }
    // console.log("hello")
}

let submit = document.querySelector("#submit");
// console.log(submit)
submit.addEventListener("click", validation);

document.querySelector("form").addEventListener("submit", function(event) {

    event.preventDefault();
});