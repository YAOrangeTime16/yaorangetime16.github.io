import React from 'react';
import { LogoSvg } from '../../assets/svg.js';

const Cover = () => (
  <div 
    className="coverImg uk-background-cover uk-overflow-hidden uk-dark uk-flex uk-flex-top"
    uk-parallax="bgy: -300"
  >
      <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <LogoSvg fillCol="#e2796d"/>
      </div>
</div>
)

export default Cover;