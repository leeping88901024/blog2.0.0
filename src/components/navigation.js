import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

export default () => (
  <header className={styles.navigation}>
    <ul>
      <li>
        <Link to="/">主页</Link>
      </li>
      <li>
        <Link to="/blog/">文章</Link>
      </li>
    </ul>
  </header>
)
