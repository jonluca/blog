import Link from "next/link";

const navItems = {
  "/": {
    name: "Posts",
    external: false,
  },
  "/about": {
    name: "About",
    external: false,
  },
  "/contact": {
    name: "Contact",
    external: false,
  },
  "/interesting-snippets": {
    name: "Interesting Snippets",
    external: false,
  },
};

const linkClassName = "mx-2 text-[#244ebc] no-underline hover:border-b hover:border-dotted hover:border-gray-400 text-[14px]";
export function Navbar() {
  return (
    <nav aria-label={"Main"} className={"text-md border-b border-gray-200 py-8 text-center"}>
      {Object.entries(navItems).map(([path, { name, external }]) => {
        return external ? (
          <a key={path} className={linkClassName} href={path} title={name}>
            {name}
          </a>
        ) : (
          <Link key={path} href={path} className={linkClassName} title={name}>
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
