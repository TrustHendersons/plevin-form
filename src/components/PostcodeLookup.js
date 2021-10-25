import React from "react"

const PostcodeLookup =()=> 

{` IdealPostcodes.PostcodeLookup.setup({
  apiKey: "iddqd",
  context: "#lookup_field",
  outputFields: {
    line_1: "#line_1",
    line_2: "#line_2",
    line_3: "#line_3",
    post_town: "#post_town",
    postcode: "#postcode",
  },
}); `}

export default PostcodeLookup;