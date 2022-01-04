import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContent, selectContent } from '../state/contentSlice';

const BookForm =  () => {
    const dispatch = useDispatch();
    const content = useSelector(selectContent)
    const [response, setResponse] = useState()

    const updateField = (e) => {
        setResponse({
            ...response,
            [e.target.name]: e.target.value,
        })
        console.log(response)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
            console.log(response)
            if (response.title) {
                dispatch(addContent(response))
                setResponse({})
            }
    }

    return (
        <>
            <Container fluid className="m-0 p-0 App-header">
                <Form>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control size="lg" type="title" placeholder="To Kill a MockingBird" name="title" onChange={updateField}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAuthor">
                        <Form.Label>Author</Form.Label>
                        <Form.Control size="lg" type="author" placeholder="Harper Lee" name="author" onChange={updateField}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAuthor">
                        <Form.Label>Synopsis</Form.Label>
                        <Form.Control size="lg" as="textarea" placeholder="Boo, Scout and Gregory play in a treehouse" name="synopsis" onChange={updateField} />
                    </Form.Group>
              
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default BookForm;