$(function() {
  function centerMenu(){
    var center = $('#categ');
    for (var i = 0; i < senter.length; i++)
    {
    center.append('<a href="' + categoryItems[i].href + '">' + categoryItems[i].name + '</a>')
    }
  }
  centerMenu()
});
