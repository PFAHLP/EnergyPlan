//adding the click functionality to the plot
function graphClickEvent(event, ctx, mainplot){
    //get index and label
    indexOnClick = ctx[0]. datasetIndex

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
    var borderradius = {topLeft: newBorderRadius, topRight: newBorderRadius, bottomLeft: newBorderRadius, bottomRight: newBorderRadius};
    data.datasets[selectedIndex].borderRadius = borderradius;
  }

function graphDragEnd(e, datasetIndex, index, value) {
  drawSelectedItem();
    //add escape buton if made to small
    if (data.datasets[datasetIndex].data[0] < 1){
      if (toSmallToDisplay[0]){
        toSmallToDisplay= data.datasets[datasetIndex].label
      }
      else{
        toSmallToDisplay.push(data.datasets[datasetIndex].label)
      }
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
  // change boundary Width
  data.datasets[selectedIndex].borderWidth = 4;
  //change boundary color
  //change radius of selecteditem
  borderradius = {topLeft: newBorderRadius, topRight: newBorderRadius, bottomLeft: newBorderRadius, bottomRight: newBorderRadius};
  data.datasets[selectedIndex].borderRadius = borderradius;
  //update chart
  eneryChart.update();
}

function newLegendClickHandler(e, legendItem, legend) {
      var datasetIndex = legendItem.datasetIndex;
      toSmallToDisplay = [true]
      data.datasets[datasetIndex].data[0]  = 20;
      //in case the deleted data was selected
      if (datasetIndex == selectedIndex ){
        data.datasets[selectedIndex].borderWidth = 9 ;
      }
      eneryChart.update()
  };
