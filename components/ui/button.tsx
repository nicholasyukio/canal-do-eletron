import Image from "next/image";
// components/ui/button.tsx
const Button = () => {
    return (
        <a
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 dark:hover:bg-blue-500 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-max mx-auto mt-6"
        href="#quote"
        rel="noopener noreferrer"
        >
        <Image
            className="dark:invert"
            src="/request-quote-svgrepo-com.svg"
            alt="Request a quote icon"
            width={20}
            height={20}
        />
        Solicitar orçamento
        </a>
    );
  };
  
  export default Button;
  