

var r = document.querySelector(':root');   //root element

/*function colorFunction() {                 //funkcija za dobijanje promenjive vrednosti

    var rStyle = getComputedStyle(r);      //style for root

    alert("Value is " + rStyle.getPropertyValue('black'));    //alert
}*/

function changeColor() {           //funkcija za podesavanje promenljiviv vrednosti

    r.style.setProperty('--colorbody', '#141d2f');
    r.style.setProperty('--colorbtn', 'white');
    r.style.setProperty('--colornumbers', '#141d2f');
    r.style.setProperty('--colorinput', '#1e2a47');
    r.style.setProperty('--colorbox', '#1e2a47');
    r.style.setProperty('--colorh1', 'white');
    r.style.setProperty('--colorh2', 'white');
    r.style.setProperty('--coloricon', 'white');
    r.style.setProperty('--colorrepos', 'white');
    r.style.setProperty('--colorfollowers', 'white');
    r.style.setProperty('--colorfollowing', 'white');
    r.style.setProperty('--colorp1', 'white');
    r.style.setProperty('--placeholdercolor', 'white');
    r.style.setProperty('--colorimg', 'brightness(5)');
}

/*
function changeColor() {
    var x = document.getElementById("dark");
    var y = document.getElementById("light");
    if (x.style.display === "none") {
      y.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
  }
  
  function returnColor() {
    var y = document.getElementById("light");
     var x = document.getElementById("dark");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
      x.style.display = "block";
    }
  }

*/


/*
let darkInput = document.getElementById("dark").value;
    if (!darkInput) {
        document.getElementById
    }



function returnColor() {
    return;
}



/*
const apiURL = "https://api.github.com/"


var form = document.getElementById("form-search");

form.addEventListener('submit', function(e){
    e.preventDefault();

    var search = getElementById("search-name").value;

    fetch("https://api.github.com/users/octocat")
})



--------------

const getData = (username) => {
    fetch('https://api.github.com/users/' + username)
        .then(response => response.json())
        .then(data => {
            if (data.hasOwnProperty("message")) {
                document.getElementById("warning").style.display = "block";
            }

            if (!data.hasOwnProperty("message")) {
                document.getElementById("warning").style.display = "none";
----------------






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




/*const searchName = document.getElementById('search-name');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});*/