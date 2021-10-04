import Wave from 'react-wavify';

function Wavify() {
  return (
    <>
      {/* <Wave fill="#f8f8f8" height="50px" speed={1} /> */}
      <Wave
        fill="#1277b0"
        borderColor="#000"
        borderWidth="10px"
        paused={false}
        options={{ height: 10, amplitude: 40, speed: 0.2, points: 4 }}
      />
    </>
  );
}

export default Wavify;
