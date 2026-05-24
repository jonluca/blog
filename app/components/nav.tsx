const navItems = {
  "/": "Posts",
  "/about": "About",
  "/contact": "Contact",
  "/interesting-snippets": "Interesting Snippets",
};

const linkClassName = "mx-2 text-[#244ebc] no-underline text-[14px]";
export function Navbar() {
  return (
    <nav aria-label={"Main"} className={"text-md border-b border-gray-200 py-8 text-center"}>
      {Object.entries(navItems).map(([path, name]) => (
        <a key={path} className={linkClassName} href={path} title={name}>
          {name}
        </a>
      ))}
    </nav>
  );
}
