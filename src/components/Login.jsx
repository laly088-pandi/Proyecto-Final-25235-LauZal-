import React from "react";
import { Form, Button, Container, Col, Row, Card } from 'react-bootstrap';

const Login =()=>{
const handleSubmit=(e)=>{
    e.preventDefault();
    alert('Login Enviado');
};

    return (
<Container className="d-flex justify-content-center align-items-centermin-vh-100">
    <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
        <Card className="shadow-lg p-4">
            <Card.Body>
                <h2 className="text-center mb-4">Iniciar Sesion</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3"controlId="formUsername">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Su usuario" required></Form.Control>
                    </Form.Group>

                     <Form.Group className="mb-3"controlId="formPassword">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese Su Contraseña" required></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">Ingresar</Button>
                    </Form>
            </Card.Body>
        </Card>
        </Col>
    </Row>
</Container>
    );

};
export default Login;