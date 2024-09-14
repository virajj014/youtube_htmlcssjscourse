
// Get videoId from the URL
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('videoId');

// Find the video with the matching ID
const video = {
    videoId: videoId,
    thumbnail: 'img/thumbnails/1.webp',
    channelIcon: 'img/profile-pic.png',
    title: 'youtube clone 2021 | create working youtube clone',
    channelName: 'modern web',
    views: '60 views',
    time: '1 day ago',
    youtubeUrl: 'https://www.youtube.com/embed/IsBMyMch0gw'
};

if (video) {
    // Create HTML structure dynamically based on the video data
    document.body.innerHTML = `
     <div class="video-player">
            <iframe width="560" height="315" src="${video.youtubeUrl}" 
                title="${video.title}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            <div class="video-info">
                <h2>${video.title}</h2>
                <p>${video.channelName} • ${video.views} • ${video.time}</p>
                <div class="channel-details">
                    <img src="${video.channelIcon}" alt="Channel Icon" class="channel-icon">
                    <span>${video.channelName}</span>
                </div>
            </div>
        </div>
    `;
} else {
    // If no video is found, show an error message
    document.body.innerHTML = '<p>Video not found.</p>';
}
