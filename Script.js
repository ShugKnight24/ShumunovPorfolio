  function textChange() {
  	var input = document.getElementById("changer");
    var text = input.value;
    
    if (!text)  {
    	alert("Hey smarty pants! You have to type something in first if you want to see the magic!");
      return;
    } 
    input.value = text.toUpperCase();
	}
