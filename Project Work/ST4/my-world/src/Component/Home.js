import React from "react";
// import Button from "react-bootstrap/Button";
import { Button } from "@material-ui/core";
import Card from "react-bootstrap/Card";
import "../CSS/Home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const navigateToDahsboard = () => {
    navigate("/form");
  };
  return (
    <div className="home">
      <img
        src="http://html.iwthemes.com/mas/img/web/doc2.jpg"
        alt=""
        className="home__optionBanner"
      />
      <div className="home__option">
        <h1 className="home__optionHeading">
          Now You Can Book <br />
          Your Appointment Online!
        </h1>
        <p className="home__optionSubHeading">MEDICAL MANAGEMENT SYSTEM</p>
      </div>
      <div className="home_optionContent">
        <Card className="card_main" style={{ width: "26rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body className="cards">
            <Card.Title className="cards_title">Book An Appointment</Card.Title>
            <Card.Text className="cards-content">
              Now, you can book your appointment online! Just register or Login
            </Card.Text>
            <Button
              onClick={navigateToDahsboard}
              className="card_button"
              style={{ backgroundColor: "gold", color: "white" }}
            >
              Book Apointment
            </Button>
          </Card.Body>
        </Card>
        <Card className="card_main" style={{ width: "26rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body className="cards">
            <Card.Title className="cards_title">Working Time</Card.Title>
            <Card.Text className="cards-content">
              Monday to Friday 05:00am to 10:00pm <br />
              <br />
              Weekends 09:00am to 12:00pm
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card_main" style={{ width: "26rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body className="cards">
            <Card.Title className="cards_title">Card Title</Card.Title>
            <Card.Text className="cards-content">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
