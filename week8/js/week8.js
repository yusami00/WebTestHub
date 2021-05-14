var imgs = document.getElementsByClassName("imgs");
var hasBig = false;
 $(document).ready(function(){
 	$(".line").eq(3).hide();
 	$(".line").eq(4).hide();
 	var imgindex =  3;
    $(".imgs").click(function(event) {
          	var i=$(this).clone();
          	if(!hasBig)
          	{
          		$("div.taskone").after(i);
          		i.addClass("style1");
          		i.hide();
          		i.fadeIn(3000);
          		hasBig=true;
          	} 
        	else
        	{
        		$("img").remove(".style1");	
        		hasBig = false;
        	}
    });

    $(".selects").click(function(event){
    	var i = $(this).index();
    	if(i==0)
    	{
    		$(this).css("background-color","grey");
    		$(this).siblings().css("background-color","white");
    		$(".message img").attr("src","img/lover.png");
    	}
    	else if(i==1)
   		{
    		$(this).css("background-color","grey");
    		$(this).siblings().css("background-color","white");
    		$(".message img").attr("src","img/chariot.png");
    	}
   		else
   		{
    		$(this).css("background-color","grey");
    		$(this).siblings().css("background-color","white");
    		$(".message img").attr("src","img/fool.png");
    	}
    });

    $(".addbtn").click(function(event){
    	for(var i=0;i<5;i++){
    		if($(".line").eq(i).is(":hidden"))
    		{
    			imgindex = i;
    			break;
    		}
    	}
    	$(".line").eq(imgindex).show();
    		imgindex++;
    		imgindex=imgindex%5;
    		console.log(imgindex);
    });
    $(".del").click(function(event){
    	$(this).parent().hide();
    	imgindex=$(this).parents().index();
    });
});