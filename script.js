$(function() {

  // 「.option-btn」要素のclickイベント
  $('.option-btn').click(function() {

    // 変数「clickedOption」に、クリックした要素のdata-optionの値を代入
    var clickedOption = $(this).attr('data-option');

    // 変数「optionText」にクリックしたボタンのテキストを代入
    var optionText = $(this).text();

    // 変数clickedOptionを用いて、「#select-form」の値を自動で入力
    $('#select-form').val(clickedOption);

    // 変数optionTextを用いて、「#text-form」の値を自動で入力
    $('#text-form').val(optionText + 'が好きな理由は、');
    
  });
  
  // 「送信ボタン」のsubmitイベント
  $('#form').submit(function() {

    // 選択されたキャラクターの値を変数「selectItem」に代入
    var selectItem = $('#select-form').val();
  
    // テキストエリアに入力された値を変数「textItem」に代入
    var textItem = $('#text-form').val();
  
    // テキストエリアが空文字列の時、エラーメッセージを表示
    if (textItem == '') {
      $('#error-message').text('理由を記入してください');
  
      // 空文字列ではない時、エラーメッセージを表示しない
    } else {
      $('#error-message').text('');
    }
  
    // 変数「selectItem」の値を出力
    $('#output-select').text(selectItem);
  
    // 変数「textItem」の値を出力
    $('#output-text').text(textItem);
  
    return false;
  });

});