import React from "react"
import { ThemeContextProvider } from "./src/context/ThemeContext"
require("prismjs/plugins/line-numbers/prism-line-numbers.css")

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeContextProvider>
            {element}
        </ThemeContextProvider>
    )
}