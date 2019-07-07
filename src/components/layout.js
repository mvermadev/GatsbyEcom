/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Footer from "./reuseComp/Footer";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Heading from "./reuseComp/Heading";
import './bootstrap.min.css';
const Layout = ({ children }) => (
  <div className="bg-color">
    <Heading/>
    {children}
    <Footer/> 
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
