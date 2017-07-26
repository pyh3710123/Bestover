/*common js*/



/*增加class*/
/*obj---->对象
   cls--->class名字*/
    function addCls(obj,cls){
      //如果浏览器支持此API，则直接调用
    /*  if (obj.classList) {
        obj.classList.add(cls);
        return;
      }*/
      //常规写法
      var arr=obj.className.split(" ");  
         if (arr.indexOf(cls) == -1){
              arr.push(cls)                      
          }
        /*兼容低版本IE写法*/
    /*    for (var i = 0; i < arr.length; i++) {
               if (arr[i]==cls) {
                     return;
               }
               arr.push(cls)
            } */   
     obj.className=arr.join(" ");
        
}
/*删除class*/
/*obj---->对象
   cls--->class名字*/
    function detCls(obj,cls){
      //如果浏览器支持此API，则直接调用
     /* if (obj.classList) {
        obj.classList.remove(cls);
        return;
      }*/
         //常规写法
      var arr=obj.className.split(" ");  
         if (arr.indexOf(cls) != -1){
          arr.splice(arr.indexOf(cls),1);                    
          } 
        /*兼容低版本IE写法*/
      /*  for (var i = 0; i < arr.length; i++) {
              if (arr[i]==cls) {
                arr.splice(i,1)
              }
            }  */  
     obj.className=arr.join(" ");      
}
/*判断是否有这个class*/
function hasCls(obj,cls){
  var arr=obj.className.split(" ");
  if (arr.indexOf(cls)!=-1) {
    return true;
  }else{
    return false;
  }
}

/*新闻导航函数封装*/
function newAdd(nav,body,addclass1,addclass2){
   var oUl=document.getElementById(nav);
   var aLi=oUl.children;
   var oDivfather=document.getElementById(body);
   var box=oDivfather.children;
   for (var i = 0; i< aLi.length; i++){
        aLi[i].index=i;
        aLi[i].onclick=function(){
            for(var j = 0; j < aLi.length; j++){         
                 detcls(box[j],addclass1);
                 detcls(aLi[j],addclass2);
            }                  
                addcls(box[this.index],addclass1);
                addcls(this,addclass2);

        }  
   }
}
/*新闻导航封装加强版*/
function newAdd(aTag){
  var aLi=aTag.children[0].children;
  var aDiv=aTag.children[1].children;
  for (var i = 0; i < aLi.length; i++) {
    aLi[i].index=i;
    aLi[i].onclick=function(){
      for (var j = 0; j < aLi.length; j++) {
        detcls(aLi[j],"active1");
        detcls(aDiv[j],"active");
      }
       addcls(this,"active1");
       addcls(aDiv[this.index],"active");

    }
  }
  }
  /*封装获取box*/
  function getclass(cls){
    var aTag=document.getElementsByClassName(cls);
        for (var i = 0; i < aTag.length; i++) {
             newAdd(aTag[i]);
   }
  }
  /*获取classStyle*/
    function getStyle(obj,attr){
    if (obj.currentStyle) {
      return obj.currentStyle[attr];
    }else{
      return getComputedStyle(obj,null)[attr];
    }
   
  }
/*不支持getElementsByClassName的获取方式*/
/*原生写法*/
var ele=document.getElementById("Box");
function getcls(ele,cls){
  var obj=ele||document;
  var arr=obj.getElementsByTagName("*");
  var leng=arr.length;  
  var num=[];
  for (var i = 0; i < leng; i++){
       var newArr=arr[i].className.split(" ");
      for (var j= 0; j < newArr.length; j++) {
        if (newArr[j]==cls) {
          num.push(arr[i]);
        }
      }             
  } 
   return num; 
  } 
var arr2=getcls("","box");
console.log(arr2)
  /*字面量框架写法*/
var test=document.getElementById("Box");
var node={ele:test,cls:"box"};
function getcls(obj){
  var ela=obj.ele||document;
  var arr=ela.getElementsByTagName("*");
  var leng=arr.length;  
  var num=[];
  for (var i = 0; i < leng; i++){
       var newArr=arr[i].className.split(" ");

      for (var j= 0; j < newArr.length; j++) {
        if (newArr[j]==obj.cls) {
          num.push(arr[i]);
        }
      }             
  } 
   return num; 
  } 
var arr2=getcls(node);
console.log(arr2)
/*增加事件监听兼容写法*/
function addHander(ele,type,hanlder){
    if (ele.addEventListener) {
       ele.addEventListener(type,hanlder,false);
    }else{
       ele.attachEvent("on"+type,hanlder,false);
    }
}
/*删除事件监听兼容写法*/
function addHander(ele,type,hanlder){
    if (ele.addEventListener) {
       ele.removeEventListener(type,hanlder,false);
    }else{
       ele.detachEvent("on"+type,hanlder,false);
    }
}
/*改变颜色封装*/
function changeColor(ele,bg){
    ele.onmouseover=function(){
      color=this.style.background;
      this.style.background=bg;
    }
    ele.onmouseout=function(){      
      this.style.background=color;
    }
}
/*获取元素非行间样式*/
function getStyle(obj,attr){
  if (obj.currentStyle) {
      return obj.currentStyle[attr]
  }else{
    return getComputedStyle(obj,null)[attr]
  }
}
/*ev取消默认事件兼容*/
/*function(ev){
  var eve=ev||window.event
  if (eve.preventDefault()) {
      eve.preventDefault();
  }else{
      eve.returnValue=true;
  }
}*/
/*取消冒泡兼容版*/
/*   obj.onclick=function(e){
      var ev=e||window.event;
        if (ev.stopPropagation) {
          e.stopPropagation();
        }else{
          e.cancelBubble=true;  
        }
          
   }*/
/*事件委托*/

/*提取URL链接的类名*/
function getUrlPara(){
  var str=location.search;
  var re=new RegExp("(\\?|&)"+key+"=([^&])");
     return str.match(re)[2];
}
/*调用时间封装函数*/
  function getTime(){
  var time=new Date();
    var month=time.getMonth()+1;
       month=month<10?"0"+month:month;
    var year=time.getFullYear();
         year=year<10?"0"+year:year;
    var day=time.getDate();
        day=day<10?"0"+day:day;
    var hours=time.getHours();
      hours=hours>10?hours:"0"+hours;
    var min=time.getMinutes();
      min=min>10?min:"0"+min;
    var seconde=time.getSeconds();
      seconde=seconde>10?seconde:"0"+seconde;
    var HMS=hours+":"+min+":"+seconde;
    var YMD=year+"-"+month+"-"+day;
      return {
        ymd:YMD,
        hms:HMS
      }         
}
function getReact(element){
  var rect=element.getBoundingClientRect();
  return {
    top:rect.top,
    left:rect.left,
    right:rect.right,
    bottom:rect.bottom,
    width:rect.width
  }
 }
 /*获取cookie*/
 function getCookie(key){
  var re=new RegExp("(^|; )"+para+"=([^;]+")
  return document.cookie.match(re)[2];
 }