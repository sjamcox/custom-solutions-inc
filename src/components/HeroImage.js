import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { Button } from './Button'
import { color } from '../utils/colors'

const FeaturedText = styled.h1`
  color: ${color.white};
  width: 80vw;
  text-align: center;
  text-shadow: 2px 3px 10px rgba(0,0,0,0.3);
`

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
                    fluid(maxWidth: 1400) {
                        ...GatsbyImageSharpFluid
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
        <FeaturedText>Premium Cabinetry</FeaturedText>
        <Button primary>Contact Us</Button>
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
`

export default StyledBackgroundSection