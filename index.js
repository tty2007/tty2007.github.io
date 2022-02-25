var open = false;
function login(){
    if(localStorage.getItem("login")!=undefined) return true;
    return false;
}

const openTime = "20xx年x月xx日xx时xx分x秒"

if(open){
    if(login()){
        const btn = document.getElementById('get');
        const name = document.getElementById('name');
        const sname = document.getElementById('sname');
        const chin = document.getElementById('chin');
        const math = document.getElementById('math');
        const engl = document.getElementById('engl');
        const hist = document.getElementById('hist');
        const posi = document.getElementById('posi');
        const phis = document.getElementById('phis');
        const chim = document.getElementById('chim');

        btn.onclick = function(){
            sname.innerHTML = "--";
            chin.innerHTML = "--";
            math.innerHTML = "--";
            engl.innerHTML = "--";
            hist.innerHTML = "--";
            posi.innerHTML = "--";
            phis.innerHTML = "--";
            chim.innerHTML = "--";
            if(name.value!=""){
                    $.getJSON('data.json',function(json){
                        let data = json.marks;
                        for(let i=0;i<data.length;i++){
                            if(data[i].name==name.value){
                                sname.innerHTML = data[i].name;
                                chin.innerHTML = data[i].chinese;
                                math.innerHTML = data[i].math;
                                engl.innerHTML = data[i].english;
                                hist.innerHTML = data[i].history;
                                posi.innerHTML = data[i].politics;
                                phis.innerHTML = data[i].physics;
                                chim.innerHTML = data[i].chemistry;
                            }
                        }
                        if(sname.innerHTML=="--"){
                            message("没有找到该学生的成绩");
                        }
                    });
            }
        }
        function copyTable() {
            const table = document.getElementById('table')
            const range = document.createRange()
            // 设定range包含的节点对象 
            range.selectNode(table)
            // 窗口的selection对象，表示用户选择的文本
            const selection = window.getSelection()
            // 将已经包含的已选择的对象清除掉
            if (selection.rangeCount > 0) selection.removeAllRanges()
            // 将要复制的区域的range对象添加到selection对象中
            selection.addRange(range)
            // 执行copy命令，copy用户选择的文本
            document.execCommand('copy')
            if (selection.rangeCount > 0) selection.removeAllRanges()
        }
    }
    else{
        $('#c').remove();
        $('body').append(`<center>请先登录</center>`)
    }
    
}else{
    $('#c').remove();
    $('body').append(`<center>该功能尚未开放<br><o id="timeNow"></o></center>`)
    setInterval(function(){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var timeNow = year+"年"+month+"月"+day+"日"+hour+"时"+minute+"分"+second+"秒";
        document.getElementById("timeNow").innerHTML = `当前日期及时间: `+timeNow;
    },1000);
}
