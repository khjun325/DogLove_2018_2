export default function(elementName) {
    var container = document.getElementById(elementName);
    var data = {
      categories: ['2012','2014','2016','2018','2020'], //x축
      series: [{
        name: '시장 규모 (억원)',
        data: [9000, 14000, 23000, 37000, 58000]
      },{
        name: '애견 인구(명)',
        data: [8000, 10000, 20000, 20000, 50000]
      }]  //y축이 두개인걸 확인가능
    };
    tui.chart.barChart(container, data);
};