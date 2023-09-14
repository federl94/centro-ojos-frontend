import React from "react";
import { Calendar } from "antd";
import ColumnaIzquierda from "./Turnos/ColumnaIzquierda";
import { Col, Container, Row } from "react-bootstrap";

const Calendario = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <Container fluid className="text-center">
      <Row className="text-center pt-3">
        <Col xs={3} className="d-none d-sm-block">
          <ColumnaIzquierda></ColumnaIzquierda>
        </Col>
        <Col xs={12} sm={9}>
          <div>
            <Calendar onPanelChange={onPanelChange} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Calendario;
