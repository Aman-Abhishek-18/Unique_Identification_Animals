// Function to hide an element on page load
window.onload = function() {
    document.getElementById('element2').style.display = 'none';
    console.log(element2);
};
document.addEventListener('DOMContentLoaded', function() {
const a = document.getElementById('element1');
const b = document.getElementById('element2');
const c = document.getElementById('button1');
const d = document.getElementById('button2');
const e = document.getElementById('element3');
const identificationNumber = document.getElementById('identificationNumber');

c.addEventListener('click', function() {
    const userInput = identificationNumber.value;
    if (userInput.length === 12) {
        b.style.display='block';
        a.style.display='none';
        e.style.display='none';
    } else {
        alert('Please check Unique Identification Number!');
    }
    }
);

d.addEventListener('click', function() {
    a.style.display='block';
    b.style.display='none';
    e.style.display='block';
    result.innerText='';
    }
)});



