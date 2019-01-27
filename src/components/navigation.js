import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">主页</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">文章</Link>
      </li>
    </ul>
  </nav>
)
