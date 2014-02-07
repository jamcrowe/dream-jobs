$(document).ready(function(){
	$("#stage").prepend("<div id='ladder'></div><div id='logo'><img src='assets/imgs/cloud-logob.png'></div>");
	
	var cloud1loop = function(){	
		$("#cloud1").animate({
			"left":-160,	
		}, 50000, "linear", function(){
			$(this).css({
				"left":$("#stage").width()
			});
			cloud1loop();
		});
	}
	cloud1loop();

	var cloud2loop = function(){	
		$("#cloud2").animate({
			"left":-151,	
		}, 50000, "linear", function(){
			$(this).css({
				"left":$("#stage").width()
			});
			cloud2loop();
		});
	}
	cloud2loop();


	var cloud3loop = function(){	
		$("#cloud3").animate({
			"left":-91,	
		}, 100000, "linear", function(){
			$(this).css({
				"left":$("#stage").width()
			});
			cloud3loop();
		});
	}
	cloud3loop();

	var cloud4loop = function(){	
		$("#cloud4").animate({
			"left":-212,	
		}, 40000, "linear", function(){
			$(this).css({
				"left":$("#stage").width()
			});
			cloud4loop();
		});
	}
	cloud4loop();




	/*	$("#cloud2").animate({
		"left":-$(this).width(),	
	}, 100000, "linear");
	$("#cloud3").animate({
		"left":-$(this).width(),	
	}, 100000, "linear");
	$("#cloud4").animate({
		"left":-$(this).width(),	
	}, 100000, "linear");*/
		
	$("#logo img").delay(250).animate({
		"width": 650,
		"height": 343,
		"left": -10,
		"top": -10
	}, 350, function(){
		$(this).animate({
			"width": 617,
		"height": 326,
		"left": 0,
		"top": 0
		}, 150, function(){
			$("#stage").append("<div id='plane'></div>");
			$("#plane").toggle("slide", {direction:"right"}, 1200, function(){
				$("#ladder").animate({"top":0}, 500);
			});
		});
	});
});
