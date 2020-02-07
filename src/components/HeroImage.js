import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { Button } from './Button'
import { color } from '../utils/colors'
import { device } from '../utils/devices'

const FeaturedText = styled.h1`
  color: ${color.granite};
  width: 80vw;
  text-align: center;
  @media ${device.tablet} {
    max-width: 700px;
    font-size: 3.5em;
  }
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
    `linear-gradient(rgba(236,226,208,0.7), rgba(236,226,208,0.7))`,
    home.hero_image.localFile.childImageSharp.fluid,
  ]

  return (
        <BackgroundImage 
          className={className}
          fluid={backgroundFluidImageStack}>
          <FeaturedText>Premium Cabinetry & Remodeling Services</FeaturedText>
          <Button primary>Contact Us</Button>
        </BackgroundImage>
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