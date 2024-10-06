// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const h2Text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
	// 作成したh2要素に「ボタンをクリックしました」というテキストを追加する
	h2Text.textContent = 'ボタンをクリックしました';
});