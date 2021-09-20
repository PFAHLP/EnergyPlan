
Chart.register(ChartDataLabels);
//set text to display
var plotcanvas = document.getElementById('plotCanvas');
var plotctx = plotcanvas.getContext('2d');
var eneryChart = new Chart(plotctx,
  config
);

const mySlider = document.getElementById("customRange3");
mySlider.addEventListener("click",changevalue);


function changevalue(){
  data.datasets[selectedIndex].data[0]  = mySlider.value;
  //happends only to slected item
  checkIfToSmall(selectedIndex);
  eneryChart.update();
}


stackToDisplay.unshift("carbon")
console.log(stackToDisplay)
updateData();

maintext();

  function maintext() {
        var textCanvas = document.getElementById("textCanvas");
        var textctx = textCanvas.getContext("2d");

        if (selectedItem == "Home") {
          textctx.font = "30px Arial";
          textctx.fillText("Hello World Home",10,100);
        };

        if (selectedItem != "Home"){
          updatetext(textCanvas, textctx, selectedItem);
        }
      };

function updatetext(canvas, ctx, text, mainplot){
  // todo make it load text + variable . text
  //create all the variable files!

  if (text == "Car"){

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillText("Hello World Car",10,50);

    var slider = document.getElementById("myRange");
    var output = slider.value
    slider.oninput = function(){
      data.datasets[indexOnClick].data[0] = output;
      mainplot.update();
    }

  // Update the current slider value (each time you drag the slider handle)

  }
  if (text == "Flights"){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillText("Hello World Flights",10,50);
  }
  if (text == "Stuff"){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillText("Hello World Stuff",10,50);
  }
  if (text == "Heating"){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillText("Hello World Heating",10,50);
  }
  if (text == "Transport"){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillText("Hello World Transport",10,50);
  }
  if (text == "Gadgets"){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillText("Hello World Gadgets",10,50);
  }
  if (text == "Lights"){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillText("Hello World Lights",10,50);
  }
  if (text == "Biomass"){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillText("Hello World Biomass",10,50);
  }
  if (text == "PV farm"){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillText("Hello World PV farm",10,50);
  }
  if (text == "PV Roof"){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillText("Hello World PV Roof",10,50);
  }
  if (text == "Wave and Tide"){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillText("Hello World W N T",10,50);
  }
  if (text == "Wind offshore"){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillText("Hello World offshore",10,50);
  }
  if (text == "Wind onshore"){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillText("Hello World onshore",10,50);
  }
  if (text == "Solar heating"){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillText("Hello World solar heating",10,50);
  }

}
