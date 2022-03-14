var gtoken
var dt = location.href;
var dataj;
try{
    gtoken = location.href.split('?token=')[1].split('&')[0]
}
catch{console.log('no token');}

try{
    if(localStorage.getItem('login')=='true' && !location.href.includes('token')){
        window.location.href = './index.html?token='+localStorage.getItem('token')+'&login=t';
    }

    else if(location.href.includes('token')){
        $('#idc').hide();
        $('#pwdc').hide();
        $('#login').hide();
        gtoken = location.href.split('?token=')[1].split('&')[0]
        if(gtoken==localStorage.getItem('token')){
            if(location.href.split('?')[1].split('&login=')[1] == 't'){
                console.log('login success');
                $('#c').append(`<font style="color:white;">已登录: ${localStorage.getItem('username')}</font><br><button onclick="logout();">登出</button>`);
            }
        }
        else{
            try{
                location.href='./index.html'+location.href.split('?dt=')[1];
            }
            catch{
                location.href='./index.html';
            }
        }
    }

    else if(gtoken==undefined){
        const id =  $('#id');
        const pwd = $('#pwd');
        var login = function(){
            if(id.val() == ''){
                message("请输入账号");
                return false;
            }
            if(pwd.val() == ''){
                message("请输入密码");
                return false;
            }

            // get json string from pass.json
            $.getJSON('pass.json', function(json){
                for(let i=0;i<json.length;i++){
                    if(id.val() == json[i].username && pwd.val() == json[i].password){
                        // generate token
                        var token = '';
                        for(let j=0;j<32;j++){
                            token += Math.floor(Math.random()*10);
                        }
                        if(location.href.split('?dt=')[1] != undefined) dt=location.href.split('?dt=')[1];
                        localStorage.setItem('token', token);
                        top.location = `redirect.html?action=browserLogin&id=${id.val()}&pwd=${pwd.val()}&directTo=${dt}&token=${token}`;
                        return true;
                    }
                }
                message('账号或密码错误');
            });
        }
    }
    else{
        if(localStorage.getItem('token') == gtoken || localStorage.getItem('login')=='true'){
            $('#id').hide();
            $('#pwd').hide();
            $('#login').hide();
            if(gtoken==localStorage.getItem('token')){
                if(location.href.split('?')[1].split('&login=')[1] == 't'){
                    console.log('login success');
                    $('#c').append(`<font style="color:white;">已登录: ${localStorage.getItem('username')}</font><br><button onclick="logout();">登出</button>`);
                }
            }
        }
        else{
            console.error('token error');
            location.href = 'index.html';
        }
    }

    function logout(){
        localStorage.removeItem('token');
        top.location = `redirect.html?action=browserLogout&directTo=${location.href}`;
    }
}
catch{
    location.href = 'index.html';
}