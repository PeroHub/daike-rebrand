import React from "react"


export function ImageCom({img}) {
    return (
      <>
        <img
            loading="lazy"
            src={img}
            className="shrink-0 max-w-full aspect-square w-[200px]"
          />
      </>
    )
  }