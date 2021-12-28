import React from "react";
import { Col, Row } from "react-bootstrap";
import "../css/menu.css";

function Menu() {
  const menus = [
    {
      id: 1,
      name: "Cold",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tryshiftt.appspot.com/o/media%2FZGeLjYMNg3fNTcV6SaDfRrtU9pP2%2F1596117998978_21e6ea5398ba03315c18adde7a02212e_(1).jpg?alt=media&token=fcdebe52-9e30-46f0-99a0-467090a1ea43",
    },
    {
      id: 2,
      name: "Hot",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tryshiftt.appspot.com/o/media%2FZGeLjYMNg3fNTcV6SaDfRrtU9pP2%2F1596118019102_e28f0c77370b8838657c6d4ed4a32ebd_(1).jpg?alt=media&token=3503d627-1c64-495a-90e9-78677c784985",
    },
    {
      id: 3,
      name: "Desserts",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tryshiftt.appspot.com/o/media%2FZGeLjYMNg3fNTcV6SaDfRrtU9pP2%2F1600279545545_06c766cf552d5575b57e0953f6a5617f.jpg?alt=media&token=1c05cf3f-9475-41dd-b780-59be57b264ac",
    },
    {
      id: 4,
      name: "Breakfast",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tryshiftt.appspot.com/o/media%2FZGeLjYMNg3fNTcV6SaDfRrtU9pP2%2F1600287131536_2236dcdabbd72ef0e144295585c0e6a4_(1).jpg?alt=media&token=fa2e1b56-d61b-43d3-ba9f-b51556e02211",
    },
  ];
  return (
    <div className="menu">
      <div className="menu__cont">
        <div className="menu__logo">
          <h4>Qwait</h4>
        </div>
        <h5>Food </h5>
      </div>
      <div className="menu__choice">
        <p>Delivery</p>
        <p>Pickup</p>
      </div>

      <div class="container">
        <div class="row">
          <Row>
            {menus.map((item) => (
              <Col sm={6} xs={6} md={6} lg={6}>
                <div key={item.id}>
                  <img className="menu__image" src={item.image}></img>
                  <p>{item.name}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Menu;
