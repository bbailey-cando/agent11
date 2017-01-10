import React from 'react';
import { connect } from 'react-redux';
import s from '../Layout/Layout.css';
import { updateBiography } from '../../core/actions';

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

  submitEdit() {
    this.props.submitNewBiography(document.getElementById("bioTextArea").value);
    return this.setState({editing:false});
  },

  render() {
    if (this.state.editing){
      return (
        <about>
          <h2>About</h2>
          <button className={s.topRight} onClick={this.stopEdit}>cancel</button>
          <textarea id="bioTextArea" defaultValue={this.props.biography} />
          <button onClick={() => (this.submitEdit())}>submit</button>
        </about> 
      );
    } else {
      return (
        <about>
          <h2>About</h2>
          <button className={s.topRight} onClick={this.startEdit}>edit</button>
          <p>
            {this.props.biography || '-- no bio supplied --'}
          </p>
        </about>
      );
    }
  }
});

function mapStoreToProps(storeState) {
  return {
    biography: storeState.biography
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitNewBiography: function(value){
      dispatch(updateBiography(value));
    }
  };
}


export default connect(mapStoreToProps, mapDispatchToProps)(About);