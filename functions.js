//helper


//adding the click functionality to the plot
function graphClickEvent(event, ctx, mainplot){
  selectedIndex = ctx[0].datasetIndex;
  selectedItem = data.datasets[selectedIndex].label;
  addInfoItems();
  drawSelectedItem();
  maintext();

  }

function graphHoverEvent(e, ctx, mainplot){
  if (ctx[0] in window){
  }
  else{
    //if selected leave big borders
    indexOnHover = ctx[0].datasetIndex
    borderradius = {topLeft: newBorderRadius, topRight: newBorderRadius, bottomLeft: newBorderRadius, bottomRight: newBorderRadius};
    data.datasets[indexOnHover].borderRadius = borderradius;

  }
}

function graphDragStart(e, datasetIndex) {
  //set new selected item
  selectedIndexInfo = datasetIndex;
  selectedItemInfo = dataInfo.datasets[datasetIndex].label;
  //drawSelectedItem();
  }

function graphDrag(e, datasetIndex, index, value) {
  //console.log(datasetIndex);
    borderradius = {topLeft: newBorderRadius, topRight: newBorderRadius, bottomLeft: newBorderRadius, bottomRight: newBorderRadius};
    data.datasets[datasetIndex].borderRadius = borderradius;
  }

function graphDragEnd(e, datasetIndex, index, value) {
  drawSelectedItem();
  //add escape buton if made to small
  checkIfToSmall(datasetIndex);
  energyChartInfo.update();
  //update energyChart Slider
  //choose selectedItem to be equal to the sum of info data
  sum = 0;
  for (let i = 0; i < dataInfo.datasets.length; i++) {
    sum += dataInfo.datasets[i].data[0];
  }
  data.datasets[selectedIndex].data[0] = Math.round(sum);
  energyChart.update();
}

function drawSelectedItem(){
  //reset others look to "normal"
  for (let i = 0; i < data.datasets.length; i++) {
    //change colors
    data.datasets[i].borderWidth = productionBorderWidth;

    //change border width

    borderradius = {topLeft: defaultBorderRadius, topRight: defaultBorderRadius, bottomLeft: defaultBorderRadius, bottomRight: defaultBorderRadius}
    data.datasets[i].borderRadius = borderradius;
  }
  data.datasets[selectedIndex].borderWidth = 3;
  //change boundary color
  //change radius of selecteditem
  borderradius = {topLeft: newBorderRadius, topRight: newBorderRadius, bottomLeft: newBorderRadius, bottomRight: newBorderRadius};
  data.datasets[selectedIndex].borderRadius = borderradius;
  //update chart
  // change boundary Width
  energyChart.update();
}

function newLegendClickHandler(e, legendItem, legend) {
      clickedItemName = legendItem.text
      dataIndex = legendItem.datasetIndex
      //remove label from toSmallToDisplay
      removeFromToSmall(index);
      drawSelectedItem();
  };

  function escapeButton(item, chart) {
    //check for each toSmallToDisplay if item
    for (let i = 0; i < toSmallToDisplay.length; i++) {
      if (item.text == toSmallToDisplay[i]){
        return true
      }
  };
    //return item.text.includes("Flights" || "Transport" )

  }


function formatBars(value, ctx) {
    displayedValue = ctx.chart.data.labels[ctx.dataIndex] + '\n' + value;
    displayedName = ctx.dataset.label;
    //for to small parts
    //todo change it depending oin pixel numnber not axis size
    if (displayedValue > 11){
      temp =  displayedName+":" +displayedValue+" kwh"
      return temp;
    };
    if (displayedValue <= 11){
      return "";
    };
}

function formatBarsInfo(value, ctx) {
    displayedValue = ctx.chart.data.labels[ctx.dataIndex] + '\n' + value;
    displayedName = ctx.dataset.label;
    //for to small parts
      //todo change it depending oin pixel numnber not axis size
    temp =  displayedName+":" +displayedValue+" kwh"
    return temp;
}



function removeFromToSmall(){
toSmallToDisplay.splice(  toSmallToDisplay.indexOf(clickedItemName),1)
data.datasets[dataIndex].data[0]  = 20;
}

function checkIfToSmall(datasetIndex){
  if (data.datasets[datasetIndex].data[0] < 1){
      toSmallToDisplay.push(data.datasets[datasetIndex].label)
  }
  energyChart.update()
}


function addData(){
  //add to dataset
  data.datasets = [];
  for (let k = 0; k < stackToDisplay.length; k++) {
    for (let i = 0; i < dataAll.datasets.length; i++) {
      if ( stackToDisplay[k] == dataAll.datasets[i].stack){
        data.datasets.push(dataAll.datasets[i]);
      }
    }
  }
  energyChart.update();
}

function addInfoItems(){
  dataInfo.datasets = [];
  //add info
  for (let i = 0; i < dataAll.datasets.length; i++) {
    if ( selectedItem == dataAll.datasets[i].stack){
      dataInfo.datasets.push(dataAll.datasets[i]);
    }
  }
  energyChartInfo.update();
}
