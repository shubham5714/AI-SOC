
// Funnel Chart

export const Funnelseries = [
  {
    name: "Funnel Series",
    data: [1380, 1100, 990, 880, 740, 548, 330, 200],

  },
]
export const Funneloptions = {
  chart: {
    type: 'bar',
    height: 350,

  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      barHeight: '80%',
      isFunnel: true,
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: string, opt: { w: { globals: { labels: { [x: string]: string; }; }; }; dataPointIndex: string | number; }) {
      return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
    },
    dropShadow: {
      enabled: true,
    },
  },
  title: {
    text: 'Recruitment Funnel',
    align: 'middle',

  },

  xaxis: {
    categories: [
      'Sourced',
      'Screened',
      'Assessed',
      'HR Interview',
      'Technical',
      'Verify',
      'Offered',
      'Hired',
    ],

  },
  legend: {
    show: false,
  },
  colors: [
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
    formatter: function (val: string, opt: number[]) {
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