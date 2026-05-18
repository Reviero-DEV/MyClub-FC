import bradescoLogo from "../assets/svg/bradesco.svg";
import interLogo from "../assets/svg/logo-inter.svg";
import naturaLogo from "../assets/svg/natura.svg";
import rdLogo from "../assets/svg/raia-drogasil-saude-logo.svg";
import magaluLogo from "../assets/svg/magalu-logo.svg";

const partners = [
  { name: "Bradesco", src: bradescoLogo },
  { name: "Inter", src: interLogo },
  { name: "Natura", src: naturaLogo },
  { name: "RD Saúde", src: rdLogo },
  { name: "Magalu", src: magaluLogo },
];

export default function Partners() {
  return (
    <section className="w-full px-4 py-8 md:py-12">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-6 md:gap-8">
        <h2 className="text-xl md:text-2xl font-bold text-center">
          Nossos Parceiros
        </h2>
        
        <div className="grid sm:grid-flow-col grid-rows-2 min-[1081px]:grid-rows-1 max-sm:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.src}
              alt={partner.name}
              className="h-12 w-auto max-w-30 md:max-w-37.5 object-contain invert brightness-0 opacity-50 content-stretch"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
