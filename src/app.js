// import { animate } from 'animejs';

// const button = document.getElementById('changeColor');

// const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#E36414'];
// let index = 0;

// indexをcolors.length（色の数）で割った余り
// button.addEventListener('click', () => {
  
//   const nextColor = colors[index % colors.length];
  // document.でアニメーションの対象を選択
  //背景色を nextColor に変更するアニメーションを指定 1000ms（=1秒）
  //easing: 'easeInOutQuad' アニメーションの変化速度
//   animate(
//     document.body,
//     {
//       backgroundColor: nextColor,
//       duration: 1000,
//       easing: 'easeInOutQuad'
//     }
//   );
//   //クリックするごとに色を次のやつにする
//   index++;
// });


// --- h1の一文字ずつアニメーション ---
// const title = document.querySelector('h1');
// const text = title.textContent;
// title.innerHTML = text
//   .split('')
//   .map(char => `<span class="char">${char}</span>`)
//   .join('');

// アニメーション実行
// const chars = document.querySelectorAll('.char');
// animate(chars, {
//   opacity: [0, 1],
//   translateY: [50, 0],
//   delay: (_, i) => i * 100, // 各文字に100msずつずらして
//   duration: 800,
//   easing: 'easeOutExpo'
// });


// import { animate } from 'animejs';




// import { engine, animate, utils } from 'animejs'

// let count = 0;
// const countDisplay = document.getElementById("count");
// const clickBtn = document.getElementById("click-btn");
// const animationArea = document.getElementById("animation-area");

// let seconds = 0;
// const timer = document.getElementById("timer");
// setInterval(() => {
//   seconds++;
//   const min = String(Math.floor(seconds / 60)).padStart(2, '0');
//   const sec = String(seconds % 60).padStart(2, '0');
//   timer.textContent = `${min}:${sec}`;
// }, 1000);

// clickBtn.addEventListener("click", () => {
//   count++;
//   countDisplay.textContent = `Clicks: ${count}`;

//   const circle = document.createElement("div");
//   circle.classList.add("circle");

//   const size = 10 + count * 0.5;
//   circle.style.width = circle.style.height = `${size}px`;
//   circle.style.left = `${clickBtn.offsetLeft + clickBtn.offsetWidth / 2}px`;
//   circle.style.top = `${clickBtn.offsetTop + clickBtn.offsetHeight / 2}px`;
//   animationArea.appendChild(circle);

//   const burstPower = Math.min(300 + count * 3, 1000);
//   const duration = Math.max(600 - count * 5, 100);

//   animate({
//     targets: circle,
//     translateX: () => Math.random() * burstPower - burstPower / 2,
//     translateY: () => Math.random() * burstPower - burstPower / 2,
//     scale: [
//       { value: 1, duration: 0 },
//       { value: 2 + count / 20, duration: duration }
//     ],
//     opacity: [
//       { value: 1, duration: 0 },
//       { value: 0, duration: duration }
//     ],
//     easing: "easeOutExpo",
//     duration: duration,
//     complete: () => {
//       circle.remove();
//     }
//   });

//   if (count % 10 === 0) {
//     specialEffect();
//   }
// });

// function specialEffect() {
//   for (let i = 0; i < 10; i++) {
//     const sparkle = document.createElement("div");
//     sparkle.classList.add("circle");
//     sparkle.style.background = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D"][i % 4];
//     sparkle.style.width = sparkle.style.height = "12px";
//     sparkle.style.left = `${clickBtn.offsetLeft + clickBtn.offsetWidth / 2}px`;
//     sparkle.style.top = `${clickBtn.offsetTop + clickBtn.offsetHeight / 2}px`;
//     animationArea.appendChild(sparkle);

