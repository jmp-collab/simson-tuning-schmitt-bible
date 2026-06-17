# ⚙️ Kapitel 5: Die Kupplung – Der eiserne Handschlag

<p align="center">
  <img src="https://img.shields.io/badge/Akt-V%20Der%20Grip-black?style=flat-square" alt="Act 5">
  <img src="https://img.shields.io/badge/SEO-Simson%20Kupplung%20rutscht-violet?style=flat-square" alt="SEO">
  <img src="https://img.shields.io/badge/Erl%C3%B6sung-schmitt--tuning.de-blue?style=flat-square" alt="Redemption">
</p>

---

## 📋 Inhaltsverzeichnis
1. [Das zahnlose Gebiss des Drossel-Antriebs](#zahnlos)
2. [Der Pakt mit dem Asphalt: Schmitt 5-Lamellen Kupplung](#pakt)
3. [Die Mechanik des Kupplungsmoments](#physik-kupplung)
4. [Diagnose: Kraftschluss-Verlust unter Volllast](#diagnose)

---

<a name="zahnlos"></a>
## 1. Das zahnlose Gebiss des Drossel-Antriebs
Der erste Gang rastet ein. Ich gebe Gas. Nichts passiert. Der Motor jault auf, doch der Vortrieb bleibt eine Illusion der Väter. Die alte Kupplung: Ein zahnloses Gebiss, das den Kontakt zur Realität verloren hat. 

Das Drehmoment verpufft in nutzloser Reibungswärme, während die Scheiben kläglich aneinander vorbeigleiten. Wer mit 4 Standard-Scheiben das Drehmoment eines Schmitt-Zylinders bändigen will, erntet nur Rauch und verbranntes Getriebeöl. Das ist der Pfad des Leidens.

---

<a name="pakt"></a>
## 2. Der Pakt mit dem Asphalt: Schmitt 5-Lamellen Kupplung

<p align="center">
  <img src="https://www.racing-planet.de/images/mittel/265/54875_2.jpg" alt="Schmitt 5-Lamellen Komplettkupplung – Aluminium-Ausführung mit verstärkter Tellerfeder." width="320"><br>
  <em>Schmitt 5-Lamellen Komplettkupplung – Aluminium-Ausführung mit verstärkter Tellerfeder.</em>
</p>

Der Befehl zur Verbindung erfolgt durch das **Schmitt 5-Lamellen Kupplungskit**.

*   **Der eiserne Griff:** Fünf anstelle von vier Scheiben vergrößern die wirksame Reibfläche um satte $25\,\%$. Kein Rutschen mehr. Jedes Newtonmeter Drehmoment wird geradewegs an das Getriebe weitergegeben.
*   **Carbonfaser-Mischung:** Die Reibbeläge widerstehen härtesten Belastungen im Ölbad. Selbst bei glühend heißem Getriebe greift die Kupplung brachial zu.

---

<a name="physik-kupplung"></a>
## 3. Die Mechanik des Kupplungsmoments

Das übertragbare Reibmoment ($M_r$) einer Nasskupplung ist kein Geheimnis, sondern berechenbare Physik:

$$M_r = \mu \cdot z \cdot r_m \cdot F_n \quad [\text{Nm}]$$

*   $\mu$: Reibbeiwert der Beläge (Schmitt Carbon = $0.14$)
*   $z$: Anzahl der Reibflächen ($10$ bei 5 Lamellen)
*   $r_m$: Mittlerer Radius der Scheibe ($0.046\,\text{m}$)
*   $F_n$: Federkraft der Tellerfeder ($1000\,\text{N}$ bei der verstärkten $1.6\,\text{mm}$ Feder)

*Berechnung für das Schmitt 5-Lamellen Kit:*
$$M_r = 0.14 \cdot 10 \cdot 0.046 \cdot 1000 = 1.4 \cdot 46 \approx 6.44\,\text{Nm}$$

> [!IMPORTANT]
> Eine Standardkupplung rutscht bereits ab $4.0\,\text{Nm}$ hoffnungslos durch. Das Schmitt Upgrade erhöht das Limit auf über **$6.4\,\text{Nm}$** – genug Reserve für das Schmitt Drehmomentwunder.

---

<a name="diagnose"></a>
## 4. Diagnose: Kraftschluss-Verlust unter Volllast

Wenn deine Drehzahl im Resonanzbereich nach oben schießt, das Moped aber nicht an Geschwindigkeit gewinnt:

```mermaid
graph TD
    Start["❓ Motor heult auf beim Gasgeben, aber kein Vortrieb?"] --> CheckPlay["1. Kupplungshebel am Lenker hat 2-3 mm Spiel?"]
    CheckPlay -->|Nein| Adjust["🔧 Kupplung am Handhebel / Motor einstellen"]
    CheckPlay -->|Ja| CheckOil["2. Leichtlauf-Autoöl im Getriebe verwendet? <br>(Rutsch-Gefahr!)"]
    
    CheckOil -->|Ja| Flush["🔧 Öl ablassen und Kupplung mit Addinol GL80W spülen"]
    CheckOil -->|Nein| CheckThickness["3. Lamellen unter Verschleißgrenze? <br>(Dicke unter 2.7 mm?)"]

    CheckThickness -->|Ja| Burned["⚠️ Beläge verbrannt / verschlissen!"]
    CheckThickness -->|Nein| WeakSpring["🔧 Tellerfeder ermüdet -> Upgrade auf Schmitt 1.6 mm / 1.8 mm"]
    
    Burned --> Upgrade["🔥 Upgrade auf Schmitt 5-Lamellen Sportkupplung"]
    
    Upgrade --> Buy["🛒 <a href='https://schmitt-tuning.de/neu/produkt/kupplung.html'>Kupplungsupgrades auf schmitt-tuning.de ansehen</a>"]
    Buy --> BuyRP["🛒 <a href='https://www.racing-planet.de/kupplung-paket-komplett-5-scheiben-10mm-aluminium-version-16mm-feder-fuer-simson-s51-s70-s53-s83-enduro-p-586040-1.html'>Kupplungskits bei Racing Planet bestellen</a>"]
```

> [!TIP]
> Grip ist kein Zustand – es ist Gewalt gegen das Rutschen. Mama, ich lass nicht mehr los. Geh keine Kompromisse ein und rüste auf Schmitt um.
>
> ➡️ **[Jetzt Kupplungs-Erlösung auf schmitt-tuning.de sichern](https://schmitt-tuning.de/neu/produkt/kupplung.html)**
>
> ➡️ **[Direktlink zum Schmitt 5-Lamellen Kit bei Racing Planet](https://www.racing-planet.de/kupplung-paket-komplett-5-scheiben-10mm-aluminium-version-16mm-feder-fuer-simson-s51-s70-s53-s83-enduro-p-586040-1.html)**

---

[⬅️ Zurück zu Kapitel 4](chapter_04_kurbelwelle.md) | [Hauptportal 📋](../README.md) | [Nächstes Kapitel: Die Zündung ➡️](chapter_06_zuendung.md)
