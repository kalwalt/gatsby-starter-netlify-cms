import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from 'react-intl';
import 'intl';

import Navbar from '../components/Navbar-en'
import './all.sass'
import 'font-awesome/css/font-awesome.css'
import 'animate.css/animate.css'

const Layout = ({ children, location, i18nMessages }) => {
  return(
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
              languages {
                defaultLangKey
                langs
              }
            }
          },
          markdownRemark{
           fields{
            slug
           }
         }
        }
    `}
    render={data => {
      //const url = location.pathname;
      //const url = "localhost:8000";
      const { markdownRemark } = data;
      const url = `http://localhost:8000${markdownRemark.fields.slug}`;
      const { langs, defaultLangKey } = data.site.siteMetadata.languages;
      const langKey = getCurrentLangKey(langs, defaultLangKey, url);
      const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/');
      const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));
      console.log("url is: " + url);
      console.log("languages menu: ");
      console.log(langsMenu);
      return (
        <IntlProvider
          locale={langKey}
          messages={i18nMessages}
        >
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
	        <meta name="theme-color" content="#fff" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <Navbar langs={langsMenu} />
        <div>{children}</div>
      </div>
      </IntlProvider>
    )
   }}
  />
);
};

Layout.propTypes = {
  children: PropTypes.func,
}


export default Layout
