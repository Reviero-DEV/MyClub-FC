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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row md:justify-center items-center justify-items-center gap-6 md:gap-10 w-full">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.src}
              alt={partner.name}
              className="h-12 w-auto max-w-[120px] md:max-w-[150px] object-contain invert brightness-0 content-stretch"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
