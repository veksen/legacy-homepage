export default `
  html,
  body,
  body > div:first-child,
  #__next,
  #__next > div:first-child {
    height: 100%;
  }

  body {
    background: #fff;
    margin: 0;
    color: #fff;
    color: #555;
    font-family: Arial, sans-serif;
    line-height: 1.42;
  }

  p {
    margin: 0;
  }

  p + p {
    margin-top: 1em;
  }

  .main {
    display: flex;
    align-items: stretch;
    height: 100%;
  }

  .side {
    flex: 0 1 50px;
    background-color: #eee;
    background: linear-gradient(86deg, rgba(255, 255, 255, 0.5), rgba(204, 204, 204, 0.5)), url(/static/img/cream_pixels.png)
  }

  .content {
    flex: 1 1 auto;
    overflow-y: hidden;
    font-size: 24px;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .content-inner {
    padding: 50px;
  }

  .main-bar {
    background: #39a769;
    margin-top: 100px;
    outline: 1px dashed #39a769;
    outline-offset: 3px;
  }

  .main-bar__img {
    display: block;
    margin-left: 40px;
    width: 300px;
  }

  // TODO: figure out why this doesn't work inside SocialLink.js
  .social__link {
    flex: 0 1 auto;
    line-height: 50px;
    display: flex;
    height: 50px;
    text-decoration: none;
    font-size: 20px
  }

  .social__link path {
    fill: #6d6d6d;
  }

  .social__link--github:hover path {
    fill: #000;
  }

  .social__link--twitter:hover path {
    fill: #1da1f2;
  }

  .social__link--stackoverflow:hover path {
    fill: #f38022;
  }

  .social__link--linkedin:hover path {
    fill: #00a0dc;
  }

  .social__link--facebook:hover path {
    fill: #3b5998;
  }

  .social__icon {
    width: 35px;
  }

  .social__text {
    display: none;
    color: #6d6d6d;
  }
`
