import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { robots } from "../data/robots";

function DetailRobot() {
    const { id } = useParams();
    const robot = robots.find((robt) => robt.id === parseInt(id));

  return (
    <div>
        <h1>{robot.nombre}</h1>
        
    </div>
  );
}

export default DetailRobot;