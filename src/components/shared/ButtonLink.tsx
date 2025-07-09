interface ButtonLinkProps {
  href: string;
  text: string;
  className?: string;
}

export const ButtonLink = ({ href, text, className = "" }: ButtonLinkProps) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border bg-linear-to-t from-[#02B3E9] to-[#3802E9] dark:bg-[#3802E9] cursor-pointer hover:scale-90 ${className}`}
    >
      <span className="relative z-10 text-[#DFF5FC]">{text}</span>
    </a>
  );
};