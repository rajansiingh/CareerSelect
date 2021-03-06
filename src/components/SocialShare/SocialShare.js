import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import cx from 'classnames';
import s from './SocialShare.module.scss';
import exampleImage from '../../images/careerselect.jpg';
import Globals from '../../../globals';


const SocialShare = ({ urlToShare }) => {
  let title = 'Career Select';
  let shareUrl = urlToShare;
  return (
    <div className={s.container}>
      <div className={s.socialNetwork}>
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className={cx(s.socialNetwork, s.shareBtn)}
        >
          <FacebookIcon size={32} round/>
        </FacebookShareButton>
      </div>

      <div className={s.socialNetwork}>
        <FacebookMessengerShareButton
          url={shareUrl}
          appId="975977769539620"
          className={cx(s.socialNetwork, s.shareBtn)}
        >
          <FacebookMessengerIcon size={32} round/>
        </FacebookMessengerShareButton>
      </div>

      <div className={s.socialNetwork}>
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className={cx(s.socialNetwork, s.shareBtn)}
        >
          <TwitterIcon size={32} round/>
        </TwitterShareButton>
      </div>

      <div className={s.socialNetwork}>
        <TelegramShareButton
          url={shareUrl}
          title={title}
          className={cx(s.socialNetwork, s.shareBtn)}
        >
          <TelegramIcon size={32} round/>
        </TelegramShareButton>
      </div>

      <div className={s.socialNetwork}>
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=":: "
          className={cx(s.socialNetwork, s.shareBtn)}
        >
          <WhatsappIcon size={32} round/>
        </WhatsappShareButton>
      </div>

      <div className={s.socialNetwork}>
        <LinkedinShareButton url={shareUrl} className={cx(s.socialNetwork, s.shareBtn)}>
          <LinkedinIcon size={32} round/>
        </LinkedinShareButton>
      </div>

      <div className={s.socialNetwork}>
        <PinterestShareButton
          url={shareUrl}
          media={exampleImage}
          className={cx(s.socialNetwork, s.shareBtn)}
        >
          <PinterestIcon size={32} round/>
        </PinterestShareButton>
      </div>

      <div className={s.socialNetwork}>
        <RedditShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className={cx(s.socialNetwork, s.shareBtn)}
        >
          <RedditIcon size={32} round/>
        </RedditShareButton>
      </div>

      <div className={s.socialNetwork}>
        <TumblrShareButton
          url={shareUrl}
          title={title}
          className={cx(s.socialNetwork, s.shareBtn)}
        >
          <TumblrIcon size={32} round/>
        </TumblrShareButton>
      </div>
    </div>);
};

SocialShare.propTypes = {
  urlToShare: PropTypes.string,
};

SocialShare.defaultProps = {
  urlToShare: Globals.siteURI,
};

export default SocialShare;
