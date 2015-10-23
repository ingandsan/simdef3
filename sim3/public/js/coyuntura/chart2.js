google.load("visualization", "1.1", {packages:["bar"], language: 'en'});
      
    google.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data = $.ajax({
          url: "/data_coyuntura/02",
          dataType:"json",
          async: false
          }).responseText;
           
      // Create our data table out of JSON data loaded from server.
      var data = new google.visualization.DataTable(data);

  
    
        var options = {
          
        width: 700,
        height:350,
        backgroundColor: { fill:'transparent' },
      legend: {position: 'none'},
      vAxis: {title: 'Millones de pesos', format: "currency"},
          
      colors: ['#000099'],
      chartArea:{top:30, left:50},
          bar: { groupWidth: "50%" }
        };

    
        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
      };