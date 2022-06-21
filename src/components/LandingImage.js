import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export function LandingImage() {
  return <StaticImage 
    src="../images/000001.jpg" 
    alt="Box of shirts"
    placeholder="dominantColor"
  /> 
}  