//     animate({
//       targets: sparkle,
//       translateX: Math.random() * 800 - 400,
//       translateY: Math.random() * 800 - 400,
//       scale: [1, 2 + Math.random() * 2],
//       opacity: [1, 0],
//       duration: 1000,
//       easing: "easeOutCubic",
//       complete: () => sparkle.remove()
//     });
//   }
// }




// const [ $container ] = utils.$('.container');
// const [ $range ] = utils.$('.range');

// for (let i = 0; i < 150; i++) {
//   const $particle = document.createElement('div');
//   $particle.classList.add('particle');
//   $container.appendChild($particle);
//   animate($particle, {
//     x: utils.random(-10, 10, 2) + 'rem',
//     y: utils.random(-3, 3, 2) + 'rem',
//     scale: [{ from: 0, to: 1 }, { to: 0 }],
//     delay: utils.random(0, 1000),
//     loop: true,
//   });  
// }

// function onInput() {
//   engine.precision = this.value;
// }

// $range.addEventListener('input', onInput);





// import { engine, animate } from 'animejs';

// const container = document.querySelector('.container');
// const range = document.getElementById('range');

// function random(min, max, precision = 0) {
//   const factor = Math.pow(10, precision);
//   return Math.round((Math.random() * (max - min) + min) * factor) / factor;
// }

// for (let i = 0; i < 150; i++) {
//   const particle = document.createElement('div');
//   particle.classList.add('particle');
//   container.appendChild(particle);

//   animate(particle, {
//     x: random(-10, 10, 2) + 'rem',
//     y: random(-3, 3, 2) + 'rem',
//     scale: [
//       { value: [0, 1], duration: 400 },
//       { value: 0, duration: 400 }
//     ],
//     delay: random(0, 1200),
//     duration: 1200,
//     easing: 'easeInOutSine',
//     loop: true
//   });
// }

// range.addEventListener('input', function () {
//   // engine.precision は小数点以下の計算回数を変えます。0〜20まで広げました。
//   engine.precision = parseInt(this.value);
// });














// import { engine, animate } from 'animejs';

// const container = document.querySelector('.container');
// const range = document.getElementById('range');

// function random(min, max, precision = 0) {
//   const factor = Math.pow(10, precision);
//   return Math.round((Math.random() * (max - min) + min) * factor) / factor;
// }

// for (let i = 0; i < 150; i++) {
//   const particle = document.createElement('div');
//   particle.classList.add('particle');
//   container.appendChild(particle);

//   animate(particle, {
//     x: random(-10, 10, 2) + 'rem',
//     y: random(-3, 3, 2) + 'rem',
//     scale: [
//       { value: [0, 1], duration: 400 },
//       { value: 0, duration: 400 }
//     ],
//     delay: random(0, 1200),
//     duration: 1200,
//     easing: 'easeInOutSine',
//     loop: true
//   });
// }

// range.addEventListener('input', function () {
  
//   engine.precision = parseInt(this.value);
// });










// let count = 0;
// const countDisplay = document.getElementById("count");
// const clickBtn = document.getElementById("click-btn");

// let seconds = 0;
// const timer = document.getElementById("timer");
// setInterval(() => {
//   seconds++;
//   const min = String(Math.floor(seconds / 60)).padStart(2, '0');
//   const sec = String(seconds % 60).padStart(2, '0');
//   timer.textContent = `${min}:${sec}`;
// }, 1000);

// clickBtn.addEventListener("click", () => {
//   count++;
//   countDisplay.textContent = `Clicks: ${count}`;
// });





























// import { animate, engine } from 'animejs';

// const container = document.querySelector('.container');
// const range = document.getElementById('range');
// const countDisplay = document.getElementById('count');
// const clickBtn = document.getElementById('click-btn');
// const timerDisplay = document.getElementById('timer');

// let count = 0;
// const maxLevel = 10;
// const baseParticleCount = 150;
// const maxClicks = 100;
// const timeAttackSeconds = 20; 

// const particles = [];
// const animations = [];

