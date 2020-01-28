import React, { useContext } from 'react'
import { Context } from '../context/Context'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

const SidebarWrapper = styled.div`
    height: 100%;
    width: ${props => props.open ? '250px' : '0px'};
    background: pink;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
    li a {
        text-decoration: none;
        color: grey;
        overflow: hidden;
        white-space: nowrap;
    }
`

export const MobileMenu = () => {

    const { isMenuOpen, toggleMenu } = useContext(Context)

    const data = useStaticQuery(graphql`
        query AllMainNavLinksQuery2 {
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
        <div>
           <SidebarWrapper open={isMenuOpen}>
            <h1 onClick={toggleMenu}>X</h1>
                {menuLinks.map(link =>
                        <div>
                            {link.link.link_type === "Web" && <li><a href={link.link.url}>{link.label.text}</a></li>}
                            {link.link.link_type === "Document" && <li><Link to={link.link.url}>{link.label.text}</Link></li>}
                        </div>
                    )
                }
           </SidebarWrapper>
        </div>
    )
}