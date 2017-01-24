import React from 'react';
import { connect } from 'react-redux';
import { uploadImage } from '../../core/actions';


var BandImage = React.createClass({
  getInitialState() {
   return { image:this.props.image };
  },

  imageClicked(){
    let el = document.getElementById('image-file');
    if (el && el.click){
      el.click();
    }
  },

  fileSelected(event){
    let file = event.target.files[0];
    this.props.submitNewImage(file);
    return this.state;
  },

  render() {
    return (
        <imgWrap>
        {this.props.image}
          <img src={this.props.image || 'https://firebasestorage.googleapis.com/v0/b/agent11-api.appspot.com/o/noImage.png?alt=media&token=6cb2cd37-c529-4cb8-ad42-7594b5929495'}
               onClick={this.imageClicked} />
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
      let action = uploadImage(value);
      dispatch(action);
    }
  };
}

export default connect(mapStoreToProps, mapDispatchToProps)(BandImage);