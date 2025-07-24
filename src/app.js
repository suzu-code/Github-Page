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

function initParticles() {
  for(let i = 0; i < baseParticleCount + maxLevel * 30; i++){
    const particle = document.createElement('div');
    particle.classList.add('particle');
    container.appendChild(particle);
    particles.push(particle);
  }
}

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

function disableClicks() {
  clickBtn.disabled = true;
  clickBtn.style.cursor = 'default';
  clickBtn.style.filter = 'grayscale(80%)';
}

function showResultMessage(text) {
  particles.forEach(p => p.style.display = 'none');
  animations.forEach(anim => anim.pause());
  animations.length = 0;

  const oldMsg = container.querySelector('.result-message');
  if (oldMsg) oldMsg.remove();

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
  messageDiv.textContent = text;  // ここで単純にテキストだけ表示
  container.appendChild(messageDiv);
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

