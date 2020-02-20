import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TestimonialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 3rem;
    border-radius: 16px;
    box-shadow: 0 1px 2px 0 #B3B3B3;
    border: black;
    margin: 20px;
    max-width: 600px;
    p {
        margin: 0;
    }
`

const AttributionContainer = styled.div`
    display: flex;
    flex-direction: row;
    line-height: 20px;
    align-items: center;
    margin-bottom: 15px;
    img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin: 0 15px 0 0;
    }
    .name {
        font-weight: 700;
    }
`

const Attribution = ({name, company, img}) => {
    return (
        <AttributionContainer>
            <img src={img} alt={name}/>
            <div>
                <p className='name'>{name}</p>
                <p className='company'>{company}</p>
            </div>
        </AttributionContainer>
    )
}

export const Testimonial = ({name, company, img, text}) => {
    return (
        <TestimonialContainer>
            <Attribution name={name} company={company} img={img} />
            <p className='testimonial'>{text}</p>
        </TestimonialContainer>
    )
}

Testimonial.propTypes = {
    company: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}