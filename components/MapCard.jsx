'use client';

const WorldCard = ({ imgUrl, title, x, y }) => (
  <div className={` absolute top-[${y}%] right-[${x}%] z-10 hidden lg:block w-[200px] h-[150px] rounded-[24px] p-2 bg-[#5d6680]`}>
    <div className=" absolute h-full w-full">
      <img src={imgUrl} alt={title} className=" rounded-[24px] w-[92%] h-[90%] object-cover object-center " />
    </div>
    <div className=" flex items-center relative z-10 mt-[50px] px-2 gap-2">
      <p className=" flex items-center text-center flex-[0.50] relative">
        <img src="people-01.png" alt="people-icon" className=" w-[30px] h-[30px] object-contain absolute left-[0] z-30" />
        <img src="people-02.png" alt="people-icon" className=" w-[30px] h-[30px] object-contain absolute left-[12px] z-20" />
        <img src="people-03.png" alt="people-icon" className=" w-[30px] h-[30px] object-contain absolute left-[22px] z-10" />
      </p>
      <p className=" flex-1 text-white text-[14px] font-normal">+ 264 has joined</p>
    </div>
    <h3 className=" text-white relative font-extrabold mt-[10px] text-[18px] px-2">{title}</h3>
  </div>
);

export default WorldCard;

