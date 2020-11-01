interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
  aumentarButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  initEvents(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;
  private aumentarButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
    this.aumentarButton = videoPlayerElements.aumentarButton;
  }
  initEvents(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });
    this.stopButton.addEventListener('click', () => {
      this.stop();
    });
    this.aumentarButton.addEventListener('click', () => {
      this.aumentarToggle();
    });
  }
  private changeBtnTxt(botao: string, text: string) {
    let button: HTMLButtonElement;
    switch (botao) {
      case 'play':
        button = this.playButton;
        break;
      case 'aumentar':
        button = this.aumentarButton;
    }
    button.innerText = text;
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.changeBtnTxt('play', 'Pause');
    } else {
      this.videoPlayer.pause();
      this.changeBtnTxt('play', 'Play');
    }
  }

  aumentarToggle(): void {
    if (this.videoPlayer.width >= 640) {
      this.videoPlayer.width = 300;
      this.changeBtnTxt('aumentar', 'Aumentar');
    } else if (this.videoPlayer.width <= 300) {
      this.videoPlayer.width = 640;
      this.changeBtnTxt('aumentar', 'Diminuir');
    }
  }

  stop(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.changeBtnTxt('play', 'Play');
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
  aumentarButton: document.querySelector('.aumentar') as HTMLButtonElement,
});
videoPlayer.initEvents();
