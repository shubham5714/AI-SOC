
// Funnel Chart

export const Funnelseries = [
  {
    name: "Count",
    data: [100, 70, 40],

  },
]
export const Funneloptions = {
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      barHeight: '60%',
      isFunnel: true,
      distributed: false,
    },
  },
  grid: {
    padding: {
      top: 0,
      right: 0,
      bottom: 60,
      left: 0,
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: string, opt: { w: { globals: { labels: { [x: string]: string; }; }; }; dataPointIndex: string | number; }) {
      // Use actual data values for display - update these with your real data
      const actualValues = [100000000, 70, 0]; // Replace with your actual data: [Events, Alerts, Incidents]
      return opt.w.globals.labels[opt.dataPointIndex] + ': ' + actualValues[opt.dataPointIndex as number].toLocaleString();
    },
    style: {
      colors: ['#ffffff'],
      fontSize: '13px',
      fontWeight: '400',
      fontFamily: 'inherit',
    },
    dropShadow: {
      enabled: false,
    },
  },
  title: {
    text: '',
    align: 'middle',

  },

  xaxis: {
    categories: [
      'Events',
      'Alerts',
      'Incidents',
    ],

  },
  legend: {
    show: false,
  },
  colors: [
    '#5c67f7',
    '#5c67f7',
    '#5c67f7',
  ],
}

// Pyramid Chart

export const Pyramidseries = [
  {
    name: "",
    data: [200, 330, 548, 740, 880, 990, 1100, 1380],

  },
]
export const Pyramidoptions = {

  chart: {
    type: 'bar',
    height: 350,

  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      distributed: true,
      barHeight: '80%',
      isFunnel: true,
    },
  },
  colors: [
    'rgb(121, 97, 245)', '#f46ef4', '#fab632', '#28c8eb', '#fa4b42', '#85cc41', '#be2aed',
  ],
  dataLabels: {
    enabled: true,
    formatter: function (val: string, opt: { w: { globals: { labels: { [x: string]: string; }; }; }; dataPointIndex: string | number; }) {
      return opt.w.globals.labels[opt.dataPointIndex];
    },
    dropShadow: {
      enabled: true,
    },
  },
  title: {
    text: 'Pyramid Chart',
    align: 'middle',

  },

  xaxis: {
    categories: ['Sweets', 'Processed Foods', 'Healthy Fats', 'Meat', 'Beans & Legumes', 'Dairy', 'Fruits & Vegetables', 'Grains']

  },
  legend: {
    show: false,
  },

}