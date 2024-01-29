function toggle_div_fun(id) {
    var divelement = document.getElementById(id);
    if(divelement.style.opacity == '0'){
      divelement.style.opacity = '1';
      divelement.classList.add('menu-open')
    }else{
      divelement.style.opacity = '0';
      divelement.classList.remove('menu-open')
    }
  }

  // function change_color_on_click(id) {
  //   var divelement2 = document.getElementById(id);
  //   if(divelement2.style.color == 'black'){
  //   }else{
  //     divelement2.style.color = 'red'
  //   }
  // }