function percantage() {
	var a = document.getElementById("math").value;
	var a1 = parseInt(a)
	var b = document.getElementById("science").value;
	var b1 = parseInt(b)
	var c = document.getElementById("english").value;
	var c1 = parseInt(c)
	var d = document.getElementById("s.s.").value;
	var d1 = parseInt(d)
	var e = document.getElementById("sanskrit").value;
	var e1 = parseInt(e)
	var f = document.getElementById("hindi").value;
	var f1 = parseInt(f)

	var x = a1+b1+c1+d1+e1+f1;
	var x1 =  parseInt(x)

	var y = x1/600*100;
	var name = document.getElementById("name").value;
	var class1 = document.getElementById("class").value;
	 document.getElementById("demo").innerHTML="dear"+" "+name+" "+"your pearcentage in class " +" "+class1+"is "+" "+y+"%";

	 if (y<=45) {
	 	window.alert(name +" " +"you are fail in"+" " + class1+" "+".")
	 	document.getElementById("demo1").innerHTML= name +" " +"you are fail in"+" " + class1+" "+"."+"because you have under 45 percantage"
	 }

	  if (y<65&&y>45) {
	 	window.alert(name +" " +"you are third division pass in"+" " + class1+" "+".")
	 	document.getElementById("demo1").innerHTML= name +" " +"you are third division pass in"+" " + class1+" "+"."+"because you have under 65 percantage"
	 }

	  if (y>65&&y<90) {
	 	window.alert(name +" " +"you are second division pass in"+" " + class1+" "+".")
	 	document.getElementById("demo1").innerHTML= name +" " +"you are second  division pass in"+" " + class1+" "+"."+"because you have under 90 percantage"
	 }

	  if (y>90&&y<101) {
	 	window.alert(name +" " +"you are first division pass  in"+" " + class1+" "+".")
	 	document.getElementById("demo1").innerHTML= name +" " +"you are first division pass in"+" " + class1+" "+"."+"because you have under 100 percantage"
	 }

}