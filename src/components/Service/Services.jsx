import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          Mis <span className="green">servicios</span>
        </h4>
        <h1>Lo que hago</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Diseño y Desarrollo web"}
            disc={`Puedo crear sitios web personalizados según tus necesidades y preferencias. 
            Esto implica el diseño de la interfaz de usuario, la codificación del sitio web 
            utilizando lenguajes como HTML, CSS, JavaScript, y la implementación de 
            características interactivas.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Desarrollo de aplicaciones Web"}
            disc={`Si necesitas una aplicación web específica, puedo desarrollarla utilizando 
            frameworks y tecnologías como Django, Ruby on Rails, Laravel, o Node.js. 
            Esto puede incluir la creación de aplicaciones de comercio electrónico, 
            sistemas de gestión de contenidos, paneles de administración, y mucho más`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Responsive Web Design (Diseño web adaptable)"}
            disc={`Crearé un sitio web que se adapte a diferentes dispositivos y tamaños de pantalla, 
            como computadoras de escritorio, tablets y teléfonos móviles. 
            Esto garantiza que tu sitio se vea y funcione correctamente en cualquier dispositivo.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
