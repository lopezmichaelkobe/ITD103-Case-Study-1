import React, {useState, useEffect}from 'react';

function Test() {




        /*Budget Chart*/
    const[iligan1, setiligan1] = useState([])
    const[iligan2, setiligan2] = useState([])
    const[iligan3, setiligan3] = useState([])

    const[cdo1, setcdo1] = useState([])
    const[cdo2, setcdo2] = useState([])
    const[cdo3, setcdo3] = useState([])

    const[lanaodelnorte1, setlanaodelnorte1] = useState([])
    const[lanaodelnorte2, setlanaodelnorte2] = useState([])
    const[lanaodelnorte3, setlanaodelnorte3] = useState([])

    const[bukidnon1, setbukidnon1] = useState([])
    const[bukidnon2, setbukidnon2] = useState([])
    const[bukidnon3, setbukidnon3] = useState([])

    const[misamisoriental1, setmisamisoriental1] = useState([])
    const[misamisoriental2, setmisamisoriental2] = useState([])
    const[misamisoriental3, setmisamisoriental3] = useState([])

    const[misamisoccidental1, setmisamisoccidental1] = useState([])
    const[misamisoccidental2, setmisamisoccidental2] = useState([])
    const[misamisoccidental3, setmisamisoccidental3] = useState([])

    const[camiguin1, setcamiguin1] = useState([])
    const[camiguin2, setcamiguin2] = useState([])
    const[camiguin3, setcamiguin3] = useState([])


    /* ReportChart */

    


     /*BudgetChart: */

            /*Iligan: */
      const fetchData7 =() =>{
        fetch ("http://localhost:5000/getProvincecityIligan1")
        .then(res =>res.json())
        .then(iligan1 => {
          console.log(iligan1);
          setiligan1(iligan1);
        })
        .catch(e => console.log(e.message));
      };

      const fetchData8 =() =>{
        fetch ("http://localhost:5000/getProvincecityIligan2")
        .then(res =>res.json())
        .then(iligan2 => {
          console.log(iligan2);
          setiligan2(iligan2);
        })
        .catch(e => console.log(e.message));
      };

      const fetchData9 =() =>{
        fetch ("http://localhost:5000/getProvincecityIligan3")
        .then(res =>res.json())
        .then(iligan3 => {
          console.log(iligan3);
          setiligan3(iligan3);
        })
        .catch(e => console.log(e.message));
      };



            /*CDO: */
            const fetchData10 =() =>{
                fetch ("http://localhost:5000/getProvincecityCDO1")
                .then(res =>res.json())
                .then(cdo1 => {
                  console.log(cdo1);
                  setcdo1(cdo1);
                })
                .catch(e => console.log(e.message));
              };
        
              const fetchData11 =() =>{
                fetch ("http://localhost:5000/getProvincecityCDO2")
                .then(res =>res.json())
                .then(cdo2 => {
                  console.log(cdo2);
                  setcdo2(cdo2);
                })
                .catch(e => console.log(e.message));
              };
        
              const fetchData12 =() =>{
                fetch ("http://localhost:5000/getProvincecityCDO3")
                .then(res =>res.json())
                .then(cdo3 => {
                  console.log(cdo3);
                  setcdo3(cdo3);
                })
                .catch(e => console.log(e.message));
              };



                 /*LanaoDelNorte: */
            const fetchData13 =() =>{
                fetch ("http://localhost:5000/getProvincecityLanaoDelNorte1")
                .then(res =>res.json())
                .then(lanaodelnorte1 => {
                  console.log(lanaodelnorte1);
                  setlanaodelnorte1(lanaodelnorte1);
                })
                .catch(e => console.log(e.message));
              };
        
              const fetchData14 =() =>{
                fetch ("http://localhost:5000/getProvincecityLanaoDelNorte2")
                .then(res =>res.json())
                .then(lanaodelnorte2 => {
                  console.log(lanaodelnorte2);
                  setlanaodelnorte2(lanaodelnorte2);
                })
                .catch(e => console.log(e.message));
              };
        
              const fetchData15 =() =>{
                fetch ("http://localhost:5000/getProvincecityLanaoDelNorte3")
                .then(res =>res.json())
                .then(lanaodelnorte3 => {
                  console.log(lanaodelnorte3);
                  setlanaodelnorte3(lanaodelnorte3);
                })
                .catch(e => console.log(e.message));
              };



            /*Bukidnon: */
            const fetchData16 = () => {
            fetch("http://localhost:5000/getProvincecityBukidnon1")
              .then(res => res.json())
              .then(bukidnon1Data => {
            console.log(bukidnon1Data);
            setbukidnon1(bukidnon1Data); // Update state with fetched data
             })
        .catch(e => console.log(e.message));
        };

        const fetchData17 = () => {
            fetch("http://localhost:5000/getProvincecityBukidnon2")
                .then(res => res.json())
                .then(bukidnon2Data => {
                    console.log(bukidnon2Data);
                    setbukidnon2(bukidnon2Data); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };

        const fetchData18 = () => {
            fetch("http://localhost:5000/getProvincecityBukidnon3")
                .then(res => res.json())
                .then(bukidnon3Data => {
                    console.log(bukidnon3Data);
                    setbukidnon3(bukidnon3Data); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };



         /*MisamisOriental: */
         const fetchData19 = () => {
            fetch("http://localhost:5000/getProvincecityMisamisOriental1")
              .then(res => res.json())
              .then(misamisoriental1Data => {
            console.log(misamisoriental1Data);
            setmisamisoriental1(misamisoriental1Data); // Update state with fetched data
             })
        .catch(e => console.log(e.message));
        };

        const fetchData20 = () => {
            fetch("http://localhost:5000/getProvincecityMisamisOriental2")
                .then(res => res.json())
                .then(misamisoriental2Data => {
                    console.log(misamisoriental2Data);
                    setmisamisoriental2(misamisoriental2Data); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };

        const fetchData21 = () => {
            fetch("http://localhost:5000/getProvincecityMisamisOriental3")
                .then(res => res.json())
                .then(misamisoriental3 => {
                    console.log(misamisoriental3);
                    setmisamisoriental3(misamisoriental3); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };


        /*MisamisOccidental: */
        const fetchData22 = () => {
            fetch("http://localhost:5000/getProvincecityMisamisOccidental1")
              .then(res => res.json())
              .then(misamisoccidental1Data => {
            console.log(misamisoccidental1Data);
            setmisamisoccidental1(misamisoccidental1Data); // Update state with fetched data
             })
        .catch(e => console.log(e.message));
        };

        const fetchData23 = () => {
            fetch("http://localhost:5000/getProvincecityMisamisOccidental2")
                .then(res => res.json())
                .then(misamisoccidental2Data => {
                    console.log(misamisoccidental2Data);
                    setmisamisoccidental2(misamisoccidental2Data); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };

        const fetchData24 = () => {
            fetch("http://localhost:5000/getProvincecityMisamisOccidental3")
                .then(res => res.json())
                .then(misamisoccidental3 => {
                    console.log(misamisoccidental3);
                    setmisamisoccidental3(misamisoccidental3); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };



               /*Camiguin: */
        const fetchData25 = () => {
            fetch("http://localhost:5000/getProvincecityCamiguin1")
              .then(res => res.json())
              .then(camiguin1Data => {
            console.log(camiguin1Data);
            setcamiguin1(camiguin1Data); // Update state with fetched data
             })
        .catch(e => console.log(e.message));
        };

        const fetchData26 = () => {
            fetch("http://localhost:5000/getProvincecityCamiguin2")
                .then(res => res.json())
                .then(camiguin2Data => {
                    console.log(camiguin2Data);
                    setcamiguin2(camiguin2Data); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };

        const fetchData27 = () => {
            fetch("http://localhost:5000/getProvincecityCamiguin3")
                .then(res => res.json())
                .then(camiguin3 => {
                    console.log(camiguin3);
                    setcamiguin3(camiguin3); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };



      



      useEffect(() => {

        /*Power Chart*/
        /* 1- Diesel */
        /* 2- Gasoline */
        /* 3- Electric */
        fetchData7();
        fetchData8();
        fetchData9();

        fetchData10();
        fetchData11();
        fetchData12();

        fetchData13();
        fetchData14();
        fetchData15();

        fetchData16();
        fetchData17();
        fetchData18();

        fetchData19();
        fetchData20();
        fetchData21();


        fetchData22();
        fetchData23();
        fetchData24();

        fetchData25();
        fetchData26();
        fetchData27();







      }, []);
    
    

  return (
    
    <div>

        <h1>Total Rented Cars every City/Province based on Power (BudgetChart):</h1>
        <h1>Total Iligan(Diesel): {iligan1.length}</h1>
        <h1>Total Iligan(Gasoline): {iligan2.length}</h1>
        <h1>Total Iligan(Electric): {iligan3.length}</h1>

        <h1>Total CDO(Diesel): {cdo1.length}</h1>
        <h1>Total CDO(Gasoline): {cdo2.length}</h1>
        <h1>Total CDO(Electric): {cdo3.length}</h1>

        <h1>Total Lanao Del Norte(Diesel): {lanaodelnorte1.length}</h1>
        <h1>Total Lanao Del Norte(Gasoline): {lanaodelnorte2.length}</h1>
        <h1>Total Lanao Del Norte(Electric): {lanaodelnorte3.length}</h1>

        <h1>Total Bukidnon(Diesel): {bukidnon1.length}</h1>
        <h1>Total Bukidnon(Gasoline): {bukidnon2.length}</h1>
        <h1>Total Bukidnon(Electric): {bukidnon3.length}</h1>

        <h1>Total Misamis Oriental(Diesel): {misamisoriental1.length}</h1>
        <h1>Total Misamis Oriental(Gasoline): {misamisoriental2.length}</h1>
        <h1>Total Misamis Oriental(Electric): {misamisoriental3.length}</h1>

        <h1>Total Misamis Occidental(Diesel): {misamisoccidental1.length}</h1>
        <h1>Total Misamis Occidental(Gasoline): {misamisoccidental2.length}</h1>
        <h1>Total Misamis Occidental(Electric): {misamisoccidental3.length}</h1>

        
        <h1>Total Camiguin(Diesel): {camiguin1.length}</h1>
        <h1>Total Camiguin(Gasoline): {camiguin2.length}</h1>
        <h1>Total Camiguin(Electric): {camiguin3.length}</h1>

    
    
    
    </div>
  )
}

export default Test