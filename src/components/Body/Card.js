import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ appTitle, description, codeUrl, viewUrl, badge }) => (
  <div className="uk-width-1-3@m uk-width-1-1@s uk-margin-top">
    <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-transition-toggle" tabIndex="0">
      <h3 className="uk-card-title">{appTitle}</h3>
      { (badge!==undefined)
        ? badge.map((badge, i)=>(
          <span className="uk-badge uk-label uk-margin-small-right" key={ badge +i }>{ badge }</span>
        ))
        : null
      }
      <p>{ description }</p>
      <div className="uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary">
        <a className="uk-button uk-button-default uk-margin-small-right uk-margin-large-top" href={codeUrl}>Code</a>
       {
         viewUrl
         ? <a className="uk-button uk-button-secondary uk-margin-large-top" href={ viewUrl }>View</a>
         : null
       }
        
      </div>
      
    </div>
  </div>
);

Card.propTypes = {
  appTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  codeUrl: PropTypes.string.isRequired,
  viewUrl: PropTypes.string,
  badge: PropTypes.array
}

export default Card;