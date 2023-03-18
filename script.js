var div_zegar = document.querySelector("#div_zegar");
var div_czas = document.querySelector("#div_czas");
var p_kraj = document.querySelector("#p_kraj");
var select_kraj = document.querySelector("#select_kraj");



select_kraj.onchange = zmiana;
function zmiana(){
	setInterval(()=>{
	var dzisiaj = new Date();
	var godziny = Number(dzisiaj.getHours())-1;
	var minuty = Number(dzisiaj.getMinutes());
	var sekundy = Number(dzisiaj.getSeconds());
	var this_godziny;
	var this_minuty;
	var this_value = this.value;
	if(Array.from(this.value)[0] == "-"){
		this_godziny = this_value.substring(
			this_value.indexOf("-")+1,
			this_value.lastIndexOf(":")
			)
		this_minuty = this_value.substring(
			this_value.indexOf(":")+1,
			)
		if(this_minuty == 50){this_minuty=30}
		

	var godziny = godziny - this_godziny
	var minuty = minuty - this_minuty

	godziny = ("0"+godziny).slice(-2);
	minuty = ("0"+minuty).slice(-2);	
	sekundy = ("0"+sekundy).slice(-2);

	
	div_czas.innerHTML = godziny+":"+minuty+":"+sekundy;


	}
	if(Array.from(this.value)[0] == "+"){
		this_godziny = this_value.substring(
			this_value.indexOf("+")+1,
			this_value.lastIndexOf(":")
			)
		this_minuty = this_value.substring(
			this_value.indexOf(":")+1,
			)
		if(this_minuty == 50){this_minuty=30}
		

	var godziny = godziny + Number(this_godziny);
	var minuty = minuty + Number(this_minuty)

	if(minuty > 60 | minuty == 60){
		minuty = minuty - 60;
		godziny = godziny + 1;

	}
	if(godziny == 24 | godziny > 23){
		godziny = godziny - 24;
		
	}


	godziny = ("0"+godziny).slice(-2);
	minuty = ("0"+minuty).slice(-2);	
	sekundy = ("0"+sekundy).slice(-2);




	div_czas.innerHTML = godziny+":"+minuty+":"+sekundy;

	}
	},1000)

	var print =  this.options[this.selectedIndex].text
	print = print.substring(
			print.indexOf(") ")+1,
			)

	p_kraj.innerHTML = print;
}


window.onload= function(){

	var dzisiaj = new Date();
	var godziny = Number(dzisiaj.getHours());
	var minuty = Number(dzisiaj.getMinutes());
	var sekundy = Number(dzisiaj.getSeconds());
	godziny = ("0"+godziny).slice(-2);
	minuty = ("0"+minuty).slice(-2);	
	sekundy = ("0"+sekundy).slice(-2);

div_czas.innerHTML = godziny+":"+minuty+":"+sekundy;

}
