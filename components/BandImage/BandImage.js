import React from 'react';
import { connect } from 'react-redux';
var firebase = require('firebase');

// TODO - move this block somewhere better?
// Set the configuration for your app
firebase.initializeApp({
  apiKey: "AIzaSyC9FSioy8maohAerLrTTXs9mfJ1UCrQMY8",
  authDomain: "agent11-api.firebaseapp.com",
  databaseURL: "https://agent11-api.firebaseio.com",
  storageBucket: "agent11-api.appspot.com",
  messagingSenderId: "502119043090"
});

var storage = firebase.storage(); // Get a reference to the storage service, which is used to
var storageRef = storage.ref(); // Create a storage reference from our storage service
//////////


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

  submitNewImage() {
/*  let newBio = document.getElementById("bioTextArea").value;
    this.props.submitNewBiography(newBio);
    return this.setState({editing:false}); */
    return this.setState();
  },

  fileSelected(event){
    let file = event.target.files[0];
    console.log(file);

    var metadata = { contentType: 'image/jpeg' };

    // Upload file and metadata to the object 'images/[filename]'
    var uploadTask = storageRef.child('images/bandImage.jpg').put(file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            function(snapshot) {
              var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');

              switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                  console.log('Upload is paused');
                  break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                  console.log('Upload is running');
                  break;
                default:
                  console.log(snapshot);
                  break;
              }
            }, function(error) {
              console.log(error.code);
              switch (error.code) {
                case 'storage/unauthorized': // User doesn't have permission to access the object
                  break;
                case 'storage/canceled': // User canceled the upload
                  break;
                case 'storage/unknown': // Unknown error occurred, inspect error.serverResponse
                  break;
              }
            }, function() {
              // Upload completed successfully, now we can get the download URL
              var downloadURL = uploadTask.snapshot.downloadURL;
                console.log('downloadURL = ' + downloadURL);
            }
    );
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