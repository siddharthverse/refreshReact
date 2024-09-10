import VideoPlayerButton from './VideoPlayerComponents/VideoPlayerButton';

const VideoPlayer = () => {
  const a = 10;
  return (
    <div className="videoPlayer">
      {/* Video title
        Play button
        Pause button
        Settings Button */}
      THIS IS A VIDEO PLAYER
      <div>Hello {a}</div>
      <VideoPlayerButton buttonName="Play" buttonAction="Play Video" />
      <VideoPlayerButton buttonName="Pause" buttonAction="Pause Video" />
      <VideoPlayerButton buttonName="Settings" buttonAction="Video Settings" />
    </div>
  );
};

export default VideoPlayer;
