// ButtonCard.tsx

import Image from "next/image";
import Link from "next/link";

interface ButtonCardProps {
    title: string;
    content: string;
    href: string;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ title, content, href }) => {
    return (
        <Link href="/dashboard" className="flex-nowrap flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl md:max-h-32  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  mx-[1rem] my-[1rem]  w-full">
            <Image
                width={1200}
                height={800}
                className="object-cover w-24  rounded-t-lg  md:h-32 h-auto md:w-auto p-1 md:rounded-none md:rounded-l-lg"
                src={href}
                alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
            </div>
        </Link>
    );
};

export default ButtonCard;
