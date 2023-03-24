import React from 'react';
import { useHistory } from "react-router-dom";

// import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

export default function () {
    const history = useHistory();

    function handleNavigate() {
      history.push('/posts');
    }

    return (
        <Container>
          <h1>JStack's Blog</h1>
          <button type="button">🌞</button>
          <button onClick={handleNavigate} style={{ color: '#fff'}}>Navegar</button>
        </Container>
    )
 }

// render props
// export default class Header extends Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {(value) => (
//           <Container>
//             <h1>JStack's Blog</h1>
//             <button type="button" onClick={value.handleToggleTheme}>
//               {value.theme === 'dark' ? '🌞' : '🌚'}
//             </button>
//           </Container>
//         )}
//       </ThemeContext.Consumer>
//     );
//   }
// }
