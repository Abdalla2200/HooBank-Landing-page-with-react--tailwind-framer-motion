import footerLogo from "../assets/logo.svg";
import { socialLinks } from "../constants";
export default function Footer() {
  return (
    <div className=" pt-sectionPadding mt-sectionMargin bg-[#06080d]">
      <div className="container pt-16 pb-10 flex items-center justify-between  gap-6 flex-wrap">
        <div className="">
          <img src={footerLogo} alt="Logo" />
          <p className="text-white/70 text-lg leading-8 mt-8 max-w-[320px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="">
          <h3 className="text-lg text-white font-medium mb-6">Useful Links</h3>
          <p className="text-white/70 mb-3">Content</p>
          <p className="text-white/70 mb-3">How it Works</p>
          <p className="text-white/70 mb-3">Create</p>
          <p className="text-white/70 mb-3">Explore</p>
          <p className="text-white/70">Terms & Services</p>
        </div>

        <div className="">
          <h3 className="text-lg text-white font-medium mb-6">Community</h3>
          <p className="text-white/70 mb-3">Help Center</p>
          <p className="text-white/70 mb-3">Partners</p>
          <p className="text-white/70 mb-3">Suggestions</p>
          <p className="text-white/70 mb-3">Blog</p>
          <p className="text-white/70">Newsletters</p>
        </div>
        <div className="self-start">
          <h3 className="text-lg text-white font-medium mb-6">Partners</h3>
          <p className="text-white/70 mb-3">Our Partners</p>
          <p className="text-white/70 mb-3">Become a Partner</p>
        </div>
      </div>
      <div className="container border-t border-[#3F3E45] py-7 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="text-white/70 text-sm sm:text-lg">
          Copyright 2021 HooBank. All Rights Reserved.
        </div>
        <div className="flex  items-center gap-8">
          {socialLinks.map((socialLink) => (
            <img src={socialLink} key={socialLink} alt="social logos" />
          ))}
        </div>
      </div>
    </div>
  );
}
