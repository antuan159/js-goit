const root = document.querySelector('#root');
const width = 30;
const height = 30;
const arr = [];

function createRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  return `background: ${color}`;
}

function createBoxes(num) {
  for (let i = 0; i < num; i++) {
    const div = document.createElement('div');
    const size = `${height + i * 10}px`;
    div.setAttribute(
      'style',
      `height:${size}; 
      width:${size}; 
      ${createRandomColor()}`,
    );
    arr.push(div);
  }
}

createBoxes(7);

root.append(...arr);
