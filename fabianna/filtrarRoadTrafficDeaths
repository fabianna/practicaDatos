function filtrarRoadTrafficDeaths() {
    datos = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
    str='[';
    for (i=1;i<datos.length;i++) {
		  
		  country  = datos[i].children[4].textContent;
		  value = datos[i].children[5].textContent;
		  str += "['" + country + "'"
		  str += "," + value + "],"
		  str += "\n"
	
	}
    str += "]";
    return str;
	
}
