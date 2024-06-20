// Function to hide an element on page load
window.onload = function() {
    document.getElementById('element2').style.display = 'none';
    console.log(element2);
};
document.addEventListener('DOMContentLoaded', function() {
var a = document.getElementById('element1');
var b = document.getElementById('element2');
var c = document.getElementById('button1');
var d = document.getElementById('button2');
var e = document.getElementById('element3');

c.addEventListener('click', function() {
    b.style.display='block';
    a.style.display='none';
    e.style.display='none'
    
    // in case you want to show dummy data, follow below steps
    // const idNum = document.getElementById('indentificationNumber').value;
    // console.log(idNum);
    // const petName = document.getElementById('petName');
    // const breedName = document.getElementById('breedName');
    // const dob = document.getElementById('dob');
    // const previousVaccination = document.getElementById('previousVaccination');
    // const diseaseHistory = document.getElementById('diseaseHistory');
    // const ownerName = document.getElementById('ownerName');
    // if(idNum=='123123123123'){
    //     petName.value="Abby";
    //     breedName.value="Cocker Spaniel";
    //     dob.value="2015-11-15";
    //     previousVaccination.value="2023-03-28";
    //     diseaseHistory.value="Eye Issue";
    //     ownerName.value="Aman Abhishek";
    // }
    // else if(idNum=='123412341234'){
    //     petName.value="Emu";
    //     breedName.value="Cocker Spaniel";
    //     dob.value="2015-11-15";
    //     previousVaccination.value="2023-03-28";
    //     diseaseHistory.value="Eye and Skin Issue";
    //     ownerName.value="Veena Singh";
    // }
    // else if(idNum=='123451234512'){
    //     petName.value="Emu";
    //     breedName.value="Cocker Spaniel";
    //     dob.value="2015-11-15";
    //     previousVaccination.value="2023-03-28";
    //     diseaseHistory.value="Eye and Skin Issue";
    //     ownerName.value="Veena Singh";
    // }
    // else if(idNum=='123456123456'){
    //     petName.value="Meeku";
    //     breedName.value="Ginger or Orange Tabby";
    //     dob.value="2019-11-02";
    //     previousVaccination.value="N/A";
    //     diseaseHistory.value="N/A";
    //     ownerName.value="Disha Dey";
    // }
    // else{
    //     petName.value="";
    //     breedName.value="";
    //     dob.value="";
    //     previousVaccination.value="";
    //     diseaseHistory.value="";
    //     ownerName.value="";
    // }
    }
);

d.addEventListener('click', function() {
    a.style.display='block';
    b.style.display='none';
    e.style.display='block';
    }
)});


