import { useState } from "react";
import imgPadrao from '../assets/images/avatar.webp';

export interface Player {
    image: string;
    name: string;
    number?: number;
    role: string;
}

export default function CardPlayer({ image, name, number, role }: Player) {
    const hasNumber = typeof number === 'number';
    const [imgSrc, setImgSrc] = useState(image || imgPadrao);

    return (
        <div className="flex flex-col justify-between min-w-60 max-w-sm h-95 overflow-hidden rounded-xl border border-zinc-800 bg-neutral-950 transition-all hover:border-red-700 hover:shadow-lg group">
            
            <div className="w-full h-[75%] overflow-hidden bg-zinc-900/30">
                <img 
                    src={imgSrc} 
                    alt={name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={() => {
                        if (imgSrc !== imgPadrao) {
                            setImgSrc(imgPadrao);
                        }
                    }}
                />
            </div>

            <div className="flex flex-col p-4 bg-neutral-950 justify-center h-[25%] border-t border-zinc-900">
                {name && (
                    <h4 className="text-white font-bold text-sm truncate uppercase tracking-wide">{name}</h4>
                )}
                {(role || hasNumber) && (
                    <div className="flex justify-between items-center text-xs text-zinc-400 mt-1">
                        {role && (
                            <span className="font-medium">{role}</span>
                        )}
                        {hasNumber && (
                            <span className="font-black text-red-500 text-sm">#{number}</span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
