window.onload = function(){
  
      var li = document.querySelectorAll(".m-item");
      
      var date = new Date();

      var newli = document.createElement("li");
      var node = document.createTextNode("p9");
      newli.appendChild(node);

      var element = document.getElementsByTagName("ul");

      li[0].onclick = function()
      {
        li[0].style.color = "red";
      }

      li[1].onclick = function()
      {
        document.getElementsByTagName("h1")[0].innerHTML = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
      }  

      li[2].onclick = function()
      {
        var a = this.parentNode.querySelectorAll("li");
        // var a = document.getElementsByTagName("li");
        for(var i=0;i<a.length;i++)
        {
          a[i].classList.add("fn-active");
        }
      }

      li[3].onclick = function()
      {
        li[7].remove();
      }

      li[4].onclick = function()
      {
        window.open("https://www.taobao.com/","_blank");
      }

      li[5].onclick = function()
      {
        element[0].appendChild(newli);
      }

      element[0].onclick = function(e)
      {
        alert(e.target.innerHTML[1]);
      }
}