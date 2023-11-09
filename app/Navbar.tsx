"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
const Navbar = () => {
  const path = usePathname();
  console.log(path);
  const links = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Issues",
      path: "/issues",
    },
  ];
  return (
    <div className="flex space-x-6 border-b-2 py-3 pl-4 mb-5 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={`${
                path === link.path ? "text-zinc-900" : "text-zinc-500"
              } hover:text-zinc-800 transition-colors font-medium`}
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
