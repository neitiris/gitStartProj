
$(function() {
  function centerMenu(){
    let centerVar = $('#column2');
    for (var i = 0; i < centerItems.length; i++){
    centerVar.append('<a href="' + centerItems[i].href + '">' + '<img src="centerItems[0].img" alt="">' + centerItems[i].text + '</a>' + centerItems[i].cost)
    }
  }
  centerMenu()
});
