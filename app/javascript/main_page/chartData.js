export const CHART_CONFIG = {
  donut: {
   bindto: '#chart-pf-donut',
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
  line: {
    bindto: "#chart-pf-sparkline",
    data:  {
      columns: [
        ['%', 10, 50, 28, 20, 31, 27, 60, 36, 52, 55, 62, 68, 69, 88, 74, 88, 95],
      ],
      type: 'area'
    }
  },
};


