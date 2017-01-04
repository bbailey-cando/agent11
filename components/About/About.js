import React from 'react';

class About extends React.Component {
  render() {
    return (
        <about>
          <h2>About</h2>
          <button>edit</button>
          <p>
            {this.props.biography}
          </p>
        </about>
    );
  }
}

export default About;