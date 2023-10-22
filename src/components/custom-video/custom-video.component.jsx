import React from "react"
import * as S from "./custom-video.styles"

const CustomVideo = ({
  video,
  autoplay,
  controls,
  iframeVideo,
  arPaddingPercentage,
  ...props
}) => {
  return (
    <S.Section {...props} paddingpercentage={arPaddingPercentage}>
      {iframeVideo ? (
        <S.IframeWrapper>
          <iframe
            src={iframeVideo}
            width="100%"
            frameBorder={0}
            style={{ maxHeight: "100%" }}
          />
        </S.IframeWrapper>
      ) : (
        <S.Video
          autoPlay={autoplay}
          muted={autoplay}
          loop
          playsInline={autoplay}
          controls={controls}
        >
          <source src={video?.mediaItemUrl} type="video/mp4" />
        </S.Video>
      )}
    </S.Section>
  )
}

export default CustomVideo
