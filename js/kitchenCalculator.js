$("#kitchen-calc-btn").on("click", function (){
  	event.preventDefault();
  	var size = $('#kitchen-size-input').val().trim();
  	var cabLength = $('#cabinets-length-input').val().trim();
  	var cabinetOption = $('#cabinetsQuality option:selected').text();
  	var counterSize = $('#countertop-size-input').val().trim();
  	var countertopType = $('#countertopMaterial option:selected').text();
  	var fixtures = $('#fixturesQuality option:selected').text();
  	var floorOption = $('#floorType option:selected').text();
  	var appliancesOption = $('#appliancesQuality option:selected').text();
  	var paint = $('#paintOption option:selected').text();
  	var totalKitchenCost = '';

  	$('#kitchen-calc-results').empty();

  	calculateCost(); 

  	function calculateCost() {
    	var paintCostPerSqFt = 22.50;

    	var lowEndAppliances = 5000;
    	var midRangeAppliances = 10000;
    	var luxuryAppliances = 30000;

    	var graniteCostPerSqFt = 65;
    	var laminateCostPerSqFt = 35;
    	var quartzCostPerSqFt = 125;
  
    	var fixturesLowEnd = 450;
    	var fixturesMidRange = 800;
    	var fixturesPremium = 1200;

    	var tileFloorCostPerSqFt = 15;
    	var hardwoodFloorCostPerSqFt = 12;
    	var linoleumFloorCostPerSqFt = 7.50;
    	var laminateFloorCostPerSqFt = 10;
  
    	var basicCabinetCostPerLnFt = 150;
    	var enhancedCabinetCostPerLnFt = 225;
    	var premiumCabinetCostPerLnFt = 325;

    	var paintCost;
    	var countertopCost;
    	var floorCost;
    	var cabinetCost;
    	var fixturesCost;
    	var appliancesCost;

    	var kitchenSize = size;
    		console.log(kitchenSize);
    	var cabinetsLength = cabLength;
    		console.log(cabinetsLength);
    	var countertopSize = counterSize;
    		console.log(countertopSize);
    	var countertopMaterial = countertopType;
    		console.log(countertopMaterial);
    	var cabinetsType = cabinetOption;
    		console.log(cabinetsType);
    	var kitchenFixtures = fixtures;
    		console.log(kitchenFixtures);
    	var floorType = floorOption;
    		console.log(floorType);
    	var appliances = appliancesOption;
    		console.log(appliances);
    	var paintWalls = paint;
    		console.log(paintWalls);

    	if (paintWalls === "Yes") {
      		paintCost = paintCostPerSqFt * kitchenSize;
      		console.log("Paint Cost is " + paintCost);
      
      		if (floorType === "New Tile Flooring") {
        		floorCost = tileFloorCostPerSqFt * kitchenSize;
        		console.log("Tile Floor cost is " + floorCost);

      		} else if (floorType === "New Hardwood Flooring"){
        		floorCost = hardwoodFloorCostPerSqFt * kitchenSize;
        		console.log("Hardwood floor cost is " + floorCost);

      		} else if (floorType === "New Linoleum Flooring"){
        		floorCost = linoleumFloorCostPerSqFt * kitchenSize;
        		console.log("Linoleum floor cost is " + floorCost);

      		} else if (floorType === "New Laminate Flooring"){
        		floorCost = laminateFloorCostPerSqFt * kitchenSize;
        		console.log("Laminate floor cost is " + floorCost);
      		};
      
      		if (countertopMaterial === "Granite"){
        		countertopCost = graniteCostPerSqFt * countertopSize;
        		console.log("Granite countertop cost is " + countertopCost);

      		} else if (countertopMaterial === "Laminate"){
        		countertopCost = laminateCostPerSqFt * countertopSize;
        		console.log("Laminate countertop cost is " + countertopCost);

      		} else if (countertopMaterial === "Quartz"){
        		countertopCost = quartzCostPerSqFt * countertopSize;
        		console.log("Quartz countertop cost is " + countertopCost);    
      		};
      
      		if (cabinetsType === "Basic"){
        		cabinetCost = basicCabinetCostPerLnFt * cabinetsLength;
        		console.log("Basic cabinet cost is " + cabinetCost);

      		} else if (cabinetsType === "Enhanced (with Island)"){
        		cabinetCost = enhancedCabinetCostPerLnFt * cabinetsLength;
        		console.log("Enhanced cabinet cost is " + cabinetCost);

      		} else if (cabinetsType === "Premium (with Island)"){
        		cabinetCost = premiumCabinetCostPerLnFt * cabinetsLength;
        		console.log("Premium cabinet cost is " + cabinetCost);    
      		};
    
      		if (kitchenFixtures === "Basic"){
        		fixturesCost = fixturesLowEnd;
        		console.log("Basic fixtures cost is " + fixturesCost);

      		} else if (kitchenFixtures === "Mid Range"){
        		fixturesCost = fixturesMidRange;
        		console.log("Mid-range fixtures cost is " + fixturesCost);

      		} else if (this.state.kitchenFixtures === "Premium"){
        		fixturesCost = fixturesPremium;
        		console.log("Premium fixtures cost is " + fixturesCost);    
      		};

      		if (appliances === "Basic Appliances"){
        		appliancesCost = lowEndAppliances;
        		console.log("Basic appliances cost is " + appliancesCost);

      		} else if (appliances === "Mid Range Appliances"){
        		appliancesCost = midRangeAppliances;
        		console.log("Mid-range appliances cost is " + appliancesCost);

      		} else if (appliances === "Premium Appliances"){
        		appliancesCost = luxuryAppliances;
        		console.log("Premium appliances cost is " + appliancesCost);    
      		};

      		totalKitchenCost = paintCost + floorCost + countertopCost + cabinetCost + fixturesCost + appliancesCost;
      			console.log(totalKitchenCost);
   		} else {
   			paintCost = 0;
   			if (floorType === "New Tile Flooring") {
        		floorCost = tileFloorCostPerSqFt * kitchenSize;
        		console.log("Tile Floor cost is " + floorCost);

      		} else if (floorType === "New Hardwood Flooring"){
        		floorCost = hardwoodFloorCostPerSqFt * kitchenSize;
        		console.log("Hardwood floor cost is " + floorCost);

      		} else if (floorType === "New Linoleum Flooring"){
        		floorCost = linoleumFloorCostPerSqFt * kitchenSize;
        		console.log("Linoleum floor cost is " + floorCost);

      		} else if (floorType === "New Laminate Flooring"){
        		floorCost = laminateFloorCostPerSqFt * kitchenSize;
        		console.log("Laminate floor cost is " + floorCost);
      		};
      
      		if (countertopMaterial === "Granite"){
        		countertopCost = graniteCostPerSqFt * countertopSize;
        		console.log("Granite countertop cost is " + countertopCost);

      		} else if (countertopMaterial === "Laminate"){
        		countertopCost = laminateCostPerSqFt * countertopSize;
        		console.log("Laminate countertop cost is " + countertopCost);

      		} else if (countertopMaterial === "Quartz"){
        		countertopCost = quartzCostPerSqFt * countertopSize;
        		console.log("Quartz countertop cost is " + countertopCost);    
      		};
      
      		if (cabinetsType === "Basic"){
        		cabinetCost = basicCabinetCostPerLnFt * cabinetsLength;
        		console.log("Basic cabinet cost is " + cabinetCost);

      		} else if (cabinetsType === "Enhanced (with Island)"){
        		cabinetCost = enhancedCabinetCostPerLnFt * cabinetsLength;
        		console.log("Enhanced cabinet cost is " + cabinetCost);

      		} else if (cabinetsType === "Premium (with Island)"){
        		cabinetCost = premiumCabinetCostPerLnFt * cabinetsLength;
        		console.log("Premium cabinet cost is " + cabinetCost);    
      		};
    
      		if (kitchenFixtures === "Basic"){
        		fixturesCost = fixturesLowEnd;
        		console.log("Basic fixtures cost is " + fixturesCost);

      		} else if (kitchenFixtures === "Mid Range"){
        		fixturesCost = fixturesMidRange;
        		console.log("Mid-range fixtures cost is " + fixturesCost);

      		} else if (this.state.kitchenFixtures === "Premium"){
        		fixturesCost = fixturesPremium;
        		console.log("Premium fixtures cost is " + fixturesCost);    
      		};

      		if (appliances === "Basic Appliances"){
        		appliancesCost = lowEndAppliances;
        		console.log("Basic appliances cost is " + appliancesCost);

      		} else if (appliances === "Mid Range Appliances"){
        		appliancesCost = midRangeAppliances;
        		console.log("Mid-range appliances cost is " + appliancesCost);

      		} else if (appliances === "Premium Appliances"){
        		appliancesCost = luxuryAppliances;
        		console.log("Premium appliances cost is " + appliancesCost);    
      		};

      		totalKitchenCost = paintCost + floorCost + countertopCost + cabinetCost + fixturesCost + appliancesCost;
      			console.log(totalKitchenCost);

   		}

   		$('#kitchen-calc-results').append('<label>US $</label>' + ' ' + totalKitchenCost); 
	};

});








