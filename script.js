window.addEventListener('scroll', function() {
    const progressBar = document.getElementById('progressBar');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;

    const percentScrolled = (scrollPosition / totalHeight) * 100;
    progressBar.style.width = percentScrolled + '%';
});
