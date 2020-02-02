import React, { useContext } from 'react'
import { Context } from '../context/Context'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { Link, useStaticQuery, graphql } from 'gatsby'

const SidebarWrapper = styled.div`
    height: 100%;
    width: ${props => props.open ? '250px' : '0px'};
    background: grey;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    overflow-x: hidden;
    transition: 0.5s;
    .close-icon {
        text-align: right;
    }
`

const SidebarInnerWrapper = styled.div`
    margin: 20px;
    .close-icon {
        text-align: right;
    }
`

const NavItem = styled.li`
    padding: 10px;
    list-style: none;
    margin-bottom: 0;
    a {
        text-decoration: none;
        color: white;
        font-weight: 400;
        font-size: 20px;
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
                <SidebarInnerWrapper>
                    <div className="close-icon">
                        <MdClose onClick={toggleMenu} size="1.5em" />
                    </div>
                    <ul>
                        {menuLinks.map(link =>
                            <NavItem>
                                {link.link.link_type === "Web" && <a href={link.link.url}>{link.label.text}</a>}
                                {link.link.link_type === "Document" && <Link to={link.link.url}>{link.label.text}</Link>}
                            </NavItem>
                        )} 
                    </ul>
                </SidebarInnerWrapper>
           </SidebarWrapper>
        </div>
    )
}