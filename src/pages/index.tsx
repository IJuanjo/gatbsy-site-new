import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <h1>TEST</h1>
      <Link to="/about">About</Link>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
