console.log("started");
if(localStorage.getItem("login")){
    $("#login").html(`<button onclick='top.location="login?dt=${location.href}"' id='login-btn'>注销 ${localStorage.getItem('username')}</button>`);
}
else{
    $("#login").html(`<button onclick='top.location="login?dt=${location.href}"' id='login-btn'>登录</button>`);
}