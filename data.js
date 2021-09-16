

const data = {
labels: [""],
datasets: [
  //production
    {
      label: 'Transport',
      data: [52],
      stack: "Stack 1",
      borderColor: productionBorderColor,
      backgroundColor: productionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,
    },
    {
      label: 'Heating',
      data: [37],
      stack: "Stack 1",
      borderColor: productionBorderColor,
      backgroundColor: productionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,
    },
    {
      label: 'Stuff',
      data: [48],
      stack: "Stack 1",
      borderColor: productionBorderColor,
      backgroundColor: productionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,

    },
    {
      label: 'Flights',
      data: [30],
      stack: "Stack 1",
      borderColor: productionBorderColor,
      backgroundColor: productionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,

    },
    {
      label: 'Lights',
      data: [4],
      stack: "Stack 1",
      borderColor: productionBorderColor,
      backgroundColor: productionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,

    },{
      label: 'Gadgets',
      data: [5],
      stack: "Stack 1",
      borderColor: productionBorderColor,
      backgroundColor: productionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,
    },

    //consumption
    {
      label: 'Solar',
      data: [63],
      stack: "Stack 0",
      borderColor: consumptionBorderColor,
      backgroundColor: consumptionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,

    },
    {
      label: 'Wind',
      data: [86],
      stack: "Stack 0",
      borderColor: consumptionBorderColor,
      backgroundColor: consumptionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,

    },
    {
      label: 'Hydro',
      data: [20],
      stack: "Stack 0",
      borderColor: consumptionBorderColor,
      backgroundColor: consumptionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,

    },
    {
      label: 'Biomass',
      data: [24],
      stack: "Stack 0",
      borderColor: consumptionBorderColor,
      backgroundColor: consumptionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,

    },
    //carbon
    {
      label: 'CO2',
      data: [100],
      stack: "Stack 2",
      borderColor: carbonBorderColor,
      backgroundColor: carbonBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,
      yAxisID: 'right-y-axis'
    },
    {
          label: 'CO3',
          data: [100],
          stack: "Stack 2",
          borderColor: carbonBorderColor,
          backgroundColor: carbonBackgroundColor,
          borderWidth: productionBorderWidth,
          borderSkipped: borderskipped,
          borderRadius: borderradius,
          yAxisID: 'right-y-axis'
        },
  ]
};
