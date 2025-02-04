import React from "react";

type ImageSvgProps = {
    file: string
}

export function ImageSvg({file}: ImageSvgProps){
    const fileRequired = require(`../../lib/${file}`)

    return(
        <div dangerouslySetInnerHTML={{ __html: fileRequired }} />
    )
}