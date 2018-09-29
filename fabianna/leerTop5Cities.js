function leerTop5Cities() {
    datos = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
    str = '[';
    
    for (i=1;i<6;i++) {
		  
	city  = datos[i].children[1].textContent;
	year1990 = datos[i].children[7].textContent.replace(',','');
	year2000 = datos[i].children[6].textContent.replace(',','');
	year2005 = datos[i].children[5].textContent.replace(',','');
	year2010 = datos[i].children[4].textContent.replace(',','');
	year2013 = datos[i].children[3].textContent.replace(',','');
	year2014 = datos[i].children[2].textContent.replace(',','');
      	
	str += "['" + city + "'"
	str += "," + year1990 + "," + year2000 + "," + year2005 + "," + year2010 + "," + year2013 + "," + year2014 + "],"
	str += "\n"
	
	}
    str += "]";
    return str;
}
	
