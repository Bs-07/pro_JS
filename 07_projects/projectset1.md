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

## project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  // console.log(height, weight);

  if (height == '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'please enter valid height';
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'please enter valid weight';
  } else {
    const bmi = ((weight / (height * height)) * 10000).toFixed(2);
    console.log(bmi);
    result.innerHTML = `<span> Yore BMI is ${bmi}</span>`;
    // const res = document.createElement('div');
    // res.textContent = `Your BMI is ${bmi}`;
    // result.replaceWith(res);
    
    if (bmi < 18.6) {
      const res = document.createElement('span');
      res.innerHTML = `<p> Under Weight</p>`;
      result.appendChild(res);
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      const res = document.createElement('span');
      res.innerHTML = `<p> Norma; Weight</p>`;
      result.appendChild(res);
    } else {
      const res = document.createElement('span');
      res.innerHTML = `<p> Over Weight</p>`;
      result.appendChild(res);
    }
  }
});

```

## project 3

```javascript
setInterval(()=>{
  const date = new Date();
  const clock = document.querySelector('#clock');
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```