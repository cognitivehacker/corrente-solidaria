import React, { useState } from 'react'
import { GlobalStyles } from '../common/GlobalStyles'
import { ThemeProvider } from 'styled-components'

import theme from '../common/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App