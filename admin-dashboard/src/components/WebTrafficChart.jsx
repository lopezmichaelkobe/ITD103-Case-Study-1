import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

function WebTrafficChart() {

    const [Users, setCards] = useState([]);  
    const [Users1, setCards1] = useState([]);
    const [Users2, setCards2] = useState([]);
    const [Users3, setCards3] = useState([]);
    const [Users4, setCards4] = useState([]);
    const [Users5, setCards5] = useState([]);
    const [Users6, setCards6] = useState([]);

    const fetchData = (endpoint, setter) => {
        fetch(`http://localhost:5000/${endpoint}`)
            .then(res => res.json())
            .then(users => {
                setter(users);
            })
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData('getProvincecityIligan', setCards);
        fetchData('getProvincecityCDO', setCards1);
        fetchData('getProvincecityLanaoDelNorte', setCards2);
        fetchData('getProvincecityBukidnon', setCards3);
        fetchData('getProvincecityMisamisOriental', setCards4);
        fetchData('getProvincecityMisamisOccidental', setCards5);
        fetchData('getProvincecityCamiguin', setCards6);
    }, []);

    useEffect(() => {
        const chartData = [
            { value: Users1.length, name: 'Iligan' },
            { value: Users2.length, name: 'CDO' },
            { value: Users5.length, name: 'LanaoDelNorte' },
            { value: Users.length, name: 'Bukidnon' },
            { value: Users4.length, name: 'MisamisOriental' },
            { value: Users3.length, name: 'MisamisOcciental' },
            { value: Users6.length, name: 'Camiguin' },
        ];

        const chartInstance = echarts.init(document.querySelector('#trafficChart'));
        chartInstance.setOption({
            tooltip: { trigger: 'item' },
            legend: { top: '5%', left: 'center' },
            series: [{
                name: 'Total Cars Borrowed',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: { show: false, position: 'center' },
                emphasis: {
                    label: { show: true, fontSize: '18', fontWeight: 'bold' },
                },
                labelLine: { show: false },
                data: chartData,
            }],
        });
    }, [Users, Users1, Users2, Users3, Users4, Users5, Users6]);

    return (
        <div id="trafficChart" style={{ minHeight: '480px' }}></div>
    );
}

export default WebTrafficChart;
