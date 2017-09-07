class AnalyticsContent extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    let Line = window['react-chartjs'].Line;

    const chartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          pointHoverRadius: 5,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
          spanGaps: false,
        }
      ]
    };

    return (
      <Line data={chartData}/>
    );
  }
}

