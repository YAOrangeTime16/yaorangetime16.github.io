import React from 'react';
import Card from './Card';

const Gallery = () => (
  <section id="projects" className="uk-flex uk-flex-wrap-between uk-grid-medium uk-child-width-expand@s uk-text-center uk-grid uk-margin-medium-top" uk-height-match="target: div > .uk-card" uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">
      <Card
        appTitle="Salon App"
        description="Applied styles based on a Sketch design, used react-router and react-loadable"
        codeUrl="https://github.com/YAOrangeTime16/skbv_arbetsprov"
        viewUrl="https://skbv-a03b9.firebaseapp.com/salon/salonprestige"
        badge={['react', 'router', 'loadable']} />
      <Card
        appTitle="ShowCase"
        description="React app with lazyload images"
        codeUrl="https://github.com/YAOrangeTime16/react-with-lazyload"
        viewUrl="https://yaorangetime16.github.io/react-with-lazyload"
        badge={['react', 'router', 'lazyload']} />
      <Card
        appTitle="List sharing app"
        description="Graduation Project: Examined and studied Progressive Web Application focusing on offline functionality"
        codeUrl="https://github.com/YAOrangeTime16/list-app"
        viewUrl="https://list-app-f6838.firebaseapp.com"
        badge={['react', 'pwa', 'firebase']} />
      <Card
        appTitle="Simple SNS"
        description="My first react app using firebase DB, auth, storage and hosting"
        codeUrl="https://github.com/YAOrangeTime16/simple-sns-react-app/tree/master"
        viewUrl="https://yaorangetime16.github.io/simple-sns-react-app/"
        badge={['react', 'firebase']} />
      <Card
        appTitle="Cafe Website"
        description="Experimental website to study Intersection Observer"
        codeUrl="https://github.com/YAOrangeTime16/sample-website-cafe"
        viewUrl="https://yaorangetime16.github.io/sample-website-cafe/"
        badge={['react', 'intersection observer']} />
      <Card
        appTitle="Card Games"
        description="Using Rest-ful API AJAX"
        codeUrl="https://github.com/YAOrangeTime16/ajax"
        viewUrl="https://yaorangetime16.github.io/ajax/"
        badge={['jQuery', 'ajax', 'api']} />
      <Card
        appTitle="PHP Simple CRM"
        description="Croup work at school. Code is written in PHP. I built 'Login/Register' with jQuery and PHP."
        codeUrl="https://github.com/YAOrangeTime16/php/tree/cloned"
        badge={['php', 'mysql', 'jquery']} />
  </section>
)

export default Gallery;