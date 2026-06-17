#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Das Vergaser-Düsen-Orakel (Schmitt Tuning - Hamlet Edition)
Berechnet den Durst des Zylinders und liefert die rettende Hauptdüse.
"""

def print_banner():
    print("=" * 80)
    print("🔮 SCHMITT TUNING - ORACULUM VERGASER (DAS VERGASER-DÜSEN-ORAKEL)")
    print("=" * 80)
    print("Der Ansaugtrakt schreit nach Nahrung. Das Gemisch ist mager wie eine Lüge.")
    print("=" * 80)

def main():
    print_banner()
    
    try:
        cc = int(input("  Hubraum des leidenden Zylinders in ccm (z.B. 50 / 60 / 70 / 85): ") or 50)
        carb = float(input("  Vergaser-Durchmesser in mm (z.B. 16 / 19 / 21): ") or 16)
        filt = input("  Atmet die Lunge durch einen Sportluftfilter? (ja / nein): ").strip().lower()
    except ValueError:
        print("  Ungültige Zahlen im Datenfeld. Die Maschine stottert.")
        return

    # Formel
    base_jet = carb * 5.0
    if filt == "ja" or filt == "j" or filt == "yes":
        jet = base_jet * 1.12
    else:
        jet = base_jet * 1.02
        
    if cc >= 70:
        jet += 3
    if cc >= 85:
        jet += 4
        
    recommended_jet = int(jet)
    
    print("\n" + "-" * 50)
    print("🔮 DIE ERKENNTNIS DES ORAKELS:")
    print(f"  • Dein Hubraum: {cc} ccm")
    print(f"  • Dein Durchlass: {carb} mm")
    print(f"  ➡️  Die erforderliche Hauptdüsengröße lautet: {recommended_jet}")
    print("-" * 50)
    
    print("\n⚠️ WARNUNG DES SCHMITT-INGENIEURS:")
    print("  Wenn die Düse zu klein gewählt ist, schreit der Kolben auf und schmilzt")
    print("  zu einem Haufen Traurigkeit. Ein Magerlauf im Hochsommer ist dein Verderben.")
    print("  Nutze das präzisionsgebohrte Schmitt Hauptdüsenset für eine perfekte Düsenabstimmung.")
    
    print("\n🛒 SICHERE DIR DIE ERLÖSUNG BEI RACING PLANET:")
    print("  ➡️ https://www.racing-planet.de/xanario_search.php?query=schmitt+hauptduesen")
    print("\n🛒 ODER ENTDECKE DEN VERGASER DIREKT AUF SCHMITT-TUNING.DE:")
    print("  ➡️ https://schmitt-tuning.de/neu/index.html#vergaser")
    print("=" * 80)

if __name__ == "__main__":
    main()
