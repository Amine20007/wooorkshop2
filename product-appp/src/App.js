import React from 'react';
import { Container, Card } from 'react-bootstrap';
import product from './product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const firstName = "YourFirstName"; // Set your first name here

  return (
    <Container>
      <Card>
        <Card.Body>
          <Name productName={product.name} />
          <Price productPrice={product.price} />
          <Description productDescription={product.description} />
          <Image imagePath={product.imagePath} />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : 'there'}!</p>
      {firstName && <Image imagePath={product.imagePath} />}
    </Container>
  );
};

export default App;

