import React, { useState } from 'react';
import './App.css';

const emojis = [
  { name: 'Finger Up', emoji: '👍' },
  { name: 'Heart', emoji: '❤️' },
  { name: 'Smile', emoji: '😊' },
];

const EmojiList = () => {
  const [clicks, setClicks] = useState(Array(emojis.length).fill(0));
  const [showResult, setShowResults] = useState(false);

  const handleEmojiClick = (index) => {
    const newClicks = [...clicks];
    newClicks[index] += 1;
    setClicks(newClicks);
  };

  const handleShowResultsClick = () => {
    setShowResults(true);
    alert('Winner is ' + emojis[winningEmojiIndex].name);
  };

  const maxClicks = Math.max(...clicks);
  const winningEmojiIndex = clicks.indexOf(maxClicks);

  return (
    <div className='emojis-list'>
      <h1 className='emojis-h1'>Emoji List</h1>
      {emojis.map((emoji, index) => (
        <div className='emojis-test' key={index} onClick={() => handleEmojiClick(index)}>
          {emoji.name} - {emoji.emoji} - {clicks[index]}
        </div>
      ))}
      <button className='emojis-Btn' onClick={handleShowResultsClick}>Results</button>
      {showResult && (
        <div className='emojis-result'>
          <h2 className='emojis-result-h2'>Winner</h2>
          {emojis[winningEmojiIndex].name} - {emojis[winningEmojiIndex].emoji} - {maxClicks}
        </div>
      )}
    </div>
  );
};

export default EmojiList;