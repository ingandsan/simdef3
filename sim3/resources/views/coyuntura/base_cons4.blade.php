		<?php
			$col1=array();
			$col1["label"]="Mes";
			$col1["type"]="string";
			//print_r($col1);
			$col2=array();
			$col2["label"]="Ciudad de Puebla\n Número de Personas";
			$col2["type"]="number";
			//print_r($col2);
		
			//print_r($col2);
			$cols = array($col1,$col2);
			$rows=array();
			$i=0;
			?>
			@foreach ($vars as $vari)
			<?php
			//print_r($cols);
			$variable=$vari->anio;
			$variable1=$vari->Mes;
			$cell0["v"]=''.$variable1.("\n").($variable).'';
			if(empty($vari->Ciudad)){
			$cell1["v"]="null";
			}else{
			$cell1["v"]=$vari->Ciudad;
			};		
				
			
			$row[$i]["c"]=array($cell0,$cell1);
			//$rows=array($row0,$row1,$row2,$row3,$row4);
			array_push($rows,$row[$i]);
			$i=$i+1;
			?>
			@endforeach

			<?php
			$data=array("cols"=>$cols,"rows"=>$rows);
			//print_r($data);
			echo json_encode($data);
			?>	
		
	