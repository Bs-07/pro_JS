const title = document.getElementById('heading');

title.innerHTML
// 'DOM Learning <span style="display: none;">NEW TAG</span>'

title.innerText
// 'DOM Learning'

title.textContent
// 'DOM Learning NEW TAG'

// through querySelector
/*
    it uses the css selectors
*/

document.querySelector(".as");
document.querySelector("#bs");
document.querySelector("h1");
document.querySelector("input");
document.querySelector('input[type="email"]');
document.querySelector('p:first-child');
document.querySelector('ul>li:first-child');

// for multiple selection
/*
    it return the nodeList 
*/
document.querySelectorAll('h1'); // select all h1 tags

// HTMLcollection
/*
    return HTMLcollection have to convert into array to access
*/
const list_item =  document.getElementsByClassName('list');
// it convert into ARRAY nodeList and HTMLcollection both
Array.from(list_item);
 