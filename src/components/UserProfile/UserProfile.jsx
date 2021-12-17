import React from 'react'
import styled from 'styled-components'

import AvatarPicture from '../../assets/logo.svg'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  color: '#414a4c',
  marginRight: '50px',
  marginTop: '20px',
})

const Item = styled.div({
  marginLeft: '17px',
})

const Avatar = styled.img({
  borderRadius: '50%',
  height: '40px',
  width: '40px',
})

const UserProfile = () => {
  // We are going to need this state for the toggle below
  // const [isOpen, setOpen] = useState(false)

  return (
    <Container>
      <Item>
        <Avatar src={AvatarPicture} alt="avatar-picture" />
      </Item>
      <Item>Rudy</Item>
    </Container>
  )
}

export default UserProfile
