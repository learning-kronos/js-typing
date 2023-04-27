/* グローバル変数 */
// 問題文
const words = ['function', 'const', 'input', 'article', 'body', 'header',
            'margin', 'background', 'static', 'footer', 'document', 'padding'];
let count = 0;          // 入力問題数
let numOfChars = 0;     // 入力文字数
let endFlg = false;     // 終了フラグ
let start = 0;          // 開始日時
let end = 0;            // 終了日時

/* 初期処理 */
window.onload = function () {
    const showText = document.querySelector('#show-text');
    const enteredText = document.querySelector('#entered-text');

    let random = Math.floor(Math.random() * words.length);
    showText.innerHTML = words[random];
    enteredText.focus();

    start = Date.now();
    end = 0;
}

/* タイプ時の処理 */
function evaluation() {
    const showText = document.querySelector('#show-text');
    const enteredText = document.querySelector('#entered-text');

    if (!endFlg) {
        if (showText.innerText == enteredText.value) {
            count++;
            numOfChars += enteredText.value.length;

            if (count >= 5) {
                endFlg = true;
                enteredText.blur();
                enteredText.disabled = true;

                end = Date.now();
                const sec = Math.floor((end - start) / 1000) % 60;
                const min = Math.floor((end - start) / 1000 / 60) % 60;
                let wpm = numOfChars / Math.floor((end - start) / 1000) * 60;
                wpm = (Math.round(wpm * 10)) / 10;

                const result = document.querySelector('#result');
                result.innerHTML = `<p class="badge-title">結果</p>
                                  <table class="table-center ">
                                    <tr>
                                      <th>入力時間</th>
                                      <td>${min}分${sec}秒</td>
                                    </tr>
                                    <tr>
                                      <th>入力文字数</th>
                                      <td>${numOfChars}文字</td>
                                    </tr>
                                    <tr>
                                      <th>WPM</th>
                                      <td>${wpm}</td>
                                    </tr>
                                  </table>
                                  <div class="link-div"><a href="./index.html">もう一度</a></div>`;
            } else {
                let random = Math.floor(Math.random() * words.length);
                showText.innerHTML = words[random];
                enteredText.value = '';
            }
        }
    }
}
