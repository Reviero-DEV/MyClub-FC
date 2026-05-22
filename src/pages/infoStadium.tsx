import imageStadium from "../assets/img-stadium.webp";

interface StadiumInfo {
  label: string;
  value: string;
  isHighlighted?: boolean;
}

const stadiumDetails: StadiumInfo[] = [
  { label: "Capacidade", value: "42.500 torcedores", isHighlighted: true },
  { label: "Inauguração", value: "2017" },
  { label: "Gramado", value: "Natural Padrão FIFA" },
  { label: "Estacionamento", value: "2.000 vagas" },
  { label: "Camarotes", value: "30 unidades premium" },
];

export default function Stadium() {
  return (
    <section className="w-full bg-[#0a0a0a] text-white py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-3 mx-auto items-center">
    
        <div  data-aos="fade-right" data-aos-delay="150" className="px-5">
          <div className="relative overflow-hidden rounded-xl border border-zinc-800 group">
            <img 
              src={imageStadium} 
              alt="Estádio Arena MyClub" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        <div  data-aos="fade-right" data-aos-delay="0" className="p-5 flex flex-col justify-center h-full space-y-6">
          
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white uppercase">
              Arena <span className="text-red-600">MyClub</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              A casa do MyClub FC e o palco de grandes emoções. Um estádio moderno, com estrutura de alto nível e uma atmosfera única criada pela força da torcida rubro-negra.
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-800/60">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
              Informações do Estádio
            </h3>
            
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {stadiumDetails.map((detail) => (
                <li 
                  key={detail.label} 
                  className={`flex flex-col border-l-2 pl-3 py-0.5 ${
                    detail.isHighlighted ? "border-red-600" : "border-zinc-800"
                  }`}
                >
                  <span className="text-zinc-500 text-[11px] uppercase font-medium">
                    {detail.label}
                  </span>
                  <span className="text-zinc-200 font-semibold">
                    {detail.value}
                  </span>
                </li>
              ))}
              
              <li className="col-span-2 flex items-center gap-2 mt-2 pt-2 border-t border-zinc-900 text-xs font-semibold uppercase tracking-wider text-amber-500">
                <span>📍 Loja Oficial</span>
                <span className="text-zinc-700">•</span>
                <span>🏛️ Museu do Clube</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
