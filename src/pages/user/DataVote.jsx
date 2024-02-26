import { Chart } from "chart.js/auto";
import { useEffect, useState } from "react";
import Navbar from "../../components/Fragments/Navbar";
import axios from "axios";

const DataVote = () => {
  const [data, setData] = useState({
    data_01: "",
    data_02: "",
  });
 
  useEffect(() => {
    Promise.all([
      axios.get(
        "http://localhost:3001/api/v1/votes/3e7080f8-d78a-47cc-830b-202a4fff593a"
      ),
      axios.get(
        "http://localhost:3001/api/v1/votes/e1de0647-a5d8-45af-8317-dac5d5448847"
      ),
    ]).then((response) => {
      const [res1, res2] = response;
      setData((prevState) => ({
        ...prevState,
        data_01: res1.data.body.data,
        data_02: res2.data.body.data,
      }));
    });
  }, []);

  useEffect(() => {
    const ctx1 = document.getElementById("chart1");
    const ctx2 = document.getElementById("chart2");

    let chart1 = new Chart(ctx1, {
      type: "bar",
      data: {
        labels: ["Firman Tidore", "Daka Andrian Maulana"],
        datasets: [
          {
            label: "Perolehan suara",
            data: [data.data_01.total_vote, data.data_02.total_vote],
            borderWidth: 2,
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

    let chart2 = new Chart(ctx2, {
      type: "doughnut",
      data: {
        labels: ["Firman Tidore", "Daka Andrian Maulana"],
        datasets: [
          {
            label: "Perolehan suara",
            data: [data.data_01.total_vote, data.data_02.total_vote],
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
      chart1.destroy();
      chart2.destroy();
    };
  }, [data]);

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
