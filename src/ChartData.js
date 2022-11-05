const ChartData = [
    {
      labels: ["2022-10-20T10:46:54", "2022-10-20T10:47:53", "2022-10-20T10:48:22"],
  datasets: [
    {
      label: "Heart Rate",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [100,90,100],
    },
    {
      label: "Temperature",
      backgroundColor: "blue",
      borderColor: "blue",
      data: [35,37,40],
    }
  ]
},
{
      labels:["2022-10-20T10:46:54", "2022-10-20T10:47:53", "2022-10-20T10:48:22"],
      datasets: [
        {
          label: "SPO2",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [100,100,100],
        },
        {
          label: "PI",
          backgroundColor: "blue",
          borderColor: "blue",
          data: [6,10,2],
        }
      ],
    }
]
export default ChartData;