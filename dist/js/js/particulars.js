"use strict";function page(){var t=location.href.match(/class=([^&]+)/g)[0].slice(6);switch(new Header,new ScrollBtn,t){case"newest":new Nav(4);break;case"INTERNATIONAL":new Nav(2);break;case"LADY":new Nav(4);break;case"GENTLEMAN":new Nav(5);break;default:new Nav(0)}new Footer}function Particulars(){this.class=location.href.match(/class=([^&]+)/g)[0].slice(6),this.id=location.href.match(/id=([^(&|#)]+)/g)[0].slice(3),this.containers=$(".intro_r>ul"),this.imgContainers=$(".intro_l"),this.title=$("title"),this.init()}new page,$.extend(Particulars.prototype,{init:function(){var i=this;$.ajax({type:"get",url:"../json/list.json",dataType:"json",success:function(t){i.load(t)}})},load:function(t){for(var i=0;i<t[this.class].length;i++)if(t[this.class][i].id==this.id){for(var s='<li class="list_title">'+t[this.class][i].title+'</li>\n\t\t\t\t\t\t<li class="price"><i>批发价格：</i><span><b>￥</b>'+t[this.class][i].price+'</span>VIP 8.8折拿货<a href="##">开通VIP</a></li>\n\t\t\t\t\t\t<li class="num"><i>已 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;批：</i><span>'+t[this.class][i].Sold+'</span>件 <a href="##">(已有<span>'+t[this.class][i].evaluate+'</span>人评价)</a></li>\n\t\t\t\t\t\t<li class="site "><i>发 &nbsp;货 &nbsp;地：</i><span>'+t[this.class][i].address+' </span></li>\n\t\t\t\t\t\t<li class="carriage"><i>物流运费&nbsp;：</i><span>'+t[this.class][i].carriage+" 元 (买家承担)</span></li>",n='<li class="size"><i>尺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</i>',a=0;a<t[this.class][i].size.length;a++)n+="<span>"+t[this.class][i].size[a]+"</span>";for(var e='</li><li class="color"><i>颜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色：</i>',o=0;o<t[this.class][i].color.length;o++)e+="<span>"+t[this.class][i].color[o]+"</span>";for(var l='<div class="intro_l_maxImg">\n\t\t\t\t\t\t\t\t<a href="#"><img class="maximg" src="'+t[this.class][i].img[0]+'"></a>\n\t\t\t\t\t\t\<span id="maxLens"></span></div>\n\t\t\t\t\t\t\t<div class="intro_l_minImg">',c=0;c<t[this.class][i].img.length;c++)l+='<img class="minimg" src="'+t[this.class][i].img[c]+'">';this.title.text(t[this.class][i].title),this.ele=$("<div></div>").append(l+"</div>"),this.imgContainers.append(this.ele),this.containers.append(s+n+e+'</li><li class="shoppingNum">\n\t\t\t\t\t\t\t<i>批发数量：</i>\n\t\t\t\t\t\t\t<a id="minus">-</a>\n\t\t\t\t\t\t\t<input type="text" value="1" id="num">\n\t\t\t\t\t\t\t<a id="add">+</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="shopping">\n\t\t\t\t\t\t\t<a class="a1" href="##">加入订货单</a>\n\t\t\t\t\t\t\t<a class="a2" href="##">立即订购</a>\n\t\t\t\t\t\t</li>'),new ValChange,new Maxlens,new goShopping(this.class,this.id)}}}),new Particulars;var option={minImgs:$(".intro_l"),maxImg:$(".intro_l"),init:function(){this.minImgsEvent()},minImgsEvent:function(){this.minImgs.on("mouseover",".minimg",$.proxy(this.minImgsOver,this))},minImgsOver:function(t){$(t.target).addClass("minImgSign").siblings().removeClass("minImgSign"),this.maxImg.find(".maximg").attr("src",$(t.target).attr("src"))}};function ValChange(){this.add=$("#add"),this.minus=$("#minus"),this.num=$("#num"),this.size=$(".size"),this.color=$(".color"),this.init()}function goShopping(t,i){this.category=t,this.id=i,this.goShoppingBtn=$(".shopping>.a1"),this.num=$("#num"),this.size=$(".size"),this.color=$(".color"),this.init()}option.init(),$.extend(ValChange.prototype,{init:function(){this.numAdd(),this.numMinus(),this.selectSize(),this.selectColor()},selectColor:function(){this.color.on("click","span",$.proxy(this.selectColorEvent,this))},selectColorEvent:function(t){$(t.target).addClass("pitchOn").siblings().removeClass("pitchOn")},selectSize:function(){this.size.on("click","span",$.proxy(this.selectSizeEvent,this))},selectSizeEvent:function(t){$(t.target).addClass("pitchOn").siblings().removeClass("pitchOn")},numAdd:function(){this.add.on("mousedown",$.proxy(this.addEvent,this))},addEvent:function(t){t.preventDefault(),this.num.val(Number(this.num.val())+1)},numMinus:function(){this.minus.on("mousedown",$.proxy(this.minusEvent,this))},minusEvent:function(t){t.preventDefault(),0==Number(this.num.val())?this.num.val(0):this.num.val(Number(this.num.val())-1)}}),$.extend(goShopping.prototype,{init:function(){this.goShoppingBtn.on("click",$.proxy(this.joinShoping,this))},joinShoping:function(){0==this.size.find(".pitchOn").length?alert("请选择尺码"):0==this.color.find(".pitchOn").length?alert("请选择颜色"):0==this.num.val()?alert("数量不能为0"):this.setlocalStorage()},setlocalStorage:function(){var t=[{category:this.category,id:this.id,size:this.size.find(".pitchOn").text(),color:this.color.find(".pitchOn").text(),num:this.num.val()}];if(localStorage.getItem("commodity")){var i=JSON.parse(localStorage.getItem("commodity")),s=!0,n=!1,a=void 0;try{for(var e,o=i[Symbol.iterator]();!(s=(e=o.next()).done);s=!0){var l=e.value;console.log(i),l.category==this.category&&l.id==this.id&&l.size==this.size.find(".pitchOn").text()&&l.color==this.color.find(".pitchOn").text()&&(l.num=Number(l.num)+Number(this.num.val()),console.log(1),localStorage.setItem("commodity",JSON.stringify(i)),this.status=!0,location.href="shopping.html")}}catch(t){n=!0,a=t}finally{try{!s&&o.return&&o.return()}finally{if(n)throw a}}this.status||(i.push(t[0]),this.status=!1,localStorage.setItem("commodity",JSON.stringify(i)),location.href="shopping.html")}else localStorage.setItem("commodity",JSON.stringify(t)),location.href="shopping.html"}});
function Maxlens(){
	this.container=$(".intro_l_maxImg");
	this.maxLens=$("#maxLens");
	this.init();
};
$.extend(Maxlens.prototype,{
	init(){
		this.maximg();
	},
	maximg(){
		this.container.on("mouseover",$.proxy(this.showMaxlens,this));
		this.container.on("mouseout",$.proxy(this.hiddenMaxlens,this))
	},
	showMaxlens(){
		this.maxLens.css("display","block");
		this.container.on("mousemove",$.proxy(this.mousemoveMaxlens,this))
	},
	mousemoveMaxlens(event){
		var l=event.pageX-this.container.offset().left-this.maxLens.width()/2;
		var t=event.pageY-this.container.offset().top-this.maxLens.height()/2;
		l=l<0?0:(l>this.container.width()-this.maxLens.width()?this.container.width()-this.maxLens.width():l);
		t=t<0?0:(t>this.container.height()-this.maxLens.height()?this.container.height()-this.maxLens.height():t);
		this.maxLens.css({
			top:t,
			left:l
		});
	},
	hiddenMaxlens(){
		this.maxLens.css("display","none");
	}
});
