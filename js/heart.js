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
