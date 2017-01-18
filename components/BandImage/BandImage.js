import React from 'react';
import { connect } from 'react-redux';
// import s from '../Layout/Layout.css';
// import { putBiography } from '../../core/actions';

var BandImage = React.createClass({
  getInitialState() {
   return { image:this.props.image };
  },

  submitNewImage() {
/*  let newBio = document.getElementById("bioTextArea").value;
    this.props.submitNewBiography(newBio);
    return this.setState({editing:false}); */
    return this.setState();
  },

  imageClicked(){
    let el = document.getElementById('image-file');
    if (el && el.click){
      el.click();
    }
  },

  fileSelected(event){
    console.log(event.target.files[0]);
  },

  render() {
    return (
        <imgWrap>
          <img src={this.props.image} onClick={this.imageClicked} />
          <input style={{display:'none'}}
                 id="image-file"
                 type="file"
                 onChange={this.fileSelected} />
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


export default connect(mapStoreToProps, mapDispatchToProps)(BandImage);