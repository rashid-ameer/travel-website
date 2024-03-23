import Image from "next/image";
import { footerLinks, footerSocialLinks } from "@/constants";
import FooterLink from "./FooterLink";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  const socialIcons = {
    facebook: <FaFacebookF className="size-6 hover:text-green-100 transition-colors" />,
    twitter: <FaTwitter className="size-6 hover:text-green-100 transition-colors" />,
    instagram: <FaInstagram className="size-6 hover:text-green-100 transition-colors" />,
    youtube: <FaYoutube className="size-6 hover:text-green-100 transition-colors" />,
  };

  return (
    <footer className="py-10">
      <div className="container flex flex-col gap-8">
        <a href="/">
          <Image
            src="/images/hilink-logo.svg"
            alt="HiLink."
            width={72}
            height={20}
          />
        </a>
        <div className="flex flex-wrap justify-between gap-y-5 gap-x-5">
          {footerLinks.map((footerLink) => (
            <FooterLink
              key={footerLink.id}
              footerLink={footerLink}
            />
          ))}

          <div>
            <h2 className="font-bold text-dark text-xl">Contact Us</h2>

            <div className="mt-3 space-y-2">
              <div className="flex items-center">
                <p className="mr-3">Admin Officer:</p>
                <p className="text-blue font-bold text-sm">123-456-789</p>
              </div>
              <div className="flex items-center">
                <p className="mr-3 whitespace-nowrap">Email Officer:</p>
                <p className="text-blue font-bold text-sm whitespace-nowrap">hilink-travel@gmail.com</p>
              </div>
            </div>
          </div>
          {/* social */}
          <div className="space-y-3">
            <h2 className="text-dark text-xl font-bold">Social</h2>
            <div className="flex items-center gap-4">
              {footerSocialLinks.map((footerSocialLink) => (
                <a
                  href="/"
                  key={footerSocialLink.id}>
                  {socialIcons[footerSocialLink.name as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="border-2 rounded-full border-gray-100" />
        <p className="py-4 text-center">2023 Hilink | All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
