import Link from "next/link";

type link = {
  id: number;
  name: string;
  url: string;
};
type FooterLinkProps = {
  footerLink: {
    id: number;
    name: string;
    links: link[];
  };
};

function FooterLink({ footerLink }: FooterLinkProps) {
  return (
    <div>
      <h2 className="text-dark font-bold text-xl">{footerLink.name}</h2>
      <ul className="mt-3 space-y-2">
        {footerLink.links.map((link: link) => (
          <li key={link.id}>
            <Link
              href={link.url}
              className="hover:text-green-100 transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLink;
