function resized(){
    var width = window.innerWidth;
    if(width<660){
        $(".line").css("display","none");
        $("#c1").css("position", "static");
        $("#c2").css("position", "static");
        $("#c1").css("transform", "translate(0,0)");
        $("#c1").css("width", "100%");
        $("#c2").css("transform", "translate(0,0)");
        $("#c2").css("width", "100%");
    }
}