import { Button } from "../ui/button";
import { RiAppleFill } from "react-icons/ri";
import { FaGooglePlay } from "react-icons/fa";
import Image from "next/image";

function Action() {
  return (
    <section className="py-10 2xl:container get-app-pattern 2xl:rounded-[40px] overflow-hidden">
      <div className="flex items-center container 2xl:px-0 max-h-[598px]">
        <div className="space-y-5 flex-1">
          <h2 className="text-5xl lg:text-7xl lg:max-w-sm font-bold text-white">Get for free now!</h2>
          <p className="text-gray-200 lg:text-xl">Available on iOS and Andriod</p>

          <div className="flex gap-4">
            <Button variant="accent">
              <RiAppleFill />
              App Store
            </Button>

            <Button variant="accentInvert">
              <FaGooglePlay />
              App Store
            </Button>
          </div>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-end">
          <Image
            className=""
            src="/images/phones.png"
            alt=""
            width={547}
            height={870}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Action;
