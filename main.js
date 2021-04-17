function addUser(){
    user_email=document.getElementById("user_email").value;
    localStorage.setItem("user_email",user_email);
    window.location="https://bhandariarnav2020.github.io/chatsiteroom";
}