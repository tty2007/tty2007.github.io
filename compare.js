try{
    var people1, people2;
    var dat;
    var url = location.href;
    var first = url.split('?')[1].split('&')[0].split('=')[1];
    var second = url.split('?')[1].split('&')[1].split('=')[1];
    var total_mark_and_name = [];
    var rank_arr = [];

    var chi1, chi2;
    var mth1, mth2;
    var eng1, eng2;
    var his1, his2;
    var pol1, pol2;
    var phy1, phy2;
    var che1, che2;
   

    $('#none').hide();
    $.getJSON('data.json',function(json){
        let data = json.marks;
        for(let i=0;i<data.length;i++){
            let mark = 0;
            name = data[i].name;
            mark += data[i].chinese;
            mark += data[i].math;
            mark += data[i].english;
            mark += data[i].history;
            mark += data[i].politics;
            mark += data[i].physics;
            mark += data[i].chemistry;
            total_mark_and_name.push({name:name,mark:mark});
        }
    });
    
}catch(err){
    $('#compare').hide();
    $('#none').show();
    $('#none').append(`Because: ${err} <br>请确保您是从正规途径访问本页面<br><a href="rank.html">排行榜页面(正规途径)</a>`);
}

function rank_arr_init(){
    try{
    for(let i=0;i<total_mark_and_name.length;i++){
        let mark = total_mark_and_name[i].mark;
        let name = total_mark_and_name[i].name;
        rank_arr.push({name:name,mark:mark});
    }
    rank_arr.sort(function(a,b){
        return b.mark-a.mark;
    });
    people1 = rank_arr[first];
    people2 = rank_arr[second];
    $.getJSON('data.json',function(json){
        let data = json.marks;
        for(let i=0;i<data.length;i++){
            if(data[i].name == people1.name){
                chi1 = data[i].chinese;
                mth1 = data[i].math;
                eng1 = data[i].english;
                his1 = data[i].history;
                pol1 = data[i].politics;
                phy1 = data[i].physics;
                che1 = data[i].chemistry;
            }
            if(data[i].name == people2.name){
                chi2 = data[i].chinese;
                mth2 = data[i].math;
                eng2 = data[i].english;
                his2 = data[i].history;
                pol2 = data[i].politics;
                phy2 = data[i].physics;
                che2 = data[i].chemistry;
            }
        }
        chi = json.full.chinese;
        mth = json.full.math;
        eng = json.full.english;
        his = json.full.history;
        pol = json.full.politics;
        phy = json.full.physics;
        che = json.full.chemistry;
    });

    setTimeout(function(){
        $('#c1c').append(`
        <h1>被对比人1</h1>
        <div id="p1Name">姓名: ${people1.name}</div>
        <div id="p1Mark">总分: ${people1.mark}</div>
        <div id="p1Chi">中文: ${chi1}</div>
        <div id="p1Mth">数学: ${mth1}</div>
        <div id="p1Eng">英语: ${eng1}</div>
        <div id="p1His">历史: ${his1}</div>
        <div id="p1Pol">政治: ${pol1}</div>
        <div id="p1Phy">物理: ${phy1}</div>
        <div id="p1Chi">化学: ${che1}</div>
        
        <h1>被对比人2</h1>
        <div id="p2Name">姓名: ${people2.name}</div>
        <div id="p2Mark">总分: ${people2.mark}</div>
        <div id="p2Chi">中文: ${chi2}</div>
        <div id="p2Mth">数学: ${mth2}</div>
        <div id="p2Eng">英语: ${eng2}</div>
        <div id="p2His">历史: ${his2}</div>
        <div id="p2Pol">政治: ${pol2}</div>
        <div id="p2Phy">物理: ${phy2}</div>
        <div id="p2Chi">化学: ${che2}</div>
        <hr>
        `);

        $("#c2").append(`
            <button id="gen" onclick="gen()">生成对比报告</button>
        `);
        $('#check').remove();
    },100)
    
}catch(err){
    $('#compare').hide();
    $('#none').show();
    $('#none').append(`Because: ${err} <br>错误! 请确保您是从正规途径访问本页面<br><a href="rank.html">排行榜页面(正规途径)</a>`);
}
}