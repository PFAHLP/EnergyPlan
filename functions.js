//adding the click functionality to the plot
function graphClickEvent(event, ctx, mainplot){
    //get index and label
    indexOnClick = ctx[0].datasetIndex

    selectedIndex = indexOnClick;
    labelOnClick = data.datasets[selectedIndex].label
    drawSelectedItem();
    maintext();
  }

function graphHoverEvent(e, ctx, mainplot){
  if (ctx[0] in window){
  }
  else{
    indexOnHover = ctx[0].datasetIndex
    borderradius = {topLeft: newBorderRadius, topRight: newBorderRadius, bottomLeft: newBorderRadius, bottomRight: newBorderRadius};
    data.datasets[indexOnHover].borderRadius = borderradius;
  }
}

function graphDragStart(e, datasetIndex) {
  //set new selected item
  selectedIndex = datasetIndex;
  selectedItem = data.datasets[selectedIndex].label;
  drawSelectedItem();
  maintext();
  }

function graphDrag(e, datasetIndex, index, value) {
  //console.log(datasetIndex);
    borderradius = {topLeft: newBorderRadius, topRight: newBorderRadius, bottomLeft: newBorderRadius, bottomRight: newBorderRadius};
    data.datasets[selectedIndex].borderRadius = borderradius;
  }

function graphDragEnd(e, datasetIndex, index, value) {
  drawSelectedItem();
    //add escape buton if made to small
    if (data.datasets[datasetIndex].data[0] < 1){
        toSmallToDisplay.push(data.datasets[datasetIndex].label)
    }
    eneryChart.update()
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

  eneryChart.update();
}

function newLegendClickHandler(e, legendItem, legend) {
      clickedItemName = legendItem.text
      dataIndex = legendItem.datasetIndex
      toSmallToDisplay.splice(  toSmallToDisplay.indexOf(clickedItemName),1)
      data.datasets[dataIndex].data[0]  = 20;
      drawSelectedItem();
  };

  function escapeButton(item, chart) {
    for (let i = 0; i < toSmallToDisplay.length; i++) {
      if (item.text == toSmallToDisplay[i]){
        return true
      }
  };
    //return item.text.includes("Flights" || "Transport" )

  }

function addItemToEscapeButton(item,itemName){
  return item.text.includes(itemName)
}
