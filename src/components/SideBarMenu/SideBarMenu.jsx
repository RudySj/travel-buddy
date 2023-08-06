import React from 'react'
import styled from 'styled-components'
import { IoMdAirplane } from 'react-icons/io'

import { black } from '../../constants/theme'

import logo from '../../assets/logo.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${black} !important;
  height: 100%;
`

const Logo = styled.img`
  display: flex;
  height: 120px;
  width: 120px;
  margin-top: 20px;
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 100%;
`

const ItemRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
`

const Item = styled.div`
  color: white;
  height: 100px;
  width: 100%;
  padding: 20px 0px;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`

const IconContainer = styled.div`
  margin-bottom: 15px;
`

const SideBarMenu = () => {
  // const [activeItem, setActiveItem] = useState(null)

  // const handleOnClick = () => setActiveItem('clicked')

  return (
    <Container>
      <Logo src={logo} alt="travel buddy logo" />
      <ItemContainer>
        <ItemRow>
          <Item>
            <IconContainer size="75px">
              <IoMdAirplane />
            </IconContainer>
            Home
          </Item>
        </ItemRow>
        <ItemRow>
          <Item>Travel</Item>
        </ItemRow>
        <ItemRow>
          <Item>Expenses</Item>
        </ItemRow>
      </ItemContainer>
    </Container>
  )
}

export default SideBarMenu
