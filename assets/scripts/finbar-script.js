$(document).ready(function(){
	$("#stage").prepend("<div id='ladder'></div><div id='logo'><img src='assets/imgs/cloud-logob.png'></div>");
	
	var cloud1loop = function(){	
		$("#cloud1").animate({
			"right":-160,	
		}, 80000, "linear", function(){
			$(this).css({
				"right":$("#stage").width()
			});
			cloud1loop();
		});
	}
	cloud1loop();

	var cloud2loop = function(){	
		$("#cloud2").animate({
			"right":-151,	
		}, 70000, "linear", function(){
			$(this).css({
				"right":$("#stage").width()
			});
			cloud2loop();
		});
	}
	cloud2loop();


	var cloud3loop = function(){	
		$("#cloud3").animate({
			"right":-91,	
		}, 90000, "linear", function(){
			$(this).css({
				"right":$("#stage").width()
			});
			cloud3loop();
		});
	}
	cloud3loop();

	var cloud4loop = function(){	
		$("#cloud4").animate({
			"right":-212,	
		}, 60000, "linear", function(){
			$(this).css({
				"right":$("#stage").width()
			});
			cloud4loop();
		});
	}
	cloud4loop();
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
				$("#ladder").animate({"top":0}, 500, function(){
					var ladderloop = function(){
						$("#ladder").animate({
							"background-position-y":$("#stage").height()-5
						},500, "linear", function(){
							$(this).css({
								"background-position-y":0
							});
						});
					}
					ladderloop();
				});
			});
		});
	});
});
