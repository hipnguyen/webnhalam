alert("Henry Nguyen Coming Soon");
// if (confirm("Bạn có chắc chắn muốn xóa?")) {
//     // Nếu người dùng nhấn "OK"
//     xoaDuLieu();
//   } else {
//     // Nếu người dùng nhấn "Cancel"
//     khongXoaDuLieu();
//   }
//   let ten = prompt("Hãy nhập tên của bạn:", "Nguyễn Văn A");
//   alert("Xin chào " + ten + "!");
$(document).ready(function() {
  setInterval(function() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var color = '#' + hours + minutes + seconds;
    $('body').css('background-color', color);
  }, 5000); // thay đổi màu sau mỗi 5 giây
});    
