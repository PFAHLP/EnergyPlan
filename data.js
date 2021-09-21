const data = {
  labels: [""],
  datasets: [

    ]
  };

const dataInfo= {
  labels: [""],
  datasets: [

    ]
  };
  const dataEmpty = {
    labels: [""],
    datasets: [

      ]
    };


// src: https://ag-energiebilanzen.de/7-0-Bilanzen-1990-2019.html
const dataAll = {
  labels: [""],
  datasets: [
    //consumption
      {
        label: 'Transport',
        data: [31],
        stack: "consumption",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      {
        label: 'Heating',
        data: [22],
        stack: "consumption",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      {
        label: 'Stuff',
        data: [29],
        stack: "consumption",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      {
        label: 'Flights',
        data: [18],
        stack: "consumption",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      {
        label: 'Household Gadgets',
        data: [6],
        stack: "consumption",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      {
        label: 'Farming',
        data: [9],
        stack: "consumption",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      //produktion
      // 2produktion2produktion src https://www.bmwi.de/Redaktion/DE/Infografiken/Energie/Energiedaten/Energiegewinnung-und-Energieverbrauch/energiedaten-energiegewinnung-verbrauch-03.html
      {
        label: 'Mineral Oil',
        data: [41],
        stack: "produktion",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      {
        label: 'Coal',
        data: [26],
        stack: "produktion",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      {
        label: 'Gas',
        data: [28],
        stack: "produktion",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      {
        label: 'Nuklear',
        data: [8],
        stack: "produktion",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      {
        label: 'Renewables',
        data: [17],
        stack: "produktion",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      //Carbon
      {
        label: 'CO2',
        data: [100],
        stack: "carbon",
        borderColor: carbonBorderColor,
        backgroundColor: carbonBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },
      {
        label: 'CO3',
        data: [100],
        stack: "carbon",
        borderColor: carbonBorderColor,
        backgroundColor: carbonBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },
      //Transport
      {
        label: 'Car',
        data:  [10],
        stack: "Transport",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },
      {
        label: 'Train',
        data: [10],
        stack: "Transport",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },
      {
        label: 'Goods',
        data: [10],
        stack: "Transport",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },
    ]
  };

  // src: https://ag-energiebilanzen.de/7-0-Bilanzen-1990-2019.html
