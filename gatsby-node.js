import path from "path";
import channels from "./data/pages.json";

const listSections = [
  {
    componet: path.resolve(__dirname, "../components/sections/section1.js"),
    path: "/section1"
  },
  {
    componet: path.resolve(__dirname, "../components/sections/section2.js"),
    path: "/section2"
  }
]

channels.map(element => ({ ...element, paths: { ...listSections } })).forEach(channel => {
  exports.createPages = async ({ actions }) => {
    const { createPage } = actions
    channel.paths.forEach(section => {
      createPage({ path: `/${channel.channel}/${page.path}`, component: section.componet, context: channel.context })
    })
  }
})
