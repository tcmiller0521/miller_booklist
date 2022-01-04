import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const BookForm = () => {
    return (
        <>
            <Container fluid className="m-0 p-0 App-header">
                <Form>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control size="lg" type="title" placeholder="To Kill a MockingBird" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAuthor">
                        <Form.Label>Author</Form.Label>
                        <Form.Control size="lg" type="author" placeholder="Harper Lee" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAuthor">
                        <Form.Label>Synopsis</Form.Label>
                        <Form.Control size="lg" as="textarea" placeholder="Boo, Scout and Gregory play in a treehouse" />
                    </Form.Group>
              
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default BookForm;