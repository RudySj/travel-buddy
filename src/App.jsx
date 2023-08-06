import React from 'react'
import styled from 'styled-components'

import './styles/app.css'
import { coolWhite } from './constants/theme'

import SideBar from './layouts/SideBar'
import MenuBar from './layouts/MenuBar'

const PageContainer = styled.div({
  display: 'flex',
  minHeight: '100vh',
  background: coolWhite,
})

const ContentContainer = styled.div({
  width: '100%',
  textAlign: 'right',
  height: '100%',
})

const App = () => (
  <PageContainer>
    <SideBar />
    <ContentContainer>
      <MenuBar />
      <div> test items </div>
    </ContentContainer>
  </PageContainer>
)

export default App
