"use client";
import { useEffect } from "react";
import { Chart } from "chart.js";

const getContextById = (id: string) => {
  const canvas = document.getElementById(id) as HTMLCanvasElement | null;
  if (!canvas) {
    throw new Error(`Canvas with id ${id} not found`);
  }
  return canvas.getContext("2d")!;
};
export const SpfDkimCharts = () => {
  useEffect(() => {
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
    const borderColor = [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
    ];
    const backgroundColor = [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(255, 159, 64, 0.2)",
    ];
    new Chart(getContextById("topDomainsSpf"), {
      type: "bar",
      data: {
        labels: ["SoftFail (INCLUDE)", "Fail (INCLUDE)", "Neutral", "Fail", "Neutral (INCLUDE)", "SoftFail"],
        datasets: [
          {
            label: "# of Domains",
            data: [47, 26, 8, 7, 5, 3],
            backgroundColor,
            borderColor,
            borderWidth: 1,
          },
        ],
      },
      options,
    });

    new Chart(getContextById("fortuneSpf"), {
      type: "bar",
      data: {
        labels: ["SoftFail (INCLUDE)", "Fail (INCLUDE)", "SoftFail", "Fail", "Neutral (INCLUDE)", "Neutral"],
        datasets: [
          {
            label: "# of Domains",
            data: [228, 134, 22, 15, 13, 7],
            backgroundColor,
            borderColor,
            borderWidth: 1,
          },
        ],
      },
      options,
    });

    new Chart(getContextById("topDomainsDmarc"), {
      type: "bar",
      data: {
        labels: ["reject", "none", "quarantine"],
        datasets: [
          {
            label: "# of Domains",
            data: [40, 27, 7],
            backgroundColor,
            borderColor,
            borderWidth: 1,
          },
        ],
      },
      options,
    });
    new Chart(getContextById("fortuneDmarc"), {
      type: "bar",
      data: {
        labels: ["reject", "none", "quarantine"],
        datasets: [
          {
            label: "# of Domains",
            data: [222, 74, 33],
            backgroundColor,
            borderColor,
            borderWidth: 1,
          },
        ],
      },
      options,
    });
  }, []);
  return null;
};
