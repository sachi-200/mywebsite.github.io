function openBlog(url) {
    window.open(url, '_blank');
}
function likeBlog(likeCountId) {
    var likeCount = document.getElementById(likeCountId);
    var count = parseInt(likeCount.textContent) || 0;
    count++;
    likeCount.textContent = count;
    localStorage.setItem(likeCountId, count);
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('likeCount2').textContent = localStorage.getItem('likeCount2') || '0';
}); 