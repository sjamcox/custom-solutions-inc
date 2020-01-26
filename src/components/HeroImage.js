import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { Button } from './Button'

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allPrismicHome {
      edges {
        node {
          data {
            hero_image {
              localFile {
                childImageSharp {
                    fluid(maxWidth: 1960) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
              }
            }
          }
        }
      }
    }
  }
  `)

  const home = data.allPrismicHome.edges[0].node.data

  return (
      <BackgroundImage 
        className={className}
        fluid={home.hero_image.localFile.childImageSharp.fluid}>
        <h1>Text Overlay.</h1>
        <Button primary>Request A Quote</Button>
      </BackgroundImage>
    )
}

const StyledBackgroundSection = styled(BackgroundSection)`
    width: 100%;
    height: 80vh;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    h1 {
        font-size: 70px;
        margin: 50px;
    }
`

export default StyledBackgroundSection