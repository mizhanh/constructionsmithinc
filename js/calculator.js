
$("#calc-btn").on("click", function (){
  	event.preventDefault();
  	var roomSize = $('#size-input').val().trim();
  	var workArea = $('#tileOption option:selected').text();
  	var option = $('#materialOption option:selected').text();
  	var totalCost = '';

  	$('#calc-results').empty();

  	calculateCost(); 


  	function calculateCost() {
  		var laborCostPerHr = 75;
    	var areaFloorsHrPerSqFt = 2;
    	var areaFloorsWallHrPerSqFt = 4;
    	var lowEndPerSqFt = 35;
    	var midRangePerSqFt = 70;
    	var luxuryPerSqFt = 120;
    	var areaFloorsCost;
    	var areaFloorsWallCost;
    	var lowEndCost;
    	var midRangeCost;
    	var luxuryCost;

    	var size = roomSize;
    	var area = workArea;
    	var quality = option;
   
    	var areaFloorsTotalLaborHr = size * areaFloorsHrPerSqFt;
    	var areaFloorsWallTotalLaborHr = size * areaFloorsWallHrPerSqFt;
    
    	if (area === "Floors Only") {
      		areaFloorsCost = laborCostPerHr * areaFloorsTotalLaborHr;	
      		if (quality === "Low End") {
          		lowEndCost = lowEndPerSqFt * size;
          		totalCost = areaFloorsCost + lowEndCost;      	
      		} else 
      		if (quality === "Mid Range") {
          		midRangeCost = midRangePerSqFt * size;
          		totalCost = areaFloorsCost + midRangeCost;       	
      		} else
      		if (quality === "Luxury") {
          		luxuryCost = luxuryPerSqFt * size;
          		totalCost = areaFloorsCost + luxuryCost;     
      		} 
      		$('#calc-results').append('<label>US $</label>' + ' ' + totalCost); 

    	} else
    	// cost for install tiles on floors & walls and selected trim quality 
    	if (area === "Floors & Wall") {
      		areaFloorsWallCost = laborCostPerHr * areaFloorsWallTotalLaborHr;	
      		if (quality === "Low End") {
          		lowEndCost = lowEndPerSqFt * size;
          		totalCost = areaFloorsWallCost + lowEndCost;  	
      		} else 
      		if (quality === "Mid Range") {
          		midRangeCost = midRangePerSqFt * size;
          		totalCost = areaFloorsWallCost + midRangeCost; 	
      		} else
      		if (quality === "Luxury") {
          		luxuryCost = luxuryPerSqFt * size;
          		totalCost = areaFloorsWallCost + luxuryCost;    
      		}    
      		$('#calc-results').append('<label>US $</label>' + ' ' + totalCost);
    	}  
  };

});
