import { useEffect, useState } from "react"
import axios from "axios";

export function Nasa(){
    const[weatherObj, setWeatherObj] = useState({});

    function LoadData(){
        axios.get('https://api.nasa.gov/insight_weather/?api_key=Pc91abIouemFUUsth6dbv2woLhLkFFHtkkeyiRXw&feedtype=json&ver=1.0')
        .then(response=>{
                         setWeatherObj(response.data);
                        })
    }

    useEffect(()=>{
     LoadData();
    },[])
    return(
        <div className="container-fluid">
            <h2>Mars Rover Photos Table</h2>
            {/* <table className="table table-hover">
                <thead>
                    <tr>
                       <th className="bi bi-key">SOL-Martian day</th>
                       <th className="bi bi-thermometer">Atmospheric Temperature</th>
                       <th className="bi bi-wind">Horizontal Wind Speed</th>
                       <th>Season</th>
                       <th>First_UTC</th>
                       <th>Last_UTC</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(weatherObj).filter(key => key !== "sol_keys" && key !== "validity_checks")
                        .map(sol=>
                            <tr key={sol}>
                                <td>{sol}</td>
                                <td>{weatherObj[sol].AT.av}</td>
                                <td>{weatherObj[sol].HWS.av}</td>
                                <td>{weatherObj[sol].Season}</td>
                                <td>{weatherObj[sol].First_UTC}</td>
                                <td>{weatherObj[sol].Last_UTC}</td>
                            </tr>

                        )
                    }
                </tbody>
            </table> */}
            <main className="d-flex flex-wrap">{
                Object.keys(weatherObj).filter(key => key !== "sol_keys" && key !== "validity_checks")
                        .map(sol=>
                        <div key={sol} className="card m-2 p-2">
                            <div className="card-header fs-10 fw-bold">{sol}</div>
                            <div className="card-body">
                                <dl>
                                    <dt>Atmospheric Temperature</dt>
                                    <dd>{weatherObj[sol].AT.av}</dd>
                                    <dt>Horizontal Wind Speed</dt>
                                    <dd>{weatherObj[sol].HWS.av}</dd>
                                    <dt>Season</dt>
                                    <dd>{weatherObj[sol].Season}</dd>
                                    <dt>First_UTC</dt>
                                    <dd>{weatherObj[sol].First_UTC}</dd>
                                    <dt>Last_UTC</dt>
                                    <dd>{weatherObj[sol].Last_UTC}</dd>
                                </dl>
                            </div>
                        </div>

                        )
                    }
            </main>

        </div>
    )
}