//جزء علامة المنيو لقائمة التلفون
let navLinks = document.querySelector(".nav-links");
let menu = document.querySelector(".menu-btn");

menu.addEventListener("click" , function() {
navLinks.classList.toggle("active");

});
//جزء الsay hello و امر يكتب اهلا بيك
let hi = document.querySelector(".hello");
let welcoming = document.querySelector(".welcoming");
hi.addEventListener("click" , function() {
 let welcome =prompt("Hello please Write Down Your Name ");
    if(welcome !=null && welcome !="") {
            welcoming.textContent = `Hello And Welcome ${welcome} to my Portofollio !`;
    }
    else {
        welcoming.textContent = "Hello And Welcome to my Portofollio !";
    }


});
//اضافة او ازالة مهارة
let input = document.querySelector (".skill-input");
let add = document.querySelector (".Add-Skill");
let list = document.querySelector(".skills-list");
add.addEventListener("click" , function() {
    if (input.value == "") {
        alert("Please Fill the Input Field !");
    }
    else {
    let LI = document.createElement("li");
    LI.textContent = input.value;
    let Delete = document.createElement("button");
    Delete.classList.add("Delete");
    Delete.textContent = "🗑️";
    Delete.addEventListener("click" , function() {
        LI.remove();
       
    });
       LI.appendChild(Delete);
      list.appendChild(LI);
          input.value = "";

    }
    
});
//جزء الفورم 
let Form = document.querySelector(".contact-form");
let Name = document.querySelector(".Name");
let email = document.querySelector(".Email");
let message = document.querySelector(".Message");
let done = document.querySelector(".submitted");

Form.addEventListener("submit" , function(e) {
    e.preventDefault();
    if (Name.value =="" || email.value =="" || message.value=="" ) {
        alert("Please Fill Out The Blank Fields !");
    }
    else {
        done.textContent = "Form Submitted Successfully ! ";
        Name.value = "";
        email.value = "";
        message.value = "";
    }
});

let url = document.querySelector(".view-url");
url.textContent = window.location.href;

let page = document.querySelector(".view-page");
page.textContent =  "Width: " + window.innerWidth + "px" + "Height: " + window.innerHeight + "px";

window.addEventListener("resize" , function() {
page.textContent =  "Width: " + window.innerWidth + "px" + "Height: " + window.innerHeight + "px";

});

let back = document.querySelector(".Back");
back.addEventListener("click" , function() {
window.scrollTo({top: 0 , behavior: "smooth"})
});

//الدارك موود و اللايت موود
let theme = document.querySelector(".theme-btn");
document.body.classList.toggle("light-mode");
theme.addEventListener("click" , function() {

if (document.body.classList.toggle("light-mode")) {
    theme.textContent = "Dark Mode 🌙";
}
else {
    theme.textContent = "Light Mode ☀️";
}
});





