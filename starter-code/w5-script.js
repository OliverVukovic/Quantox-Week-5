/*const searchName = document.getElementById('search-name');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});*/
const apiURL = "https://api.github.com/"


var form = document.getElementById("form-search");

form.addEventListener('submit', function(e){
    e.preventDefault();

    var search = getElementById("search-name").value;

    fetch("https://api.github.com/users/" + search)
})







/*
onlineClick / promeni ikonicu
              promeni head backgroundColor
              promeni search-field backgroundColor
              promeni box backgroundColor
              promeni numbers backgroundColor
              promeni text color


function changeColor() {

    document.getElementById('c1').style.backgroundcolor="#141D2F";
    document.getElementById('c2').style.backgroundcolor="#1e2a47";
    document.getElementById('c3').style.color="#ffffff";
    document.getElementById('search-name').style.color="#ffffff";
    document.body.style.backgroundColor = "#141D2F";
}*/