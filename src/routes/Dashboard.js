import React from "react";
import {Container,Row} from 'react-bootstrap';

function Dashboard({loginDetails}) {
    return (
        <>
            <Container>
                <Row>
                    <h1 className='display-2 mt-5'>Welcome {loginDetails.firstName} {loginDetails.lastName}</h1>
                    {/* <h3 className='display-6 mt-3'></h3> */}
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;