import React from 'react'
import {Accordion, Card, useAccordionButton} from "react-bootstrap"

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}


const HomeScreen = ({user}) => {
  return ( 
<div>


    <Accordion defaultActiveKey="0">
    <Card>
      <Card.Header>
        <CustomToggle eventKey="0">Giriş Yapıldıysa Kullanıcı Adı Yazar</CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>{user?.fullname}</Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <CustomToggle eventKey="1">Giriş Yapıldıysa Kullanıcı E-Mail Yazar</CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body>{user?.email}</Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
  </div>
);
}

export default HomeScreen