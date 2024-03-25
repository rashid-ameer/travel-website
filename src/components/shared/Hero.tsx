import Image from "next/image";
import { HiPlay } from "react-icons/hi";
import { Button } from "../ui/button";
import { TiStarFullOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import StyledTitle from "./StyledTitle";

function Hero() {
  return (
    <div className="max-container container-pad flex flex-col xl:flex-row gap-24 py-10 xl:py-16 items-stretch overflow-hidden relative hero-map">
      {/* hero left section */}
      <div className="flex-1 py-5 space-y-5">
        <StyledTitle>
          <h1 className="text-6xl font-bold xl:text-7xl 2xl:text-8xl text-dark">Putuk Truno Camp Area</h1>
        </StyledTitle>

        <p className="text-gray-400 text-lg 2xl:text-xl">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature.
          We can help you on an adventure around the world in just one app
        </p>

        <div className="flex gap-4">
          <ul className="flex">
            {Array.from({ length: 5 }).map((value, index) => (
              <li key={`star-${index}`}>
                <TiStarFullOutline className="size-6 text-pale" />
              </li>
            ))}
          </ul>

          <p className="text-blue">
            <strong>198k</strong> Excellent Reviews
          </p>
        </div>

        <div className="flex items-center">
          <Button>Download App</Button>
          <Button variant="link">
            <HiPlay className="size-6 text-green-100" />
            How we work?
          </Button>
        </div>
      </div>

      {/* hero right section */}
      <div className="relative flex-1">
        <div className="rounded-3xl w-[268px] p-6 bg-gray-700 text-gray-300 space-y-7">
          <div className="flex  justify-between">
            <div>
              <h2>Location</h2>
              <p className="text-white font-bold">Aguas Calientes</p>
            </div>

            <IoClose className="size-6 text-white" />
          </div>

          <div className="flex justify-between">
            <div>
              <h2>Distance</h2>
              <p className="text-white font-bold">173.28 mi</p>
            </div>
            <div>
              <h2>Elevation</h2>
              <p className="text-white font-bold">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
