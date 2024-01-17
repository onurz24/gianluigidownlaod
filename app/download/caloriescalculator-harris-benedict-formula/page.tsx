import React from "react";
import { FaDownload } from "react-icons/fa";
import CodeBlock1 from "./CodeBlock1";
import CodeBlock2 from "./CodeBlock2";

type Props = {};

function page({}: Props) {
  return (
    <div
      className="
      p-10 
        flex justify-center items-center flex-col
         select-none
         max-sm:p-2
    "
    >

<div className=" text-xl font-bold  w-1/2 max-md:w-full p-4">
        Kalorienrechner mit Harris Benedict Formel PAL-Faktor
</div>

      <div className="w-1/2 max-md:w-full p-4">
        <div>Schritt 1.</div>
        <div>Herunterladen und Extrahieren</div>
      </div>

      <div className="w-1/2 max-md:w-full pl-4 pr-4 pb-4">
        <a
          className="w-fit flex justify-center items-baseline
        bg-blue-500 text-white
        rounded-md p-4 
        hover:bg-blue-600 transition duration-500 ease-in-out
        "
          href={"/Kalorienrechner_16.01.zip"}
          download={true}
        >
          Download Kalorienrechner <FaDownload className="ml-2" />
        </a>
      </div>

      <div className="w-1/2 max-md:w-full p-4">
        <div>Schritt 2.</div>
        <div>CalorieCalculator.txt öffnen und Alles auswählen.</div>
      </div>
      <div className="w-1/2 max-md:w-full p-4">
        <div>Schritt 3.</div>
        <div>
          Aktivieren Sie Visual Builder & Fügen Sie einen neuen Abschnitt hinzu
        </div>
      </div>

      <div className="w-1/2 max-md:w-full p-4">
        <div>Schritt 4.</div>
        <div>Neues Modul - Vollbreiter Code & Einfügen</div>
      </div>

      <div className="w-1/2 max-md:w-full p-4">
        <div>Schritt 5.</div>
        <div>
          Sektion Zentrieren mit Abstand - Padding :<br />
          1. Klasse zu den Sektionen Hinzufügen &quot;Onur&quot; <br />
          2. Klasse anschließend definieren <br />
        </div>
      <CodeBlock1/>
    </div>

    <div className="w-1/2 max-md:w-full p-4">
        <div>Schritt 6.</div>
        <div>
          Vollbreiter Code Spalte Ausrichten :<br />
          1. Klasse zu der Spalte Hinzufügen &quot;Onur2&quot; <br />
          2. Klasse anschließend definieren <br />
        </div>
        <CodeBlock2/>
    </div>

      </div>
  );
}

export default page;
