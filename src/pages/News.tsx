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
    <section className="flex flex-col max-w-7xl gap-3 p-5">
      <div className="flex justify-between">
        <h2>Nossos Programas</h2>
        <p className="flex items-center gap-1">
          Ler Mais <FaArrowRight />
        </p>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
        {news.map((item) => (
          <PostCard
            key={item.id}
            title={item.title}
            image={item.image}
            desc={item.desc}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}
