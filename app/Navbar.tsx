import Link from "next/link";
import Bug from "./assets/imgs/bug.svg";
import { AiFillBug } from "react-icons/ai";
const Navbar = () => {
  const links = [
    {
      name: "Dashboard",
      link: "/",
    },
    {
      name: "Issues",
      link: "/issues",
    },
  ];
  return (
    <div className="flex space-x-6 border-b-2 py-3 pl-4 mb-5 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li>
            <Link
              href={link.link}
              className="text-zinc-500 hover:text-zinc-800 transition-colors font-medium"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
