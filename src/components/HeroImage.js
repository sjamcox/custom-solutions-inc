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
  const backgroundFluidImageStack = [
    `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))`,
    home.hero_image.localFile.childImageSharp.fluid,
  ]

  return (
      <section style={{backgroundColor: "pink"}}>
        <BackgroundImage 
          className={className}
          fluid={backgroundFluidImageStack}>
          <FeaturedText>Premium Cabinetry</FeaturedText>
          <Button primary>Contact Us</Button>
        </BackgroundImage>
      </section>
    )
}

export const HeroImage = styled(BackgroundSection)`
    width: 100%;
    height: 80vh;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`