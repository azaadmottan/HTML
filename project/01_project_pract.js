let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function(){scrollFunction()};

function scrollFunction()
{
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) 
    {
            mybutton.style.display = "block";
    }
    else 
    {
            mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document(page)
function topFunction() 
{
    document.documentElement.scrollTop = 0; 
}