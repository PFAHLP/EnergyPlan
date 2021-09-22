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
    //Transport
      {
        label: 'Transport',
        data: [31],
        stack: "consumption",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: borderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      {
        label: 'Car',
        data:  [10],
        stack: "Transport",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },
      {
        label: 'Train',
        data: [10],
        stack: "Transport",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },
      {
        label: 'Trucks',
        data: [10],
        stack: "Transport",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },
      //Heating

      {
        label: 'Heating',
        data: [22],
        stack: "consumption",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: borderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'
      },
      {
        label: 'Hot air',
        data:  [5],
        stack: "Heating",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },
      {
        label: 'Hot water',
        data:  [5],
        stack: "Heating",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },
      {
        label: 'Cooling',
        data:  [5],
        stack: "Heating",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },

      //Stuff
      {
        label: 'Stuff',
        data: [29],
        stack: "consumption",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: borderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      {
        label: 'Imports',
        data: [20],
        stack: "Stuff",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      {
        label: 'Household Gadgets',
        data: [6],
        stack: "Stuff",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      {
        label: 'Lights',
        data: [4],
        stack: "Stuff",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },

      //Flights
      {
        label: 'Flights',
        data: [18],
        stack: "consumption",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: borderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'

      },
      //Food
      {
        label: 'Food',
        data: [9],
        stack: "consumption",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: borderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'
      },
      {
        label: 'Plants',
        data: [2],
        stack: "Food",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'
      },
      {
        label: 'Livestock',
        data: [9],
        stack: "Food",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'
      },
      {
        label: 'Fertilizer',
        data: [4],
        stack: "Food",
        borderColor: consumptionBorderColor,
        backgroundColor: consumptionBackgroundColor,
        borderWidth: selectedBorderWidth,
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
        borderWidth: borderWidth,
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
        borderWidth: borderWidth,
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
        borderWidth: borderWidth,
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
        borderWidth: borderWidth,
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
        borderWidth: borderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'
      },
      {
        label: 'Wind',
        data: [4.76],
        stack: "Renewables",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'
      },
      {
        label: 'Solar',
        data: [1.87],
        stack: "Renewables",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'
      },
      {
        label: 'Biomass heat',
        data: [5.61],
        stack: "Renewables",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'
      },
      {
        label: 'Biomass high quality',
        data: [3.23],
        stack: "Renewables",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'
      },
      {
        label: 'Water',
        data: [0.51],
        stack: "Renewables",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: selectedBorderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
        yAxisID: 'right-y-axis'
      },
      {
        label: 'Geothermal',
        data: [0.68],
        stack: "Renewables",
        borderColor: productionBorderColor,
        backgroundColor: productionBackgroundColor,
        borderWidth: selectedBorderWidth,
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
        borderWidth: borderWidth,
        borderSkipped: borderskipped,
        borderRadius: borderradius,
      },

    ]
  };

  // src: https://ag-energiebilanzen.de/7-0-Bilanzen-1990-2019.html
