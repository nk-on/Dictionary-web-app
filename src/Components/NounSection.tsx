import SectionTitle from "./SectionTitle";
import { Definition } from "../interfaces";
interface SectionNoun {
  meanings: Definition[],
  synonym:string,
}
function NounSection({meanings,synonym}:SectionNoun) {
  return (
    <>
      <SectionTitle title={"noun"} />
      <div className="flex flex-col">
        <h2 className="text-[#757575] text-[20px]">Meaning</h2>
        <ul className="marker:text-[#8F19E8] px-[30px]">
          {meanings?.map((element, idx) => {
            return (
              <li key={idx} className="list-disc">
                {element.definition}
              </li>
            );
          })}
        </ul>
        <div className="text-[#757575] text-[20px] mt-[50px] font-normal">
          Synonyms: <span className="text-[#8F19E8] font-bold">{synonym}</span>
        </div>
      </div>
    </>
  );
}

export default NounSection
