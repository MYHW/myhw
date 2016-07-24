jQuery.extend({
	backTop:function(obj){
        $(window).on("scroll",function(){
			var tops=$(window).scrollTop();
			if(tops>=300){
				$(obj).fadeIn(600)
			}else{
				$(obj).fadeOut(600);
			}
			$(obj).click(function(){
				var obj={st:tops}//创建一个普通对象

				$(obj).animate({st:0},{
					//将创建的普通对想打包成jquery对象，然后加动画
					speed:1000,step:function(){
						$(window).scrollTop(obj.st)
					}
				})
			})
		})
	}
})