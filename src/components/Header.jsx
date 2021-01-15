import React from 'react'
import styled from 'styled-components'
import {Link, useLocation} from 'react-router-dom'

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  border-top: #aaadaf 8px solid;
  box-shadow: 0px 10px 10px 10px #fff;
  background: #fff;
  z-index: 99;
`

const HeaderBody = styled.header`
  margin: auto;
  display: flex;
  width: 100%;
  max-width: 1080px;
  align-items: center;
  justify-content: space-between;
`

const Icon = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  background: #aaadaf;
  color: #fff;
  padding: 15px 10px;
  margin: 0px 10px;
`

const NavItem = styled(Link)`
  padding: 15px;
  margin: auto 15px;
  transition: all ease-in-out 0.5s;
  :hover {
    color: #fff;
    background: #aaadaf;
  }
  ${props =>
    props.$active &&
    `
      font-weight: bold;
      background: #aaadaf;
      color: #fff;
    `
  }
`

const NavItemHidden = styled(Link)`
  padding: 15px;
  margin: auto 15px;
  color: #fff;
  transition: all ease-in-out 0.5s;
  :hover {
    background: #aaadaf;
  }
  ${props =>
    props.$active &&
    `
      font-weight: bold;
      background: #aaadaf;
      color: #fff;
    `
  }
`

export default function Header({
  dispatch,
}) {
  const location = useLocation()
  return (
    <HeaderWrapper>
      <HeaderBody>
        <Icon to='/'>JH</Icon>
        <nav>
          <NavItem to='/editor' $active={location.pathname === '/editor'}>
            New Post
          </NavItem>
          <NavItem to='/about' $active={location.pathname === '/about'}>
            About
          </NavItem>
          <NavItemHidden to='/login' $active={location.pathname === '/login'}>
            Login
          </NavItemHidden>
        </nav>
      </HeaderBody>
    </HeaderWrapper>
  )
}
