import React from 'react';
import { connect } from 'react-redux';
// import s from '../Layout/Layout.css';
// import { putBiography } from '../../core/actions';

var About = React.createClass({
  getInitialState() {
   return { image:this.props.image };
  },

  submitNewImage() {
/*  let newBio = document.getElementById("bioTextArea").value;
    this.props.submitNewBiography(newBio); 
    return this.setState({editing:false}); */
    return this.setState();
  },

  render() {
    return (
        <imgWrap>
          <img src={this.props.image} />
        </imgWrap>
    );
  }
});

function mapStoreToProps(storeState) {
  return {
    image: storeState.image
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitNewImage: function(value){
//      let action = putBiography(value);
//      dispatch(action);
    }
  };
}


export default connect(mapStoreToProps, mapDispatchToProps)(About);