import React from 'react';
import { connect } from 'react-redux';
import s from '../Layout/Layout.css';
import actions from '../../core/actions';

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
    let newBio = document.getElementById("bioTextArea").value;
    this.props.submitNewBiography(newBio);
    return this.setState({editing:false});
  },

  render(){
    return (
    <tours>
      <table>
        <tbody>
        {data.map(function(v, index){
          return <tr key={index}>
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
        </tbody>
      </table>
    </tours>
  )}
});

function mapStoreToProps(storeState) {
  return {
//  biography: storeState.biography,
//  image: storeState.image
  };
}

function mapDispatchToProps(dispatch) {
  return {
/*  submitNewBiography: function(value){
      let action = actions.putBiography(value);
      dispatch(action);
    }*/
  };
}


export default connect(mapStoreToProps, mapDispatchToProps)(Tours);