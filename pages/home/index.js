import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import About from '../../components/About';
import BandImage from '../../components/BandImage';
import { connect } from 'react-redux';
import s from './styles.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = 'Band page - ' + this.props.name;
  }

  render() {
    return (
      <Layout className={s.content}>

        <h1> {this.props.name} </h1>
        <BandImage />

        <About store={this.props.store} biography={this.props.biography}  />

        { /* TODO - react component */ }
        <members>
          <h2>Members</h2>
          <ul className="membersList">
            {this.props.members.map(function(m){
              return <li>{m}</li>;
            })}
          </ul>
        </members>


      </Layout>
    );
  }

}

HomePage.defaultProps = { /* TODO */ };
HomePage.propTypes = { /* TODO */ };

function mapStateToProps(state) {
  // TODO - return state; ??
  return {
    name: state.name,
    biography: state.biography,
    image: state.image,
    members: state.members
  };
}

const mapDispatchToProps = (dispatch) => {
  return {  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);