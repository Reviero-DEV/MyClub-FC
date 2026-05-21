import { useEffect, useRef } from "react";
import logo from "../assets/logo.webp"
import logoRival from "../assets/logo-rival.avif"

interface Team {
  name: string;
  logoUrl: string;
}

interface Match {
  opponent: Team;
  date: string;
  time?: string;
  stadium: string;
  competition: string;
  isHome: boolean;
  myClubScore?: number;
  opponentScore?: number;
}

interface TableRow {
  position: number;
  team: string;
  points: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsDifference: number;
}

const nextMatch: Match = {
  opponent: { name: "Rival FC", logoUrl: logoRival },
  date: "24 Mai 2026",
  time: "16:00",
  stadium: "Arena MyClub",
  competition: "Campeonato Brasileiro",
  isHome: true,
};

const lastMatch: Match = {
  opponent: { name: "União Esporte", logoUrl: "placeholder" },
  date: "10 Mai 2026",
  stadium: "Estádio do Adversário",
  competition: "Copa do Brasil",
  isHome: false,
  myClubScore: 2,
  opponentScore: 1,
};

const leagueTable: TableRow[] = [
  { position: 1, team: "Atlético Real", points: 42, played: 20, won: 13, drawn: 3, lost: 4, goalsDifference: 18 },
  { position: 2, team: "Esporte Vale", points: 40, played: 20, won: 12, drawn: 4, lost: 4, goalsDifference: 15 },
  { position: 3, team: "Rival FC", points: 38, played: 20, won: 11, drawn: 5, lost: 4, goalsDifference: 11 },
  { position: 4, team: "União Aliança", points: 35, played: 20, won: 10, drawn: 5, lost: 5, goalsDifference: 9 },
  { position: 5, team: "Força Central", points: 34, played: 20, won: 9, drawn: 7, lost: 4, goalsDifference: 6 },
  { position: 6, team: "Metropolitano", points: 32, played: 20, won: 9, drawn: 5, lost: 6, goalsDifference: 4 },
  { position: 7, team: "MyClub FC", points: 31, played: 20, won: 8, drawn: 7, lost: 5, goalsDifference: 5 },
  { position: 8, team: "Inter Capital", points: 29, played: 20, won: 8, drawn: 5, lost: 7, goalsDifference: 2 },
  { position: 9, team: "Nacional Litoral", points: 28, played: 20, won: 7, drawn: 7, lost: 6, goalsDifference: 1 },
  { position: 10, team: "Cruzeiro Norte", points: 26, played: 20, won: 7, drawn: 5, lost: 8, goalsDifference: -2 },
  { position: 11, team: "Serra Verde FC", points: 25, played: 20, won: 6, drawn: 7, lost: 7, goalsDifference: 0 },
  { position: 12, team: "Vanguardas AC", points: 24, played: 20, won: 6, drawn: 6, lost: 8, goalsDifference: -3 },
  { position: 13, team: "Oeste Unido", points: 23, played: 20, won: 5, drawn: 8, lost: 7, goalsDifference: -4 },
  { position: 14, team: "Real Continental", points: 21, played: 20, won: 5, drawn: 6, lost: 9, goalsDifference: -6 },
  { position: 15, team: "Esporte Baixada", points: 20, played: 20, won: 5, drawn: 5, lost: 10, goalsDifference: -8 },
  { position: 16, team: "Associação Delta", points: 19, played: 20, won: 4, drawn: 7, lost: 9, goalsDifference: -7 },
  { position: 17, team: "Serrano FC", points: 18, played: 20, won: 4, drawn: 6, lost: 10, goalsDifference: -11 },
  { position: 18, team: "União Fronteira", points: 16, played: 20, won: 3, drawn: 7, lost: 10, goalsDifference: -12 },
  { position: 19, team: "Porto Alegre SC", points: 14, played: 20, won: 3, drawn: 5, lost: 12, goalsDifference: -15 },
  { position: 20, team: "Lanús Brasil", points: 12, played: 20, won: 2, drawn: 6, lost: 12, goalsDifference: -19 },
];

