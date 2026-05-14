import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from '../assets/logo.webp';

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { id: "ig", url: "https://instagram.com", label: "Instagram", icon: <FaInstagram className="size-5" /> },
    { id: "fb", url: "https://facebook.com", label: "Facebook", icon: <FaFacebookF className="size-5" /> },
    { id: "yt", url: "https://youtube.com", label: "YouTube", icon: <FaYoutube className="size-5" /> },
    { id: "in", url: "https://linkedin.com", label: "LinkedIn", icon: <FaLinkedinIn className="size-5" /> },
  ];

  const footerNavigation = [
    {
      title: "INSTITUCIONAL",
      links: [
        { label: "Sobre nós", url: "#" },
        { label: "História", url: "#" },
        { label: "Transparência", url: "#" },
      ],
    },
    {
      title: "PROGRAMAS",
      links: [
        { label: "Atividades", url: "#" },
        { label: "Oficinas", url: "#" },
        { label: "Saúde", url: "#" },
      ],
    },
    {
      title: "COMO AJUDAR",
      links: [
        { label: "Doe agora", url: "#" },
        { label: "Seja voluntário", url: "#" },
        { label: "Parcerias", url: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-200 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <img src={logo} alt="Logo MyClub" className="h-20 w-auto object-contain brightness-110" />
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Mais que um clube, uma paixão que nos une a cada jogo. Venha fazer parte da nossa história.
            </p>

            <div className="flex gap-4 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-neutral-900 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 w-full text-left">

            {footerNavigation.map((section) => (
              <nav key={section.title} className="flex flex-col gap-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-red-700 pb-2 mb-1">
                  {section.title}
                </h4>
                {section.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="text-sm text-neutral-400 hover:text-red-600 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            ))}

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-red-700 pb-2 mb-1">CONTATO</h4>
              <a href="tel:99999999999" className="text-sm text-neutral-400 hover:text-red-600 flex items-center gap-2 transition-colors duration-200">
                <FaPhoneAlt className="text-red-700 size-3.5" />
                <span>(99) 99999-9999</span>
              </a>
              <a href="mailto:contato@myclub.com" className="text-sm text-neutral-400 hover:text-red-600 flex items-center gap-2 transition-colors duration-200">
                <FaRegEnvelope className="text-red-700 size-3.5" />
                <span className="truncate">contato@myclub.com</span>
              </a>
              <span className="text-sm text-neutral-400 flex items-center gap-2 select-none">
                <FaMapMarkerAlt className="text-red-700 size-3.5" />
                <span>Atibaia, SP</span>
              </span>
            </div>

          </div>
        </div>

        <div className="border-t border-neutral-900 mt-12 pt-6 text-center">
          <p className="text-xs text-neutral-500 tracking-wide">
            © {year} MyClub FC. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
