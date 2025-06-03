// Ses dosyasını belirli bir zamandan başlat
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audioPlayer');
    
    // Ses yüklendiğinde çalışacak fonksiyon
    audio.addEventListener('loadedmetadata', function() {
        // 1 dakika 34 saniye = 94 saniye
        audio.currentTime = 94;
    });
    
    // Ses bittiğinde tekrar 1:34'ten başlasın
    audio.addEventListener('ended', function() {
        audio.currentTime = 94;
        audio.play();
    });
});
