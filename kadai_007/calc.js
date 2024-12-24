let num = 10;

// 3と5の倍数の場合のチェックを最初に行います
if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
} else if (num % 3 === 0) { // 次に3の倍数のチェック
    console.log("3の倍数です");
} else if (num % 5 === 0) { // 次に5の倍数のチェック
    console.log("5の倍数です");
} else {
    console.log(num); // どれにも当てはまらない場合は数値自体を出力
}
