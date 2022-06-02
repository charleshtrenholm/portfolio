import * as React from "react"
import { Link, withPrefix } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import bannerBackground from "../images/background001_red.png";
import ImageRandomizer from '../components/ImageRandomizer';
import LinkContainer from '../components/LinkContainer';
import AboutMe from '../components/AboutMe';
import JobsContainer from "../components/JobsContainer";

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div style={{
      textAlign: 'center',
      // backgroundImage: `url(${withPrefix('../images/background001_red.png')})`
      backgroundImage: `url(${bannerBackground})`,
      backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat'
      }}
      >
      <StaticImage
        src='../images/image_of_me.png'
        style={{width: '55%', borderRadius: '500px'}}
        quality={95}
        formats={['png']}
        alt="Charlie DeVilholm with a keyboard"
      />
    </div>
    <LinkContainer />
    <div>
      <ImageRandomizer position={1} />
      <ImageRandomizer position={2} />
      <ImageRandomizer position={3} />
      <ImageRandomizer position={4} />
    </div>
    <AboutMe />
    <JobsContainer />
  </Layout>
)

export default IndexPage
