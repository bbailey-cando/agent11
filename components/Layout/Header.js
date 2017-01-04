import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <header ref={node => (this.root = node)} className={s.content}>
        <Link className="title" to="/">
          Bandpage
        </Link>
        <Navigation />
      </header>
    );
  }

}

export default Header;
