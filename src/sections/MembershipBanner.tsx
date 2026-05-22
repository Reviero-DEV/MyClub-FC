import bgSocio from "../assets/images/stadium.webp"

export default function MembershipBanner() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 py-6">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 min-h-55 md:min-h-65 flex items-center">

        <div className="absolute inset-0 z-0">
          <img
            src={bgSocio}
            alt="Torcida Rubro-Negra"
            className="w-full h-full object-cover opacity-25 object-center grayscale mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 md:p-12">

          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">
              Programa Oficial
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl text-white uppercase">
              Jogue junto com o clube. <br />
              <span className="text-zinc-400">Seja Sócio-Torcedor.</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed hidden sm:block">
              Garanta prioridade máxima em ingressos, descontos exclusivos na loja oficial e acesso a experiências que dinheiro nenhum pode comprar.
            </p>
          </div>

          <div className="shrink-0">
            <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-lg shadow-lg shadow-red-600/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              Quero Me Associar
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}
