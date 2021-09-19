
// src: https://ag-energiebilanzen.de/7-0-Bilanzen-1990-2019.html
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
      label: 'Household Gadgets',
      data: [10],
      stack: "Stack 1",
      borderColor: productionBorderColor,
      backgroundColor: productionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,
    },

    //produktion
    // 2020 src https://www.bmwi.de/Redaktion/DE/Infografiken/Energie/Energiedaten/Energiegewinnung-und-Energieverbrauch/energiedaten-energiegewinnung-verbrauch-03.html
    {
      label: 'Mineral Oil',
      data: [41],
      stack: "Stack 0",
      borderColor: consumptionBorderColor,
      backgroundColor: consumptionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,

    },
    {
      label: 'Coal',
      data: [26],
      stack: "Stack 0",
      borderColor: consumptionBorderColor,
      backgroundColor: consumptionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,

    },
    {
      label: 'Gas',
      data: [28],
      stack: "Stack 0",
      borderColor: consumptionBorderColor,
      backgroundColor: consumptionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,

    },
    {
      label: 'Nuklear',
      data: [8],
      stack: "Stack 0",
      borderColor: consumptionBorderColor,
      backgroundColor: consumptionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,

    },
    {
      label: 'Renewables',
      data: [17],
      stack: "Stack 0",
      borderColor: consumptionBorderColor,
      backgroundColor: consumptionBackgroundColor,
      borderWidth: productionBorderWidth,
      borderSkipped: borderskipped,
      borderRadius: borderradius,

    },
    //carbon
    /*
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
    */
  ]
};
