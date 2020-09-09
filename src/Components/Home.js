import React from "react";
import Rainbow from "../Hoc/Rainbow";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({
        posts: res.data.slice(0, 10),
      });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post home card" key={post.id}>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No post found</div>
    );

    return (
      <div className="container">
        <h1 className="center">Home</h1>
        { postList }
      </div>
    );
  }
}

export default Rainbow(Home);
