
// ----- promeni boju 

function changeColor() {   
    var element = document.body;
    var x = document.getElementById("dark");
    if (x.innerHTML === "DARK") {
      x.innerHTML = "LIGHT";
    } else {
      x.innerHTML = "DARK";
    }
    element.classList.toggle("dark-version");
 }



  
// --------------- fetch API sa GitHub-a i preuzmi podatka

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]


function fetchApi(username) {

  fetch('https://api.github.com/users/' + username, {headers:{'Authorization':'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'}})
  .then((response) => {
    

    if(response.status === 404) {
      document.getElementById("result-none").innerHTML = "No results"
      document.getElementById("result-none").style.display = "block"
      fetchApi("octocat")
    } else {
      if(username !== "octocat") {
        document.getElementById("result-none").style.display = "none"
      }
      return response.json()
    }
  })
  .then((data) => {
      document.getElementById("profil-img").src= `${data.avatar_url}`;
      document.getElementById("username").innerHTML = `@${data.login}`;
      document.getElementById("repos").innerHTML = `${data.public_repos}`;
      document.getElementById("followers").innerHTML = `${data.followers}`;
      document.getElementById("following").innerHTML = `${data.following}`;

      if(data.username) {
        document.getElementById("name").innerHTML = `${data.name}`;
      } else {
        document.getElementById("name").innerHTML = `${data.login}`;
      }

      if(data.bio) {
        document.getElementById("bio-text").innerHTML = `${data.bio}`;
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
        document.getElementById("twitter").style.color='var(--coloricon)'
        document.getElementById("twitter").classList.add("transparent-info")
        document.getElementById("img-twitter").classList.add("transparent-image")
      }

      if(data.location) {
        document.getElementById("location").innerHTML = `${data.location}`;
        document.getElementById("location").classList.remove("transparent-info")
      } else {
        document.getElementById("location").innerHTML = `Not available`
        document.getElementById("location").style.color='var(--coloricon)'
        document.getElementById("location").classList.add("transparent-info")
        document.getElementById("img-location").classList.add("transparent-image")
      }

      if(data.blog){
        document.getElementById("website").innerHTML = `<a target="_blank" href="${data.blog}">${data.blog}</a>`
        document.getElementById("website").classList.remove("transparent-info")
     } else {

        document.getElementById("website").innerHTML = `Not available`
        document.getElementById("website").style.color='var(--coloricon)'
        document.getElementById("website").classList.add("transparent-info")
        document.getElementById("img-website").classList.add("transparent-image")
     }

     if(data.company) {
      company = data.company.slice(1)
      document.getElementById("company").innerHTML = `<a target="_blznk" href="https://github.com/${company}">${data.company}</a>` 
      document.getElementById("company").classList.remove("transparent-info")
      
   } else {
      document.getElementById("company").innerHTML = `Not available`
      document.getElementById("company").style.color='var(--coloricon)'
      document.getElementById("company").classList.add("transparent-info")
      document.getElementById("img-company").classList.add("transparent-image")
   }

     let date = new Date(data.created_at)
      document.getElementById("date").innerHTML = 
      `Joined ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  })
}



   // ----- Default loading JS

fetchApi("octocat")

   // ----- nakon submitovanja username-a

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


















/*  vezbanje:
----------------------------------------------------------
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



---------------------------------------------
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
}


-------------------------------------------------------

/*const searchName = document.getElementById('search-name');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});



  

----------------------------------------------------- 

  //funkcija za podesavanje promenljivih vrednosti  (promena boje)


/*var r = document.querySelector(':root');   //root element

---------------------- function colorFunction() {              // --- funkcija za dobijanje promenjive vrednosti
                         var rStyle = getComputedStyle(r);     // --- style for root
                            alert("Value is " + rStyle.getPropertyValue('black'));    //alert
}


    r.style.setProperty('--colorbody', '#141d2f');
    r.style.setProperty('--colorbtn', 'white');
    r.style.setProperty('--colornumbers', '#141d2f');
    r.style.setProperty('--colorinput', '#1e2a47');
    r.style.setProperty('--colorbox', '#1e2a47');
    r.style.setProperty('--colorh1', 'white');
    r.style.setProperty('--colorh2', '#ffffff');
    r.style.setProperty('--coloricon', 'white');
    r.style.setProperty('--colorrepos', 'white');
    r.style.setProperty('--colorfollowers', 'white');
    r.style.setProperty('--colorfollowing', 'white');
    r.style.setProperty('--colorp1', 'white');
    r.style.setProperty('--placeholdercolor', 'white');
    r.style.setProperty('--colordate', 'white');
    r.style.setProperty('--colortext', 'white');
    r.style.setProperty('--colorimg', 'brightness(5)');
    console.log("Promenio u tamno");
}





------- opcija za dohvatanjem elemenata ----------

function returnColor() {        

    document.getElementsByTagName("h1")[0].style.color="#222731";
    document.getElementsByTagName("h1")[1].style.color="#222731";
    document.getElementById("search-field").style.backgroundColor="white";
    document.getElementById("search-name").style.backgroundColor="white";
    document.getElementById("search-name").style.color="black";
    document.getElementById("box").style.backgroundColor="#ffffff";
    document.body.style.backgroundColor="#F6F8FF";
    document.getElementById("numbers").style.backgroundColor="#F6F8FF";
    document.getElementById("bio-text").style.color="#4b6a9b";
    document.getElementById("date").style.color="#697c9a";
    document.getElementById("location").style.color="#4b6a9b";
    document.getElementById("twitter").style.color="#4b6a9b";
    document.getElementById("company").style.color="#4b6a9b";
    document.getElementById("website").style.color="#4b6a9b";
    document.getElementById("nr").style.color="#4b6a9b";
    document.getElementById("nfs").style.color="#4b6a9b";
    document.getElementById("nfg").style.color="#4b6a9b";
    document.getElementById("repos").style.color="#2b3442";
    document.getElementById("followers").style.color="#2b3442";
    document.getElementById("following").style.color="#2b3442";
    document.getElementById("dark").style.backgroundColor="#f6f8ff";
    document.getElementById("dark").style.color="#697c9a";
    document.getElementById("img-location").style.backgroundColor="#4b6a9b, brightness(93%)";
    document.getElementById("img-twitter").style.backgroundColor="#4b6a9b";
    document.getElementById("img-company").style.backgroundColor="#4b6a9b";
    document.getElementById("img-website").style.backgroundColor="#4b6a9b";
    console.log("Promenio u svetlo");
}

--------------------------------------------------

/*
  function changeIcon() {

    var a = document.getElementsByClassName("moon-icon");
    var b = document.getElementsByClassName("sun-icon");
    if (a.style.display === "none") {
      b.style.display = "block";
    } else {
      a.style.display = "none";
      b.style.display = "block";
    }
  }

  function returnIcon() {

    var b = document.getElementsByClassName("sun-icon");
     var a = document.getElementsByClassName("moon-icon");
    if (b.style.display === "none") {
      a.style.display = "block";
    } else {
      b.style.display = "none";
      a.style.display = "block";
    }
  }

*/


/*
 function returnColor() {   
    var element = document.body;
    element.classList.toggle("light-version");
    console.log("vrati boju")
}
*/

// ----- promeni dugme
/*
function changeButton() {

    var x = document.getElementById("dark");
    var y = document.getElementById("light");
    if (x.style.display === "none") {
      y.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
    console.log("promeni dugme")
  }

  function returnButton() {

    var y = document.getElementById("light");
     var x = document.getElementById("dark");
    if (y.style.display === "none") {
      x.style.display = "block";
    } else {
      y.style.display = "none";
      x.style.display = "block";
    }
    console.log("vrati dugme")
  }


------------------------------- promeni ikonu

function changeIcon() {
  const iconImg = document.getElementById("dark");

  if (iconImg.src.match("./assets/icon-moon.svg")) {
      iconImg.src = "./assets/icon-sun.svg";
  }
  else {
      iconImg.src = "./assets/icon-sun.svg";
      iconImg.src = "./assets/icon-moon.svg";
  }
  console.log("nece, majku mu!");
}        
*/

