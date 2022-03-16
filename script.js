$(".words").show();
$("button").show();
$(".open").click(function(){
    $("#dare").show();
    $(".open").text("Scroll back up!");
    $("h1").text("Not too shabby, you've found the first clue. I bet you won't find the next one."); 
});
$("#dare").mouseenter(function(){  
     $("#disrupt").show();
    $("h1").text("Too easy huh? I bet you can't answer this question smarty pants");
    $("#container").show();
    $("button").show();
});

var answers=["hackathon","hackathons","Hackathon","Hackathons"];
$("button").click(function(){
    for(var i=0;i<answers.length;i++){
        if($("input").val()===answers[i]){
            $("#explore").show();
             $("h1").text("Congratulations! You've discovered the theme of today's Hackathon. You have a headstart. Keep it to yourself for now and do some brainstorming before you are given teammates.");
            $("button").show();
             $(".btn").prepend("<img src='https://media.giphy.com/media/SHdxTH1gOOmmc4vfEE/giphy.gif'>");

        }
    }
});