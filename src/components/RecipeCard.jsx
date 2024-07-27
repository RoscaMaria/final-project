import {Card} from "react-bootstrap";

export default function RecipeCard(props) {
    const { title, image } = props;
  return (
    <Card style={{ width: "400px", mb: "4px" }}>
      <Card.Img variant="top" src={image} alt="/" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

