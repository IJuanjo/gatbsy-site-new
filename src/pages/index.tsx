import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <h1>TEST</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/about2">About 2</Link>
      <br />

    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return <>
    <title>Home Page</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </>
}
