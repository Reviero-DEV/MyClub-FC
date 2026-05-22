import PostCard from "../components/PostCard"
import imgDonation from "../assets/images/communit-Imag/donation.webp"
import imgGastronomy from "../assets/images/communit-Imag/gastronomy.webp"
import imgPlants from "../assets/images/communit-Imag/plants.webp"
import imgWorkshop from "../assets/images/communit-Imag/workshop.webp"

const services = [
  {
    image: imgWorkshop,
    title: "Encontro de Criadores Local",
    desc: "Participe do nosso próximo workshop presencial para compartilhar experiências e networking.",
    date: "22 Mai 2026"
  },
  {
    image: imgGastronomy,
    title: "Feira Gastronômica",
    desc: "Sábado de música ao vivo, pratos exclusivos e integração entre os membros.",
    date: "25 Mai 2026"
  },
  {
    image: imgPlants,
    title: "Comunidade Verde",
    desc: "Retire sua muda de planta gratuita na secretaria e apoie nossa ação ecológica.",
    date: "23 Mai 2026"
  },
  {
    image: imgDonation,
    title: "Ação Social de Inverno",
    desc: "Arrecadação de agasalhos e alimentos começou. Saiba como ajudar os pontos de coleta.",
    date: "10 Mai 2026"
  }
];


export default function Community() {
    return (
        <section className="overflow-hidden w-full mx-auto py-5 p-5 bg-neutral-950">
            <div className="flex flex-col items-center mx-auto w-full gap-3">
                <h2 className="text-xl font-bold uppercase tracking-widest max-w-7xl text-gray-100">Clube e Comunidade</h2>
                <div className="flex gap-5 overflow-y-auto pb-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent hover:scrollbar-thumb-zinc-800">
                    {services.map((item, index) => (
                    <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="shrink-0"
          >
                        <PostCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        desc={item.desc}
                        date={item.date}
                        />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}