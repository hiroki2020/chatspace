$(function(){
  $("#user-search-field").on("keyup", function(){
    let input = $("#user-search-field").val();    //フォームの値を取得して変数に代入する

    $.ajax({
      type: 'GET',                // HTTPメソッドはGETで
      url:  '/users',             // /usersのURLに (これによりusersコントローラのindexアクションが起動)
      data: { keyword: input},    // keyword: inputを送信する
      dataType: 'json'            // サーバから値を返す際はjsonである
  })
      .done(function(users) {
        console.log("成功!");
      })
      .fail(function() {
        console.log("失敗です");
      });
  });
});