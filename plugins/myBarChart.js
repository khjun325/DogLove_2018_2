export default function(elementName) {
    var container = document.getElementById(elementName);
    var data = {
      categories: ['2020','2030','2040','2050','2060'], //x축
      series: [{
        name: '목표 달성치',
        data: ["40", "60", "70", "100", "100"]
      },{
        name: '행복 지수',
        data: ["50", "90", "80", "60", "100"]
      }
    ]  //y축이 두개인걸 확인가능
    };
    tui.chart.lineChart(container, data);
};