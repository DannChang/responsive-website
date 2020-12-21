import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';

//Styling of Components 
// Entire nav component region
const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: red;
`;

// links of a navbar (right side)
//   MUST import { css } from styled-components/macro
const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    cursor: pointer;
    text-decoration: none;
`;

// Main logo at the corner of website
const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
    font-size: 30px;
`;

const MenuBars = styled.i``;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

// Contact Us button 
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">SYDAN</Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar;
