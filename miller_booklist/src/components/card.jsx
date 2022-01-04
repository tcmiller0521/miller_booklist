import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const BookCard = ({ content }) => {

    console.log(content)
    return (
        <>
            <Container fluid className="m-0 p-0">
                {content.map((BookInfo, i) => (
                    <Card key={i} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{BookInfo.title}</Card.Title>
                            <Card.Text>
                                {BookInfo.author}
                            </Card.Text>
                            <Card.Text>
                                {BookInfo.synopsis}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </>
    )
}


export default BookCard;