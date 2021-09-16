//adding the click functionality to the plot
function graphClickEvent(event, ctx, mainplot){
    //get index and label
    indexOnClick = ctx[0]. datasetIndex
    labelOnClick = data.datasets[indexOnClick].label

    //reset look to "normal"
    for (let i = 0; i < data.datasets.length; i++) {
      data.datasets[i].borderWidth = 3;
      var borderradius = {topLeft: defaultBorderRadius, topRight: defaultBorderRadius, bottomLeft: defaultBorderRadius, bottomRight: defaultBorderRadius}
      data.datasets[i].borderRadius = borderradius;
    }
    //cange to bigger borderWidth
    data.datasets[indexOnClick].borderWidth = 9 ;
    var borderradius = {topLeft: newBorderRadius, topRight: newBorderRadius, bottomLeft: newBorderRadius, bottomRight: newBorderRadius};
    data.datasets[indexOnClick].borderRadius = borderradius;
    eneryChart.update();
    //load new content on the left
    //keep the selected item marked
    selectedIndex = indexOnClick;
    selectedItem = labelOnClick;
    maintext();
  }

function graphHoverEvent(e, ctx, mainplot){
  if (ctx[0] in window){
  }
  else{
    indexOnHover = ctx[0].datasetIndex
    data.datasets[indexOnHover].borderWidth = 3 ;
    var borderradius = {topLeft: newBorderRadius, topRight: newBorderRadius, bottomLeft: newBorderRadius, bottomRight: newBorderRadius};
    data.datasets[indexOnHover].borderRadius = borderradius;
  }
}

function graphDragStart(e, datasetIndex) {
  data.datasets[datasetIndex].borderWidth = 3 ;
  //leaving selectedItem selected
  if (selectedIndex in window){
  }
  else{
    data.datasets[selectedIndex].borderWidth = 9 ;
  }
  var borderradius = {topLeft: newBorderRadius, topRight: newBorderRadius, bottomLeft: newBorderRadius, bottomRight: newBorderRadius};
  data.datasets[datasetIndex].borderRadius = borderradius;

  eneryChart.update()
  }

function graphDrag(e, datasetIndex, index, value) {
  //console.log(datasetIndex);
    data.datasets[datasetIndex].borderWidth = 3;
    var borderradius = {topLeft: newBorderRadius, topRight: newBorderRadius, bottomLeft: newBorderRadius, bottomRight: newBorderRadius};
    data.datasets[datasetIndex].borderRadius = borderradius;
  }
  function graphDragEnd(e, datasetIndex, index, value) {

      //change all back
      var borderradius = {topLeft: defaultBorderRadius, topRight: defaultBorderRadius, bottomLeft: defaultBorderRadius, bottomRight: defaultBorderRadius}
      data.datasets[datasetIndex].borderRadius = borderradius;
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