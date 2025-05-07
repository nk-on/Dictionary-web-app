export default function SectionTitle({ title }: { title: string }) {
    return (
      <div className="flex items-center gap-[10px]">
        <h2 className="text-[#2D2D2D] font-bold italic">{title}</h2>
        <div className="w-[95%] h-[1px] bg-[#E9E9E9]"></div>
      </div>
    );
  }