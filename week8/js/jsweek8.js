window.onload = function(){
        var i;
        var hasBig = false;
        var theimg = document.getElementsByClassName("imgs");
        var a = Array.from(theimg);
        var taskone = document.getElementsByClassName("taskone")[0];
        var taskthree = document.getElementsByClassName("taskthree")[0];
        var sel = document.getElementsByClassName("selects");
        var mes = document.getElementsByClassName("mesimg")[0];
        var line = document.getElementsByClassName("line");
        var del = document.getElementsByClassName("del");
        var b = Array.from(del);
        var add = document.getElementsByClassName("addbtn")[0];
        var copyline = line[0].cloneNode(true);
            sel[0].style.background = "grey";
            sel[1].style.background = "grey";
            sel[2].style.background = "grey";
        a.forEach(ele=>{
      ele.onclick = e=>{
            if(!hasBig)
            {   
                i=ele.cloneNode(false);
                taskone.after(i);
                i.classList.add("style1");
                i.style.opacity = "0";
                fadeIn(i,100); 
                hasBig=true;
            } 
            else
            {
                i.remove(); 
                hasBig = false;
            }
      }
    })
        sel[0].onclick = function(){
            mes.src="img/lover.png";
            sel[0].style.background = "white";
            sel[1].style.background = "grey";
            sel[2].style.background = "grey";
        }
        sel[1].onclick = function(){
            mes.src="img/chariot.png";
            sel[1].style.background = "white";
            sel[0].style.background = "grey";
            sel[2].style.background = "grey";
        }
        sel[2].onclick = function(){
            mes.src="img/fool.png";
            sel[2].style.background = "white";
            sel[1].style.background = "grey";
            sel[0].style.background = "grey";
        }
        b.forEach(ele=>{
      ele.onclick = e=>{
        ele.parentNode.style.display = "none";
      }
    })
        add.onclick = function(){
            for(var j=0;j<5;j++){
                const win = line[j].ownerDocument.defaultView;
                 win.getComputedStyle(line[j], null).color;
                if(win.getComputedStyle(line[j], null).display == "none")
                {
                    line[j].style.display = "flex";    
                    break;
                }
            }
        }
}

function fadeIn(element,speed){
    if(element.style.opacity !=1){
        var speed = speed || 30 ;
        var num = 0;
        var st = setInterval(function(){
        num++;
        element.style.opacity = num/10;
        if(num>=10)  {  clearInterval(st);  }
        },speed);
    }
}

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      } else {
        el = el.parentElement;
      }
    }
    return null;
  }