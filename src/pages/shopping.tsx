import CardShopping, { type ItemShopphing } from "../components/cardShopping";
import imgBanner from "../assets/images/T-shirts/banner-loja.webp";
import imgShirt1 from "../assets/images/T-shirts/camisa1.webp"
import imgShirt2 from "../assets/images/T-shirts/camisa2.webp"
import imgShirt3 from "../assets/images/T-shirts/camisa3.webp"
import imgShirtGol from "../assets/images/T-shirts/camisa-gol.webp"
import imgShirtTrainer from "../assets/images/T-shirts/camisa-treino.webp"


const listShoppingData: ItemShopphing[] = [
  {
    image: imgShirt1,
    title: "Camisa Oficial I - Titular 2026",
    price: 189.90,
    url: "/loja/camisa-titular-2026"
  },
  {
    image: imgShirt2,
    title: "Camisa Oficial II - Reserva 2026",
    price: 189.90,
    url: "/loja/camisa-reserva-2026"
  },
  {
    image: imgShirt3,
    title: "Camisa Oficial III - Alternativa 2026",
    price: 199.90,
    url: "/loja/camisa-alternativa-2026"
  },
  {
    image: imgShirtGol,
    title: "Camisa de Goleiro Oficial 2026",
    price: 179.90,
    url: "/loja/camisa-goleiro-2026"
  },
  {
    image: imgShirtTrainer,
    title: "Camisa de Treino Comissão e Atletas",
    price: 129.90,
    url: "/loja/camisa-treino-2026"
  }
];

export default function ShoppingItems() {
  return (
    <section className="text-white py-5 w-full flex justify-center">
      <div className="flex flex-col w-full max-w-7xl gap-8 px-5">

        <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
          <div className="flex flex-col gap-1">
            <span className="text-red-600 text-xs font-bold tracking-widest uppercase">Manto Oficial</span>
            <h2 className="text-3xl font-black uppercase tracking-tight">Nossa Loja</h2>
          </div>
          <p className="text-zinc-400 text-sm hidden sm:block">Vista o manto, sinta a paixão.</p>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          <div className="relative group overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 h-100 md:h-120 flex flex-col justify-end p-8">
            <div className="absolute inset-0 z-0">
              <img
                src={imgBanner}
                alt="Banner Coleção 2026"
                className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col gap-4">
              <span className="text-red-500 font-bold tracking-wider text-xs uppercase">Nova Coleção 2026</span>
              <h3 className="text-2xl font-black uppercase tracking-tight leading-none">
                Todos os Mantos <br /> Preparados para a Glória
              </h3>
              <p className="text-zinc-300 text-xs max-w-xs">
                Tecnologia de alta performance com a identidade visual das nossas arquibancadas.
              </p>
              <button className="mt-2 cursor-pointer w-max bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 transition-colors rounded">
                Ver Coleção
              </button>
            </div>
          </div>

          <div className="flex items-center max-md:pt-5 h-100 md:h-full w-full relative">
            <div className="inset-0 flex gap-5 overflow-y-auto pb-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent hover:scrollbar-thumb-zinc-800">
              {listShoppingData.map((item, index) => (
                <div key={index} className="w-65 md:w-70 shrink-0 snap-start h-full pb-2">
                  <CardShopping
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    url={item.url}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
