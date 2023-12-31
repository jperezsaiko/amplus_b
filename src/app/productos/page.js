import React from "react";
import ui from "./styles.module.css";
import SocialMedia from "../atoms/SocialMedia";
import GrupoSaikoSocialMedia from "../molecules/GrupoSaikoSocialMedia";

export default function Productos() {

  return <div style={{
    width:"100%",
    height:"100%"
  }}>
          <video style={{
            objectFit:"cover",
            width:"100%",
    height:"100%"
          }} autoPlay loop muted>
        <source src='/Productos 4.0.mp4' type="video/mp4"/>
      </video>
  </div>


  return (
    <div className={ui.container}>
      <div className={ui.flyer1}>
        <div className={ui.headerFlyer1}>
          <img
            className={ui.bgHeaderFlyer1}
            src="/bgf.png"
            alt="fondo_flyer_praxia"
          />

          <div className={ui.praxiaVideo}>
            <video controls poster="/play.png">
              <source src="/praxia.mov"></source>
            </video>
          </div>

          <div className={ui.title}>
            <h1>Sistema de administración</h1>
            <h2>No trabajes para el sistema, Praxia trabaja para ti</h2>
          </div>
        </div>

        <div className={ui.contentFlyer1}>
          <div>
            <p>
              El propósito de Praxia es ser una solución administrativa sencilla
              para gestionar los procesos de tu negocio, facilitando el acceso a
              información confiable y adecuada para la toma de decisiones;
              respondiendo ágil y oportunamente a los requerimiento operativo y
              estratégicos de la organización
            </p>
          </div>

          <ul>
            <li>Ideal para cualquier empresa comercial y/o servicio</li>
            <li>Cumple con requisitos del SAT para la generacion de CFDI</li>
            <li>Carga FDI de proveedores y/o comprobantes de compras</li>

            <li>Alertas y administración de tareas</li>
            <li>
              Cuenta con modulo de ventas, compras, directorio de clientes y
              proveedores, tesorería, entre otros
            </li>
          </ul>
          <GrupoSaikoSocialMedia />
        </div>
      </div>
    </div>
  );
}
