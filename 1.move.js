例子： 360导航框/下拉框淡入淡出/下端隐藏说明滑出/右下角悬浮窗-俩个隐藏内容接连显现

//封装格式
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
};

//封装move
function move(obj,json,optional){
   optional=optional||{};// 没传就是一个空json  传了就是你传进来的json
   optional.time=optional.time||300;//用户不传就默认300
   optional.fn=optional.fn||null;用户不传就默认没有函数
   optional.type=optional.type||'ease-out'
	
	var start={};//用来存一堆的初始值  也就是传进来json的key
	var dis={};
	var n=0;
	var count=Math.round(optional.time/30);
  ////给初始值填内容  循环传进来的json 取内容
	for(key in json){
		start[key]=parseFloat(getStyle(obj,key));
		dis[key]=json[key]-start[key];
	}
  //得到的初始值  运动距离是多个		
	
	clearInterval(obj.timer)
	obj.timer=setInterval(function(){
		n++;
		for(key in json){
			//var cur=start[key]+dis[key]*n/count;
			switch(optional.type){
				case 'linear':
          var a=n/count;
          var cur=start[key]+dis[key]*a;   //匀速
				  break;
				case 'ease-in':
          var a=n/count;
          var cur=start[key]+dis[key]*a*a*a;		//a 是越来越大  a*a*a是越来越大  变化的幅度是越来越大  所以是加速
          break;
				case 'ease-out':
				  var a=1-n/count;
				  var cur=start[key]+dis[key]*(1-a*a*a); 	//1到0  a的值是越来越小   a*a*a是越来越小  1-a*a*a   是越来越大   但是变化的过程是通过a*a*a来看的  变化的幅度越来越小  所以是减速运动
				  break;
				case 'ease-in-out':
          if(n/count<=0.5){
            var a=n/count*1.5;
            var cur=start[key]+dis[key]*a*a*a;
          }else{
            move(obj,json,{time:optional.time/2,fn:optional.fn})	
          }
          break;
			}
			
      //赋值
			if(key=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha:(opacity:'+cur*100+')';
			}else{
				obj.style[key]=cur+'px';
			}
		}
		
		if(n==count){
			clearInterval(obj.timer);
			optional.fn&&optional.fn();
		}	
		
	},30)
	
	
};
