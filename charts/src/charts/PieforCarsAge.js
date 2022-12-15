import React from 'react';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    ArcElement
);

// const data = {
//     datasets: [{
//         data: [10, 20, 30],
//         backgroundColor: [
//             'green',
//             'yellow',
//             'blue'
//         ]
//     },
//     ],
//     labels: [
//         'Red',
//         'Yellow',
//         'Blue'
//     ]
// };

const options = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: "3.Pie chart for their car's age on the basis of the user names",
        },
    },
};

const PieForCarsAge = () => {
    const [data, setData] = useState({
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: [
                    'green',
                    'yellow',
                    'blue'
                ]
            },
            ],
            labels: [
                'green',
                'yellow',
                'blue'
            ]
        });
    useEffect(() => {
        const fetchData = async()=> {
            const url = "http://localhost:3004/user"
            
            const label = [];
            const data = [];
            
            await fetch(url).then((data)=>{
                console.log("Api data", data)
                const res = data.json();
                return res
            }).then((res)=> {
                console.log("result", res)
                for(const val of res) {
                    label.push(val.name)
                    data.push(val.carAge)
                }
                console.log("arrData", data);
                setData({
                    datasets: [{
                        data: data,
                        backgroundColor: [
                            'green',
                            'yellow',
                            'blue'
                        ]
                    },
                    ],
                    labels: label,
                })
            }).catch(e => {
                console.log("error", e)
            })
        }
        fetchData();
    },[])
    return (
        <div style={{height:'500', width:'600'}}><Pie data={data} options={options} /></div>
    )
}

export default PieForCarsAge;