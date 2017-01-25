import React from 'react';
import Layout from '../../components/Layout';
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
        <tours>
          <table>
            <tr>
              <td>Feb 1</td><td>Gila River Arena, Phoenix, AZ</td>
            </tr>
            <tr>
              <td>Feb 1</td><td>Gila River Arena, Phoenix, AZ</td>
            </tr>
            <tr>
              <td>Feb 1</td><td>Gila River Arena, Phoenix, AZ</td>
            </tr>
            <tr>
              <td>Feb 1</td><td>Gila River Arena, Phoenix, AZ</td>
            </tr>
          </table>
        </tours>
      </Layout>
    );
  }

}

export default TourPage;
