import TabTrophies, { type Trophies } from "../components/tabTrophies";

const conquistasClube: Trophies[] = [
  {
    title: "Mundial de Clubes",
    qty: 2,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width: 48px; height: 48px; display: inline-block; vertical-align: middle;"><path d="M12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" stroke-dasharray="1 1"/><path d="M10 10c-.5 3-1 6 .5 9h3c1.5-3 1-6 .5-9"/><path d="M8 19h8M6 22h12M12 10v9"/></svg>`
  },
  {
    title: "Copa Libertadores",
    qty: 3,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width: 48px; height: 48px; display: inline-block; vertical-align: middle;"><path d="M6 4h12v3c0 3-2 6-6 6s-6-3-6-6V4z" /><path d="M12 13v5M9 18h6M8 20h8" /><path d="M6 5C4.5 5 3 6 3 8s1.5 3 3 3V5z" /><path d="M18 5c1.5 0 3 1.0 3 3s-1.5 3-3 3V5z" /><circle cx="12" cy="3" r="1" fill="currentColor" /></svg>`
  },
  {
    title: "Copa Sul-Americana",
    qty: 2,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width: 48px; height: 48px; display: inline-block; vertical-align: middle;"><circle cx="12" cy="6" r="3" /><path d="M9 9h6v4c0 1.5-1 3-3 3s-3-1.5-3-3V9z" /><path d="M12 16v3M10 19h4M8 21h8" /></svg>`
  },
  {
    title: "Campeonato Brasileiro",
    qty: 5,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width: 48px; height: 48px; display: inline-block; vertical-align: middle;"><path d="M12 2L4 7v4c0 4.5 3.5 8.5 8 10 4.5-1.5 8-5.5 8-10V7l-8-5z" /><path d="M12 6v10M9 9h6M10 13h4" /></svg>`
  },
  {
    title: "Copa do Brasil",
    qty: 4,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width: 48px; height: 48px; display: inline-block; vertical-align: middle;"><path d="M5 3h14l-2 11H7L5 3z" /><path d="M12 14v4M8 18h8M7 21h10" /><path d="M5 5c-1 0-2 .5-2 1.5S4 8 5 8" /><path d="M19 5c1 0 2 .5 2 1.5S20 8 19 8" /></svg>`
  },
  {
    title: "Supercopa do Brasil",
    qty: 2,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width: 48px; height: 48px; display: inline-block; vertical-align: middle;"><path d="M7 3h10v8c0 2-1.5 4-5 4s-5-2-5-4V3z" /><path d="M12 15v4M9 19h6M7 21h10" /><path d="M7 5H4v4h3M17 5h3v4h-3" /></svg>`
  },
  {
    title: "Recopa Sul-Americana",
    qty: 2,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width: 48px; height: 48px; display: inline-block; vertical-align: middle;"><path d="M8 3h8v2c0 2.5-1 4.5-4 5.5-3-1-4-3-4-5V3z" /><path d="M12 10.5V17M10 17h4M9 19h6M8 21h8" /></svg>`
  },
  {
    title: "Campeonato Estadual",
    qty: 28,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width: 48px; height: 48px; display: inline-block; vertical-align: middle;"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="6" stroke-dasharray="2 2" /><path d="M12 9v6M10 12h4" /></svg>`
  }
];

export default function Achievements() {
  return (
    <section className="text-white py-5 w-full flex justify-center">
      <div className="flex flex-col w-full max-w-7xl gap-2 px-5">
        <h2 className="text-xl font-bold uppercase tracking-widest text-gray-100">Nossas Conquistas</h2>
        <p>Nossa historia sendo escrita</p>

        <div className="grid sm:grid-flow-col pt-2 grid-rows-2 min-[1081px]:grid-rows-1 max-sm:grid-cols-2 gap-8">
          {conquistasClube.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <TabTrophies
              key={index}
              icon={item.icon}
              qty={item.qty}
              title={item.title}
            />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}