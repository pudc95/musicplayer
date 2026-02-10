// 简单的音乐播放功能
let currentTrack = 0;
const tracks = [
    { name: '曲目 1', artist: '艺术家 1', file: 'track1.mp3' },
    { name: '曲目 2', artist: '艺术家 2', file: 'track2.mp3' },
    { name: '曲目 3', artist: '艺术家 3', file: 'track3.mp3' },
];

const audio = new Audio();
const playPauseButton = document.getElementById('playPause');
const trackName = document.getElementById('track-name');
const artistName = document.getElementById('artist-name');
const volumeSlider = document.getElementById('volume');
const playlistItems = document.querySelectorAll('.track');

function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    trackName.textContent = track.name;
    artistName.textContent = track.artist;
    audio.src = track.file;
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = '暂停';
    } else {
        audio.pause();
        playPauseButton.textContent = '播放';
    }
}

document.getElementById('playPause').addEventListener('click', togglePlayPause);

document.getElementById('prev').addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
});

document.getElementById('next').addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
});

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

// 点击播放列表播放对应曲目
playlistItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentTrack = index;
        loadTrack(currentTrack);
        audio.play();
    });
});

// 初始加载第一首曲目
loadTrack(currentTrack);
