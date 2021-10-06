

/* kreirati funkciju za fetch podataka sa gitHub-a */

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]


function fetchApi(username) {
  
  fetch('https://api.github.com/users/${username}', {headers:{'Authorization':'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'}})
  .then((response) => {
    


    if(response.status === 404) {
      document.getElementById("result-none").innerHTML = "No results"
      document.getElementById("result-none").style.visibility = "visible"
      fetchApi("octocat")
    } else {
      if(username !== "octocat") {
        document.getElementById("result-none").style.visibility = "hidden"
      }
      return response.json()
    }
  })
  .then((data) => {
      document.getElementById("profil-img").src = `${data.avatar_url}`;
      document.getElementById("username").innerHTML = `@${data.login}`;
      document.getElementById("repos").innerHTML = `${data.public_repos}`;
      document.getElementById("followers").innerHTML = `${data.followers}`;
      document.getElementById("following").innerHTML = `${data.following}`;

      if(data.username) {
        document.getElementById("name").innerHTML = '${data.name}'
      } else {
        document.getElementById("name").innerHTML = '${data.login}'
      }

      if(data.bio) {
        document.getElementById("bio-text").innerHTML = `${data.profil-text}`
        document.getElementById("bio-text").classList.remove("transparent-bio")
      } else {
        document.getElementById("bio-text").innerHTML = `This profile has no bio`
        document.getElementById("bio-text").classList.add("transparent-bio")
      }

      if(data.twitter_username) {
        document.getElementById("twitter").innerHTML = `<a target="_blank" 
         href="https://mobile.twitter.com/${data.twitter_username}">${data.twitter_username}
         </a>`
        document.getElementById("twitter").classList.remove("transparent-info")
      } else {
        document.getElementById("twitter").innerHTML = `Not available`
        document.getElementById("twitter").classList.add("transparent-info")
        document.getElementById("img-twitter").classList.add("transparent-image")
      }

      if(data.location) {
        document.getElementById("location").innerHTML = '${data.locaton}'
        document.getElementById("location").classList.remove("transparent-info")
      } else {
        document.getElementById("location").innerHTML = `Not available`
        document.getElementById("location").classList.add("transparent-info")
        document.getElementById("img-location").classList.add("transparent-image")
      }

      if(data.blog){
        document.getElementById("website").innerHTML = `<a target="_blank" href="${data.blog}">${data.blog}</a>`
        document.getElementById("website").classList.remove("transparent-info")
     } else {

        document.getElementById("website").innerHTML = `Not available`
        document.getElementById("website").classList.add("transparent-info")
        document.getElementById("img-website").classList.add("transparent-image")
     }

     if(data.company) {
      company = data.company.slice(1)
      document.getElementById("company").innerHTML = `<a target="_blznk" href="https://github.com/${company}">${data.company}</a>` 
      document.getElementById("company").classList.remove("transparent-info")
      
   } else {
      document.getElementById("company").innerHTML = `Not available`
      document.getElementById("company").classList.add("transparent-info")
      document.getElementById("img-company").classList.add("transparent-image")
   }

     let date = new Date(data.created_at)
      document.getElementById("date").innerHTML = 
      `Joined ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  })
}



/*
   Default loading JS
*/
fetchApi("octocat")

/*
   nakon submitovanja username-a
*/
let form = document.getElementById("search-form")
form.addEventListener('submit', function(e){
   
   e.preventDefault();

   let searchName = document.getElementById("search-name").value;
   if (searchName === "") {

      if (document.getElementById("result-none").style.visibility === "visible") 
         document.getElementById("result-none").style.visibility = "hidden"
      return
   } else if (searchName.startsWith("@")) {

      document.getElementById("result-none").innerHTML = "Remove \"@\""
      document.getElementById("result-none").style.visibility = "visible"
   } else {

      fetchApi(searchName)
   }
   
})















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


function changeButton() {
    var x = document.getElementById("dark");
    var y = document.getElementById("light");
    if (x.style.display === "none") {
      y.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
  }
  
  function returnButton() {
    var y = document.getElementById("light");
     var x = document.getElementById("dark");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
      x.style.display = "block";
    }
  }




/*
let darkInput = document.getElementById("dark").value;
    if (!darkInput) {
        document.getElementById
    }

-----------------
function changeColor() {
    var element = document.body;
    element.clssList.toggle("dark-screen")
}/*

------------------   u css / .dark-screen { background-color:black; color-white;}

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