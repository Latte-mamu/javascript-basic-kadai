// 変数numに0～15までのランダムな整数を代入する
let num = Math.floor(Math.random() * 16)

// 変数numの値を出力する（確認用）
console.log(num);

// 変数(num)が3と5の倍数の場合、「“3と5の倍数です”」のみが出力する
if (num === 15) {
	console.log('3と5の倍数です');
}

// 変数(num)が5の倍数の場合、“5の倍数です”と出力する
else if (num === 5 || num === 10 || num === 15) {
	console.log('5の倍数です');
}

/// 変数(num)が3の倍数の場合、“3の倍数です”と出力する
else if (num === 3 || num === 6 || num === 9 || num === 12 || num === 15) {
	console.log('3の倍数です');
} 

// 上記2～4のいずれでもない場合、変数(num)を出力する
else {
	console.log(num);
}
