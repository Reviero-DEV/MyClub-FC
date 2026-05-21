import imgHistory from "../assets/img-history.webp"

export default function OurHistory() {
    return (
        <section className="flex items-center w-full">
             <div className="grid grid-cols-2 mx-auto w-full max-md:grid-cols-1 max-w-7xl gap-2 py-5 px-5">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold uppercase tracking-widest text-gray-100">A historia do clube</h2>
            <p className="text-gray-300 tracking-wide">
              O MyClub nasceu para representar a força e a alma de nossa gente.
              Em mais de um século de história, transformamos o suor em glórias e construímos uma trajetória vitoriosa,
              escrita pela devoção de gerações de apaixonados que transformam nossa arena em um caldeirão pulsante.
            </p>
            <p className="text-gray-300 tracking-wide">
              Essa energia vinda das arquibancadas transformou o clube em uma potência do futebol.
              Nossa galeria pesada reflete esse orgulho, repleta de grandes conquistas continentais,
              títulos nacionais, copas e dezenas de taças estaduais que eternizam nosso manto na história do esporte.
            </p>
            <button className="mt-2 cursor-pointer w-max bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 transition-colors rounded">Conheça nossa historia</button>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-zinc-800 group">
            <img src={imgHistory} alt="Foto do clube em fundacao" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"/>
          </div>
        </div>
        </section>
    )
}