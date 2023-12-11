function passFunction()
{
    var x = document.getElementById("pass");
    var y = document.getElementById("hide-1");
    var z = document.getElementById("hide-2");

    if(x.type === 'password')
    {
        x.type = "text";
        y.style.display = "none";
        z.style.display = "block"
    }
    else
    {
        x.type = "password";
        y.style.display = "block";
        z.style.display = "none"
    }
}