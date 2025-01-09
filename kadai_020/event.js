// btnというidを持つHTML要素を取得し、定数に代入する
const Btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
Btn.addEventListener('click', () => {

  // <h2>の要素を取得する
  const h2Element = document.getElementById('text');

  // <h2>要素のテキストを変更する
  h2Element.textContent = 'ボタンがクリックされました';
});