interface NavItemProps {
  href: string;
  text: string;
}

export const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <li className="transition-all duration-100 transform hover:text-[#3802E9]">
      <a
        href={href}
        className="duration-300 font-medium ease-linear py-3"
      >
        {text}
      </a>
    </li>
  );
};