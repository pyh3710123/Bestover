/*轮播图公用JS*/
function FlashStop(box){
	this.oBox=document.getElementById(box);
	this.oUb=this.oBox.getElementsByTagName('ul')[0];
	this.oUl=this.oBox.getElementsByTagName("ul")[1];
    this.oLib=this.oUb.getElementsByTagName("li");
    this.oLil=this.oUl.getElementsByTagName("li");
    this.num=0;
}
/*函数方法*/
FlashStop.prototype={
	 constructor:FlashStop,
	/*初始化*/
     inti:function(){
     	var that=this;
        var time=setInterval(function(){
             that.move();  
         },3000)
         /*初始化点击事件*/	
         this.Picclick();
         /*移入移除停止效果*/
         this.oBox.onmouseover=function(){
    	     clearInterval(time)
        }
         this.oBox.onmouseout=function(){
    	     time=setInterval(function(){
                that.move();
    	   },3000)
    }
  },
  /*自动切换函数*/
     move:function(){
     	 this.num++;
    	if (this.num==this.oLil.length) {
      	this.num=0;
      } 
     for (var i = 0; i < this.oLib.length; i++) {
          for (var j = 0; j < this.oLib.length; j++) {
     	     	detCls(this.oLib[j],"active");
     	     	detCls(this.oLil[j],"active1");
     	     }
    	  addCls(this.oLib[this.num],"active");
    	  addCls(this.oLil[this.num],"active1");
      } 
     },
     /*点击切换函数*/
     Picclick:function(){
     var that=this;
     	 for (var i = 0; i < this.oLil.length; i++) {
    	   this.oLil[i].index=i;
    	   this.oLil[i].onclick=function(){
    	  	      for (var j = 0; j <  that.oLil.length; j++) {
    	  	      	detCls( that.oLil[j],"active1");
    	  	      	detCls( that.oLib[j],"active");
    	  	      }
              addCls(this,"active1");
              addCls(that.oLib[this.index],"active");
              that.num=this.index;

    	 }
      } 
     }


}
/*TAb切换*/
function FixTab(box){
	 constructor:FixTab,
	this.oBox=document.getElementById(box);
    this.oUl=this.oBox.getElementsByTagName("ul")[0];
    this.aLi=this.oUl.getElementsByTagName("li");
    this.aDiv=this.oBox.getElementsByClassName("center");   
}
FixTab.prototype={
	inti:function(){
	   var that=this;
          for (var i = 0; i < this.aLi.length; i++) {
    	 this.aLi[i].index=i;
    	 this.aLi[i].onmouseover=function(){
              for (var j = 0; j< that.aLi.length; j++) {
              	 detCls(that.aDiv[j],"active")
              	 detCls(that.aLi[j],"active1")
              }
              addCls(that.aDiv[this.index],"active")
              addCls(this,"active1")
    	 }
    }
	}
}
/*侧面活动轮动封装*/
function SideFix(id1,id2){
	this.oBchange=document.getElementById(id1);
	this.oBox=document.getElementById(id2); 
	this.oUl=this.oBox.getElementsByTagName("ul")[0]
	this.oUwid=this.oUl.getBoundingClientRect().width/2;
	this.oBtnL=this.oBchange.getElementsByTagName("div")[0];
	console.log(this.oBtnL)
	this.oBtnR=this.oBchange.getElementsByTagName("div")[1];
	this.bol=true;
	this.num=0;
}
SideFix.prototype={
	constructor:SideFix,
	inti:function(){
		  var that=this;
	      var time=setInterval(function(){
	             that.moveLR();
	         },3000)
	     /*右点击*/
	      this.oBtnR.onclick=function(){	
	          if(that.num != 1){
	          	 that.moveLR();
	          }
		  }
	    /*左点击*/
	     this.oBtnL.onclick=function(){  
	        if(that.num != 0){
	          	 that.moveLR();
	         }  
			  			   		
	     }     /*鼠标悬停*/
		 this.oBox.onmouseenter=function(){
		     clearInterval(time)
	     }
		this.oBox.onmouseleave=function(){
		    time=setInterval(function(){
		   	      that.moveLR();
		   },3000)
	     }
	     console.log(this.oBtnL);
	    this.oBchange.onmouseenter=function(){
	   	   clearInterval(time)
	   }
	    this.oBchange.onmouseleave=function(){
	   	    time=setInterval(function(){
		   	      that.moveLR();
		   },3000)
	   }
	},
    moveLR:function(){
    	if (this.bol) {
			this.num++;
			this.num=1;
			this.bol=false;
			this.oUl.style.transform="translate("+(-this.oUwid*this.num)+"px)"
			this.oBtnR.style.background="#CFCFCF";
			this.oBtnL.style.background="";	
		}else{
			this.num=0;
			this.oUl.style.transform="translate("+(-this.oUwid*this.num)+"px)"
			this.bol=true;
			this.oBtnL.style.background="#CFCFCF";
			this.oBtnR.style.background="";
		}
    }

}
/*末尾轮播图*/
function ChangeList(element){
var oDiv=document.getElementById(element);
console.log(oDiv)
var oUol=oDiv.getElementsByTagName("ul")[0];
var aLi=oUol.children;
var oUwid=oUol.getBoundingClientRect().width/3;
var oSpan=oDiv.getElementsByTagName("div")[0];
var oArrow=oDiv.getElementsByTagName("div")[1];
var oBl=oArrow.getElementsByTagName("span")[0];
var oBr=oArrow.getElementsByTagName("span")[1];
var aSpan=oSpan.children;
var num=0;
console.log(oUol)
   oBr.onclick=function(){ 
   	     Goto();
   	     ForSpan();	
   	       
}
   oBl.onclick=function(){
   	     Back();
   	     ForSpan();
   	      console.log(num)
}
for (var i = 0; i < aSpan.length; i++) {
	  aSpan[i].index=i;
	  aSpan[i].onclick=function(){	 
	  	num=this.index;
        oUol.style.transform="translate("+(-oUwid*num)+"px)";
        for (var j = 0; j< aSpan.length; j++) {
        	detCls(aSpan[j],"active-arrow")
        }
        addCls(this,"active-arrow")
	  }

 }
 function Back(){
	if (num>0) {
		num--;
	}
	oUol.style.transform="translate("+(-oUwid*num)+"px)"
}


function Goto(){           
      if (num<aLi.length-1) { 
      		num++;
      	}       
      oUol.style.transform="translate("+(-oUwid*num)+"px)"
      console.log(num) 
}

function ForSpan(){
	  for (var i = 0; i < aSpan.length; i++) {
   	     	for (var j = 0; j < aSpan.length; j++) {
   	     		 detCls(aSpan[j],"active-arrow")
   	     	}
        		addCls(aSpan[num],"active-arrow")
       }	
}

}
/*视频区*/
var oVide=document.getElementsByClassName("video-box")[0];
var oDvide=document.getElementById("video");
var aI=oVide.getElementsByClassName("fa-video-camera");
var aFix=oDvide.getElementsByClassName("fixde");
var oCover=document.getElementById("cover");
var aclose=oDvide.getElementsByClassName("fa fa-close");
console.log(aclose)
/*点击添加遮罩和视频*/
for (var i = 0; i < aI.length; i++) {
     aI[i].index=i;
     aclose[i].index=i;
     aI[i].onclick=function(){
        addCls(aFix[this.index],"moveTop")
        addCls(oCover,"move")    
     }
     aclose[i].onclick=function(){
        detCls(aFix[this.index],"moveTop")
        detCls(oCover,"move")  
     }
}
/*侧面导航栏*/
var oSideList=document.getElementsByClassName("side-nav")[0];
var aSideList=oSideList.getElementsByTagName("li");
var aSideBox=document.getElementsByClassName("side-box");
for (var i = 0; i < aSideList.length; i++) {
	aSideList[i].index=i;
	aSideList[i].onmouseover=function(){
		for (var j = 0; j< aBoxList.length; j++) {
			 detCls(aSideBox[j],"display")
		}
          addCls(aSideBox[this.index],"display")
	}
	 aSideList[i].onmouseout=function(){
		 detCls(aSideBox[this.index],"display")
	}

}
for (var i = 0; i < aSideBox.length; i++) {
	aSideBox[i].onmouseover=function(){
		for (var j = 0; j < aBoxList.length; j++) {
			detCls(aSideBox[j],"display")
		}
		addCls(this,"display")
	}
	aSideBox[i].onmouseleave=function(){
		detCls(this,"display")
	}
}
