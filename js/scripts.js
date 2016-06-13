//business logic
function toDoItems(item1, item2, item3, item4) {
  this.item1 = item1;
  this.item2 = item2;
  this.item3 = item3;
  this.item4 = item4;
}
$(document).ready(function() {
  $("form#toDoListForm").submit(function(event) {
    event.preventDefault();
    var inputteditem1 = $("#item1").val();
    var inputteditem2 = $("#item2").val();
    var inputteditem3 = $("#item3").val();
    var inputteditem4 = $("#item4").val();

    var newToDoItems = new toDoItems(inputteditem1, inputteditem2, inputteditem3 ,inputteditem4);

    $("#thingsToDo").append("<li class='item1'>" + newToDoItems.item1 +  "</li>");
    $("#thingsToDo").append("<li class='item2'>" + newToDoItems.item2 + "</li>");
    $("#thingsToDo").append("<li class='item3'>" + newToDoItems.item3 + "</li>");
    $("#thingsToDo").append("<li class='item4'>" + newToDoItems.item4 + "</li>");

    $("#thingsToDo").submit(function(){
      $("#result").show();

      $(".item1").text(newToDoItems.item1);
      $(".item2").text(newToDoItems.item2);
      $(".item3").text(newToDoItems.item3);
      $(".item4").text(newToDoItems.item4);
    });
      $(".item1").click(function(){
        $(".item1").hide();
      });
      $(".item2").click(function(){
        $(".item2").hide();
      });
      $(".item3").click(function(){
        $(".item3").hide();
      });
      $(".item4").click(function(){
        $(".item4").hide();
      });
    $("#item1").val("");
    $("#item2").val("");
    $("#item3").val("");
    $("#item4").val("");
  });
});
