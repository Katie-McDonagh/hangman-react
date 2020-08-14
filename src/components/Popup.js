import React from 'react'

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable }) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
  return (
    <div className="popup-container">
      <div class="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button>Play Again</button>
      </div>
    </div>
  )
}

export default Popup
