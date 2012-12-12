
var shape ="circle" , tindex=0,level=0;
function getShape()
{
 return shape;
}

function getTindex()
{
 return tindex;
}

function getlevel()
{
 return level;
}

$(document).ready(function () {

    var dleft = $('.lavalamp li.active').offset().left - $('.lavalamp').offset().left; 
    var dwidth = $('.lavalamp li.active').width() + "px";
      $('.floatr').css({
        "left": dleft+"px",
        "width": dwidth
    });
   $('li').hover(function(){

       
        var left = 0;
  	if($(this).length !=0 && $(this).parents('.lavalamp').length !=0)
			left =$(this).offset().left - ($(this).parents('.lavalamp').offset().left + 15);
        var width = $(this).width() + "px";
        var sictranslate = "translate("+left+"px, 0px)";
		
        
        $(this).parent('ul').next('div.floatr').css({
            "width": width,
            "-webkit-transform": sictranslate,
			"-ms-transform": sictranslate,
            "-moz-transform": sictranslate
        });

    },

    function(){

        var left ;
		if($(this).siblings('li.active').length !=0 && $(this).parents('.lavalamp').length !=0)
		left =$(this).siblings('li.active').offset().left - ($(this).parents('.lavalamp').offset().left + 15);
        var width = $(this).siblings('li.active').width() + "px";

        var sictranslate = "translate("+left+"px, 0px)";

        $(this).parent('ul').next('div.floatr').css({
            "width": width,
            "-webkit-transform": sictranslate,
			"-ms-transform": sictranslate,
            "-moz-transform": sictranslate
            
        });
		
		
    }).click(function(){
	   $(this).siblings('li').removeClass('active');
		$(this).addClass('active');
		
		  switch ($(this).attr("name"))
			{
				  case "Shape":
				  shape=$(this).text();
				  reload1();
				  break;
				  case "Theme":
				  tindex=$(this).index();
				  //console.log(tindex);
				  reload2();
				  break;
				  case "Level":
				  level=$(this).index();
				  configureLevel();
				  break;
		    }
		//console.log("----"+tindex);
		return false;
    });

});

function  configureLevel()
{
  if(getlevel()==0)
   {
   $("#viz2").show();
   $("#viz3").show();
   }
   else
   {
    $("#viz2").hide();
	$("#viz3").hide();
   }
  
}