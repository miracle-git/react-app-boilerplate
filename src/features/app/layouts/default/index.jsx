import React from 'react'
import AppContainer from '@/features/app/containers'
import './index.less'

export default ({children}) => (
  <AppContainer>
    <header>这里可以放Header</header>
    {children}
    <footer>这里可以放Footer</footer>
  </AppContainer>
)
