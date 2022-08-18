'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

userNameInput.onkeydown = event => {
    if (event.key === 'Enter') {
        //TODO ボタンのonclick() 処理を呼び出す
        assessmentButton.onclick();
    }
};

assessmentButton.onclick =  () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
        //名前が空の時は処理を終了する
        return;
    }
    console.log(userName);
    //TODO 診断結果表示エリアの作成
    resultDivided.innerText = '';
    
   //headerDivided の作成
    const headerDivided = document.createElement('div'); //<h3></h3>
    headerDivided.setAttribute('class', 'card-header');
    headerDivided.innerText = '診断結果';//<h3>診断結果</h3>
    //resultDivided.appendChild(header);
    //<div id='result-area'><h3>診断結果</h3></div>

    //bodyDivided の作成
    const bodyDivided = document.createElement('div');
    bodyDivided.setAttribute('class', 'card-body');

    const paragraph = document.createElement('p');//pタグ
    paragraph.setAttribute('class', 'card-text');
    const result = assessment(userName);//診断結果を用意しておく
    paragraph.innerText = result;//<p>ooさんのいいところはooです</p>
    bodyDivided.appendChild(paragraph);//<div><p><><>

    //resultDivided にBootstrap　のスタイルを適用する
    resultDivided.setAttribute('class', 'card');
    resultDivided.setAttribute('style', 'max-width: 700px;')

    //headerDivided と bodyDivided を resultDividedに差し込む
    resultDivided.appendChild(headerDivided);
    resultDivided.appendChild(bodyDivided);

     //TODO　ツイートエリアの作成 
     tweetDivided.innerText = '';//診断ボタンを押すたびに増えないように都度消す
     const anchor = document.createElement('a');//<a></a>
     const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' +
     encodeURIComponent('あなたのいいところ') + 
     '&ref_src=twsrc%5Etfw';
     anchor.setAttribute('href', hrefValue);
     anchor.setAttribute('class', 'twitter-hashtag-button');
     anchor.setAttribute('data-text', result);
     anchor.innerText = 'Tweet #あなたのいいところ';
     tweetDivided.appendChild(anchor);

     const script =document.createElement('script');
     script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
     tweetDivided.appendChild(script);
     
}


const answers = [
    '{userName}のいいところは声です。{userName}ます。',
    '{userName}のいいところはまなざしです。{userName}ます。',
    '{userName}のいいところは情熱です。{userName}ます。',
    '{userName}のいいところは厳しさです。{userName}ます。',
    '{userName}のいいところは知識です。{userName}ます。',
    '{userName}のいいところはユニークさです。{userName}ます。',
    '{userName}のいいところは用心深さです。{userName}ます。',
    '{userName}のいいところは見た目です。{userName}ます。',
    '{userName}のいいところは決断力です。{userName}ます。',
    '{userName}のいいところは思いやりです。{userName}ます。',
    '{userName}のいいところは感受性です。{userName}ます。',
    '{userName}のいいところは節度です。{userName}ます。',
    '{userName}のいいところは好奇心です。{userName}ます。',
    '{userName}のいいところは気配りです。{userName}ます。',
    '{userName}のいいところはその全てです。{userName}ます。',
    '{userName}のいいところは自制心です。{userName}ます。',
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */

function assessment(userName) {
    //診断処理を実装
    //入力が同じ名前なら同じ結果を表示する

    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
    //０～１５の範囲に収める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    result = result.replaceAll('{userName}', userName);

    return result;
}

console.log(assessment('太郎'));
console.log(assessment('次郎'));
console.log(assessment('康太'));
console.log(assessment('太郎'));

console.assert(
    assessment('太郎') ===
    '太郎のいいところは決断力です。太郎ます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
)


/**
 * break;
 * {}の中の処理を終了する
 * return;
 * 関数の処理を終了する
 */
