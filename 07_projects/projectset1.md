# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // console.log(e.target)
    // if (e.target.id == 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id == 'white') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id == 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id == 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }
    const bgColor = e.target.id;
    switch (bgColor) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});


```
