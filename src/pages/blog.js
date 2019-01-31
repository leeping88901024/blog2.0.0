import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three'
import styles from './blog.module.css'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  componentDidMount() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    // Add scene
    this.scene = new Scene()

    // Add camera
    this.camera =  new PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    this.camera.position.z = 4

    //Add renderer
    this.renderer = new WebGLRenderer({antialias: true})
    this.renderer.setClearColor('#000000')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)

    // Add cube
    const geometry = new BoxGeometry(1, 1, 1)
    const material = new MeshBasicMaterial({color: '#433F81'})
    this.cube = new Mesh(geometry, material)
    this.scene.add(this.cube)
    
    // render
    this.start()
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId)
  }

  animate = () => {
    // animation
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01

    // loop
    this.renderScence()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScence = () => {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div style={{ background: '#fff'}}>
        <Helmet title={siteTitle} />
        <div className={styles.hero} ref={(mount) => {this.mount = mount}}>
        </div>
        <div className="wrapper">
          <h2 className="section-headline">Three.js</h2>
          <div className='article-list'>
            以后我想在这儿放好玩的游戏
          </div>
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
