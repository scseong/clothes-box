import React from 'react';
import Logo from '../assets/logo.svg';
import Cart from '../assets/cart.svg';
import Search from '../assets/search.svg';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Link to="/">
          <h1 className={styles.blind}>Clothes Box</h1>
          <img className={styles.logo} src={Logo} alt="Clothes Box" draggable />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navItems}>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <ul className={styles.navItems}>
          <li>My Accout</li>
          <li>
            <Link to="/">
              <img src={Search} alt="Search" draggable />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img src={Cart} alt="Cart" draggable />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
