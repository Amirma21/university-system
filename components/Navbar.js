import React from 'react';
import { Navbar, Container, Nav, NavDropdown , Brand } from 'react-bootstrap';
import styles from '../styles/navbar.module.css'

export default function Login() {
    return (
        <Navbar  className={styles.navbar}  variant="dark">
            <Container>
                <Navbar.Brand className={styles.title} href="#home"> پنل بارگذاری سوالات (اساتید) </Navbar.Brand>

                <Nav>
                    <NavDropdown id="nav-dropdown-dark-example" menuVariant="light">
                        <NavDropdown.Item className={styles.dropdown} href="#action/3.1">تغییر رمز عبور</NavDropdown.Item>
                        <NavDropdown.Item className={styles.dropdown} href="#action/3.2">خروج از حساب کاربری</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

            </Container>
        </Navbar>
    );
}