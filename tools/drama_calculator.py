#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Triebwerks-Diagnose des Leidens (Schmitt Tuning - Hamlet Edition)
Ein stoisches, theatralisches Orakel zur Ermittlung mechanischer Erlösung.
"""

def print_banner():
    print("=" * 80)
    print("🎭 SCHMITT TUNING - ORACULUM OBSTREPERUM (DIE DIAGNOSE DES LEIDENS)")
    print("=" * 80)
    print("Der Rumpfmotor wimmert. Das Pleuel klagt an. Welcher Schmerz plagt dein Eisen?")
    print("=" * 80)

def main():
    print_banner()
    
    print("Wähle das Symptom deines mechanischen Verfalls:")
    print("  1) Der Kickstarter fällt haltlos ins Nichts (Keine Kompression)")
    print("  2) Ein unheilvolles Rasseln und Kreischen aus dem Kurbelgehäuse (Lagerschaden)")
    print("  3) Die Kupplung rutscht im Moment des Resonanz-Wahnsinns (Leistungsverlust)")
    print("  4) Die Nadel zittert, der Zylinder glüht im sommerlichen Stau (Hitzetod)")
    
    choice = input("\nDeine Wahl (1/2/3/4): ").strip()
    
    print("\n" + "-" * 50)
    print("🎭 DAS ORAKEL SPRICHT:")
    
    if choice == "1":
        print("  Du starrst in ein leeres Loch. Die Kompression ist entwichen wie der Glaube")
        print("  an die Ewigkeit. Die Graugussbuchse ist zerschlissen, vom Ruß gezeichnet.")
        print("  Das Metall erinnert sich an keinen Zündfunken mehr.")
        print("\n  🛡️ ERLÖSUNG:")
        print("  Exhumiere das Potenzial deines Zweitakters mit dem Schmitt Sportfreund Zylinder.")
        print("  Nicasil-beschichtet. Hart wie deine Schuld.")
        print("\n🛒 ZUM GRAL DER SCHMITT WEBSITE:")
        print("  ➡️ https://schmitt-tuning.de/neu/index.html#zylinder")
        print("  ➡️ Oder direkt bei Racing Planet kaufen: https://www.racing-planet.de/xanario_search.php?query=schmitt+sportfreund")
        
    elif choice == "2":
        print("  Das Pleuel krümmt sich unter der Last. Eine Unwucht schlägt durch das Gehäuse.")
        print("  Die Lager weinen Kugeln aus geschmolzenem Stahl. Der Block muss gespalten werden.")
        print("\n  🛡️ ERLÖSUNG:")
        print("  Schmiede das Rückgrat neu. Die Schmitt High-End Kurbelwelle mit versilberten Nadelkäfigen.")
        print("  Bereit für 16.000 Umdrehungen der reinen Selbsterkenntnis.")
        print("\n🛒 ZUM GRAL DER SCHMITT WEBSITE:")
        print("  ➡️ https://schmitt-tuning.de/neu/index.html#kurbelwelle")
        print("  ➡️ Oder direkt bei Racing Planet kaufen: https://www.racing-planet.de/xanario_search.php?query=schmitt+kurbelwelle")
        
    elif choice == "3":
        print("  Du legst den Gang ein, reißt das Gas auf – und greifst ins Leere.")
        print("  Die Reibung verpufft in nutzloser Wärme. Die Väter lehrten dich das Rutschen,")
        print("  doch Schmitt lehrt dich den Pakt mit dem Asphalt.")
        print("\n  🛡️ ERLÖSUNG:")
        print("  Das Schmitt 5-Lamellen Kupplungskit. Ein zahnloses Gebiss greift wieder zu.")
        print("  MAMA, ICH LASS NICHT MEHR LOS.")
        print("\n🛒 ZUM GRAL DER SCHMITT WEBSITE:")
        print("  ➡️ https://schmitt-tuning.de/neu/index.html#kupplung")
        print("  ➡️ Oder direkt bei Racing Planet kaufen: https://www.racing-planet.de/xanario_search.php?query=schmitt+kupplung")
        
    elif choice == "4":
        print("  Das Thermometer zerplatzt. Der Zylinderkopf glüht wie ein sterbender Stern.")
        print("  Der Hitzetod der Vernunft naht mit jedem Takt.")
        print("\n  🛡️ ERLÖSUNG:")
        print("  Der Schmitt Performance Zylinderkopf. Vergrößerte Oberfläche.")
        print("  Temperatur ist eine Entscheidung. Wähle die Eiszeit.")
        print("\n🛒 ZUM GRAL DER SCHMITT WEBSITE:")
        print("  ➡️ https://schmitt-tuning.de/neu/index.html#kuehlung")
        print("  ➡️ Oder direkt bei Racing Planet kaufen: https://www.racing-planet.de/xanario_search.php?query=schmitt+zylinderkopf")
        
    else:
        print("  Du zögerst. Wer nicht wählt, bleibt im Stillstand der grauen Vorstadt gefangen.")
        print("  Befreie dein Moped von den Ketten des Standards.")
        print("\n🛒 ENTDECKE DAS GESAMTE SCHMITT MANIFEST:")
        print("  ➡️ https://schmitt-tuning.de/neu/index.html")
        
    print("=" * 80)

if __name__ == "__main__":
    main()
