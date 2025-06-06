import React from "react";
import ReactApexChart from "react-apexcharts";

function ApexChart({series, width, height}) {

    const options = {
        chart: { sparkline: { enabled: !0 } },
        dataLabels: { enabled: !1 },
        colors: ["#404079"],
        plotOptions: {
          radialBar: {
            hollow: { margin: 0, size: "50%" },
            track: { margin: 0 },
            dataLabels: { show: !1 },
          },
        },
      };


  return (
    <ReactApexChart
      options={options}
      series={[series]}
      type="radialBar"
      height={height}
      width={width}
      className="apex-charts"
    />
  );
}

export default ApexChart;
