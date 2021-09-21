const actions = [
  {
    name: 'CO2',
    handler(energyChart) {

    },
  },
];

const config = {
  type: 'bar',
  data: data,
  options: {
        responsive: true,
        scales: {
          x: {
            stacked: true,
            max: 0,
            min: 0
          },

          "right-y-axis":{
            stacked: true,
            display: true,
            type: 'linear',
            position: 'right',
            min:0

          },
        },
    //space at the top + bottom
    layout: {
      padding: {
          top: 100,
          bottom: 50,
      }
    },
    //fit it in the container
    maintainAspectRatio: false,
    //make it clickable
    onClick: graphClickEvent,
    onHover: graphHoverEvent,
    plugins: {
      title: {
          display: true,
          fullSize: true,
          text: 'Energy per day per person',
          color: textColor,
          font: {
               size: 30
           },
      },
       legend: {
           //set to false to remove side bar
           display: true,
           onClick: newLegendClickHandler,
           labels: {
             filter: escapeButton,
             color: textColor,
           }
       },
       //show data labels in chart:
       datalabels: {
               color: textColor,
               textAlign: 'center',

               font: {
                   lineHeight: 1,
                   size: 15,
                   style:"normal",
               },
               formatter: formatBars,
           },
   },
  },
}

const configInfo= {
  type: 'bar',
  data: dataInfo,
  options: {
        responsive: true,
        scales: {
          x: {
            stacked: true,
            max: 0,
            min: 0
          },
          y: {
            stacked: true,
            display: false,
            type: 'linear',
            position: 'left',
            min:0

          },
        },
    //space at the top + bottom
    layout: {
      padding: {
          top: 100,
          bottom: 50,
      }
    },
    //fit it in the container
    maintainAspectRatio: false,
    //make it clickable
    onHover: graphHoverEvent,
    plugins: {
      dragData: {
        round: 1,
        showTooltip: true,
        onDragStart: graphDragStart,
        onDrag: graphDrag,
        onDragEnd: graphDragEnd,
      },
      legend: {
          //set to false to remove side bar
          display: false,
          },
       datalabels: {
               color: textColor,
               textAlign: 'center',

               font: {
                   lineHeight: 1,
                   size: 15,
                   style:"normal",
               },
               formatter: formatBarsInfo,
           },
   },
  },
}
