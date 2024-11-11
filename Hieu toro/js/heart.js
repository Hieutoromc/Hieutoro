$(".heart").on('click touchstart', function() {
  // If the heart is already filled, animate it back to unfilled
  if ($(this).hasClass('filled')) {
    $(this).removeClass('filled').addClass('is_animating-reverse');
  } else {
    // If not filled, animate it to filled
    $(this).addClass('is_animating');
  }
});

// When the normal animation ends, mark as filled
$(".heart").on('animationend', function() {
  if ($(this).hasClass('is_animating')) {
    $(this).removeClass('is_animating').addClass('filled');
  }
  if ($(this).hasClass('is_animating-reverse')) {
    $(this).removeClass('is_animating-reverse'); // Reset back to unfilled state
  }
});


// Khởi tạo số lượt thích ban đầu
let likesCount = [0, 0, 0, 0]; // Giả sử có 4 ảnh
let likedState = [false, false, false, false]; // Mảng để lưu trạng thái like của từng ảnh

// Gán sự kiện click cho mỗi biểu tượng trái tim
$(".heart").on('click touchstart', function(){
    // Lấy vị trí của ảnh tương ứng dựa trên thứ tự
    let heartIndex = $(this).parent().index();

    // Kiểm tra trạng thái like hiện tại
    if (likedState[heartIndex]) {
        // Nếu đã like, khi bấm lại sẽ bỏ like (giảm số lượt thích)
        likesCount[heartIndex] -= 1;
        likedState[heartIndex] = false; // Cập nhật lại trạng thái là chưa like
        // $(this).removeClass('liked'); // Xoá lớp "liked" (nếu bạn có định dạng riêng cho trái tim khi được like)
    } else {
        // Nếu chưa like, khi bấm sẽ tăng lượt thích
        likesCount[heartIndex] += 1;
        likedState[heartIndex] = true; // Cập nhật lại trạng thái là đã like
        // $(this).addClass('liked'); // Thêm lớp "liked" để định dạng trái tim đã like
    }

    // Cập nhật hiển thị số lượt thích
    $('#likes' + (heartIndex + 1)).text('Lượt thích: ' + likesCount[heartIndex]);
});

