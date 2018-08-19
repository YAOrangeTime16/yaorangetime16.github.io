import React from 'react';

const SkillCard = ({ skillName, labelColor }) => (
    <div className="uk-margin-top uk-margin-right">
        <span className={labelColor ? `uk-label labelColor-${labelColor}` : `uk-label`}>{ skillName }</span>
    </div>
)

const Skills = () => (
  <div id="skills">
    <h3>Skills (Experiences)</h3>
    <div className="uk-flex uk-text-center uk-flex-wrap uk-flex-center">
      <SkillCard skillName="JavaScript ES6/ES7" labelColor="js"/>
      <SkillCard skillName="React" labelColor="js"/>
      <SkillCard skillName="React Native + Expo" labelColor="js"/>
      <SkillCard skillName="Redux" labelColor="js"/>
      <SkillCard skillName="Jest / Enzyme" labelColor="js"/>
      <SkillCard skillName="jQuery" labelColor="js"/>
      <SkillCard skillName="gulp" labelColor="js"/>
      <SkillCard skillName="CSS3 / HTML5" labelColor="style"/>
      <SkillCard skillName="SASS" labelColor="style"/>
      <SkillCard skillName="Bootstrap" labelColor="style"/>
      <SkillCard skillName="PHP"/>
      <SkillCard skillName="MySQL"/>
      <SkillCard skillName="WordPress"/>
      <SkillCard skillName="firebase" labelColor="tool"/>
      <SkillCard skillName="Git / GitHub" labelColor="tool"/>
      <SkillCard skillName="npm" labelColor="tool"/>
      <SkillCard skillName="webpack" labelColor="tool"/>
      <SkillCard skillName="illustrator" labelColor="tool"/>
      <SkillCard skillName="photoshop" labelColor="tool"/>
    </div>
  </div>
)

export default Skills;