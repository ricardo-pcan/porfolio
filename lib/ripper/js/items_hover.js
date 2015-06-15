$.extend(ripper, {
	hoverCircle: function(container_opts, )
	{
		var container_init_rules = {
			width: "100%",
			height: "100%",
			boder-radius: "50%",
			overflow: "hidden",
			position: "relative",
			cursor: "default",
			box-shadow: "inset 0 0 0 16px rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.1)",
			transition: "all 0.4s ease-in-out;",
			-webkit-transition: "all 0.4s ease-in-out",
		  -moz-transition: "all 0.4s ease-in-out",
		  -o-transition: "all 0.4s ease-in-out",
		  -ms-transition: "all 0.4s ease-in-out"
		};
		var container_hover_rules = {
			box-shadow: "inset 0 0 0 1px rgba(255,255,255,0.1), 0 1px 2px rgba(0,0,0,0.1)",
		  transform: "scale(1)",
		  opacity: "1",
		  -webkit-transform: "scale(1)",
		  -moz-transform: "scale(1)",
		  -o-transform: "scale(1)"
		};
		var info_init_rules = {
			position: "absolute",
		  background: "rgba(63,147,147,0.8)",
		  width: "inherit",
		  height: "inherit",
		  border-radius: "50%",
		  overflow: "hidden",
		  opacity: "0",
		  transition: "all 0.4s ease-in-out",
		  transform: "scale(0)",
		  -webkit-transition: "all 0.4s ease-in-out",
		  -moz-transition: "all 0.4s ease-in-out",
		  -o-transition: "all 0.4s ease-in-out",
		  -ms-transition: "all 0.4s ease-in-out",
		  transition: "all 0.4s ease-in-out",
		  -webkit-transform: "scale(0)",
		  -moz-transform: "scale(0)",
		  -o-transform: "scale(0)",
		  -ms-transform: "scale(0)",
		  -webkit-backface-visibility: "hidden",
		};
		var info_hover_rules = {
			transform: "scale(1)",
		  opacity: "1",
		  -webkit-transform: "scale(1)",
		  -moz-transform: "scale(1)",
		  -o-transform: "scale(1)",
		  -ms-transform: "scale(1)"
		};
		var info_h3_rules {
			color: "#fff",
		  text-transform: "uppercase",
		  letter-spacing: "2px",
		  font-size: "22px",
		  margin: "0 30px",
		  padding: "45px 0 0 0",
		  height: "140px",
		  font-family: "'Open Sans', Arial, sans-serif",
		  text-shadow: "0 0 1px #fff, 0 1px 2px rgba(0,0,0,0.3)",
		};
		var info_p_rules{
			color: "#fff",
		  padding: "10px 5px",
		  font-style: "italic",
		  margin: "0 30px",
		  font-size: "12px",
		  border-top: "1px solid rgba(255,255,255,0.5)",
		  opacity: "0",
		  transition: "all 1s ease-in-out 0.4s",
		  -webkit-transition: "all 1s ease-in-out 0.4s",
		  -moz-transition: "all 1s ease-in-out 0.4s",
		  -o-transition: "all 1s ease-in-out 0.4s",
		  -ms-transition: "all 1s ease-in-out 0.4s",
		  transition: "all 1s ease-in-out 0.4s"
		};
		var extend_init_rules = $.extend(container_init_rules, container_opts)
		this.each(function(){
			
		})(extend_init_rules);
	}
});