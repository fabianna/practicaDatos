function leerTop5Cities() {
    datos = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
    str = '[';
    str += "['City','1990','2000', '2005', '2010', '2013', '2014'],";
    str += "\n"	
		
    for (i=1;i<6;i++) {
		  
	city  = datos[i].children[1].textContent;
	y1 = datos[i].children[7].textContent.replace(',','').replace(',','');
	y2 = datos[i].children[6].textContent.replace(',','').replace(',','');
	y3 = datos[i].children[5].textContent.replace(',','').replace(',','');
	y4 = datos[i].children[4].textContent.replace(',','').replace(',','');
	y5 = datos[i].children[3].textContent.replace(',','').replace(',','');
	y6 = datos[i].children[2].textContent.replace(',','').replace(',','');
      	
	str += "['" + city + "'"
	str += "," + year1990 + "," + year2000 + "," + year2005 + "," + year2010 + "," + year2013 + "," + year2014 + "],"
	str += "\n"
	
	}
    str += "]";
    return str;
}
	
