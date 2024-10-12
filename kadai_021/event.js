// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const h2Text = document.getElementById('text');

// HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click', () => {
	// h2要素に追加した「ボタンをクリックしました」というテキストを2秒後に追加する
	setTimeout(() => {
		h2Text.textContent = 'ボタンをクリックしました'
	}, 2000);
});