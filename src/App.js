import React from "react";
import ErrorPage from "./routes/404.js";
import SignUp from './routes/SignUp';
import Dashboard from './routes/Dashboard';
import { Routes, Route, } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from "./routes/Login.js";

function App() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">User Portal</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Sign up</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <br />

            {/* <nav>
                <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                </ul>
            </nav> */}

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>

        </>
    )
}

export default App;