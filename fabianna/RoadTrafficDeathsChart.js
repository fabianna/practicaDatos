<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	  <script type="text/javascript" src="RoadTrafficDeaths.js"></script> 
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawAfricaChart);
      
     
      function drawRoadTrafficDeathsChart() {

        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn('number', 'Year');
        dataTable.addColumn('number', 'Number of neonatal deaths (thousands)');
		
      x=[]; y=[]; 
      for (i=0;i<obj1.length;i++) {
        x[i]=obj1[i][0]; //Country
        y[i]=obj1[i][1]; //Value
      dataTable.addRows([[x[i], y[i]]]);
      }
      
      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Estimated road traffic death rate (per 100 000 population) 2013",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(view, options);
      </script>
  </head>
  <body>
    <div id="chart_div" style="width: 900px; height: 500px;"></div>
  </body>
</html>

        
