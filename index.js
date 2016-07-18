var bindShowClickHandle = {
	contentBoxClickHandle : function(event){						//点击处理程序
		var event = event || window.event;							//获取事件对象
		var target = event.target || event.srcElement;				//获取触发点击的事件元素
		var navIndex = null;										//通过navIndex 获得显示的块
		var navTarget = this.findParentNode(target);
		if (!navTarget) {
			return;
		}
		
		for(var i = 0; i < this.navsArr.length; i++){
			if (this.navsArr[i] == navTarget) {
				navIndex = i;
			}
		}
		this.showAndNoneHandle(navIndex);
	},
	showAndNoneHandle : function(navIndex){//控制显示和隐藏
		var contentArr = document.getElementsByClassName('content');
		for(var i = 0; i < contentArr.length; i++){
			contentArr[i].style.display = 'none';
		}
		contentArr[navIndex].style.display = 'block';
	},
	findParentNode : function(nowElement){
		while(nowElement){
			if (nowElement.className == 'nav-') {             //class="nav-"
				return nowElement;
			}
			nowElement = nowElement.parentNode;
		}
	},
	init : function(){//初始化
		this.navsArr = document.getElementsByClassName('nav-');

		var navBox = document.getElementById('navBox');
		navBox.addEventListener('click', (this.contentBoxClickHandle).bind(this), false);
	}
};

window.onload = function(){
	bindShowClickHandle.init();
}