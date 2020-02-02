import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const MainNavWrapper = styled.nav`
    ul {
        display: flex;
        flex-direction: row;
        margin: 0;
    }
`

const NavItem = styled.li`
    list-style: none;
    margin: 0 20px;
    text-align: right;
    a {
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
            <ul>
            {menuLinks.map(link =>
                    <NavItem>
                        {link.link.link_type === "Web" && <a href={link.link.url}>{link.label.text}</a>}
                        {link.link.link_type === "Document" && <Link to={link.link.url}>{link.label.text}</Link>}
                    </NavItem>
                )
            }
            </ul>
        </MainNavWrapper>
    )
}

