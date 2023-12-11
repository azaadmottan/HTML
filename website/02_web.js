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



const showSideMenu = () => {
    document.getElementById("side-menu").classList.add("show-side-menu");
    document.getElementById("canvas").classList.add("bodyBackground");
}

const hideSideMenu = () => {
    document.getElementById("side-menu").classList.remove("show-side-menu");
    document.getElementById("canvas").classList.remove("bodyBackground");
    // document.getElementById("close-menu").classList.toggle("close-show");

}



// const search = () => {

//     const search = document.getElementById("search").value.toUpperCase();
//     const searchResult = document.getElementById("search-result");

//     let taskSearch = document.querySelectorAll("h2, span");
//     // console.log(taskSearch);

//     for (let i = 0; i < taskSearch.length; i++)
//     {
//         let task = taskSearch[i].textContent.toUpperCase();
//         if (task)
//         {
//             // if (task.indexOf(search) > -1)
//             if (task.includes(search) > -1)
//             {
//                 searchResult.classList.add("search-result");
//                 searchResult.style.display = "block";
//                 searchResult.innerHTML += `<li>${task}<li>`;
//                 // console.log(task);
//             }
//             else
//             {
//                 // searchResult.innerHTML -= `<li>${task}<li>`;
//                 // searchResult.classList.remove("search-result");
//                 // searchResult.style.display = "none";
//                 // searchResult.innerHTML = ``;
//                 // console.log(task);

//             }
//         }
//     }

// }

const searchInput = document.getElementById('search');
const searchResults = document.getElementById('search-result');
// console.log(searchResults)
const data = [
    // Your website content data, such as titles and descriptions
    {
        title: 'Introduction to C',
        description: '<a href="#intro">C is a general-purpose programming language that was developed in the early 1970s by Dennis Ritchie at Bell Laboratories.</a>'
    },
    {
        title: 'Structure of a C program', description: '<a href="#struct">The structure of a C program consists of various components that work together to define and execute the program.</a>'
    },
    {
        title: 'Data types in C',
        description: '<a href="#datatypes">int, char, float, double, long etc.</a>'
    },
    {
        title: 'Variables and Constants',

        description: '<a href="#variableconstant">Variables are named memory locations that can hold values of a specific data type. <br>Constants are fixed values that cannot be changed during program execution.</a>'
    },
    {
        title: 'Operators in C',
        description: '<a href="#operator">Arithmetic Operators.<br>Relational Operators<br>Logical Operators etc.</a>'
    },
    {
        title: 'Control Flow',
        description: '<a href="#control">if, if-else, switch statement etc.</a>'
    },
    {
        title: 'Arrays in C',
        description: '<a href="#array">arrays, access and modify array element, etc.</a>'
    },
    {
        title: 'Function in C',
        description: '<a href="#funct">function declare, define, call etc.</a>'
    },
    {
        title: 'Recursion in C',
        description: '<a href="#recursion">recursive-function declare, define, base-condition, call-itself etc.</a>'
    },
    {
        title: 'Pointer in C',
        description: '<a href="#pointer">pointer declare, initialization, pointer to pointer etc.</a>'
    },
    {
        title: 'String in C',
        description: '<a href="#string">string declare, initialization, input/output, manipulation etc.</a>'
    },
    {
        title: 'Structure in C',
        description: '<a href="#struct">structure declare, initialization etc.</a>'
    },
    {
        title: 'File Input/Output in C',
        description: '<a href="#file">file handling, open, close, read, write etc.</a>'
    },
    {
        title: 'Preprocessor Directives in C',
        description: '<a href="#preprocessor">#include, #define, preprocessor directives</a>'
    },
    {
        title: 'Some Advanced Topics in C',
        description: '<a href="#advance">bitwise operator, dynamic memory allocation</a>'
    },
    // Add more content items as needed
];

function performSearch() {
    // if (searchInput.value == null)
    // {
    //     searchResults.classList.add("search-box");

    // }
    const searchText = searchInput.value.toLowerCase();
    const filteredData = data.filter(item => {
        return item.title.toLowerCase().includes(searchText) || item.description.toLowerCase().includes(searchText);
    });

    displaySearchResults(filteredData);
}

function displaySearchResults(results) {

    searchResults.innerHTML = '';
    if (results.length === 0) {
        searchResults.classList.add("search-result");
        searchResults.innerHTML = '<li>No result found.</li>';
    }
    else {
        searchResults.classList.add("search-result");
        results.forEach(item => {
            if (searchInput.value == 0) {
                // console.log("hello")
                // searchResults.innerHTML = '<li>No result found.</li>';
                searchResults.classList.toggle("search-result");
            }
            else {
                const li = document.createElement('li');
                li.innerHTML = `<h3>${item.title}</h3><br><p>${item.description}</p><br>`;
                searchResults.appendChild(li);
            }
        });
    }
}

// searchInput.addEventListener('input', performSearch);

