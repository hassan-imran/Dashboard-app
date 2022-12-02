import { Card, Container, FloatingLabel, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    return (
        <>

            <Container>
                <Row>
                    <h1 className='display-2 mt-5'>Welcome to User Portal!</h1>
                    <h3 className='display-6 mt-3'>Log in to your account to access all the features.</h3>
                </Row>
            </Container>

            <Form>

                <Container className='mt-5 mb-5'>
                    <Row xs={2}>
                        <Card className='p-4 shadow bg-body rounded'>
                            <Form className='d-grid'>
                                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group> */}

                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                    <Form.Control type="text" placeholder="my_username" />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3"  >
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>
                                <Button variant="primary" type="submit">
                                    Log in
                                </Button>

                                <hr />

                                <p className='text-center'>Not a User Portal member yet?</p>

                                <Button variant="secondary" href="/signup">
                                    {/* Have to add a on click handler to this button */}
                                    Sign up
                                </Button>
                            </Form>
                        </Card>
                    </Row>
                </Container>

            </Form>

        </>
    );
}

export default Login;