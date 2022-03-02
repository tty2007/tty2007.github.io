var style = `style="width: 130px;height: 30px;border-radius: 5px;outline: none;border: none;background: linear-gradient(45deg,#939fc9, #9dfdef, #88abfd);background-size: 200%;background-position: center;color: #000000;transition: .6s;"`;
var hover_style = `onmouseenter="this.style='width: 130px;height: 30px;border-radius: 5px;outline: none;border: none;background: linear-gradient(45deg,#939fc9, #9dfdef, #88abfd);background-size: 200%;background-position: center;color: #000000;transition: .6s;cursor: pointer;background-position: 100% 0;'" onmouseleave="this.style='width: 130px;height: 30px;border-radius: 5px;outline: none;border: none;background: linear-gradient(45deg,#939fc9, #9dfdef, #88abfd);background-size: 200%;background-position: center;color: #000000;transition: .6s;'"`;

if(localStorage.getItem("login")){
    try{$("#login").html(`<button onclick='top.location="login/?dt=${location.href.split('?')[0]}"' id='login-btn' ${style} ${hover_style}>注销 ${localStorage.getItem('username')}</button>`);}
    catch{$("#login").html(`<button onclick='top.location="login/?dt=${location.href}"' id='login-btn' ${style} ${hover_style}>注销 ${localStorage.getItem('username')}</button>`);}
}
else{
    try{$("#login").html(`<button onclick='top.location="login/?dt=${location.href.split('?')[0]}"' id='login-btn' ${style} ${hover_style}>登录</button>`);}
    catch{$("#login").html(`<button onclick='top.location="login/?dt=${location.href}"' id='login-btn' ${style} ${hover_style}>登录</button>`);}
}