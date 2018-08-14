import React from 'react';
import { IconLinkedin, IconGithub } from '../../assets/svg';

const Footer = () => (
  <div className="footerHeight uk-padding-large" uk-grid="true">
    <div class="uk-width-1-2 uk-text-right uk-margin-large-top"><a className="uk-margin-right" href="https://www.linkedin.com/in/yoko-andrae-7323a0118/?locale=sv_SE"><IconLinkedin /></a></div>
    <div class="uk-width-1-2 uk-margin-large-top"><a href="https://github.com/YAOrangeTime16/yaorangetime16.github.io"><IconGithub /></a></div>
  </div> 
);

export default Footer;
