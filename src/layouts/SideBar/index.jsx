import React from 'react'
import styled from 'styled-components'

import SideBarMenu from '../../components/SideBarMenu'
import { black } from '../../constants/theme'

const SideBarLayout = styled.div`
  width: 200px;
  background: ${black};
`

const SideBar = () => (
  <SideBarLayout>
    <SideBarMenu />
  </SideBarLayout>
)

export default SideBar
