<html>

<h1> Trabajo Gestión de Datos </h1>
<h4> Fabianna (A905046) </h4>

<p> Se va a leer una publicación de las 50 ciudades estadounidenses más grandes (por población). Se van a escoger las cinco ciudades más grandes, tomando los datos del tamaño de la población de los años disponibles: 1990, 2000, 2005, 2010, 2013, 2014. Luego, estos datos se van a graficar tanto en una gráfica de líneas (LineChart) y gráfica de columnas (ColumnChart), donde se puede visualizar el crecimiento de cada una de las ciudades a lo largo del tiempo, y también comparar el tamaño de las poblaciones de cada ciudad en un año determinado, respectivamente. </p>

<p> Los datos provienen de la página de Infoplease en el artículo titulado, <a href="https://www.infoplease.com/us/us-cities/top-50-cities-us-population-and-rank"> "50 Cities in the U.S. by Population and Rank". </a> </p>
 
<p> Se van a obtener con Web Scraping, mediante la función leerTop5Cities() del <a href=https://fabianna.github.io/practicaDatos/fabianna/leerTop5Cities.js"> fichero JavaScript </a>. Para obtener los datos, se abre la consola de Google Chrome con F12 en la página de las 50 ciudades, y se copia y ejecuta dicha función. Como resultado, los datos obtenidos se guardan como JSON en un fichero de nombre <a href="https://fabianna.github.io/practicaDatos/fabianna/Top5Cities.js"> Top5Cities.js </a>. Se debe de introducir el texto "obj=" por delante del array para poder usar los datos recogidos directamente en una variable.</p>


</p> Luego, para poder visualizar los datos, se usa la librería de gráficos de <a href="https://developers.google.com/chart/"> Google Charts </a>, y como mencionado anteriormente, el gráfico de líneas <a href="https://developers.google.com/chart/interactive/docs/gallery/linechart"> (Line Chart) </a> y la gráfica de columnas <a href="https://developers.google.com/chart/interactive/docs/gallery/columnchart"> (Column Chart). </a> </p>

<p> Se pueden visualizar los datos con las gráficas correspondientes clicando en los siguientes enlaces: <a href="https://fabianna.github.io/practicaDatos/fabianna/Top5CitiesColumnChart.html"> Top 5 Cities Column Chart </a> y <a href="https://fabianna.github.io/practicaDatos/fabianna/Top5CitiesLineChart.html"> Top 5 Cities Line Chart </a> </p>. 
  
  
</html>
