/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
// import { title, html } from './index.md';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }


  static propTypes = {
  };


  componentDidMount() {
    document.title = 'Band page - ' + this.props.name;
  }

  render() {
    return (
      <Layout className={s.content}>

        <h1> {this.props.name} </h1>
        <div className="imgWrap">
          <img src={this.props.image} />
        </div>

        <div className="about">
          <h2>About</h2>
          <p>
            {this.props.biography}
          </p>
        </div>

        <div className="members">
          <h2>Members</h2>
          <ul>
            {this.props.members.map(function(m){
              return <li>{m}</li>
            })}
          </ul>
        </div>


      </Layout>
    );
  }

}

HomePage.defaultProps = {
  "name":"The Bloodhound Gang",
  "image":"http://images4.fanpop.com/image/photos/20000000/Foxtrot-Uniform-Charlie-Kilo-jimmy-pop-20066279-500-270.gif",
  "biography":"The Bloodhound Gang is an American rock band which began as a hip hop group but branched out into other genres, including punk rock, alternative hip hop, rapcore, funk metal and electronic rock, as their career progressed.",
  "members":['Jimmy Pop', 'Jared Hasselhoff', 'Q-Ball', 'The Yin', 'Daniel P. Carter' ]
};

HomePage.propTypes = {

};


export default HomePage;
