var open = true;
var login = function(){
    if(localStorage.getItem('login')!=undefined) return true;
    return false;
}
if(open){
    if(login()){
        const rank = document.getElementById('rank');var total_mark_and_name = [];
        var rank_arr = [];
        // get data.json using $.getJSON
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
        }); // rank the total_mark_and_name to rank_arr

        function rank_arr_init(){
            for(let i=0;i<total_mark_and_name.length;i++){
                let mark = total_mark_and_name[i].mark;
                let name = total_mark_and_name[i].name;
                rank_arr.push({name:name,mark:mark});
            }
            rank_arr.sort(function(a,b){
                return b.mark-a.mark;
            });
        }
        function print_rank(){
            rank_arr_init();
            for(let i=0;i<rank_arr.length;i++){
                let name = rank_arr[i].name;
                let mark = rank_arr[i].mark;
                // write `<div>${i+1}.${name} ${mark}</div>` to #rank
                rank.innerHTML += `<div class="rank_s rank_is_${i+1}"><red>${i+1}.</red>${name}-<blue>${mark}分</blue><br><button class="add_to_match" onclick="addToComp(${i})">添加到对比列</button></div>`;
        }
            document.getElementById('btn').remove();
            document.getElementById('competitive').style.display = "block";
            document.getElementById('competitive').style.width = "170px";
            document.getElementById('btn_triangle_outOrIn').style.display = "none";
            if(window.innerWidth<970){
                document.getElementById('competitive').style.width = "0px";
                document.getElementById('com_div').style.display = "none";
                document.getElementById('btn_triangle_outOrIn').style.display = "block";
            }
            window.addEventListener("resize",function(){
                document.getElementById('competitive').style.width = "170px";
                document.getElementById('btn_triangle_outOrIn').style.display = "none";
                document.getElementById('com_div').style.display = "block";
                if(window.innerWidth<970){
                    document.getElementById('competitive').style.width = "0px";
                    document.getElementById('com_div').style.display = "none";
                    document.getElementById('btn_triangle_outOrIn').style.display = "block";
                }
            });
            document.getElementById('btn_triangle_outOrIn').addEventListener("click",function(){
                if(document.getElementById('competitive').style.width == "0px"){
                    document.getElementById('competitive').style.width = "170px";
                    document.getElementById('com_div').style.display = "block";
                    document.getElementById('btn_triangle_outOrIn').style.transform = "rotate(90deg)";
                    document.getElementById('btn_triangle_outOrIn').style.left = "10px";
                }
                else{
                    document.getElementById('competitive').style.width = "0px";
                    document.getElementById('com_div').style.display = "none";
                    document.getElementById('btn_triangle_outOrIn').style.transform = "rotate(-90deg)";
                    document.getElementById('btn_triangle_outOrIn').style.left = "30px";
                }
            });
        }

        var comp1, comp2;

        addToComp = function(rank){
            if(rank == null) return;
            if(comp1 == null && comp2 == null){
                comp1=rank;
                console.log(`添加${rank_arr[rank].name}:${rank_arr[rank].mark}分:第${rank+1}名到 对比: 1`);
                document.getElementById("c-1").innerHTML = `${rank_arr[rank].name} : ${rank_arr[rank].mark}分 : 第${rank+1}名`;
            }
            else if(comp2 == null){
                comp2=rank;
                console.log(`添加${rank_arr[rank].name}:${rank_arr[rank].mark}分:第${rank+1}名到 对比: 2`);
                document.getElementById("c-2").innerHTML = `${rank_arr[rank].name} : ${rank_arr[rank].mark}分 : 第${rank+1}名`;
            }
            else if(comp1!=null && comp2!=null) message("对比列已满，请先清空对比列");
        }

        clear_comp = function(){
            document.getElementById("c-1").innerHTML = "";
            document.getElementById("c-2").innerHTML = "";
            comp1 = null;
            comp2 = null;
        }

        comp_mark_two = function(){
            if(comp1==null || comp2==null) return;
            top.location.href = "compare.html?first="+comp1+"&second="+comp2;
        }
    }
    else{
        $('#btn').hide();
        $('#text').append('请先登录');
    }
}

else{
    $('#btn').hide();
    $('#text').append('排行榜暂未开放<br><o id="timeNow"></o>');
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