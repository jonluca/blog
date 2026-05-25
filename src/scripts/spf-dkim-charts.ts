import Chart from "chart.js/auto";

function getContextById(id: string) {
  const context = document.querySelector<HTMLCanvasElement>(`#${id}`)?.getContext("2d");
  if (!context) {
    throw new Error(`Canvas with id ${id} not found`);
  }
  return context;
}

export function initializeSpfDkimCharts() {
  const options = { scales: { y: { beginAtZero: true } } };
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

  const render = (id: string, labels: string[], data: number[]) => {
    new Chart(getContextById(id), {
      type: "bar",
      data: {
        labels,
        datasets: [{ label: "# of Domains", data, backgroundColor, borderColor, borderWidth: 1 }],
      },
      options,
    });
  };

  render(
    "topDomainsSpf",
    ["SoftFail (INCLUDE)", "Fail (INCLUDE)", "Neutral", "Fail", "Neutral (INCLUDE)", "SoftFail"],
    [47, 26, 8, 7, 5, 3],
  );
  render(
    "fortuneSpf",
    ["SoftFail (INCLUDE)", "Fail (INCLUDE)", "SoftFail", "Fail", "Neutral (INCLUDE)", "Neutral"],
    [228, 134, 22, 15, 13, 7],
  );
  render("topDomainsDmarc", ["reject", "none", "quarantine"], [40, 27, 7]);
  render("fortuneDmarc", ["reject", "none", "quarantine"], [222, 74, 33]);
}
