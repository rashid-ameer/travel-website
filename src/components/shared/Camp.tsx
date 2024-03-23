import { CAMP_SITES } from "@/constants";
import CampSite from "./CampSite";

function Camp() {
  return (
    <section className="2xl:container no-scrollbar py-10 flex gap-4 overflow-x-scroll">
      {CAMP_SITES.map((camp) => (
        <CampSite
          key={camp.id}
          {...camp}
        />
      ))}
    </section>
  );
}

export default Camp;
