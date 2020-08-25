import React from "react";
import { Row, Col } from "antd";
import config from "./config";
import "./index.scss";

export default function Exception({type, title, desc, actions}) {
  return (
    <Row className="exception-page" type="flex" justify="center">
      <Col className="exception-page-img" xs={24} sm={12} md={12} lg={15} xl={15}>
        <img
          src={config[type].img}
          alt={config[type].title}
        />
      </Col>
      <Col className="exception-page-content" xs={24} sm={12} md={12} lg={9} xl={9} >
        <h1>{title || config[type].title}</h1>
        <div className="exception-page-desc">{desc || config[type].desc}</div>
        <div>
          {actions}
        </div>
      </Col>
    </Row>
  );
}
