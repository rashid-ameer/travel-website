import Image from "next/image";

type StyledTitleProps = {
  children: React.ReactNode;
};

function StyledTitle({ children }: StyledTitleProps) {
  return (
    <div>
      <Image
        className="translate-y-3"
        src="images/camp.svg"
        alt=""
        width={50}
        height={51}
      />
      {children}
    </div>
  );
}

export default StyledTitle;
