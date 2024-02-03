import { useState } from "react";
import Button from "../Button";
import QR from "../../assets/qr-join.png";
import AmericaReal from "../../assets/real-america.jpeg";
import Searching from "../../assets/searching.gif";
import Plaatsbord from "../../assets/cp/plaatsbord.jpeg";
import PortZelande from "../../assets/cp/port-zelande.avif";
import Malmedy from "../../assets/past/malmedy.jpeg";
import Shrek from "../../assets/past/chantal.jpg";
import Peuter from "../../assets/cp/peuter.jpeg";
import Huisje from "../../assets/cp/huisje.jpg";

export default function Presentation() {
  const [page, setPage] = useState(0);

  return (
    <div className="flex-1 flex flex-col gap-4 rounded-xl bg-neutral-700 p-4 border-solid border-b-neutral-800 border-r-neutral-800 border-2 border-t-neutral-600 border-l-neutral-600">
      <div className="flex flex-col flex-1">
        {page === 1 && (
          <div className="flex flex-1 justify-center items-center">
            <img src={QR} className="w-1/2" />
          </div>
        )}
        {page === 0 && (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">Ready?</h1>
          </div>
        )}
        {page === 2 && (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">Wie wil er nou niet naar...</h1>
          </div>
        )}
        {page === 3 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">Amerika! 🇺🇸 RAAAHHHHHH 🦅</h1>
            <img src={AmericaReal} className="w-1/3" />
          </div>
        )}
        {page === 4 && (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">Dus</h1>
          </div>
        )}
        {page === 5 && (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Een trip naar Amerika binnen het budget...
            </h1>
          </div>
        )}
        {page === 6 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">Na dag(en) zoeken...</h1>
            <img src={Searching} className="w-1/3" />
          </div>
        )}
        {page === 7 && (
          <div className="flex flex-1 justify-center items-center">
            <img src={Plaatsbord} className="w-2/3" />
          </div>
        )}
        {page === 8 && (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">Dan hoor ik u denken</h1>
          </div>
        )}
        {page === 9 && (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">Wat een stom idee, stommerik</h1>
          </div>
        )}
        {page === 10 && (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Gentlemen, a short view back to the past (iykyk)
            </h1>
          </div>
        )}
        {page === 11 && (
          <div className="flex flex-1 justify-center items-center">
            <img src={PortZelande} className="w-2/3" />
          </div>
        )}
        {page === 12 && (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Renesse was kei lit, zwembad & gamehal uitgespeeld.
            </h1>
          </div>
        )}
        {page === 13 && (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Leuke dingen gedaan, waaronder:
            </h1>
          </div>
        )}
        {page === 14 && (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Glas door de schoorsteen gooien
            </h1>
          </div>
        )}
        {page === 15 && (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Glas door de woonkamer dankzij... 🏐 + 🌈
            </h1>
          </div>
        )}
        {page === 16 && (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">
              All-in-all goeie vakantie toch? 🤔
            </h1>
          </div>
        )}
        {page === 17 && (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">Afgelopen jaar was ook...</h1>
          </div>
        )}
        {page === 18 && (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">MAL(medy) 🤪</h1>
          </div>
        )}
        {page === 19 && (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">Kaulo veel gedaan toch?</h1>
          </div>
        )}
        {page === 20 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Naar een vet festival geweest!
            </h1>
            <img src={Malmedy} className="w-1/3" />
          </div>
        )}
        {page === 21 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Shrek gekeken op kosten van Chantal, SO naar Chantal
            </h1>
            <img src={Shrek} className="w-1/3" />
          </div>
        )}
        {page === 22 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Maar ook minder leuke dingen meegemaakt... 😿
            </h1>
          </div>
        )}
        {page === 23 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Sterkte Kenny! Dat was even schrikken - groetjes xxx
            </h1>
          </div>
        )}
        {page === 24 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">Maar even serieus</h1>
          </div>
        )}
        {page === 25 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">
              We hebben daar echt veel leuke dingen gedaan
            </h1>
          </div>
        )}
        {page === 26 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">Maar weer even naar het nu</h1>
          </div>
        )}
        {page === 27 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Wat nou als we die twee vakanties combineren?
            </h1>
          </div>
        )}
        {page === 28 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">Daarom dus America</h1>
          </div>
        )}
        {page === 29 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <img src={Peuter} className="w-1/2" />
          </div>
        )}
        {page === 30 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Tis ook best dichtbij, das ook lekker
            </h1>
          </div>
        )}
        {page === 31 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Veel te doen: zipline, strandvolleybal (misschien skippen),
              muurklimmen, high adventure experience (bomen klimmen),
              mountainbike, boogschieten (best geinig), bierproeverij, zembad
              met glijbanen en wildwaterbaan man bro
            </h1>
          </div>
        )}
        {page === 32 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">Toverland om de hoek 😱</h1>
          </div>
        )}
        {page === 33 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">Zeer schappelijke prijs</h1>
          </div>
        )}
        {page === 34 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold"> + mooie osso</h1>
            <img src={Huisje} className="w-2/3" />
          </div>
        )}
        {page === 35 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">Uitgaansleven?</h1>
          </div>
        )}
        {page === 36 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">Geen idee</h1>
          </div>
        )}
        {page === 37 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Dus als alternatief had ik nog bedacht...
            </h1>
          </div>
        )}
        {page === 38 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Misschien is A-dam ook wel leuk
            </h1>
          </div>
        )}
        {page === 39 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Had ook naar Praag gekeken, was ook vet
            </h1>
          </div>
        )}
        {page === 40 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Wel wat lastiger voor een goede prijs te zoeken
            </h1>
          </div>
        )}
        {page === 41 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">Samenvatting</h1>
          </div>
        )}
        {page === 42 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Afgelopen vakanties waren leuk, dus
            </h1>
          </div>
        )}
        {page === 43 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">
              1. America om de hoek (Center Parcs - Meerdal) 🇺🇸
            </h1>
          </div>
        )}
        {page === 44 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">Andere opties:</h1>
            <h2 className="text-3xl">
              2. Amsterdam (of andere stad) <br /> 3. Praag
            </h2>
          </div>
        )}
        {page === 45 && (
          <div className="flex flex-1 flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Let me know y'alls brainwaves, y'aight! 🤙
            </h1>
          </div>
        )}
      </div>
      <div className="flex justify-between">
        {page > 0 && (
          <Button
            buttonClass="secondary"
            title="Previous slide"
            onClick={() => setPage((curr) => curr - 1)}
          />
        )}
        <div className="flex-1 flex justify-center items-center">
          <p>{page + 1} / 46</p>
        </div>
        {page < 45 && (
          <Button
            buttonClass="primary"
            title="Next slide"
            onClick={() => setPage((curr) => curr + 1)}
          />
        )}
      </div>
    </div>
  );
}
