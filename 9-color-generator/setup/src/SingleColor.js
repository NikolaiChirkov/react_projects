import React, { useState, useEffect } from 'react'

const SingleColor = ({index, rgb, weight, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');

  return (
    <article className={`color ${index > 10 && 'color-light'}`}
     style={{backgroundColor:`rgb(${bcg})`}}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexColor}</p>
    </article>
  );
}

export default SingleColor
