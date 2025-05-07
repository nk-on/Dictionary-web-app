import SectionTitle from "./SectionTitle";
export default function VerbSection({example}:{example:string | undefined}) {
  return (
    <>
      <SectionTitle title="verb" />
      <div className="flex flex-col">
        <h2 className="text-[#757575] text-[20px]">Meaning</h2>
        <ul className="marker:text-[#8F19E8]">
          <li className="list-disc ">
            <div className="flex flex-col ">
              {example} <span className="text-[#757575]">"{example}"</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
