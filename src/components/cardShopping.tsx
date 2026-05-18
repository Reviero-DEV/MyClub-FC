import { FaArrowRight } from "react-icons/fa";

export interface ItemShopphing {
    image: string;
    title: string;
    price: number;
    url: string;
}

export default function CardShopping({ image, title, price, url }: ItemShopphing) {
    return (
        <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-red-700 max-w-sm h-105 bg-neutral-950 transition-all hover:shadow-lg">
            {image && (
                <img src={image} alt={title} className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" />
            )}

            <div className="flex flex-col p-4 min-w-2xs">
                {(title || price) && (<div className="flex flex-col text-center justify-between text-gray-400">
                    {title && (
                        <h4>{title}</h4>
                    )}
                    {price && (
                        <span>R$ {price}</span>
                    )}
                </div>)}
                {url && (<a href={url} className="text-red-700 font-medium inline-flex items-center gap-2 text-sm group hover:text-red-500 transition-colors">Garantir Manto <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" /></a>)}
            </div>
        </div>
    )
}