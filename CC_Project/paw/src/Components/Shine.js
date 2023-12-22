import React, { useEffect } from 'react';
import '../Assets/Shine.css'

function Shine() {
  useEffect(() => {
    let x1 = 0, y1 = 0;
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const dist_to_draw = 50;
    const delay = 1000;
    const fsize = ['1.1rem', '1.4rem', '.8rem', '1.7rem'];
    // const colors = ['#E23636', '#F9F3EE', '#E1F8DC', '#B8AFE6', '#AEE1CD', '#5EB0E5'];

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const selRand = (o) => o[rand(0, o.length - 1)];

    const distanceTo = (x1, y1, x2, y2) => Math.sqrt((Math.pow(x2 - x1, 2)) + (Math.pow(y2 - y1, 2)));

    const shouldDraw = (x, y) => (distanceTo(x1, y1, x, y) >= dist_to_draw);

    const addStr = (x, y) => {
      const container = document.getElementById('star-container');

      if (!container) {
        console.error('Star container not found');
        return;
      }

      const str = document.createElement('div');
      // str.innerHTML = '&#10022;';
      str.className = 'star';
      str.style.top = `${y + rand(-20, 20)}px`;
      str.style.left = `${x}px`;
      // str.style.color = selRand(colors);
      str.style.fontSize = selRand(fsize);

      container.appendChild(str);

      const fs = 10 + 5 * parseFloat(getComputedStyle(str).fontSize);

      // str.animate(
      //   {
      //     translate: `0 ${(y + fs) > vh ? vh - y : fs}px`,
      //     opacity: 0,
      //     transform: `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`
      //   },
      //   {
      //     duration: delay,
      //     fill: 'forwards',
      //   }
      // );

      setTimeout(() => {
        str.remove();
      }, 300);
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (shouldDraw(clientX, clientY)) {
        addStr(clientX, clientY);
        x1 = clientX;
        y1 = clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Cleanup event listener when the component unmounts
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect will run once on mount

  return (
    <div id="star-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* You can add additional content or styling here if needed */}
    </div>
  );
}

export default Shine;
