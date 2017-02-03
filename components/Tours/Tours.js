import React from 'react';
import { connect } from 'react-redux';
import actions from '../../core/actions';
import s from '../../pages/tours/styles.css';


const data = [
  { name:"Gila River Arena",
    location:"Phoenix, AZ",
    date:"Feb 1, 2017",
    logoURL:"https://firebasestorage.googleapis.com/v0/b/agent11-api.appspot.com/o/images%2Fvenues%2FGila_River_Arena_logo.png?alt=media&token=548626d1-730a-47c6-ba2a-606371fe82c1",
    imageURL:"https://firebasestorage.googleapis.com/v0/b/agent11-api.appspot.com/o/images%2Fvenues%2FGlendale-arena.jpg?alt=media&token=0da7da65-d958-4c18-b4c1-8b062996ffee" },
  { name:"Belasco Theatre",
    location:"Los Angeles, CA",
    date:"Feb 4, 2017",
    logoURL:"https://firebasestorage.googleapis.com/v0/b/agent11-api.appspot.com/o/images%2Fvenues%2Fbelasco_logo.png?alt=media&token=de871f1d-c87e-4456-b4c3-16a1d3d35e1d",
    imageURL:"https://firebasestorage.googleapis.com/v0/b/agent11-api.appspot.com/o/images%2Fvenues%2FBelascotheatre.jpg?alt=media&token=0bc6bc7b-f300-47d0-846a-f240b7d37fe8" },
  { name:"Fox Riverside Performing Arts",
    location:"Riverside, CA",
    date:"Feb 8, 2017",
    logoURL:"https://firebasestorage.googleapis.com/v0/b/agent11-api.appspot.com/o/images%2Fvenues%2FRiversideLive_Logo.png?alt=media&token=9a48756f-3c10-4bdb-8ad0-eb38fe079085",
    imageURL:"https://firebasestorage.googleapis.com/v0/b/agent11-api.appspot.com/o/images%2Fvenues%2FFox_Theater%2C_Riverside_CA.jpg?alt=media&token=f349cbe7-0be6-4de9-b9c2-cf2bd79849e7" }
];


var Tours = React.createClass({
  getInitialState() {
    return { editing:false };
  },

  startEdit() {
    return this.setState({editing:true});
  },

  stopEdit() {
    document.getElementById("newTourVenueNameOrLogoURL").value = '';
    document.getElementById("newTourDate").value = '';
    document.getElementById("newTourLocation").value = '';
    document.getElementById("newTourImageURL").value = '';
    return this.setState({editing:false});
  },

  submitEdit() {
    let values = {
        nameOrLogoURL:document.getElementById("newTourVenueNameOrLogoURL".value),
             tourDate:document.getElementById("newTourDate").value,
         tourLocation:document.getElementById("newTourLocation").value,
         tourImageURL:document.getElementById("newTourImageURL").value
    };

    console.log(values);
//    this.props.submitNewBiography(newTour);
    return this.state; // this.setState({editing:false});
  },

  render(){
    let newTourRow = "";

    if (this.state.editing){
      newTourRow =
        <tr key="newTour" id="newTourRow">
          <td className="c0"><a href="javascript:;" onClick={this.stopEdit}>cancel</a></td>
          <td className="c1"><input type="text" id="newTourVenueNameOrLogoURL" defaultValue="Venue name or logo URL"/></td>
          <td className="c2"><input type="date" id="newTourDate" /></td>
          <td className="c3"><input type="text" id="newTourLocation" defaultValue="Location" /></td>
          <td className="c4"><input type="text" id="newTourImageURL" defaultValue="Venue image URL" /></td>
        </tr>;
    } else {
      newTourRow =
        <tr key="newTour">
          <td className="c0">
            <a className={s.plusWrapper} href="javascript:;" onClick={this.startEdit}>
              <img className={s.plus}
                   src="https://firebasestorage.googleapis.com/v0/b/agent11-api.appspot.com/o/images%2Fassets%2FplusIcon.png?alt=media&token=53b629d0-0a21-4dd6-b10b-8034c52a7135" />
            </a>
          </td>
          <td className="c1">Click to add a new tour date and venue</td>
          <td className="c2"></td>
          <td className="c3"></td>
          <td className="c4"></td>
        </tr>;
    }

    return (
      <tours>
      <table>
        <tbody>
        {data.map(function(v, index){
          return <tr key={index}>
                  <td className="c0">&nbsp;</td>
                  { (v.logoURL) ?
                    <td className="c1"><img className="logo" src={v.logoURL} title={v.name} /></td>
                  : <td className="c1">{v.name}</td>
                  }
                  <td className="c2">{v.date}</td>
                  <td className="c3">{v.location}</td>
                  <td className="c4">
                    { (v.imageURL) ?
                      <a href={v.imageURL} target="_blank">
                         <img src={v.imageURL} />
                      </a>
                    : <span></span> }
                  </td>
                </tr>;
        })}
        {newTourRow}
        </tbody>
      </table>
      {(this.state.editing) ?
        <button className={s.submitButton} onClick={this.submitEdit}>Submit</button>
      :
        <span></span>
      }
    </tours>
  )}
});

function mapStoreToProps(storeState) {
  return storeState;
}

function mapDispatchToProps(dispatch) {
  return {
//  submitNewTourDate: function(value){
//    let action = actions.putBiography(value);
//    dispatch(action);
//  }
  };
}


export default connect(mapStoreToProps, mapDispatchToProps)(Tours);