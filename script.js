const playButton = document.getElementById('play-pause');
const chapterAudio = document.getElementById('audio-capitulo');
const skipBackwardsButton = document.getElementById('anterior');
const skipForwardButton = document.getElementById('proximo');
const chapterName = document.getElementById('capitulo');

let isPlaying = false;
const numberOfChapters = 10;
let currentChapter = 1;

playButton.addEventListener('click', handlePlay);
skipBackwardsButton.addEventListener('click', skipToPreviousChapter);
skipForwardButton.addEventListener('click', skipToNextChapter);

function handlePlay() {
  if (!isPlaying) {
    playButton.classList.remove('bi-play-circle-fill');
    playButton.classList.add('bi-pause-circle-fill');
    chapterAudio.play();
    isPlaying = true;
  } else {
    playButton.classList.remove('bi-pause-circle-fill');
    playButton.classList.add('bi-play-circle-fill');
    chapterAudio.pause();
    isPlaying = false;
  }
}

function skipToNextChapter() {
  if (currentChapter < numberOfChapters) {
    currentChapter += 1;
  } else {
    currentChapter = 1;
  }

  chapterAudio.src = `books/dom-casmurro/${currentChapter}.mp3`;
  chapterName.innerText = 'Capítulo ' + currentChapter;
  isPlaying = false;
  handlePlay();
}

function skipToPreviousChapter() {
  if (currentChapter > 1) {
    currentChapter -= 1;
  } else {
    currentChapter = numberOfChapters;
  }

  chapterAudio.src = `books/dom-casmurro/${currentChapter}.mp3`;
  chapterName.innerText = 'Capítulo ' + currentChapter;
  isPlaying = false;
  handlePlay();
}
