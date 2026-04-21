interface ButtonProps {
  styles?: string;
  link?: string;
}

export default function Button({ styles, link }: ButtonProps) {
  const buttonClass = `cursor-pointer bg-[#5CE1E6] hover:bg-[#33BBCF] duration-200 rounded-[10px] py-3 sm:py-4 px-4 sm:px-6 sm:text-lg font-medium ${styles}`;
  
  if (link) {
    return (
      <a href={link} className="w-fit block">
        <button className={buttonClass}>
          Get Started
        </button>
      </a>
    );
  }

  return (
    <button className={buttonClass}>
      Get Started
    </button>
  );
}
