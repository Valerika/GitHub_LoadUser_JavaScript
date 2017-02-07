(function(){
'use strict';

function loadUsers() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.github.com/users', false);
  xhr.send();

  if (xhr.status !== 200) {
    alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
  } else {
    var data = JSON.parse(xhr.responseText);

    var item = '';
    for (var i=0, ln = data.length; i < ln; ++i) {
      item += '<div class="user__profile"><figure><img class="user__avatar" src="' + data[i]["avatar_url"] + '"/>'
      item += '<figcaption><a target="_blank" class="user__login" href="' + data[i]["html_url"] + '">' + data[i]["login"] + "</a>"
      item += '<p class="user__role"> Role: '+ data[i]["type"] + '</p></figcaption></figure></div>';
    }
    document.getElementById("usersList").innerHTML = item;
  }
}
  loadUsers();
 })();
