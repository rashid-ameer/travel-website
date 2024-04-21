import Image from "next/image";
import StyledTitle from "./StyledTitle";
import { FaMap } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { TbTriangleFilled } from "react-icons/tb";
import { FEATURES_DATA } from "@/constants";
import Feature from "./Feature";

function Features() {
  const icons = {
    map: <FaMap className="size-5" />,
    calendar: <FaRegCalendarDays className="size-5" />,
    technology: <TbTriangleFilled className="size-5" />,
    location: <FaLocationDot className="size-5" />,
  };

  return (
    <section className="max-container container-pad py-10 xl:py-16 bg-no-repeat bg-center feature-pattern relative">
      <div className="flex gap-6 items-center justify-end">
        {/* left side image */}
        <div className="hidden xl:block w-[428px]">
          <Image
            className="rotate-12 relative -left-[20%] 2xl:-left-[10%]"
            src="/images/phone.png"
            alt=""
            width={428}
            height={815}
            loading="lazy"
          />
        </div>

        {/* right side content */}
        <div className="xl:w-[60%]">
          <StyledTitle>
            <h2 className="text-3xl xl:text-4xl font-bold text-dark">Our Features</h2>
          </StyledTitle>

          <div className="mt-8 grid md:grid-cols-2 gap-10">
            {FEATURES_DATA.map((feature) => (
              <Feature
                key={feature.id}
                name={feature.name}
                content={feature.content}
                icon={icons[feature.component as keyof typeof icons]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
