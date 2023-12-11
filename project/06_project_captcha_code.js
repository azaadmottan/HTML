const captchaBox = document.querySelector(".captcha_box input");
const captchaInput = document.querySelector(".captcha_input input");
const refresh = document.querySelector(".refresh");
const submitButton = document.querySelector(".button");
const message = document.querySelector(".msg");

let captcha_code = null;

const generateCaptcha = () => {
    let randomString = Math.random().toString(36).substring(2,7);
    let randomStringArray = randomString.split("");
    let updateString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char))
    
    captcha_code = updateString.join("      ");
    captchaBox.value = captcha_code;
    // console.log(randomStringArray, updateString);
}

const refreshButton = () => {
    generateCaptcha(); 
    captchaInput.value = "";
    captchaValidate();
    message.classList.remove("active");
}

const captchaValidate = () => {
    submitButton.classList.toggle("disabled", !captchaInput.value)
    // console.log("Validate");
}

const submitValidate = () => {
    message.classList.add("active");

    let validCaptcha = captchaInput.value;
    captcha_code = captcha_code.split("").filter((char) => char !== " ").join("");

    // console.log(captcha_code);
    // console.log(validCaptcha);
    
    if (captcha_code === validCaptcha)
    {
        message.innerText = "Entered Captcha Code is Correct";
        message.style.color = "rgb(13, 212, 6)";
        // console.log("Valid Captcha Code");
    }
    else 
    {
        message.innerText = "Entered Captcha Code is not Correct !";
        message.style.color = "red";
        // console.log("Invalid Captcha Code");
    }

}

refresh.addEventListener("click", refreshButton);
captchaInput.addEventListener("keyup", captchaValidate);
submitButton.addEventListener("click", submitValidate);