import { partnersLogos } from "../constants";

export default function Partners() {
  return (
    <div className="container pb-sectionPadding mb-sectionMargin flex items-center gap-12 sm:gap-6 justify-between  flex-wrap">
      {partnersLogos.map((partnerLogo) => (
        <img
          key={partnerLogo}
          src={partnerLogo}
          className="w-[190px] mx-auto"
        />
      ))}
    </div>
  );
}
