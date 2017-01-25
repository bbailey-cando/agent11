import React from 'react';
import { Line } from 'rc-progress';
import { connect } from 'react-redux';
import actions from '../../core/actions';


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

  // show/hide on mouseenter/exit doesn't appear to be possible in css via react
  showThing(){
    let banner = document.getElementsByTagName("banner")[0];
    banner.style.display = "block";
  },

  hideThing(){
    let banner = document.getElementsByTagName("banner")[0];
    banner.style.display = "none";
  },

  fileSelected(event){
    let file = event.target.files[0];
    this.props.submitNewImage(file);
    return this.state;
  },

  getImageUploadProgress(){
    return this.props.imageUploadProgress;
  },

  render() {
    let defaultImage = 'https://firebasestorage.googleapis.com/v0/b/agent11-api.appspot.com/o/noImage.png?alt=media&token=6cb2cd37-c529-4cb8-ad42-7594b5929495';
    return (
        <imgWrap onMouseOver={this.showThing} onMouseOut={this.hideThing}>
          <banner>Click to upload a new band image</banner>
          <img src={this.props.image || defaultImage}
               onClick={this.imageClicked} />
          <input style={{display:'none'}}
                 id="image-file"
                 type="file"
                 onChange={this.fileSelected} />
          {(this.props.percent) ?
            <Line percent={this.props.percent} strokeWidth="2" strokeColor="#f9aa34" strokeLinecap="square" />
           :(
           <span></span>
            )}
        </imgWrap>
    );
  }
});

function mapStoreToProps(storeState) {
  return {
    image:   storeState.image,
    percent: storeState.imageUploadProgress
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitNewImage: function(value){
      let action = actions.uploadImage(value);
      dispatch(action);
    }
  };
}

export default connect(mapStoreToProps, mapDispatchToProps)(BandImage);