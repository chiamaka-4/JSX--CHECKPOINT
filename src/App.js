import { Card, Button } from "react-bootstrap";
import Name from "./component/Name";
import { product } from "./component/product";
import Description from "./component/Description";
import Price from "./component/Price";

function App() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />

        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary">
            <Price />
          </Button>
        </Card.Body>
      </Card>
      <p>Hello</p>
    </>
  );
}

export default App;
