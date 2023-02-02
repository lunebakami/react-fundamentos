import React from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post
        post={{
          title: 'Título da notícia 01',
          subtitle: 'Subtítulo da notícia 01',
        }}
      />
    </>
  );
}

export default App;
