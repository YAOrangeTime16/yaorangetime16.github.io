import React from 'react';


const ProfileCover = () => (
  <div 
      className="prfImg uk-background-cover uk-overflow-hidden uk-margin-large-top uk-margin-large-bottom"
      uk-parallax="bgy: -300"
    >
        <div className="uk-text-center">
          <h1 className="prfTitle uk-light">PROFILE</h1>
        </div>
  </div>
)

const Profile = () => (
  <div id="about">
    <ProfileCover />
    <section>
      <h3>Who am I?</h3>
      <p>I'm a frontend developer and also a mother of two girls.
      Coming from Japan and living in Stockholm/Sweden now. I started my career as Administrator (customer support, office support) / DTP operator in Japan, and then decided to change careers towards IT.
      <br />
      Here, I took a two-year "frontend development" education course at a Swedish Vocatilnal Education School (Nackademin Yrkeshögskola), and after my graduation in May 2018, am looking for an opportunity in Stockholm.
      <br />
      I enjoy solving problems and love coding. 
      I am passionate about what I do, keen on what I am interested in, and work hard for it. I take on challenges to improve myself.
      </p>
      <h4>What am I doing?</h4>
      <p>
      Keep learning... and am looking for a frontend development job (full-time, part-time, consultant or any). Looking at and testing frontend and JavaScript technologies that I haven't learnt yet, such as SPA, SSR, Node / Express, have also applied for a <a href="https://chingu.io/">Chingu cohorts</a> project to improve my skills.
      </p>
      <h4>Educational Background</h4>
      <ul>
          <li>YH-Nackademin (Stockholm/SWEDEN) --- Frontend Development</li>
          <li>KOMVUX (Stockholm/SWEDEN) --- Swedish as Second Language 1, 2, 3 </li>
          <li>Salford Univ. (Manchester/UK) --- Marketing Course </li>
          <li>Aoyama Gakuin Univ. (Tokyo/JAPAN) --- BA in English Literature</li>
      </ul>
      <h4>Speaking Languages</h4>
      <p>English / Swedish / Japanese (native)</p>
    </section>
    <hr />
  </div>
);

export default Profile;