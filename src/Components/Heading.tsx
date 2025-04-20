export default function Heading() {
  return (
    <div className="flex justify-between">
      <img src="public/logo.svg" alt="logo" />
      <div className="flex gap-[30px]">
        <div className="flex items-center gap-[5px]">
          <span>Sans serif</span>
          <img src="public/icon-arrow-down.svg" alt="arrow-doen" />
        </div>
        <div className="h-[40px] w-[2px] bg-[#E9E9E9]"></div>
        <img src="public/Group-day.svg" alt="Group-day" className="cursor-pointer"  />
      </div>
    </div>
  );
}
