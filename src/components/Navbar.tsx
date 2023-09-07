import { BsFillMoonStarsFill } from "react-icons/bs";
import ThemeSwitch from "./ThemeSwitch";



export default function Navbar() {
    

    return (
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Rafael Brito</h1>
            <ul className="flex items-center">
              <li>
                <ThemeSwitch />
              </li>
              <li>
                {/**
                 * <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
                 */}
              </li>
            </ul>
          </nav>
    )
};
