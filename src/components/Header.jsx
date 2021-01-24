import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components'
import {Link, useLocation, useHistory} from 'react-router-dom'

import {fetchMe, userSelector} from '../slices/user';
import {setAuthToken, getAuthToken} from '../utils/utils';

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

export const  Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const token = getAuthToken();
  const history = useHistory();
  const { user, userId } = useSelector(userSelector);

  useEffect( () => {
    dispatch(fetchMe(token));
  },[dispatch, token])

  const handleLogout = () => {
    setAuthToken(null);
    dispatch(fetchMe(token));
    history.go(0);
  }

  return (
    <HeaderWrapper>
      <HeaderBody>
        <Icon to='/'>JH</Icon>
        <nav>
          {
            user && <NavItem to='/new-post' $active={location.pathname === '/new-post'}>
                New Post
              </NavItem>
          }
          <NavItem to='/about' $active={location.pathname === '/about'}>
            About
          </NavItem>
          {
            user && <NavItem to='/' onClick={handleLogout}>Logout</NavItem>
          }
          {
            !user && <NavItemHidden to='/login' $active={location.pathname === '/login'}>
              Login
            </NavItemHidden>
          }
        </nav>
      </HeaderBody>
    </HeaderWrapper>
  )
}

export default Header;
