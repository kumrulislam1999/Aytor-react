import React from 'react'
import Layout from '../../components/Layout/Layout'
import PageBannar from '../../components/PageBannar/PageBannar'

/* ==== Import Images ==== */
import breadcrumbImg from "../../images/AboutPage/breadcumb_bg_about.jpg"


const About = () => {
  return (
    <Layout title={"About Us - Aytor"}>
      <PageBannar title={"About Us"} link={"About Us"} img={breadcrumbImg}/>
      <h1>About Pages</h1>

    </Layout>
  )
}

export default About
