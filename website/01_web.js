document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
});

let btn = document.getElementById("topBtn");

const topFunction = () => {
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 60) {
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}

let error1 = 1, error2 = 1, error3 = 1, error4 = 1;

let submit = document.getElementById("btn");
let userName = document.getElementById("Name");
let email = document.getElementById("email");
let phNumber = document.getElementById("phNumber");
let query = document.getElementById("query");

submit.addEventListener("click", () => {

    if (userName.value.length == "") {
        document.getElementById("name_msg").innerHTML = "Please Enter Name";
        document.getElementById("name_msg").style.color = "red";
    }

    if (email.value.length == "") {
        document.getElementById("email_msg").innerHTML = "Please Enter Email Id";
        document.getElementById("email_msg").style.color = "red";
    }

    if (phNumber.value.length == "") {
        document.getElementById("phone_msg").innerHTML = "Please Enter Phone Number";
        document.getElementById("phone_msg").style.color = "red";
    }

    if (query.value.length == "") {
        document.getElementById("query_msg").innerHTML = "Please Enter Query";
        document.getElementById("query_msg").style.color = "red";
    }


    if (error1 == 0 && error2 == 0 && error3 == 0 && error4 == 0) {
        alert("Query Inserted Successfully !");
        location.reload(true);
    }

});


const hideError = () => {

    if (userName.value.length != "") {
        document.getElementById("name_msg").innerHTML = "";
        error1 = 0;
    }

    if (email.value.length != "") {
        document.getElementById("email_msg").innerHTML = "";
        error2 = 0;
    }

    if (phNumber.value.length != "") {
        if (phNumber.value.length < 10 || phNumber.value.length > 10) {
            document.getElementById("phone_msg").innerHTML = "Please Enter 10 digit";
            document.getElementById("phone_msg").style.color = "red";
        }
        else {
            document.getElementById("phone_msg").innerHTML = "";
            error3 = 0;
        }
    }

    if (query.value.length != "") {
        document.getElementById("query_msg").innerHTML = "";
        error4 = 0;
    }
}


const showNav = () => {

    document.getElementById("cross").classList.toggle("cross-toggle");
    document.getElementById("burger").classList.toggle("burger-toggle");
    document.getElementById("header").classList.toggle("show-nav");
    document.getElementById("nav").classList.toggle("nav");
    document.getElementById("navigation").classList.toggle("show-nav-li");
}


// typing text effect using js

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Programmer", "Software Developer", "Designer", "Freelancer", "Gamer"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 800;                           // Delay between current and next text

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {

        if (!cursorSpan.classList.contains("typing"))
        {
            cursorSpan.classList.add("typing");
        }   
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {

        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing"))
            cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);

        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
