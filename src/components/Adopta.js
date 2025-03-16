import { useState,useEffect  } from "react";
import banner from "../img/login.png";
import i18n from "../i18n/i18n";
import { useTranslation } from "react-i18next";

function Adopta() {
    const [robots, setRobots] = useState([]);
    const [robotDetail, setRobotDetail] = useState(null);
    const { t } = useTranslation();

    useEffect(()=>{
        const URL = "http://localhost:3001/robots";
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setRobots(data)

        });
    }, []);

    const handleRowClick = (robotId) => {
        fetch(`http://localhost:3001/robots/`+robotId)
            .then(response => response.json())
            .then(data => {
                setRobotDetail(data);
            });
    };

      return (
        <div >
            <h1>{t("title")}</h1>

            <hr class="linea"></hr>

            <div className="banner">
                    <img src={banner} alt="Login Banner"/>
            </div>

            <hr class="linea"></hr>
            <div className="row">
            <div className="col-md-8" >

            <table class="table">
            <thead class="table-dark">
                <tr>
                <th scope="col">ID</th>
                <th scope="col">{t("table.name")}</th>
                <th scope="col">{t("table.model")}</th>
                <th scope="col">{t("table.manufacturer")}</th>
                </tr>
            </thead>
            <tbody>
            {robots.map((robot) => (
                        <tr key={robot.id} onClick={() => handleRowClick(robot.id)} style={{ cursor: "pointer" }}>
                            <td> {robot.id} </td>
                            <td>  {robot.nombre}</td>
                            <td>{robot.modelo}</td>
                            <td>{robot.empresaFabricante}</td>
                        </tr>
                    ))}
            </tbody>

            </table>
            </div>
        

            <div className="col-md-4" >

            {robotDetail && (
            <div className="card lg p-3"  style={{ 
                width: "370px", 
                height: "470px", 
                backgroundColor:"#D9D9D980",
            }} >
                <h3 className="card-title text-center ">{robotDetail.nombre}</h3>
                {console.log(robotDetail.imagen)}
              <img src={robotDetail.imagen.replace("blob/", "raw/")} class="card-img-top" alt="..."
                  style={{ 
                    width: "100%", 
                    height: "200px", 
                    objectFit: "contain", 
                    display: "block"
                }}  />
            <div class="card-body">
                <p><strong>➜ {t("details.year")}:</strong> {robotDetail.añoFabricacion}</p>
                <p><strong>➜ {t("details.processingPower")}:</strong> {robotDetail.capacidadProcesamiento}</p>
                <p><strong>➜ {t("details.mood")}:</strong> {robotDetail.humor}</p>
            </div>
            </div>
            )}
            </div>

            </div>

            

            <p className="footer">
            Contact us:+57 3102105253 - info@robot-lovers.com @robot-lovers
            </p>
            
        </div>
        
    );

}

export default Adopta;