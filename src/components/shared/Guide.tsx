import Image from "next/image";
import StyledTitle from "./StyledTitle";

function Guide() {
  return (
    <section className="py-10">
      <div className="container">
        <StyledTitle>
          <p className="uppercase text-green-100 text-lg xl:text-xl">We are here for you</p>
        </StyledTitle>

        <div className="gap-6 flex flex-col xl:flex-row overflow-hidden">
          <h2 className="text-3xl xl:text-4xl 2xl:text-6xl text-dark font-bold flex-1">Guide You to Easy Path</h2>

          <p className="flex-1">
            Only with the hilink application you will no longer get lost and get lost again, because we already support
            offline maps when there is no internet connection in the field. Invite your friends, relatives and friends
            to have fun in the wilderness through the valley and reach the top of the mountain
          </p>
        </div>
      </div>

      <div className="relative mt-20 2xl:rounded-2xl 2xl:container">
        <Image
          className="w-full aspect-[2.62]"
          src="/images/boat.png"
          alt="boat"
          width={1000}
          height={380}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:top-10 md:left-10 lg:top-20 lg:left-20 z-10 rounded-2xl pl-5 pr-7 py-8 w-[280px] flex gap-4 bg-white mx-auto md:mx-0 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
          <Image
            src="/images/meter.svg"
            alt=""
            width={26}
            height={167}
            loading="lazy"
          />

          <div className="flex-1 flex flex-col justify-between">
            <div className="">
              <div className="flex justify-between">
                <h3>Destination</h3>
                <span className="text-green-100 font-bold">48min</span>
              </div>
              <p className="mt-4 text-dark font-bold text-xl whitespace-nowrap">Aguas Calientes</p>
            </div>

            <div>
              <div className="flex justify-between">
                <h3>Destination</h3>
              </div>
              <p className="text-dark font-bold text-xl whitespace-nowrap">Wonorejo Pasuruan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guide;
