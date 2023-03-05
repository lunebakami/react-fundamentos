import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: JSON.parse(localStorage.getItem('theme')) || 'dark',
    };
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          selectedTheme={theme}
          onToggleTheme={() => {
            this.setState((prevState) => ({
              theme: prevState.theme === 'dark' ? 'light' : 'dark',
            }));
          }}
        />
      </ThemeProvider>
    );
  }
}

export default App;
