window.addEventListener("load", function(){

	var nodes = document.querySelectorAll("[data-container]");

	for(var i = 0; i < nodes.length; i++) {

		var children = nodes[i].children;

		for(var n = 0; n < children.length; n++) {

			children[n].setAttribute("data-index", n);

			nodes[i].addEventListener("mousemove", function(e) 
			{
				var clientRectangle = this.getBoundingClientRect();
				var containerCenterX = clientRectangle.left + (this.offsetWidth / 2);
				var containerCenterY = clientRectangle.top + (this.offsetHeight / 2);

				var elms = this.children;
			
				for(var c=0; c < elms.length; c++) {

					var offsetX = e.clientX - containerCenterX;
					var offsetY = e.clientY - containerCenterY;
					var index = parseInt(elms[c].getAttribute("data-index"));

					elms[c].style.left = (clientRectangle.left) + ((offsetX * index) / 5) + "px";
					elms[c].style.top = (clientRectangle.top) +  ((offsetY * index) / 5) + "px";
				}
			});
		}
	}
});
