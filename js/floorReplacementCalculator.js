$("#floor-calc-btn").on("click", function (){
  	event.preventDefault();
  	var floorLength = $('#length-input').val().trim();
  	var floorWidth = $('#width-input').val().trim();
  	var floorType = $('#floorMaterial option:selected').val();
  	var materialQuality = $('#floorQuality option:selected').text();
  	var removal = $('#removeOldFloor option:selected').text();
  	var install = $('#subfloorInstallOption option:selected').text();
   var trim = $('#trimInstallation option:selected').text();
  	var totalReplacementCost = '';

  	$('#floor-calc-results').empty();

  	calculateReplacementCost(); 

    function calculateReplacementCost(){
      var lowCarpetCostPerSqFt = 3;
      var midCarpetCostPerSqFt = 4.11;
      var hiCarpetCostPerSqFt = 11.11;
    
      var lowHardwoodCostPerSqFt = 7.50;
      var midHardwoodCostPerSqFt = 9;
      var hiHardwoodCostPerSqFt = 11.5;

      var lowLaminateCostPerSqFt = 5;
      var midLaminateCostPerSqFt = 8.75;
      var hiLaminateCostPerSqFt = 10.5;

      var lowTileCostPerSqFt = 8.50;
      var midTileCostPerSqFt = 12.5;
      var hiTileCostPerSqFt = 15.5;

      var lowLinoleumCostPerSqFt = 5.50;
      var midLinoleumCostPerSqFt = 6;
      var hiLinoleumCostPerSqFt = 6.5;

      var lowStoneCostPerSqFt = 19;
      var midStoneCostPerSqFt = 23;
      var hiStoneCostPerSqFt = 25;

      var remCarpetCostPerSqFt = 1.25;
      var remHardwoodCostPerSqFt = 3;
      var remLaminateCostPerSqFt = 1.25;
      var remTileCostPerSqFt = 3.25;

      var installSubCostPerSqFt = 3;
      var installTrimCostPerLnFt = 10.50;

      var materialCost=0;
      var remFloorCost=0;
      var installSubFloorCost=0;
      var installTrimCost=0;

      var length = floorLength;
      var width = floorWidth;
      var type = floorType;
      var quality = materialQuality;
      var removeOldFloor = removal;
      var installSubfloor = install;
      var installTrim = trim;

      var totalSqFt = length * width;
        console.log("total sqft is " + totalSqFt);
      var totalLnFt = (length * 2) + (width * 2);
        console.log("total ln ft is " + totalLnFt);

     
      if (installSubfloor === "Yes") {
         installSubFloorCost = installSubCostPerSqFt * totalSqFt;
         console.log("install subfloor cost is " + installSubFloorCost);

         // Trim installation cost
         if (installTrim === "No") {
            installTrimCost = 0;
         } else {
            installTrimCost = installTrimCostPerLnFt * totalLnFt;
         console.log("install trim cost is " + installTrimCost);  
         };

         // Type of floor
         if (type === "carpets") {
            if (quality === "Basic") {
              materialCost = lowCarpetCostPerSqFt * totalSqFt;
            } else if (quality === "Mid") {
               materialCost = midCarpetCostPerSqFt * totalSqFt;
            } else if (quality === "Premium") {
               materialCost = hiCarpetCostPerSqFt * totalSqFt;
            };  

         } else if (type === "hardwood") {
              if (quality === "Basic") {
                materialCost = lowHardwoodCostPerSqFt * totalSqFt;
              } else if (quality === "Mid") {
                materialCost = midHardwoodCostPerSqFt * totalSqFt;
              } else if (quality === "Premium") {
                materialCost = hiHardwoodCostPerSqFt * totalSqFt;
              };

          } else if (type === "laminate") {
              if (quality === "Basic") {
                materialCost = lowLaminateCostPerSqFt * totalSqFt;
              } else if (quality === "Mid") {
                materialCost = midLaminateCostPerSqFt * totalSqFt;
              } else if (quality === "Premium") {
                materialCost = hiLaminateCostPerSqFt * totalSqFt;
               };

          } else if (type === "naturalStone") {
              if (quality === "Basic") {
                materialCost = lowStoneCostPerSqFt * totalSqFt;
              } else if (quality === "Mid") {
                materialCost = midStoneCostPerSqFt * totalSqFt;
              } else if (quality === "Premium") {
                materialCost = hiStoneCostPerSqFt * totalSqFt;
              }; 

          } else if (type === "tile") {
              if (quality === "Basic") {
                materialCost = lowTileCostPerSqFt * totalSqFt;
              } else if (quality === "Mid") {
                materialCost = midTileCostPerSqFt * totalSqFt;
              } else if (quality === "Premium") {
                materialCost = hiTileCostPerSqFt * totalSqFt;
              };  

          } else if (type === "vinyl") {
              if (quality === "Basic") {
                materialCost = lowLinoleumCostPerSqFt * totalSqFt;
              } else if (quality === "Mid") {
                materialCost = midLinoleumCostPerSqFt * totalSqFt;
              } else if (quality === "Premium") {
                materialCost = hiLinoleumCostPerSqFt * totalSqFt;
              }; 
            };

         console.log("material selected is " + type + " quality is " + quality + " and cost is " + materialCost);
         
           // Old floor removal cost
         if (removeOldFloor === "No") {
            remFloorCost = 0;        
         } else if (removeOldFloor === "Yes - Carpet") {
            remFloorCost = remCarpetCostPerSqFt * totalSqFt;    
         } else if (removeOldFloor === "Yes - Hardwood") {
            remFloorCost = remHardwoodCostPerSqFt * totalSqFt;  
         } else if (removeOldFloor === "Yes - Laminate") {
            remFloorCost = remLaminateCostPerSqFt * totalSqFt;  
         } else if (removeOldFloor === "Yes - Tile") {
            remFloorCost = remTileCostPerSqFt * totalSqFt;
         }; 
         console.log("remove old floor? " + removeOldFloor + " " + remFloorCost);
         totalReplacementCost = installSubFloorCost + installTrimCost + materialCost + remFloorCost; 
         console.log(totalReplacementCost); 

      } 
         else if (installSubfloor === "No") {

         // Trim installation cost
         if (installTrim === "No") {
            installTrimCost = 0;
            } else {
            installTrimCost = installTrimCostPerLnFt * totalLnFt;
            console.log("install trim cost is " + installTrimCost);
         };

         // Type of floor
         if (type === "carpets") {
            if (quality === "Basic") {
               materialCost = lowCarpetCostPerSqFt * totalSqFt;   
            } else if (quality === "Mid") {
               materialCost = midCarpetCostPerSqFt * totalSqFt;   
            } else if (quality === "Premium") {
               materialCost = hiCarpetCostPerSqFt * totalSqFt;           
            }; 
             
         } else if (type === "hardwood") {
            if (quality === "Basic") {
               materialCost = lowHardwoodCostPerSqFt * totalSqFt;
            } else if (quality === "Mid") {
               materialCost = midHardwoodCostPerSqFt * totalSqFt;
            } else if (quality === "Premium") {
               materialCost = hiHardwoodCostPerSqFt * totalSqFt;
            };
             
         } else if (type === "laminate") {
            if (quality === "Basic") {
               materialCost = lowLaminateCostPerSqFt * totalSqFt;
            } else if (quality === "Mid") {
               materialCost = midLaminateCostPerSqFt * totalSqFt;
            } else if (quality === "Premium") {
               materialCost = hiLaminateCostPerSqFt * totalSqFt;
            };
             
         } else if (type === "naturalStone") {
            if (quality === "Basic") {
               materialCost = lowStoneCostPerSqFt * totalSqFt;
            } else if (quality === "Mid") {
               materialCost = midStoneCostPerSqFt * totalSqFt;
            } else if (quality === "Premium") {
               materialCost = hiStoneCostPerSqFt * totalSqFt;
            };
            

         } else if (type === "tile") {
            if (quality === "Basic") {
               materialCost = lowTileCostPerSqFt * totalSqFt;
            } else if (quality === "Mid") {
               materialCost = midTileCostPerSqFt * totalSqFt;
            } else if (quality === "Premium") {
               materialCost = hiTileCostPerSqFt * totalSqFt;
            };  
             
          } else if (type === "vinyl") {
            if (quality === "Basic") {
               materialCost = lowLinoleumCostPerSqFt * totalSqFt;
            } else if (quality === "Mid") {
               materialCost = midLinoleumCostPerSqFt * totalSqFt;
            } else if (quality === "Premium") {
               materialCost = hiLinoleumCostPerSqFt * totalSqFt;
            };   
         };
         console.log("selected floor material is " + type + " quality is " + quality + " cost is " + materialCost);
         
         // Removal old floor cost
         if (removeOldFloor === "No") {
            remFloorCost = 0;        
         } else if (removeOldFloor === "Yes - Carpet") {
            remFloorCost = remCarpetCostPerSqFt * totalSqFt;      
         } else if (removeOldFloor === "Yes - Hardwood") {
            remFloorCost = remHardwoodCostPerSqFt * totalSqFt;    
         } else if (removeOldFloor === "Yes - Laminate") {
            remFloorCost = remLaminateCostPerSqFt * totalSqFt;  
         } else if (removeOldFloor === "Yes - Tile") {
            remFloorCost = remTileCostPerSqFt * totalSqFt;  
         };

      console.log("remove old floor? " + removeOldFloor + " " + remFloorCost);
      totalReplacementCost = installTrimCost + materialCost + remFloorCost;
      console.log(totalReplacementCost);

      };
      
      $('#floor-calc-results').append('<label>US $</label>' + ' ' + totalReplacementCost);    
  };

});


    