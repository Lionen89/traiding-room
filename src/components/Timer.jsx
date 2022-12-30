import React, { useState, useEffect } from 'react';

const Timer = ({ users, auctionTime, userTime = '120' }) => {
  const maxCount = users.length;
  const [delay, setDelay] = useState(+userTime);
  const [counter, setCounter] = useState(0);
  const [commonCounter, setCommonCounter] = useState(0);

  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  let activeClassName = '';

  const handleInc = () => {
    setCounter(counter + 1);
    setCommonCounter(commonCounter + 1);
  };

  if (minutes + seconds === 0 && auctionTime !== userTime * (commonCounter + 1)) {
    handleInc();
    setDelay(userTime);
  } else if (auctionTime === userTime * (commonCounter + 1) && delay === 0) {
    alert('Аукцион завершен, спасибо за участие!');
  }

  if (counter === maxCount) {
    setCounter(0);
  } else if (counter === users[counter]._id) {
    activeClassName = `timer__user${users[counter]._id}`;
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <span className={`timer ${activeClassName}`}>
        {String(minutes).padStart(2, '0')}:{seconds}
      </span>
    </>
  );
};

export default Timer;
