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
                    alert("没有找到该学生的成绩");
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
