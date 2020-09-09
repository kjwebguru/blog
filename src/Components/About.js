import React from "react";
import Rainbow from '../Hoc/Rainbow';

function About(props) {
  const redirectTo = () => {
    props.history.push("/contact");
  };
  return (
    <div className="container">
      <div className="center">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          ratione, aspernatur commodi quas eveniet praesentium minima voluptatem
          quo. Nostrum sit distinctio accusamus id minima quisquam error
          laudantium impedit labore perspiciatis.
        </p>
        <button
          onClick={redirectTo}
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Contact
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
}

export default Rainbow(About);