// function random(min, max, precision = 0) {
//   const factor = 10 ** precision;
//   return Math.round((Math.random() * (max - min) + min) * factor) / factor;
// }

// function pad(num) {
//   return String(num).padStart(2, '0');
// }


// let remainingSeconds = timeAttackSeconds;
// timerDisplay.textContent = `00:${pad(remainingSeconds)}`;

// const timerInterval = setInterval(() => {
//   remainingSeconds--;
//   if (remainingSeconds < 0) {
//     clearInterval(timerInterval);
//     timerDisplay.textContent = `00:00`;

//     clickBtn.disabled = true;
//     clickBtn.style.cursor = 'default';
//     clickBtn.style.filter = 'grayscale(80%)';
//     return;
//   }
//   timerDisplay.textContent = `00:${pad(remainingSeconds)}`;
// }, 1000);


// function initParticles() {
//   for(let i = 0; i < baseParticleCount + maxLevel * 30; i++){
//     const particle = document.createElement('div');
//     particle.classList.add('particle');
//     container.appendChild(particle);
//     particles.push(particle);
//   }
// }

// function updateAnimation(level) {
//   const particleCount = baseParticleCount + level * 30;
//   const maxX = 10 + level * 5;
//   const maxY = 3 + level * 2;
//   const maxScale = 1 + level * 0.3;
//   const duration = 1200 - level * 100 > 400 ? 1200 - level * 100 : 400;

 
//   animations.forEach(anim => anim.pause());
//   animations.length = 0;

//   for(let i = 0; i < particles.length; i++) {
//     const p = particles[i];
//     if(i < particleCount) {
//       p.style.display = 'block';
//       const anim = animate(p, {
//         x: random(-maxX, maxX, 2) + 'rem',
//         y: random(-maxY, maxY, 2) + 'rem',
//         scale: [
//           { value: [0, maxScale], duration: duration / 2 },
//           { value: 0, duration: duration / 2 }
//         ],
//         delay: random(0, duration),
//         duration: duration,
//         easing: 'easeInOutSine',
//         loop: true
//       });
//       animations.push(anim);
//     } else {
//       p.style.display = 'none';
//     }
//   }
// }

// clickBtn.addEventListener('click', () => {
//   if (count >= maxClicks) return; 

//   count++;
//   countDisplay.textContent = `Clicks: ${count}/${maxClicks}`;

//   const level = Math.floor(count / 5);
//   updateAnimation(level > maxLevel ? maxLevel : level);
// });

// range.addEventListener('input', () => {
//   engine.precision = parseInt(range.value);
// });

// initParticles();
// engine.precision = parseInt(range.value);
// countDisplay.textContent = `Clicks: 0/${maxClicks}`;
// updateAnimation(0);




















import { animate, engine } from 'animejs';

const container = document.querySelector('.container');
const range = document.getElementById('range');
const countDisplay = document.getElementById('count');
const clickBtn = document.getElementById('click-btn');
const timerDisplay = document.getElementById('timer');

let count = 0;
const maxLevel = 10;
const baseParticleCount = 150;
const maxClicks = 100;
const timeAttackSeconds = 20; // タイムアタック秒数

const particles = [];
const animations = [];

function random(min, max, precision = 0) {
  const factor = 10 ** precision;
  return Math.round((Math.random() * (max - min) + min) * factor) / factor;
}

function pad(num) {
  return String(num).padStart(2, '0');
}

// --- タイムアタック用カウントダウンタイマー ---
let remainingSeconds = timeAttackSeconds;
timerDisplay.textContent = `00:${pad(remainingSeconds)}`;

let timerInterval = setInterval(() => {
  remainingSeconds--;
  if (remainingSeconds < 0) {
    clearInterval(timerInterval);
    timerDisplay.textContent = `00:00`;
    disableClicks();

    if (count < maxClicks) {
      showResultMessage('ざんねん！');
    }
    return;
  }
  timerDisplay.textContent = `00:${pad(remainingSeconds)}`;
}, 1000);

