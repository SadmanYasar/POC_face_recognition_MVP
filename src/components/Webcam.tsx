import Webcam from "react-webcam";

const videoConstraints = {
  height: 1080,
  width: 1920,
  maxWidth: "100vw",
  facingMode: "environment",
};

export default function WebCam() {
  return (
    <>
      <Webcam />
    </>
  );
}
