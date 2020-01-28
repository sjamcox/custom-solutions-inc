import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const MainNavWrapper = styled.nav`
    display: flex;
    flex-direction: row;
`

const NavItemWrapper = styled.ul`
    padding: 20px;
    li a {
        text-decoration: none;
        color: grey;
    }
`

export const MainNav = () => {
    
    const data = useStaticQuery(graphql`
        query AllMainNavLinksQuery {
            prismicMenu(id: {eq: "Prismic__Menu__Xi4JwRAAACMArR6l"}) {
                data {
                    menu_links {
                        label {
                            text
                        }
                        link {
                            url
                            link_type
                        }
                    }
                }
            }
        }
    `)
    
    const menuLinks = data.prismicMenu.data.menu_links

    return (
        <MainNavWrapper>
            {menuLinks.map(link =>
                    <NavItemWrapper>
                        {link.link.link_type === "Web" && <li><a href={link.link.url}>{link.label.text}</a></li>}
                        {link.link.link_type === "Document" && <li><Link to={link.link.url}>{link.label.text}</Link></li>}
                    </NavItemWrapper>
                )
            }
        </MainNavWrapper>
    )
}

