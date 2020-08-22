import React from "react"
import { Global } from "@emotion/core"

const GlobalStyle = props => (
  <Global
    styles={theme => ({
      "*": {
        boxSizing: "border-box",
      },
      body: {
        margin: 0,
      },
    })}
  />
)

export default GlobalStyle
