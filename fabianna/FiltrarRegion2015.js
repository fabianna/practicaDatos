function filtrarRegion2015() {
    datos = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
    str='[';
    
    for (i=1;i<datos.length;i++) {
	
	  descr = datos[i].children[0].textContent;
    year  = datos[i].children[2].textContent;
    region = datos[i].children[3].textContent;
	
		if ( (descr === "Number of neonatal deaths (thousands)") && (year === "2015") && (region != "(WHO) Global")) {
		  
		  region = datos[i].children[3].textContent;
		  value = datos[i].children[4].textContent;
		  str += "['" + region + "'"
		  str += "," + value + "],"
		  str += "\n"
		}
	}
    str += "]";
    return str;
	
}
