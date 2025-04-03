import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import navbarImages from '../../assets/images/Navbar/Navbar'; // Importa las imágenes

const Cards = () => {
  return (
    <div className="cards-container" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
      {navbarImages.slice(0, 3).map((item, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} alt={item.title} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;