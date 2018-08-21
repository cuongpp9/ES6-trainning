//Arrow function click button
const button = document.querySelector('#pushy');
button.addEventListener('click', () => {
    console.log(this); // Window!
    this.classList.toggle('on');
});

//normal function click button
const button = document.querySelector('#pushy');
button.addEventListener('click', function() {
    console.log(this);
    this.classList.toggle('on');
});