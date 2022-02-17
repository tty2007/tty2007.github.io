function mark_calc(mark){
    if(mark>=700) return "超级学霸!! (❁´◡`❁)";
    if(mark>=650) return "不错o! (｡･ω･｡)";
    if(mark>=600) return "还可以的 ヽ(✿ﾟ▽ﾟ)ノ";
    if(mark>=500) return "要加油";
    if(mark<500) return "你可长点心吧你";
}

var SubList = ["语文","数学","英语","历史","政治","物理","化学"]

function subject_compare(marks=[0,0,0,0,0,0,0]){
    try{
        let max=0;
        let min=Infinity;
        let subMax=0;
        let subMin=0;
        for(let i=0;i<marks.length;i++){
            if(marks[i]>max){
                max=marks[i];
                subMax=i;
            }
            if(marks[i]<min){
                min=marks[i];
                subMin=i;
            }
        }
        return [[max,min],[SubList[subMax],SubList[subMin]]];
        // return 逻辑: [[最高分,最低分],[最高分科目,最低分科目]]
    }
    catch(err){
        console.log(err);
    }
}

function getDifference(f,s){
    if(f-s > 0) return f-s;
    return s-f;
}

function gen(){
    chart1();
    $("#c2").append(`<center>${people1.name}: ${mark_calc(people1.mark)}</center><hr>`);
    chart2();
    $("#c2").append(`<center>${people2.name}: ${mark_calc(people2.mark)}</center><hr>`);
    $("#c2").append(`<center>${people1.name}和${people2.name}的分数差异: ${getDifference(people1.mark,people2.mark)}
    <br>
    ${people1.name}的最高与最低分: ${subject_compare(marks=[chi1,mth1,eng1,his1,pol1,phy1,che1])[0]}, 相差: ${getDifference(subject_compare(marks=[chi1,mth1,eng1,his1,pol1,phy1,che1])[0][0],subject_compare(marks=[chi1,mth1,eng1,his1,pol1,phy1,che1])[0][1])}
    <br>
    ${people2.name}的最高与最低分: ${subject_compare(marks=[chi2,mth2,eng2,his2,pol2,phy2,che2])[0]}, 相差: ${getDifference(subject_compare(marks=[chi2,mth2,eng2,his2,pol2,phy2,che2])[0][0],subject_compare(marks=[chi2,mth2,eng2,his2,pol2,phy2,che2])[0][1])}
    <br>
    ${people1.name}与${people2.name}的最高分相差: ${getDifference(subject_compare(marks=[chi1,mth1,eng1,his1,pol1,phy1,che1])[0][0],subject_compare(marks=[chi2,mth2,eng2,his2,pol2,phy2,che2])[0][0])}
    <br>
    ${people1.name}与${people2.name}的最低分相差: ${getDifference(subject_compare(marks=[chi1,mth1,eng1,his1,pol1,phy1,che1])[0][1],subject_compare(marks=[chi2,mth2,eng2,his2,pol2,phy2,che2])[0][1])}
    </center><hr>`);
}

function chart1(){
    $("#c2").append(`
    <div id="container1"></div>
    `);
    var chart = {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
    };
    var title = {
       text: `${people1.name}的分数占比图 (总分: ${people1.mark})`
    };      
    var tooltip = {
       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    };
    var plotOptions = {
       pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
             enabled: true,
             format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
             style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
             }
          }
       }
    };
    var series= [{
       type: 'pie',
       name: `总分: ${people1.mark}, 分数占比`,
       data: [
          ['语文', chi1],
          ['数学', mth1],
          ['英语', eng1],
          ['历史', his1],
          ['政治', pol1],
          ['物理', phy1],
          ['化学', che1]
       ]
    }];     
       
    var json = {};   
    json.chart = chart; 
    json.title = title;     
    json.tooltip = tooltip;  
    json.series = series;
    json.plotOptions = plotOptions;
    $('#container1').highcharts(json);
}


function chart2(){
    $("#c2").append(`
    <div id="container2"></div>
    `);
    var chart = {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
    };
    var title = {
       text: `${people2.name}的分数占比图 (总分: ${people2.mark})`
    };      
    var tooltip = {
       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    };
    var plotOptions = {
       pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
             enabled: true,
             format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
             style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
             }
          }
       }
    };
    var series= [{
       type: 'pie',
       name: `总分: ${people2.mark}, 分数占比`,
       data: [
          ['语文', chi2],
          ['数学', mth2],
          ['英语', eng2],
          ['历史', his2],
          ['政治', pol2],
          ['物理', phy2],
          ['化学', che2]
       ]
    }];     
       
    var json = {};   
    json.chart = chart; 
    json.title = title;     
    json.tooltip = tooltip;  
    json.series = series;
    json.plotOptions = plotOptions;
    $('#container2').highcharts(json);
}