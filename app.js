function generateId() {
    return Math.random().toString(36).substring(2, 12); // Generates a 10-character random string
}

const videos = [
    {
        videoId: generateId(),
        thumbnail: 'img/thumbnails/1.webp',
        channelIcon: 'img/profile-pic.png',
        title: 'youtube clone 2021 | create working youtube clone',
        channelName: 'modern web',
        views: '60 views',
        time: '1 day ago'
    },
    {
        videoId: generateId(),
        thumbnail: 'img/thumbnails/2.webp',
        channelIcon: 'img/profile-pic.png',
        title: 'learn CSS in 2021 | Full Guide',
        channelName: 'modern web',
        views: '120 views',
        time: '2 days ago'
    },
    {
        videoId: generateId(),
        thumbnail: 'img/thumbnails/3.webp',
        channelIcon: 'img/profile-pic.png',
        title: 'JavaScript tutorial | Master JS in 2021',
        channelName: 'modern web',
        views: '1,000 views',
        time: '3 weeks ago'
    },
    {
        videoId: generateId(),
        thumbnail: 'img/thumbnails/4.webp',
        channelIcon: 'img/profile-pic.png',
        title: 'Python for beginners | Full course',
        channelName: 'modern web',
        views: '500 views',
        time: '1 month ago'
    },
    {
        videoId: generateId(),
        thumbnail: 'img/thumbnails/5.webp',
        channelIcon: 'img/profile-pic.png',
        title: 'React JS crash course | Learn React in 2021',
        channelName: 'modern web',
        views: '2,500 views',
        time: '2 months ago'
    },
    {
        videoId: generateId(),
        thumbnail: 'img/thumbnails/6.webp',
        channelIcon: 'img/profile-pic.png',
        title: 'Machine Learning basics | Intro to ML',
        channelName: 'modern web',
        views: '3,200 views',
        time: '5 months ago'
    }
];

// Get elements
const videoContainer = document.getElementById('video-container');
const loadingSpinner = document.getElementById('loading-spinner');

// Function to create video elements and append them to the container
function loadVideos() {
    videos.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('video');

        videoDiv.innerHTML = `
        <img src="${video.thumbnail}" class="thumbnail" alt="">
        <div class="content">
            <img src="${video.channelIcon}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${video.title}</h4>
                <p class="channel-name">${video.channelName}</p>
                <p class="views-time">${video.views} • ${video.time}</p>
            </div>
        </div>
    `;

    videoDiv.addEventListener('click', () => {
        window.location.href = `video.html?videoId=${video.videoId}`;
    });


        videoContainer.appendChild(videoDiv);
    });
}

// Simulate loading delay of 5 seconds
window.onload = function() {
    setTimeout(() => {
        // Hide the loading spinner
        loadingSpinner.style.display = 'none';


        // Load the videos
        loadVideos();
    }, 3000); // 3000ms = 3 seconds
};
