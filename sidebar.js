function slide() {
	var value = document.getElementsByTagName("button")[0].getAttribute("value");
	var sidebar = document.getElementById("sidebarhidden");

	if (value == "off") {
		document.getElementsByTagName("button")[0].setAttribute("value", "on");
		sidebar.style.marginLeft = "0";
	} else {
		document.getElementsByTagName("button")[0].setAttribute("value", "off");
		sidebar.style.marginLeft = "-200px";
	}
  $("#wrapper").click(function() {
      sidebar.style.marginLeft = '-200px';
  });
}
