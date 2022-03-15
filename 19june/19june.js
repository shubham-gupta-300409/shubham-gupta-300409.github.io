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
		var y = x/600*100;


	 
	 	


	 document.getElementById("coloum7").innerHTML = a;
	 document.getElementById("coloum8").innerHTML = b;
	 document.getElementById("coloum9").innerHTML = c;
	 document.getElementById("coloum10").innerHTML = d;
	 document.getElementById("coloum11").innerHTML = e;
	 document.getElementById("coloum12").innerHTML = f;
	 document.getElementById("coloum13").innerHTML = x;
	 document.getElementById("coloum15").innerHTML = y + "%";
	 document.getElementById("coloum18").innerHTML = "600";
	 

	 var name = document.getElementById("name").value;
	var m_name = document.getElementById("name2").value;
	var class1 = document.getElementById("class").value;



	 document.getElementById("demo").innerHTML="dear"+" "+name+" "+"your pearcentage in class " +" "+class1+" "+"is "+" "+y+"%";

	 if (y<=45) {
	 	window.alert(name +" " +"you are fail in"+" " + class1+" "+".")
	 	document.getElementById("demo1").innerHTML= name +" " +"you are fail in"+" " + class1+" "+"."+"because you have under 45 percantage" 
	 	document.getElementById("coloum14").innerHTML = "C"
	 	document.getElementById("coloum16").innerHTML = "Fail"
	 	document.getElementById("coloum17").innerHTML = "---"


	 }

	  if (y<=65&&y>45) {
	 	window.alert(name +" " +"you are third division pass in"+" " + class1+" "+".")
	 	document.getElementById("demo1").innerHTML= name +" " +"you are third division pass in"+" " + class1+" "+"."+"because you have under 65 percantage"
	 	document.getElementById("coloum14").innerHTML = "B"
	 	document.getElementById("coloum16").innerHTML = "Pass"
	 	document.getElementById("coloum17").innerHTML = "Third"
	 }

	  if (y>65&&y<90) {
	 	window.alert(name +" " +"you are second division pass in"+" " + class1+" "+".")
	 	document.getElementById("demo1").innerHTML= name +" " +"you are second  division pass in"+" " + class1+" "+"."+"because you have under 90 percantage"
	 	document.getElementById("coloum14").innerHTML = "A"
	 	document.getElementById("coloum16").innerHTML = "Pass"
	 	document.getElementById("coloum17").innerHTML = "Second"
	 }

	  if (y>=90&&y<101) {
	 	window.alert(name +" " +"you are first division pass  in"+" " + class1+" "+".")
	 	document.getElementById("demo1").innerHTML= name +" " +"you are first division pass in"+" " + class1+" "+"."+"because you have achieved a percentage greater than or equal to 100"
		document.getElementById("coloum14").innerHTML = "A" + "+"
		document.getElementById("coloum16").innerHTML = "Pass"
		document.getElementById("coloum17").innerHTML = "First"
	}



}

function information(){
	var name = document.getElementById("name").value;
	document.getElementById("coloum1").innerHTML = name;

	var m_name = document.getElementById("name2").value;
	document.getElementById("coloum2").innerHTML = m_name;

	var class1 = document.getElementById("class").value;
		document.getElementById("coloum3").innerHTML = class1;

	var dob = document.getElementById("dob").value;
	document.getElementById("coloum5").innerHTML = dob;

	var number = document.getElementById("no.").value;
	document.getElementById("coloum4").innerHTML = number;

	var school = document.getElementById("school").value;
	document.getElementById("coloum6").innerHTML = school;





}

function page(){

	window.print();
}

