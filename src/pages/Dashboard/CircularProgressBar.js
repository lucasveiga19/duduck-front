import React, { useEffect, useState } from 'react';
import "./styleProgress.css";

const CircularProgressBar = ({value}) => {
  const [progressValue, setProgressValue] = useState(0);
  const [progressEndValue, setProgressEndValue] = useState(100);
  const speed = 100;

  useEffect(() => {
    const progressBar = document.querySelector(".circular-progress");
    const valueContainer = document.querySelector(".value-container-progress");

    setProgressEndValue(parseInt(valueContainer.textContent));

    const progress = setInterval(() => {
      setProgressValue((prevValue) => {
        const newValue = prevValue + 1;
        valueContainer.textContent = `${newValue}%`;
        progressBar.style.background = `conic-gradient(
          #FF7966 ${newValue * 3.6}deg,
          rgba(78, 78, 97, 0.20) ${newValue * 3.6}deg 
        )`;

        if (newValue === progressEndValue) {
          clearInterval(progress);
        }
        return newValue;
      });
    }, speed);

    return () => {
      clearInterval(progress);
    };
  }, [progressEndValue]);

  return (
    <div className="container-progress">
      <div className="circular-progress">
        <div className="value-container-progress">{value}</div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
