import BasicVideoPlayerButton from './BasicVideoPlayerButton';

type VideoPlayerButtonProps = {
  buttonName: string;
  buttonAction: string;
};

const VideoPlayerButton = ({
  buttonName,
  buttonAction,
}: VideoPlayerButtonProps) => {
  // Stopped here https://react.dev/learn/responding-to-events#naming-event-handler-props
  return (
    <>
      <BasicVideoPlayerButton
        buttonName={buttonName}
        buttonAction={buttonAction}
      />
    </>
  );
};

export default VideoPlayerButton;
