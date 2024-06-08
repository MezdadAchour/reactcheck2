import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Card, CardGroup } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark" className="mb-4">
          <Container>
            <Navbar.Brand href="#home">Nom de l'application</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Accueil</Nav.Link>
              <Nav.Link href="#features">Fonctionnalités</Nav.Link>
              <Nav.Link href="#pricing">Tarifs</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          <h1 className="text-center mb-4">Bienvenue sur mon application</h1>

          <CardGroup className="mb-4">
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>Carte 1</Card.Title>
                <Card.Text>Contenu de la carte 1.</Card.Text>
              </Card.Body>
            </Card>
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>Carte 2</Card.Title>
                <Card.Text>Contenu de la carte 2.</Card.Text>
              </Card.Body>
            </Card>
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>Carte 3</Card.Title>
                <Card.Text>Contenu de la carte 3.</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </div>
    </>
  );
}

export default App;
