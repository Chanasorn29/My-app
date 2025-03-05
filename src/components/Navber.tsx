"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuGroups = [
  {
    label: "หน้าหลัก",
    route: "/",
  },
  {
    label: "โปรไฟล์",
    route: "/profile",
  },
];

export default function Nevber() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    router.push("/login"); // Redirect ไปหน้า login
  };

  return (
    <nav className="w-full bg-white shadow-lg text-sm">
      <div className="flex flex-wrap items-center justify-between mx-auto px-5 sm:px-8 py-3">
        <Link className="text-lg text-black font-bold" href="/">
          Twitty
        </Link>
        <div className=" pt-4 sm:flex sm:w-auto  items-center text-black text-sm">
          <ul className="flex flex-row gap-5">
            {menuGroups.map((group, groupIndex) => (
              <li
                className={`  ${
                  group.route === pathname
                    ? "text-primary  font-bold"
                    : " text-black "
                } "pt-2 pb-2 snap-start "`}
                key={groupIndex}
              >
                <Link
                  href={group.route}
                  className={` hover:text-primary `}
                  aria-current="page"
                >
                  {group.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button onClick={handleLogout}>logout </button>
      </div>
      {/* <div className=" sm:hidden mx-auto px-5 sm:px-8 text-sm">
        <ul className=" flex flex-row sm:justify-center gap-4 overflow-auto whitespace-nowrap snap-x snap-mandatory">
          {menuGroups.map((group, groupIndex) => (
            <li
              className={`  ${
                group.route === pathname
                  ? "text-primary border-b-4 border-primary font-semibold"
                  : " text-black "
              } "pt-2 pb-2 snap-start "`}
              key={groupIndex}
            >
              <Link
                href={group.route}
                className={` hover:text-primary `}
                aria-current="page"
              >
                {group.label}
              </Link>
            </li>
          ))}       
        </ul>
      </div> */}
    </nav>
  );
}
