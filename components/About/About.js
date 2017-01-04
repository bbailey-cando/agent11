import React from 'react';
import s from '../Layout/Layout.css';

var About = React.createClass({
  getInitialState() {
    return { biography:this.props.biography,
             editing:false };
  },

  startEdit() {

    return this.setState({editing:true});
  },

  stopEdit() {
    return this.setState({editing:false});
  },

  submitEdit(event) {
    let newValue = document.getElementById("bioTextArea").value;
    return this.setState({biography:newValue, editing:false});
  },

  render() {
    if (this.state.editing){
      return (
        <about>
          <h2>About</h2>
          <button className={s.topRight} onClick={this.stopEdit}>cancel</button>
          <textarea id="bioTextArea" defaultValue={this.state.biography} />
          <button onClick={(e)=>this.submitEdit(e)}>submit</button>
        </about> 
      );
    } else {
      return (
        <about>
          <h2>About</h2>
          <button className={s.topRight} onClick={this.startEdit}>edit</button>
          <p>
            {this.state.biography || '-- no bio supplied --'}
          </p>
        </about>
      );
    }
  }
});

export default About;