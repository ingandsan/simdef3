google.load("visualization", "1.1", {packages:["corechart"], language: 'En'});	  
	  google.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data = $.ajax({
          url: "/data_coyuntura/15",
          dataType:"json",
          async: false
          }).responseText;
           
      // Create our data table out of JSON data loaded from server.
      var data = new google.visualization.DataTable(data);

	
		
        var options = {
         width: 600,
        height: 520,
        backgroundColor: { fill:'transparent' },
          vAxis: {title: 'Porcentaje', format: "decimal"},
         legend: { position: 'bottom' },
		  tooltip: { isHtml: true },
		  pointSize: 7,
		  chartArea:{top:30, left:40, height: 400, width:50000},
		  fontSize:8,
		  colors: ['#000099','#FF9900'],
		  width: data.getNumberOfRows() * 80,
		  bar: { groupWidth: "50%" }
        };

		
        var chart = new google.visualization.LineChart(document.getElementById('top_x_div'));
        chart.draw(data, options);
      };