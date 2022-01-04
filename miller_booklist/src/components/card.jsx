import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const BookCard = () => {
    return (
        <>
            <Container fluid className="m-0 p-0">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>To Kill a MockingBird</Card.Title>
                        <Card.Text>
                            Harper Lee
                        </Card.Text>
                        <Card.Text>
                        Boo, Scout and Gregory play in a treehouse
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default BookCard;