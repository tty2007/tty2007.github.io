function mark_calc(mark){
    if(mark>=700) return "超级学霸!! (❁´◡`❁)";
    if(mark>=650) return "不错o! (｡･ω･｡)";
    if(mark>=600) return "还可以的 ヽ(✿ﾟ▽ﾟ)ノ";
    if(mark>=500) return "要加油";
    if(mark<500) return "你可长点心吧你";
}

var SubList = ["中文","数学","英语","历史","政治","物理","化学"]

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
   resized();
    $("#gen").remove();
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
    $("#c2").append(`<div id="chart3_L"></div>`)
    chart3();
    $("#c2").append(`<div id="chart4_L"></div>`)
    chart4();
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
          [`中文(${chi1}分)`, chi1],
          [`数学(${mth1}分)`, mth1],
          [`英语(${eng1}分)`, eng1],
          [`历史(${his1}分)`, his1],
          [`政治(${pol1}分)`, pol1],
          [`物理(${phy1}分)`, phy1],
          [`化学(${che1}分)`, che1]
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
          [`中文(${chi2}分)`, chi2],
          [`数学(${mth2}分)`, mth2],
          [`英语(${eng2}分)`, eng2],
          [`历史(${his2}分)`, his2],
          [`政治(${pol2}分)`, pol2],
          [`物理(${phy2}分)`, phy2],
          [`化学(${che2}分)`, che2]
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

function chart3(){
   var chart = Highcharts.chart('chart3_L', {
      chart: {
         polar: true,
         type: 'area'
      },
      title: {
         text: '分数对比蜘蛛图',
         x: -80
      },
      pane: {
         size: '80%'
      },
      xAxis: {
         categories: ['中文', '数学', '英语', '历史', '政治',
                   '物理', '化学'],
         tickmarkPlacement: 'on',
         lineWidth: 0
      },
      yAxis: {
         gridLineInterpolation: 'polygon',
         lineWidth: 0,
         min: 0
      },
      tooltip: {
         shared: true,
         pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}分</b><br/>'
      },
      legend: {
         align: 'right',
         verticalAlign: 'top',
         y: 70,
         layout: 'vertical'
      },
      series: [{
         name: `${people1.name}`,
         data: [chi1, mth1, eng1, his1, pol1, phy1, che1],
         pointPlacement: 'on'
      }, {
         name: `${people2.name}`,
         data: [chi2, mth2, eng2, his2, pol2, phy2, che2],
         pointPlacement: 'on'
      }]
   });
}

function chart4(){
   var chart = Highcharts.chart('chart4_L',{
      chart: {
         type: 'column'
      },
      title: {
         text: '分数对比柱状图'
      },
      xAxis: {
         categories: ["中文","数学","英语","历史","政治","物理","化学"],
         crosshair: true
      },
      yAxis: {
         min: 0,
         title: {
            text: '成绩 (%)'
         }
      },
      tooltip: {
         // head + 每个 point + footer 拼接成完整的 table
         headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
         pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
         '<td style="padding:0"><b>{point.y:.0f} %</b></td></tr>',
         footerFormat: '</table>',
         shared: true,
         useHTML: true
      },
      plotOptions: {
         column: {
            borderWidth: 0
         }
      },
      series: [{
         name: people1.name,
         data: [chi1/chi*100, mth1/mth*100, eng1/eng*100, his1/his*100, pol1/pol*100, phy1/phy*100, che1/che*100]
      }, {
         name: people2.name,
         data: [chi2/chi*100, mth2/mth*100, eng2/eng*100, his2/his*100, pol2/pol*100, phy2/phy*100, che2/che*100]
      }]
   });
}