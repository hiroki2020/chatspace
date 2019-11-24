$(function(){
  $("#user-search-field").on("keyup", function(){
    let input = $("#user-search-field").val();
    $.ajax({
      type: "GET",
      url: "/users",       //users_controllerの、indexアクションにリクエストの送信先を設定する
      data: { keyword: input },
      dataType: "json"
    })
      .done(function(users) {
        console.log("成功です");
      })
      .fail(function() {
        console.log("失敗です");
      });
  });
}); 