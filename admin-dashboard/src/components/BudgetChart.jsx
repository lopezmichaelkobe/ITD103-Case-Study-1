import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

function BudgetChart() {
    const [iligan1, setIligan1] = useState([]);
    const [iligan2, setIligan2] = useState([]);
    const [iligan3, setIligan3] = useState([]);
    const [cdo1, setCdo1] = useState([]);
    const [cdo2, setCdo2] = useState([]);
    const [cdo3, setCdo3] = useState([]);
    const [lanaodelnorte1, setLanaodelnorte1] = useState([]);
    const [lanaodelnorte2, setLanaodelnorte2] = useState([]);
    const [lanaodelnorte3, setLanaodelnorte3] = useState([]);
    const [bukidnon1, setBukidnon1] = useState([]);
    const [bukidnon2, setBukidnon2] = useState([]);
    const [bukidnon3, setBukidnon3] = useState([]);
    const [misamisoriental1, setMisamisoriental1] = useState([]);
    const [misamisoriental2, setMisamisoriental2] = useState([]);
    const [misamisoriental3, setMisamisoriental3] = useState([]);
    const [misamisoccidental1, setMisamisoccidental1] = useState([]);
    const [misamisoccidental2, setMisamisoccidental2] = useState([]);
    const [misamisoccidental3, setMisamisoccidental3] = useState([]);
    const [camiguin1, setCamiguin1] = useState([]);
    const [camiguin2, setCamiguin2] = useState([]);
    const [camiguin3, setCamiguin3] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all([
                    fetch("http://localhost:5000/getProvincecityIligan1"),
                    fetch("http://localhost:5000/getProvincecityIligan2"),
                    fetch("http://localhost:5000/getProvincecityIligan3"),
                    fetch("http://localhost:5000/getProvincecityCDO1"),
                    fetch("http://localhost:5000/getProvincecityCDO2"),
                    fetch("http://localhost:5000/getProvincecityCDO3"),
                    fetch("http://localhost:5000/getProvincecityLanaoDelNorte1"),
                    fetch("http://localhost:5000/getProvincecityLanaoDelNorte2"),
                    fetch("http://localhost:5000/getProvincecityLanaoDelNorte3"),
                    fetch("http://localhost:5000/getProvincecityBukidnon1"),
                    fetch("http://localhost:5000/getProvincecityBukidnon2"),
                    fetch("http://localhost:5000/getProvincecityBukidnon3"),
                    fetch("http://localhost:5000/getProvincecityMisamisOriental1"),
                    fetch("http://localhost:5000/getProvincecityMisamisOriental2"),
                    fetch("http://localhost:5000/getProvincecityMisamisOriental3"),
                    fetch("http://localhost:5000/getProvincecityMisamisOccidental1"),
                    fetch("http://localhost:5000/getProvincecityMisamisOccidental2"),
                    fetch("http://localhost:5000/getProvincecityMisamisOccidental3"),
                    fetch("http://localhost:5000/getProvincecityCamiguin1"),
                    fetch("http://localhost:5000/getProvincecityCamiguin2"),
                    fetch("http://localhost:5000/getProvincecityCamiguin3"),
                ]);

                const data = await Promise.all(responses.map(res => res.json()));
                setIligan1(data[0]);
                setIligan2(data[1]);
                setIligan3(data[2]);
                setCdo1(data[3]);
                setCdo2(data[4]);
                setCdo3(data[5]);
                setLanaodelnorte1(data[6]);
                setLanaodelnorte2(data[7]);
                setLanaodelnorte3(data[8]);
                setBukidnon1(data[9]);
                setBukidnon2(data[10]);
                setBukidnon3(data[11]);
                setMisamisoriental1(data[12]);
                setMisamisoriental2(data[13]);
                setMisamisoriental3(data[14]);
                setMisamisoccidental1(data[15]);
                setMisamisoccidental2(data[16]);
                setMisamisoccidental3(data[17]);
                setCamiguin1(data[18]);
                setCamiguin2(data[19]);
                setCamiguin3(data[20]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        echarts.init(document.querySelector('#budgetChart')).setOption({
            legend: {
                data: ['Diesel', 'Gasoline', 'Electric'],
            },
            radar: {
                shape: 'circle',
                indicator: [
                    { name: 'Iligan', max: 5 },
                    { name: 'CDO', max: 5 },
                    { name: 'LanaoDelNorte', max: 5 },
                    { name: 'Bukidnon', max: 5 },
                    { name: 'MisamisOriental', max: 5 },
                    { name: 'MisamisOccidental', max: 5 },
                    { name: 'Camiguin', max: 5 },
                ],
            },
            series: [
                {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                        { value: [iligan1.length, cdo1.length, lanaodelnorte1.length, bukidnon1.length, misamisoriental1.length, misamisoccidental1.length, camiguin1.length], name: 'Diesel' },
                        { value: [iligan2.length, cdo2.length, lanaodelnorte2.length, bukidnon2.length, misamisoriental2.length, misamisoccidental2.length, camiguin2.length], name: 'Gasoline' },
                        { value: [iligan3.length, cdo3.length, lanaodelnorte3.length, bukidnon3.length, misamisoriental3.length, misamisoccidental3.length, camiguin3.length], name: 'Electric' },
                    ],
                },
            ],
        });
    }, [iligan1, iligan2, iligan3, cdo1, cdo2, cdo3, lanaodelnorte1, lanaodelnorte2, lanaodelnorte3, bukidnon1, bukidnon2, bukidnon3, misamisoriental1, misamisoriental2, misamisoriental3, misamisoccidental1, misamisoccidental2, misamisoccidental3, camiguin1, camiguin2, camiguin3]);

    return (
        <div
            id="budgetChart"
            style={{ minHeight: '400px' }}
            className='echart'
        ></div>
    );
}

export default BudgetChart;
