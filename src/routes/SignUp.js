import { Card, Container, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUp() {
    return (
        <>

            <Container>
                <Row>
                    <h2 className='display-3 mt-5'>Become a Member of the User Portal community in no time!</h2>
                </Row>
            </Container>

            <Form>

                <Container className='mt-5 mb-5'>
                    <Row xs={2}>
                        <Card className='p-4 shadow bg-body rounded'>
                            <Form className='d-grid'>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">First Name</InputGroup.Text>
                                    <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">Last Name</InputGroup.Text>
                                    <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">UserName</InputGroup.Text>
                                    <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">Password</InputGroup.Text>
                                    <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" type='password' />
                                </InputGroup>

                                <Button variant="primary" href="/signup" type='submit'>
                                    Let's Go!
                                </Button>

                                <hr />

                                <p className='text-center'>Already an existing User Portal member?</p>

                                <Button variant="secondary" href="/login">
                                    Log in to your account
                                </Button>

                            </Form>
                        </Card>
                    </Row>
                </Container>

            </Form>

        </>
    )
}

export default SignUp;