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
      <div>
        <div className={styles.navigation} style={this.state.curr <= prevScrollpos ? {top: 0} : {top: -45} }>
          <ul>
            <li>
              <Link onClick={() => {console.log('hhhhh')}} to="/">主页</Link>
            </li>
            <li>
              <Link to="/blog/">Three.js</Link>
            </li>
            <li>
              <Link to="/more/">更多</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}