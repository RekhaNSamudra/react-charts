import React from 'react';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// const labels = ['air', 'bar', 'car']
// const data = {
//     labels,
//     datasets: [
//         {
//         label: 'Dataset 1',
//         data: [1, 2, 3, 4, 5],
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         },
//     ],
// };

const options = {
    maintainAspectRatio: true,
    indexAxis: 'x',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: '1. Bar chart according to which country users belong',
        },
    },
};

const Barchart = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
            label: 'Dataset 1',
            data: [],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 1',
                data: [],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    });
    useEffect(() => {
        const fetchData = async()=> {
            const url = "http://localhost:3004/user"
            const labelSet = [];
            const dataSet1 = [];
            const dataSet2 = [];
            await fetch(url).then((data)=>{
                console.log("Api data", data)
                const res = data.json();
                return res
            }).then((res)=> {
                console.log("result", res)
                for(const val of res) {
                    labelSet.push(val.name)
                    dataSet1.push(val.country)
                    dataSet2.push(val.id)
                }
                console.log("arrData", dataSet1, dataSet2);
                setData({
                    labels: labelSet,
                    datasets: [
                        {
                        label: 'Country',
                        data: dataSet1,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                        {
                            label: 'name',
                            data: dataSet2,
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        },
                    ],
                })
            }).catch(e => {
                console.log("error", e)
            })
        }
        fetchData();
    },[])
    return (
        <div><Bar data={data} options={options} height={300} width={300}/></div>
    )
}

export default Barchart;