// Lấy các query parameters từ URL
const queryParams = new URLSearchParams(window.location.search);
const projectTitle = queryParams.get('title');
const projectDescription = queryParams.get('description');
const projectImage = queryParams.get('image');

// Hiển thị thông tin trong trang
document.getElementById('projectTitle').textContent = projectTitle;
document.getElementById('projectDescription').textContent = projectDescription;

// Hiển thị hình ảnh nếu có URL của ảnh
if (projectImage) {
    document.getElementById('projectImage').src = projectImage;
} else {
    document.getElementById('projectImage').style.display = 'none';  // Ẩn ảnh nếu không có link ảnh
}