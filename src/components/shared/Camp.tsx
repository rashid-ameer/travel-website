import { CAMP_SITES } from "@/constants";
import CampSite from "./CampSite";

function Camp() {
  return (
    <section className="max-container py-10 xl:py-16 relative">
      <div className="no-scrollbar flex gap-4 overflow-clip overflow-x-scroll">
        {CAMP_SITES.map((camp) => (
          <CampSite
            key={camp.id}
            {...camp}
          />
        ))}
      </div>
      <div className=" bg-green-100 p-5 lg:p-10 mx-6 mt-10 rounded-2xl lg:max-w-lg lg:absolute lg:-bottom-0 lg:right-6">
        <h2 className="text-2xl text-white">
          <strong>Feeling Lost</strong> And Not Knowing The Way?
        </h2>
        <p className="text-gray-200 mt-4">
          Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting
          lost is very large. That&apos;s why we are here for those of you who want to start an adventure
        </p>
      </div>
    </section>
  );
}

export default Camp;
