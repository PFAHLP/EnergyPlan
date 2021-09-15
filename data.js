//def colors
const productionBackgroundColor = "rgba(255, 10, 13, 0.7)"
const productionBorderColor = "#722e2b"
const productionHoverBorderColor = "#d3b5aa"

const consumptionBackgroundColor = "rgba(63, 199, 39, 0.7)"
const consumptionBorderColor = "#2f7118"
const consumptionHoverBorderColor = "#b5d3aa"

const carbonBackgroundColor = "rgba(110, 8, 156, 0.7)"
const carbonBorderColor = "#5b2782"
const carbonHoverBorderColor = "#b5d3aa"

const productionBorderWidth = 3
const productionHoverBorderWidth = 9

const textColor = "#000"

const borderskipped = false
var defaultBorderRadius = 9
var newBorderRadius = 20
var borderradius = {topLeft: defaultBorderRadius, topRight: defaultBorderRadius, bottomLeft: defaultBorderRadius, bottomRight: defaultBorderRadius}

var toSmallToDisplay = [true]

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
