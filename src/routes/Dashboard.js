import React from "react";
import { Container, Row } from 'react-bootstrap';

function Dashboard({ loginDetails }) {

    return (
        <>
            <Container>
                <Row>
                    <h1 className='display-2 mt-5'>Welcome {loginDetails.firstName} {loginDetails.lastName}!</h1>
                    <hr />
                    <h4 className='display-6 mt-5'>Your Username is "{loginDetails.userName}"*</h4>
                    <p>*Without the quotes</p>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;