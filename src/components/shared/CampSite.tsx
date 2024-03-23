import { FaMap } from "react-icons/fa";
import Image from "next/image";
import { PEOPLE_URL } from "@/constants";

type CampSiteProps = {
  name: string;
  location: string;
  img: string;
};

function CampSite({ name, location, img }: CampSiteProps) {
  return (
    <article className="relative w-4/5 flex-shrink-0">
      <Image
        className="w-full "
        src={img}
        alt=""
        width={800}
        height={465.45}
        loading="lazy"
      />

      <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-10 text-white">
        <div className="flex items-start gap-4">
          <span className="flex items-center justify-center size-12 rounded-full bg-green-100">
            <FaMap className="size-6" />
          </span>

          <div>
            <h2 className="font-bold">{name}</h2>
            <p className="text-sm text-gray-200">{location}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex -space-x-4">
            {PEOPLE_URL.map((person) => (
              <Image
                className=""
                key={person}
                src={person}
                width={40}
                height={40}
                alt=""
                loading="lazy"
              />
            ))}
          </div>

          <p className="font-bold">50+ Joined</p>
        </div>
      </div>
    </article>
  );
}

export default CampSite;
