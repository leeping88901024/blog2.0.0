import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

var prevScrollpos = 0

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curr: null
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = () => {
    var currentScrollPos = window.scrollY;
    this.setState({curr: currentScrollPos})
    prevScrollpos = currentScrollPos;
  }


  render() {
    return(
      <header className={styles.navigation} style={this.state.curr <= prevScrollpos ? {top: 0} : {top: -40} }>
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
  }
}