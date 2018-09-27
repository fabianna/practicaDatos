function filtrarDatos_Africa() {
    datos = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
    str='[';
    for (i=1;i<datos.length;i++) {
	
	descr = datos[i].children[0].textContent;
	region = datos[i].children[3].textContent;
	
		if (descr === "Number of neonatal deaths (thousands)" && region === "Africa")  {
		  
		  year  = datos[i].children[2].textContent;
		  value = datos[i].children[4].textContent;
		  str += "[" + year 
		  str += "," + value + "],"
		  str += "\n"
		}
	}
    str += "]";
    return str;
	
}
