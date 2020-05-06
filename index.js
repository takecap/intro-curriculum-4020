'use strict';

function getA() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(11); }, 1000);
  });
}

function getB() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(13); }, 1000);
  });
}

function getC() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(17); }, 1000);
  });
}

// TODO ここに getA, getB, getC で得られる結果をかけあわせた結果 2431 を標準出力するコードを記述する
// ただし Promise チェイン(then関数の結果に対するthen関数の呼び出し)を一度は用いて実装をすること
Promise.all([getA(), getB(), getC()]).then((values) => {
  let val = 1;
  for (let i = 0; i < values.length; i++) {
    val *= values[i];
  }
  console.log(val);
})

getA().then((v1) => {
  return getB().then((v2) => { return v1 * v2; });
}).then((result) => {
  getC().then((v3) => { console.log(result * v3); });
});
