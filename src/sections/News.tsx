import { FaArrowRight } from "react-icons/fa";
import PostCard from "../components/PostCard";
import imgBase from "../assets/images/base.webp";
import imgWinner from "../assets/images/winner.webp";
import imgStadium from "../assets/images/stadium.webp";
import imgDm from "../assets/images/dm.webp";

const news = [
  {
    id: 1,
    title: "Futebol profissional",
    image: imgWinner,
    desc: "MyClub vence e se mantém na liderança da tabela.",
    link: "#",
  },
  {
    id: 2,
    title: "Clube",
    image: imgStadium,
    desc: "Estadio lotado! Mais de 50mil torcedores na nossa vitória socialização.",
    link: "#",
  },
  {
    id: 3,
    title: "Base",
    image: imgBase,
    desc: "os jovem da base vencem e avançam na Copa do Brasil Sub-20.",
    link: "#",
  },
  {
    id: 4,
    title: "Departamento Médico",
    image: imgDm,
    desc: "Momento positivo em nosso DM, clube informa zerar lista de lesionados.",
    link: "#",
  },
];

export default function News() {
  return (
    <section className="flex flex-col w-full max-w-7xl gap-5 p-5">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold uppercase tracking-widest text-gray-100">Noticias</h2>
        <p className="flex items-center gap-1 group cursor-pointer font-medium transition-colors text-slate-200 hover:text-red-500">
          Ler Mais <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </p>
      </div>

      <div className="inset-0 flex gap-5 overflow-y-auto pb-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent hover:scrollbar-thumb-zinc-800">
        {news.map((item, index) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="shrink-0"
          >
            <PostCard
              key={item.id}
              title={item.title}
              image={item.image}
              desc={item.desc}
              link={item.link}
            />
          </div>
        ))}

      </div>
    </section>
  );
}
