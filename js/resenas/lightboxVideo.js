function ejecutar(div, video_id) {
    var video = document.getElementById(video_id).src;
    document.getElementById(video_id).src = video + '&autoplay=1';
    document.getElementById(div).style.display = 'block';
}

function ocultar(div, video_id) {
    var video = document.getElementById(video_id).src;
    var cleaned = video.replace('&autoplay=1', '');
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
}