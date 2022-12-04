import React, { useState } from "react";
import ErrorPage from "./routes/404.js";
import SignUp from './routes/SignUp';
import Dashboard from './routes/Dashboard';
import { Routes, Route, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from "./routes/Login.js";

function App() {

    const [userList, setUser] = useState([
        {
            userName: 'admin',
            pass: 'admin123',
            firstName: 'Robot',
            lastName: 'Admin',
        },
        {
            userName: 'faheem',
            pass: 'faheem123',
            firstName: 'Muhammad',
            lastName: 'Faheem',
        }
    ]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [loginDetails, setLoginDetails] = useState([]); //use it to conditionally render the all the pages.
    const [errorMsg, setErrorMsg] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);

    const navigate = useNavigate();

    // console.log(loginDetails.length); //Use logindetails instead of isLogged in flag

    const logUserIn = (userName, pass) => {
        let counter = 0;

        userList.forEach((x) => {
            if (x.userName.toLowerCase() == userName.toLowerCase()) {
                if (x.pass === pass) {
                    setLoginDetails({
                        userName,
                        firstName: userList[counter].firstName,
                        lastName: userList[counter].lastName,
                    });
                    setAuthenticated(true);
                    navigate("/dashboard");
                    return;
                }
                setErrorMsg('Password is incorrect.');
                return;
            }
            counter++;
        })

        if (counter === userList.length) {
            setErrorMsg('Username not found.');
        }
    }

    const addUser = (userList, userName, pass, firstName, lastName) => {
        let checkUnique = true;

        //a loop to check if the entered email is a duplicate

        userList.forEach((x) => {
            if (x.userName.toLowerCase() == userName.toLowerCase()) {
                // setShow(true);
                // add a flag to not allow duplicate usernames
                checkUnique = false;
                return;
            }
        })

        // if checkUnique is true, publish changes to the state i.e. add the user

        if (checkUnique) {
            const newUserList = [...userList, { userName, pass, firstName, lastName }];
            setUser(newUserList)
        }
        console.log(checkUnique);
    }

    const logout = () => {
        setLoginDetails([]);
        setAuthenticated(false);
        navigate("\login");
    }

    if (!authenticated) {
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

                <Routes>
                    <Route path="/" element={
                        <Login
                            errorMsg={errorMsg}
                            setErrorMsg={setErrorMsg}
                            logUserIn={logUserIn}
                            authenticated={authenticated}
                            navigate={navigate}
                        />
                    } />
                    <Route path="/login" element={
                        <Login
                            errorMsg={errorMsg}
                            setErrorMsg={setErrorMsg}
                            logUserIn={logUserIn}
                            authenticated={authenticated}
                            navigate={navigate}
                        />
                    } />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={
                        <Dashboard
                            loginDetails={loginDetails}
                        />
                    } />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>

            </>
        )
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">User Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <NavDropdown title={`Signed in as: ${loginDetails.firstName} ${loginDetails.lastName}`} id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <br />

            <Routes>
                <Route path="/" element={
                    <Login
                        errorMsg={errorMsg}
                        setErrorMsg={setErrorMsg}
                        logUserIn={logUserIn}
                        authenticated={authenticated}
                        navigate={navigate}
                    />
                } />
                <Route path="/login" element={
                    <Login
                        errorMsg={errorMsg}
                        setErrorMsg={setErrorMsg}
                        logUserIn={logUserIn}
                        authenticated={authenticated}
                        navigate={navigate}
                    />
                } />
                <Route path="/dashboard" element={
                    <Dashboard
                        loginDetails={loginDetails}
                    />
                } />
                <Route path="*" element={<ErrorPage />} />
            </Routes>

        </>
    )

}

export default App;