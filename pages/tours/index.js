import React from 'react';
import Layout from '../../components/Layout';
import Tours from '../../components/Tours';
import s from './styles.css';


class TourPage extends React.Component {
  componentDidMount() {
//  document.title = title;
  }

  render() {
    // TODO - fix title
    return (
      <Layout className={s.content}>
        <h1>Tours</h1>

        <Tours store={this.props.store} />
      </Layout>
    );
  }

}

export default TourPage;
