const HEIGHT = 200;
const WIDTH = 300;
const CHART_URLS = [
  'https://www.google.com',
  'https://www.yahoo.com',
  'https://www.bing.com/',
  'https://duckduckgo.com/'
];
const CATEGORIES = ['Q1', 'Q2', 'Q3', 'Q4'];

/* ======================== Line charts ======================== */
const line1 = {
  config: {
    bindto: "#chart-ex-1",
    size: {
      height: HEIGHT,
      width: WIDTH,
    },
    data:  {
      columns: [
        ['%', 10, 50, 28, 20, 31, 27, 60, 36, 52, 55, 62, 68, 69, 88, 74, 88, 95],
      ],
      type: 'area'
    }
  },
  callback: null,
};

const line2 = {
  config: {
    bindto: '#chart-ex-2',
    size: {
      height: HEIGHT,
      width: WIDTH,
    },
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    }
  },
  callback: (chart) =>
  {
    setTimeout(function () {
      chart.load({
        columns: [
          ['data1', 230, 190, 300, 500, 300, 400]
        ]
      });
    }, 1000);

    setTimeout(function () {
      chart.load({
        columns: [
          ['data3', 130, 150, 200, 300, 200, 100]
        ]
      });
    }, 1500);

    setTimeout(function () {
      chart.unload({
        ids: 'data1'
      });
    }, 2000);
  },
};

/* ======================== Donut charts ======================== */
const donut1 = {
  config: {
    ...$().c3ChartDefaults().getDefaultDonutConfig(),
    size: {
      height: HEIGHT,
      width: WIDTH,
    },
    bindto: '#chart-ex-3',
    data: {
      type: "donut",
      columns: [
        ["Used", 95],
        ["Available", 5]
      ],
      groups: [
        ["used", "available"]
      ],
      order: null
    },
    color: {
      pattern: ["#cc0000","#D1D1D1"]
    },
    tooltip: {
      contents: (d) => {
        return '<span class="donut-tooltip-pf" style="white-space: nowrap;">' +
          Math.round(d[0].ratio * 100) + '%' + ' MHz ' + d[0].name +
          '</span>';
      }
    },
  },
  callback: () =>
  {
    let donutChartTitle = d3.select("#chart-ex-3").select('text.c3-chart-arcs-title');
    donutChartTitle.text("");
    donutChartTitle.insert('tspan').text("950").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
    donutChartTitle.insert('tspan').text("Mhz Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);
  },
};

/* ======================== Vertical bar charts ======================== */
const vBarChart = {
  config: {
    ...$().c3ChartDefaults().getDefaultBarConfig(CATEGORIES),
    size: {
      height: HEIGHT,
      width: WIDTH,
    },
    bindto: "#chart-ex-4",
    axis: {
      x: {
        categories: CATEGORIES,
        type: 'category'
      }
    },
    data: {
      type: 'bar',
      columns: [
        ['data1', 400, 360, 320, 175]
      ],
      // optional drilldown behavior
      onclick: function (d) {
        window.location = CHART_URLS[d.index];
      }
    },
  },
  callback: null,
};

const groupedVBarChart = {
  config: {
    ...$().c3ChartDefaults().getDefaultGroupedBarConfig(),
    bindto: '#chart-ex-5',
    axis: {
      x: {
        categories: ['2013', '2014', '2015'],
        type: 'category'
      }
    },
    data: {
      type: 'bar',
      columns: [
        ['Q1', 400, 250, 375],
        ['Q2', 355, 305, 300],
        ['Q3', 315, 340, 276],
        ['Q4', 180, 390, 190]
      ],
      // optional drilldown behavior
      onclick: function (d) {
        window.location = CHART_URLS[d.index];
      }
    },
    color: {
      pattern: [
        $.pfPaletteColors.red,
        $.pfPaletteColors.blue,
        $.pfPaletteColors.orange,
        $.pfPaletteColors.green
      ]
    },
  },
  callback: null,
};

/* ======================== Horizontal bar charts ======================== */
const hBarChart = {
  config: {
    ...$().c3ChartDefaults().getDefaultBarConfig(CATEGORIES),
    bindto: '#chart-ex-6',
    axis: {
      rotated: true,
      x: {
        categories: CATEGORIES,
        type: 'category'
      }
    },
    data: {
      type: 'bar',
      columns: [
        ['data1', 400, 360, 320, 175]
      ],
      // optional drilldown behavior
      onclick: function (d) {
        window.location = CHART_URLS[d.index];
      }
    },



  },
  callback: null,
};

const groupedHBarChart = {
  config: {
    ...$().c3ChartDefaults().getDefaultGroupedBarConfig(),
    bindto: '#chart-ex-7',
    axis: {
      rotated: true,
      x: {
        categories: ['2013', '2014', '2015'],
        type: 'category'
      }
    },
    data: {
      type: 'bar',
      columns: [
        ['Q1', 400, 250, 375],
        ['Q2', 355, 305, 300],
        ['Q3', 315, 340, 276],
        ['Q4', 180, 390, 190]
      ],
      // optional drilldown behavior
      onclick: function (d) {
        window.location = CHART_URLS[d.index];
      }
    },
    color: {
      pattern: [
        $.pfPaletteColors.red,
        $.pfPaletteColors.blue,
        $.pfPaletteColors.orange,
        $.pfPaletteColors.green
      ]
    },
  },
  callback: null,
};

export const CONF = {
  donut1, line1, line2, vBarChart, groupedVBarChart, hBarChart, groupedHBarChart
};

