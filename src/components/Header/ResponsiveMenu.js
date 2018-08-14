import React, { Component, Fragment } from 'react';
import { Menu } from '../../assets/svg';

import jump from 'jump.js';

class MenuList extends Component {

  jumpTo = target => jump(target, {
    offset: -100
  });

  render(){
    return(
      <Fragment>
        <li><a onClick={()=>this.jumpTo('#projects')}>Projects</a></li>
        <li><a onClick={()=>this.jumpTo('#about')}>About Me</a></li>
        <li><a onClick={()=>this.jumpTo('#skills')}>Skills</a></li>
      </Fragment>
    )
  }
}
const ResponsiveMenu = () => (
  <Fragment>

    {/*-- Small device --*/}
    <div className="uk-offcanvas-content uk-hidden@s">
      <Menu ukToggle="target: #offcanvas-usage" />
      <div id="offcanvas-usage" uk-offcanvas="true">
        <ul className="uk-offcanvas-bar uk-list">
            <MenuList />
        </ul>
      </div>
    </div>

    {/*-- Medium or larger device --*/}
    <ul className="uk-navbar-nav uk-visible@s">
        <MenuList />
    </ul>

  </Fragment>
)

export default ResponsiveMenu;