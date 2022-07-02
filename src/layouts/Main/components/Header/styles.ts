import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  position: relative;

  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 100%;
  height: 80px;
  max-height: 80px;
  padding: 0 24px;

  color: ${({ theme }) => theme.colors.header.navigation};

  background: ${({ theme }) => theme.colors.header.background};
`

export const HeaderInner = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  height: 100%;
`

export const MainNavLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.header.navigation};
  text-decoration: none;
`

export const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  transition: all 0.3s ease;
`

export const UnorderedList = styled.ul`
  display: flex;
  gap: 6px;
`

interface ListItemProps {
  location: boolean
}

export const ListItem = styled.li<ListItemProps>`
  a {
    padding: 9px 16px;

    color: ${({ theme, location }) =>
      location ? theme.colors.header.navLinkActive : theme.colors.header.navLink};

    border-radius: 12px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.header.backgroundHover};
    }
  }
`

export const HeaderMore = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  height: 100%;
`

export const More = styled.button`
  cursor: pointer;

  right: 32px;

  color: #fff;

  background-color: ${({ theme }) => theme.colors.header.backgroundTransparent};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.header.backgroundTransparent};
  }
`

export const PopoverOverlay = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  opacity: 0;
`

export const Popover = styled(motion.div)`
  position: absolute;
  z-index: 100;
  right: -8px;
  bottom: -80px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 124px;
  height: fit-content;
  padding: 24px;

  background-color: ${({ theme }) => theme.colors.header.navigation};
  border-radius: 12px;
  box-shadow: 6px 1px 15px 0 rgb(0 0 0 / 4%);
`

export const MoreNavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.header.background};
  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    color: #9c1bff;
  }
`
