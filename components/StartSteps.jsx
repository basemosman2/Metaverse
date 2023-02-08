const StartSteps = ({ text, number }) => (
  <div className=" flex justify-center items-center">
    <div className="  bg-[#323f5d] w-[70px] h-[70px] rounded-[24px] flex justify-center items-center">
      <p className=" text-[20px] font-bold text-white">0{number}</p>
    </div>
    <div className=" flex-1 text-[#b0b0b0] text-[18px] leading-[32px] ml-[30px]">{text}</div>
  </div>
);

export default StartSteps;
