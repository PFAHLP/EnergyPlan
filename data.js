const data = {
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
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },
      {
        label: 'Heating',
        data: [22],
        stack: "consumption",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },
      {
        label: 'Stuff',
        data: [29],
        stack: "consumption",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,

      },
      {
        label: 'Flights',
        data: [18],
        stack: "consumption",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,

      },
      {
        label: 'Household Gadgets',
        data: [6],
        stack: "consumption",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },
      {
        label: 'Farming',
        data: [9],
        stack: "consumption",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },
      //produktion
      // 2produktion2produktion src https://www.bmwi.de/Redaktion/DE/Infografiken/Energie/Energiedaten/Energiegewinnung-und-Energieverbrauch/energiedaten-energiegewinnung-verbrauch-03.html
      {
        label: 'Mineral Oil',
        data: [41],
        stack: "produktion",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,

      },
      {
        label: 'Coal',
        data: [26],
        stack: "produktion",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,

      },
      {
        label: 'Gas',
        data: [28],
        stack: "produktion",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,

      },
      {
        label: 'Nuklear',
        data: [8],
        stack: "produktion",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,

      },
      {
        label: 'Renewables',
        data: [17],
        stack: "produktion",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,

      },
      {
        label: 'CO2',
        data: [100],
        stack: "carbon",
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
        stack: "carbon",
        borderColor: carbonBorderColor,
        backgroundColor: carbonBackgroundColor,
        borderWidth: productionBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'
      },
    ]
  };

  // src: https://ag-energiebilanzen.de/7-0-Bilanzen-1990-2019.html
