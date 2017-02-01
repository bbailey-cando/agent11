import React from 'react';
import Layout from '../../components/Layout';
import Tours from '../../components/Tours';
import { connect } from 'react-redux';
import s from './styles.css';


class TourPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = 'Band page Tours - ' + this.props.name;
  }

  render() {
    // TODO - fix title
    return (
      <Layout className={s.content}>
        <h1>{this.props.name} Tours</h1>

        <Tours store={this.props.store} />
      </Layout>
    );
  }

}

TourPage.defaultProps = { /* TODO */ };
TourPage.propTypes = { /* TODO */ };

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TourPage);