export default function MatchCenter() {
  const myClubLogo = logo;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const myClubRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current && myClubRowRef.current) {
      const container = scrollContainerRef.current;
      const row = myClubRowRef.current;

      container.scrollTop = row.offsetTop - container.offsetTop;
    }
  }, []);

  return (
    <section className="w-full py-5 md:py-7 text-white">
      <div className="mx-auto max-w-7xl px-5 flex flex-col gap-6 md:gap-8">

        <h2 className="text-xl md:text-2xl font-bold text-center uppercase tracking-wide">
          Jogos e Classificação
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-start">

          <div className="md:col-span-2 flex flex-col justify-between w-full h-full">

            <div className="bg-zinc-900 border border-zinc-800/80 rounded-lg p-5 relative overflow-hidden shadow-md">
              <span className="absolute top-0 right-0 bg-red-600 text-[10px] font-bold uppercase px-2.5 py-1 tracking-wider rounded-bl">
                Próximo Jogo
              </span>

              <p className="text-[11px] text-zinc-400 uppercase font-semibold mb-3">
                {nextMatch.competition} • {nextMatch.stadium}
              </p>

              <div className="flex items-center justify-between my-4 px-2 sm:px-6">
                <div className="flex flex-col items-center gap-1.5 w-24 text-center">
                  <img src={myClubLogo} alt="MyClub FC" className="h-12 w-12 object-contain rounded-full border border-red-600" />
                  <span className="font-bold text-xs truncate w-full">MyClub FC</span>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <span className="text-zinc-600 font-bold text-[10px] tracking-widest mb-1">VS</span>
                  <div className="bg-zinc-800 px-2.5 py-1 rounded text-[11px] font-mono font-bold text-red-500 border border-zinc-700">
                    {nextMatch.time}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-1.5 w-24 text-center">
                  <img src={nextMatch.opponent.logoUrl} alt={nextMatch.opponent.name} className="h-12 w-12 object-contain rounded-full border border-zinc-800" />
                  <span className="font-bold text-xs truncate w-full">{nextMatch.opponent.name}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-3 border-t border-zinc-800/60">
                <div className="text-zinc-400 text-xs">
                  Data: <strong className="text-white font-medium">{nextMatch.date}</strong>
                </div>
                <button className="w-full sm:w-auto px-4 py-1.5 cursor-pointer bg-red-600 hover:bg-red-700 transition-colors text-[11px] font-bold uppercase tracking-wider rounded text-white">
                  Ingressos
                </button>
                <button className="w-full sm:w-auto px-4 py-1.5 cursor-pointer bg-gray-600 hover:bg-gray-800 transition-colors text-[11px] font-bold uppercase tracking-wider rounded text-white">Localizacao</button>
              </div>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-[9px] bg-zinc-800 text-zinc-400 font-bold uppercase px-1.5 py-0.5 rounded tracking-wide mb-1">
                  Último Placar
                </span>
                <p className="text-[11px] text-zinc-400 font-medium">
                  {lastMatch.competition}
                </p>
              </div>

              <div className="flex items-center gap-3 my-1">
                <span className="text-xs font-bold text-zinc-400">MyClub FC</span>
                <div className="flex items-center gap-1 font-mono font-bold text-sm">
                  <span className="bg-zinc-800 px-2 py-0.5 rounded text-red-500 border border-zinc-700">{lastMatch.myClubScore}</span>
                  <span className="text-zinc-600 mx-0.5">x</span>
                  <span className="bg-zinc-800 px-2 py-0.5 rounded text-zinc-400 border border-zinc-700">{lastMatch.opponentScore}</span>
                </div>
                <span className="text-xs font-bold text-zinc-500">{lastMatch.opponent.name}</span>
              </div>

              <div className="text-[11px] text-zinc-500">
                {lastMatch.date}
              </div>
            </div>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 shadow-md w-full">
            <div className="flex items-center justify-between mb-3 pb-1.5 border-b border-zinc-800">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Classificação
              </h3>
              <span className="text-[9px] text-red-500 font-bold uppercase tracking-tight">Série A</span>
            </div>

            <div className="grid grid-cols-12 text-[9px] font-bold text-zinc-500 uppercase pb-1.5 px-1 border-b border-zinc-800/40 mb-1">
              <div className="col-span-6 flex gap-2"><span>Pos</span><span>Clube</span></div>
              <div className="col-span-2 text-center">P</div>
              <div className="col-span-2 text-center">J</div>
              <div className="col-span-2 text-center">SG</div>
            </div>

            <div
              ref={scrollContainerRef}
              className="max-h-40 overflow-y-auto flex flex-col divide-y divide-zinc-800/40 pr-1 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent"
            >
              {leagueTable.map((row) => {
                const isMyClub = row.team === "MyClub FC";

                let positionColor = "text-zinc-500";
                if (row.position <= 4) positionColor = "text-green-500";
                if (row.position >= 17) positionColor = "text-red-500";

                return (
                  <div
                    key={row.position}
                    ref={isMyClub ? myClubRowRef : null}
                    className={`grid grid-cols-12 items-center text-xs py-2.5 px-1 tracking-wide transition-colors ${isMyClub
                      ? "bg-red-950/30 text-red-400 font-bold border-l-2 border-red-600 pl-1"
                      : "text-zinc-300 hover:bg-zinc-800/30"
                      }`}
                  >
                    <div className="col-span-6 flex items-center gap-2.5 truncate">
                      <span className={`w-3 text-center text-[10px] font-mono ${positionColor}`}>
                        {row.position}
                      </span>
                      <span className={`truncate text-xs ${isMyClub ? "text-white" : "text-zinc-400"}`}>
                        {row.team}
                      </span>
                    </div>
                    <div className={`col-span-2 text-center font-bold font-mono text-xs ${isMyClub ? "text-red-500" : "text-white"}`}>
                      {row.points}
                    </div>
                    <div className="col-span-2 text-center text-zinc-500 font-mono text-xs">{row.played}</div>
                    <div className="col-span-2 text-center text-zinc-500 font-mono text-xs">
                      {row.goalsDifference > 0 ? `+${row.goalsDifference}` : row.goalsDifference}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 pt-2 border-t border-zinc-800 flex justify-between text-[9px] text-zinc-500 font-medium">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <span className="h-1 w-1 bg-green-500 rounded-full"></span> G4 Libertadores
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-1 w-1 bg-red-500 rounded-full"></span> Z4 Rebaixamento
                </div>
              </div>
              <span className="animate-pulse self-end">↕ Role para navegar</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
