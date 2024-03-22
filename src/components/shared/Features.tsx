import Image from "next/image";
import StyledTitle from "./StyledTitle";
import { FaMap } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { TbTriangleFilled } from "react-icons/tb";
import { featuresData } from "@/constants";
import Feature from "./Feature";

function Features() {
  const icons = {
    map: <FaMap className="size-5" />,
    calendar: <FaRegCalendarDays className="size-5" />,
    technology: <TbTriangleFilled className="size-5" />,
    location: <FaLocationDot className="size-5" />,
  };

  return (
    <section className="container py-10 bg-no-repeat bg-center feature-pattern relative">
      <div className="flex gap-6 items-center">
        {/* left side image */}
        <div className="hidden xl:block w-[428px]">
          <Image
            className="rotate-12 relative -left-[20%]"
            src="/images/phone.png"
            alt=""
            width={428}
            height={815}
          />
        </div>

        {/* right side content */}
        <div className="flex-1">
          <StyledTitle>
            <h2 className="text-3xl xl:text-4xl font-bold text-dark">Our Features</h2>
          </StyledTitle>

          <div className="mt-8 grid md:grid-cols-2 gap-10">
            {featuresData.map((feature) => (
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
