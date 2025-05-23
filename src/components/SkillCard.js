import React from "react";

export default function SkillCard(props) {
  return (
    <div className="box">
      <h4>{props.title}</h4>
      <img alt={props.alt_logo} className="logo" src={props.logo} />
      <br></br>
      <br></br>
      <span>
        {Object.entries(props.badges).map((t, k) => (
          <img key={k} alt={t[0]} src={t[1]} />
        ))}
      </span>
    </div>
  );
}
