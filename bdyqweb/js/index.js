var phone=$(".phone");
var wx=$(".wx");
var jt=$(".jt");
phone.hover(function(){
    wx.css("display","block");
    jt.css("display","block");
},function(){
	wx.css("display","none");
	jt.css("display","none");
})
$(function(){
	$(".section").eq(0).attr("id","active");
	$('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		'navigation': true,
		'navigationTooltips': ['登录百度舆情', '领先：数据收集与处理', '全面：舆情分析逻辑与架构', '专业：专业数据可视化'],
		afterLoad:function(dowebok,i){
			$(".section").removeAttr("id");
			$(".section").eq(i-1).attr("id","active");	
			
		},
	});

	$(".two-btm-jt").click(function(){
		$.fn.fullpage.moveSectionDown();
	})
})