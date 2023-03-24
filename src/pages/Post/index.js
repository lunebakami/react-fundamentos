import React, { Component } from 'react';

export default class Post extends Component {
    constructor(props) {
        super(props);

        const { search } = this.props.location;
        // this.queryParams = new URLSearchParams(search);
    }

    handleNavigate = () => {
        this.props.history.push('/posts');
    }

    render() {
        return (
          <>
              <button onClick={this.handleNavigate}>Voltar para lista de posts</button>
              <h1>Post Page</h1>
          </>

        );
    }
}

// export default function Post() {
//     const params = useParams();
//     const { search } = useLocation();
//     const queryParams = useMemo(() => new URLSearchParams(search), [search]);
//
//     console.log(params);
//     console.log(queryParams.get('name'));
//
//     return (
//         <h1>Post Page</h1>
//     )
//  }

