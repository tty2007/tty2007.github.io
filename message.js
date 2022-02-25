var num = 0;

function message(m='',type='tab'){
    if(type == '') return false;
    if(type=="alert"){
        alert(m);
        return m;
    }
    if(type=="tab"){
        var id = "message_"+num;
        var codea = document.createElement("div");
        codea.setAttribute("id",id);
        document.getElementById("message").appendChild(codea);
        var tag = document.createElement("div");
        tag.className = "message";
        tag.innerHTML = m;
        document.getElementById(id).appendChild(tag);
        $("#"+id).append('<br>');
        num++;
        tag.style.width = "0";
        tag.style.padding = '0px';
        tag.style.paddingLeft = '0px';
        tag.style.paddingRight = '0px';
        setTimeout(function(){
            tag.style.width = "200px";
            tag.style.padding = '5px';
            tag.style.paddingLeft = '40px';
            tag.style.paddingRight = '40px';
            setTimeout(function(){
                tag.style.width = "1px";
                tag.style.padding = '0px';
                tag.style.paddingLeft = '0px';
                tag.style.paddingRight = '0px';
                tag.style.border = 'none';
                setTimeout(function(){
                    tag.style.height="0";
                    setTimeout(function(){
                        $("#"+id).remove();
                    },600);
                },600);
            },2000);
        },100);
    }
    else{
        console.error("Unknown type:" + type);
        return false;
    }
}