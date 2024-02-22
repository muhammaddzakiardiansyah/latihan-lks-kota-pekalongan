import { Chart } from "chart.js/auto";
import { useEffect } from "react";
import Navbar from "../../components/Fragments/Navbar";

const DataVote = () => {
  useEffect(() => {
    const ctx = document.getElementById("chart1");

    let chart1 = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Budianto", "Lionel messi", "Ronaldo"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 29, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chart1.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = document.getElementById("chart2");

    let chart2 = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Budianto", "Lionel messi", "Ronaldo"],
        datasets: [
          {
            label: "Perolehan suara",
            data: [12, 29, 3],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });

    return () => {
      chart2.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-20">
        <div className="mx-auto mb-20 w-[70vw] p-10 box-border rounded-lg bg-second">
          <h2 className="text-2xl font-semibold text-slate-400 mb-1">
            Data Grafik Batang
          </h2>
          <p className="mb-10 text-slate-500">
            Perolehan suara kandidat dengan grafik batang
          </p>
          <div className="chart1 h-[50vh] flex justify-center">
            <canvas id="chart1"></canvas>
          </div>
        </div>
        <div className="mx-auto mb-20 w-[70vw] p-10 box-border rounded-lg bg-second">
          <h2 className="text-2xl font-semibold text-slate-400 mb-1">
            Data Grafik Lingkaran
          </h2>
          <p className="mb-10 text-slate-500">
            Perolehan suara kandidat dengan grafik lingkaran
          </p>
          <div className="chart1 h-[50vh] flex justify-center">
            <canvas id="chart2"></canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataVote;
