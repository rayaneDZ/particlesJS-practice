/*  var btn= document.getElementById("btn");
  var i=-1;
  btn.addEventListener("click", function(){

    $.ajax("https://learnwebcode.github.io/json-example/animals-1.json", {
      success: function(response) {

        i++;

        if (i>2) {
          i=0;
        }

        var ourData = response;

        console.log(ourData[i].name);

        var x = document.getElementById('animal-info');

        $("#animal-info").html(ourData[i].name);
        console.log(i);
      }
    });

  });
*/
/*  $.getJSON("script/json.json", function (data) {
    console.log(data);
  });
*/
 /*$.ajax({
    url: 'script/json.json',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(response) {
        console.log(response[0].name);
    }
  });
*/
