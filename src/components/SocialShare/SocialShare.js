import React, { useEffect } from "react"
import PropTypes from "prop-types"
import {
  FacebookShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  TumblrShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
} from "react-share"
import "./SocialShare.css"
import exampleImage from "../../images/careerselect.png"


const SocialShare = ({ shareUrl }) => {
  const title = "Career Select"
  useEffect(() => {
    shareUrl = window && window.location.href
  }, [])
  return (<div className="Demo__container">
    <div className="Demo__some-network">
      <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round/>
      </FacebookShareButton>

      <div>
        <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
          {count => count}
        </FacebookShareCount>
      </div>
    </div>

    <div className="Demo__some-network">
      <FacebookMessengerShareButton
        url={shareUrl}
        appId="975977769539620"
        className="Demo__some-network__share-button"
      >
        <FacebookMessengerIcon size={32} round/>
      </FacebookMessengerShareButton>
    </div>

    <div className="Demo__some-network">
      <TwitterShareButton
        url={shareUrl}
        title={title}
        className="Demo__some-network__share-button"
      >
        <TwitterIcon size={32} round/>
      </TwitterShareButton>

      <div className="Demo__some-network__share-count">&nbsp;</div>
    </div>

    <div className="Demo__some-network">
      <TelegramShareButton
        url={shareUrl}
        title={title}
        className="Demo__some-network__share-button"
      >
        <TelegramIcon size={32} round/>
      </TelegramShareButton>

      <div className="Demo__some-network__share-count">&nbsp;</div>
    </div>

    <div className="Demo__some-network">
      <WhatsappShareButton
        url={shareUrl}
        title={title}
        separator=":: "
        className="Demo__some-network__share-button"
      >
        <WhatsappIcon size={32} round/>
      </WhatsappShareButton>

      <div className="Demo__some-network__share-count">&nbsp;</div>
    </div>

    <div className="Demo__some-network">
      <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
        <LinkedinIcon size={32} round/>
      </LinkedinShareButton>
    </div>

    <div className="Demo__some-network">
      <PinterestShareButton
        url={shareUrl}
        media={exampleImage}
        className="Demo__some-network__share-button"
      >
        <PinterestIcon size={32} round/>
      </PinterestShareButton>

      <div>
        <PinterestShareCount url={shareUrl} className="Demo__some-network__share-count"/>
      </div>
    </div>

    <div className="Demo__some-network">
      <RedditShareButton
        url={shareUrl}
        title={title}
        windowWidth={660}
        windowHeight={460}
        className="Demo__some-network__share-button"
      >
        <RedditIcon size={32} round/>
      </RedditShareButton>

      <div>
        <RedditShareCount url={shareUrl} className="Demo__some-network__share-count"/>
      </div>
    </div>

    <div className="Demo__some-network">
      <TumblrShareButton
        url={shareUrl}
        title={title}
        className="Demo__some-network__share-button"
      >
        <TumblrIcon size={32} round/>
      </TumblrShareButton>

      <div>
        <TumblrShareCount url={shareUrl} className="Demo__some-network__share-count"/>
      </div>
    </div>
  </div>)
}

SocialShare.propTypes = {
  shareUrl: PropTypes.string,
}

SocialShare.defaultProps = {
  shareUrl: "https://careerselect.in/",
}

export default SocialShare
