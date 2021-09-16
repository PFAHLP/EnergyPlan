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
          y: {
            type: 'linear',
            position: 'left',
            min:0

          },
          'right-y-axis': {
            type: 'linear',
            position: 'right',
            min:0,
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
    onClick:graphClickEvent,
    onHover: graphHoverEvent,
    plugins: {
      dragData: {
        round: 1,
        showTooltip: true,
        onDragStart: graphDragStart,
        onDrag: graphDrag,
        onDragEnd: graphDragEnd,
      },
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
             filter: function(item, chart) {
               return item.text.includes(toSmallToDisplay);
              },
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
               formatter: function(value, ctx) {
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
           },
   },
  },
}
