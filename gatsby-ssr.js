import React from "react"
import Layout from "./src/components/structures/Layout"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: "no-js",
  })
}
