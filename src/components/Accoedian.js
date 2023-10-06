import { PiCaretDownBold } from 'react-icons/pi';
import { PiCaretUpBold } from 'react-icons/pi';
import React, { useState } from 'react';

function Accrodian({ data }) {
  const { question, answer } = data;
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={isClicked ? 'content active' : 'content'}>
      <div className="parent" onClick={() => setIsClicked(!isClicked)}>
        <div class="header-text">
          <h3>{question}</h3>
          {isClicked ? (
            <PiCaretUpBold className="icon" />
          ) : (
            <PiCaretDownBold className="icon" />
          )}
        </div>

        <div className="body">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Accrodian;
