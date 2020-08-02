/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import careerselect from '../../images/careerselect.jpg';

function SEO(props) {
  const {
    seo: {
      canonical,
      metaDesc,
      opengraphDescription,
      opengraphModifiedTime,
      opengraphPublishedTime,
      opengraphPublisher,
      opengraphTitle,
      opengraphType,
      opengraphUrl,
      title,
      twitterDescription,
      twitterImage,
      twitterTitle,
    } = {},
    lang,
  } = props;
  const twitterImageUrl = twitterImage && twitterImage.link;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );
  const meta = [
    {
      name: `og:locale`,
      content: lang,
    },
    {
      property: `og:type`,
      content: opengraphType || `website`,
    },
    {
      property: `og:title`,
      content: opengraphTitle || title,
    },
    {
      property: `og:description`,
      content: opengraphDescription || metaDesc,
    },
    {
      property: `og:url`,
      content: opengraphUrl || canonical,
    },
    {
      property: `og:site_name`,
      content: site.siteMetadata.title || `Career Select`,
    },
    {
      property: `article:publisher`,
      content: opengraphPublisher || `https://fb.me/selectcareer.path`,
    },
    {
      property: `article:published_time`,
      content: opengraphPublishedTime,
    },
    {
      property: `article:modified_time`,
      content: opengraphModifiedTime,
    },
    {
      property: `og:image`,
      content: careerselect,
    },
    {
      property: `fb:app_id`,
      content: `975977769539620`,
    },
    {
      name: `description`,
      content: metaDesc,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: twitterTitle || title,
    },
    {
      name: `twitter:description`,
      content: twitterDescription || metaDesc,
    },
    {
      name: `twitter:creator`,
      content: `@rajan_siingh`,
    },
    {
      name: `twitter:site`,
      content: `@rajan_siingh`,
    },
    {
      name: `twitter:image`,
      content: twitterImageUrl || careerselect,
    },
  ];
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={meta}
    >
      <link rel="canonical" href={canonical}/>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en_US`,
};

SEO.propTypes = {
  lang: PropTypes.string,
};

export default SEO;
