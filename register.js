let content = document.getElementById("content");
let content1 = document.getElementById("content1");
let submit = document.getElementById("submit");
let submit1 = document.getElementById("submit1");
let forgetpassword = document.getElementById("forgetpassword");
let scroll = document.getElementById("preloader");
// let firstname = document.getElementById("firstname");
// let password = document.getElementById("password");


submit1.onclick = function(){
    content1.style.display = "none"
    forgetpassword.style.display = "block"
    submit1.classList.add("signup");
    submit.classList.remove("signup"); 
} 
submit.onclick = function(){
    content1.style.display = "block"
    forgetpassword.style.display = "none"
    submit.classList.add("signup");
    submit1.classList.remove("signup");
}


window.addEventListener("load", function(){
    scroll.style.display = "none"
})

// if(firstname == "john" && password == "55019"){
//     alert("logged in")
// }
// else(){
//     alert("wrong username or password")
// }