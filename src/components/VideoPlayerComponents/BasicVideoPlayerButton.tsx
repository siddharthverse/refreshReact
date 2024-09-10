type BasicVideoPlayerButtonProps = {
  buttonName: string;
  buttonAction: string;
};
const BasicVideoPlayerButton = ({
  buttonName,
  buttonAction,
}: BasicVideoPlayerButtonProps) => {
  const handleButtonAction = (buttonAction: string) => {
    console.log(buttonAction);
  };

  return (
    <>
      <button
        className="basicButton"
        onClick={() => handleButtonAction(buttonAction)}
      >
        <p>{`${buttonName}`}</p>
      </button>
    </>
  );
};

export default BasicVideoPlayerButton;