// --- 初期パーティクル作成 ---
function initParticles() {
  for(let i = 0; i < baseParticleCount + maxLevel * 30; i++){
    const particle = document.createElement('div');
    particle.classList.add('particle');
    container.appendChild(particle);
    particles.push(particle);
  }
}

// --- パーティクルアニメーション更新 ---
function updateAnimation(level) {
  const particleCount = baseParticleCount + level * 30;
  const maxX = 10 + level * 5;
  const maxY = 3 + level * 2;
  const maxScale = 1 + level * 0.3;
  const duration = 1200 - level * 100 > 400 ? 1200 - level * 100 : 400;

  animations.forEach(anim => anim.pause());
  animations.length = 0;

  for(let i = 0; i < particles.length; i++) {
    const p = particles[i];
    if(i < particleCount) {
      p.style.display = 'block';
      const anim = animate(p, {
        x: random(-maxX, maxX, 2) + 'rem',
        y: random(-maxY, maxY, 2) + 'rem',
        scale: [
          { value: [0, maxScale], duration: duration / 2 },
          { value: 0, duration: duration / 2 }
        ],
        delay: random(0, duration),
        duration: duration,
        easing: 'easeInOutSine',
        loop: true
      });
      animations.push(anim);
    } else {
      p.style.display = 'none';
    }
  }
}

// --- クリック無効化共通処理 ---
function disableClicks() {
  clickBtn.disabled = true;
  clickBtn.style.cursor = 'default';
  clickBtn.style.filter = 'grayscale(80%)';
}

// --- 結果メッセージ表示 ---
function showResultMessage(text) {
  // パーティクル停止＆非表示
  particles.forEach(p => p.style.display = 'none');
  animations.forEach(anim => anim.pause());
  animations.length = 0;

  // 既存メッセージ削除
  const oldMsg = container.querySelector('.result-message');
  if (oldMsg) oldMsg.remove();

  // メッセージ用div作成
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('result-message');
  messageDiv.style.position = 'absolute';
  messageDiv.style.top = '50%';
  messageDiv.style.left = '50%';
  messageDiv.style.transform = 'translate(-50%, -50%)';
  messageDiv.style.fontSize = '4rem';
  messageDiv.style.color = '#a68cff';
  messageDiv.style.fontWeight = 'bold';
  messageDiv.style.userSelect = 'none';
  container.appendChild(messageDiv);

  // 1文字ずつspanに分割
  [...text].forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.display = 'inline-block';
    span.style.margin = '0 0.05em';
    messageDiv.appendChild(span);
  });

  // animejsで一文字ずつアニメーション
  animate(messageDiv.querySelectorAll('span'), {
    y: [
      { value: '-2.75rem', easing: 'easeOutExpo', duration: 600 },
      { value: 0, easing: 'easeOutBounce', duration: 800, delay: 100 }
    ],
    rotate: {
      value: '1turn',
      delay: 0
    },
    delay: (_, i) => i * 50,
    easing: 'easeInOutCirc',
    loopDelay: 1000,
    loop: true
  });
}

// --- クリックイベント ---
clickBtn.addEventListener('click', () => {
  if (count >= maxClicks) return;

  count++;
  countDisplay.textContent = `Clicks: ${count}/${maxClicks}`;

  if (count === maxClicks) {
    clearInterval(timerInterval);
    disableClicks();
    showResultMessage('クリアおめでとう！');
    return;
  }

  const level = Math.floor(count / 5);
  updateAnimation(level > maxLevel ? maxLevel : level);
});

// --- スライダー精度設定 ---
range.addEventListener('input', () => {
  engine.precision = parseInt(range.value);
});

initParticles();
engine.precision = parseInt(range.value);
countDisplay.textContent = `Clicks: 0/${maxClicks}`;
updateAnimation(0);
