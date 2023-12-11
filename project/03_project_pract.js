document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
});

let button = document.getElementById("topBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 60) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

burger = document.querySelector(".burger");
head_nav = document.querySelector(".head_nav");
left = document.querySelector(".left");
right = document.querySelector(".right");

burger.addEventListener("click", () => {
  head_nav.classList.toggle("h-resp");
  left.classList.toggle("v-resp");
  right.classList.toggle("v-resp");
});

let error1 = 1, error2 = 1, error3 = 1, error4 = 1;

let submit = document.getElementById("bttn");
let userName = document.getElementById("Name");
let email = document.getElementById("email");
let phNumber = document.getElementById("phNumber");
let query = document.getElementById("query");

submit.addEventListener("click", () => {

    if (userName.value.length == "")
    {
        document.getElementById("name_msg").innerHTML = "Please Enter Name";
        document.getElementById("name_msg").style.color = "red";
    }

    if (email.value.length == "")
    {
        document.getElementById("email_msg").innerHTML = "Please Enter Email Id";
        document.getElementById("email_msg").style.color = "red";
    }
    
    if (phNumber.value.length == "")
    {
        document.getElementById("phone_msg").innerHTML = "Please Enter Phone Number";
        document.getElementById("phone_msg").style.color = "red";
    }
    
    if (query.value.length == "")
    {
        document.getElementById("query_msg").innerHTML = "Please Enter Query";
        document.getElementById("query_msg").style.color = "red";
    }
    
    
    if (error1 == 0 && error2 == 0 && error3 == 0 && error4 == 0)
    {
        alert ("Query Inserted Successfully !");
        location.reload(true);
    }

});


const hideError = () => {

    if (userName.value.length != "")
    {
        document.getElementById("name_msg").innerHTML = "";
        error1 = 0;
    }
    
    if (email.value.length != "")
    {
        document.getElementById("email_msg").innerHTML = "";
        error2 = 0;
    }

    if (phNumber.value.length != "")
    {
        if (phNumber.value.length < 10 || phNumber.value.length > 10)
        {
            document.getElementById("phone_msg").innerHTML = "Please Enter 10 digit";
            document.getElementById("phone_msg").style.color = "red";
        }
        else 
        {
            document.getElementById("phone_msg").innerHTML = "";
            error3 = 0;
        }
    }
    
    if (query.value.length != "")
    {
        document.getElementById("query_msg").innerHTML = "";
        error4 = 0;
    }
}
