import React from "react"
import { HeroImage } from '../components/HeroImage'
import { Testimonial } from '../components/Testimonial'
import { Layout } from "../components/Layout"

export default () =>
    <Layout>
        <HeroImage />
        <Testimonial
            img='http://placekitten.com/50/50'
            text="Custom Solutions – you know, that is the perfect name for you. We called you about a door repair, and you came in and were able to identify the source of our frustrations with our kitchen and presented very do-able solutions."
            name="Jack Truddel"
            company="Portland, OR"
       />
    </Layout>
