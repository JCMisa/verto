import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Verto logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        <UserDropdown
          triggerClassName="cursor-pointer hover:!bg-transparent hover:scale-95 transition-all ease-in-out duration-200"
          contentClassName="!bg-neutral-800"
        />
      </div>
    </header>
  );
};

export default Header;
