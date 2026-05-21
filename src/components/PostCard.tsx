import { FaArrowRight } from "react-icons/fa";

interface CardPost {
  image?: string;
  icon?: React.ReactNode;
  date?: string | number;
  title?: string;
  desc?: string;
  link?: string;
}

export default function PostCard({ image, icon, date, title, desc, link }: CardPost) {
  return (
    <div className="flex flex-col justify-between max-w-72 overflow-hidden rounded-xl border border-red-900 h-105 bg-neutral-950 transition-all hover:shadow-lg">
      
      {image && (
        <div className="relative w-full h-[60%] overflow-hidden bg-neutral-900 ">
          <img 
            src={image} 
            alt={title || "Imagem da notícia"} 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105 brightness-80 group-hover:brightness-100"
          />
          {icon && (
            <div className="absolute top-3 left-3 bg-red-700 text-white p-2 rounded-lg shadow-md">
              {icon}
            </div>
          )}
        </div>
      )}

      <div className="p-4 flex flex-col h-[40%] flex-1 justify-between text-left">
        
        <div className="space-y-2">
          {date && (
            <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              {date}
            </span>
          )}
          
          {title && (
            <h3 className="text-red-700 text-lg font-bold line-clamp-2 leading-snug hover:underline navigation-link">
              {title}
            </h3>
          )}
          
          {desc && (
            <p className="text-sm text-neutral-300 line-clamp-3 leading-relaxed">
              {desc}
            </p>
          )}
        </div>

        {link && (
          <div className="pt-4">
            <a 
              href={link} 
              className="text-red-700 font-medium inline-flex items-center gap-2 text-sm group hover:text-red-500 transition-colors"
            >
              Ler mais 
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
