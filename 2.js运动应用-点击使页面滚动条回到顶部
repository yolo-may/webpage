***主要是有俩种滑动方式：timer和手动滑动；
问题：timer启用后不清除的话，会和相反的手动滑动产生效果抵消，和相同方向的手动滑动，重叠效果。
解决：1.当滚动条到达顶部的时候清除timer，这里需要用到timer启用次数n=规定time/30。
      2.使用布尔值，规定手动滚动时布尔值为true，并且如果为true时清除timer；启用timer时布尔值为false。
      
      
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="author" content="智能社 - zhinengshe.com" />
<meta name="copyright" content="智能社 - zhinengshe.com" />
<title>智能社 - www.zhinengshe.com</title>
<style>
*{ margin:0; padding:0; list-style:none; font-family: "微软雅黑","张海山锐线体简"}
body{height:4000px;}
#div1{width:100px;height:100px;background:red; position:fixed;right:0;bottom:0; display:none;}
</style>
<script>
window.onload=funciton(){
 var odiv=document.getElementById('div1')
 var timer=null;
 odiv.onclick=function(){
 	move(0,1000)
 }
 
 function move(target,time){
 	var n=0;
	var start=document.element.scrollTop||document.body.scrollTop;
	var dis=target-start;
	var count=Math.round(time/30);
	
	cleartInterval(timer);
	timer=setInterval(function(){
		a=false
		var cur=start+dis*n/count;
		document.element.scrollTop=cur;
		document.body.scrollTop=cur;
		
		if(n==count){
			cleartInterval(timer);
		}
	},30)
}
}

window.onscroll=function(){
 var scrollTop=document.element.scrollTop||document.body.scrollTop;.
 if(scrollTop>=300){
	 odiv.style.display="block"
 }else{
 	odiv.style.display="none"
 }
	
var a=true;
if(a){
	cleartInterval(timer);
}
 a=true;
}
</script>
</head>

<body>

<div id="div1">回到顶部</div>

</body>
</html>
