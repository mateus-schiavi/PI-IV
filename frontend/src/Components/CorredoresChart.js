import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CorredoresChart = () => {
    const [corredores, setCorredores] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/corredores/")
            .then((response) => setCorredores(response.data))
            .catch((error) => console.error(error))
    }, []);

    const faixaIdadeCount = {
        "18 a 24": 0,
        "25 a 34": 0,
        "35 a 44": 0,
        "45 a 64": 0,
        "55 a 64": 0,
        "65+": 0
    };

    corredores.forEach(c => {
        if (faixaIdadeCount[c.idade] !== undefined) faixaIdadeCount[c.idade]++;
    });

    const data = {
        labels: Object.keys(faixaIdadeCount),
        datasets: [
            {
                label: "Número de Corredores por faixa Etária",
                data: Object.values(faixaIdadeCount),
                backgroundColor: "rgba(75,192,192,0.6)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Distribuição de Corredores por Faixa Etária",
            },
        },
    };

    return (
        <>
        <Bar data={data} options={options} />:
        </>
    )
};

export default CorredoresChart;