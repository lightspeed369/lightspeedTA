(($) => $.config = (
// the following json goes into LightSpeed.vue.data
{
  "__carmake": ["deprecated_replaced_by_models"],
  "__model": { "deprecated_replaced_by_models": null },
  "__classLookupTable": { "deprecated_replaced_by_models": null },
  "__oneStarModel": ["deprecated_replaced_by_models"],
  "__twoStarModel": ["deprecated_replaced_by_models"],
 "models": {
    "Acura": {
      "Integra 1.6L ('86-'89)": { "baseClass": "TTS" },
      "Integra 1.8L (non-VTEC)('90-'93)": { "baseClass": "TTS" },
      "Integra 1.8L (non-VTEC)('94-'01)": { "baseClass": "TTS" },
      "Integra GS-R": { "baseClass": "TTS" },
      "Integra Type-R": { "baseClass": "TTE" },
      "NSX 3.0L ('91-'96)": { "baseClass": "TTD" },
      "NSX": { "baseClass": "TTD*" },
      "RSX": { "baseClass": "TTS" },
      "RSX-S": { "baseClass": "TTS*" }
    },
    "Alfa Romeo": {
      "4C": { "baseClass": "TTE*" },
      "Giulia Quadrifoglio": { "baseClass": "TTC" }
    },
    "Audi": {
      "RS 4 (4.2L) (AWD)('07)": { "baseClass": "TTD" },
      "TT RS ": { "baseClass": "TTC" },
      "TT": { "baseClass": "TTD" },
      "R8 (v8)": { "baseClass": "TTC" },
      "R8 (v10)": { "baseClass": "TTB" }
    },
    "BMW": {
      "M3 (E30)": { "baseClass": "TTE" },
      "M3 (E36)": { "baseClass": "TTE*" },
      "M3 (E46)": { "baseClass": "TTD" },
      "M3 (E9X)": { "baseClass": "TTD*" },
      "M3 / M4 (F8X)": { "baseClass": "TTC" },
      "M3 / M4 (G8X)": { "baseClass": "TTC*" },
      "M4 CSL (G8X)": { "baseClass": "TTB" },
      "M2 (F8x)": { "baseClass": "TTD*" },
      "M2 (F8x) Competition / CS": { "baseClass": "TTC" },
      "M2 (G8x)": { "baseClass": "TTC*" },
      "M6 ": { "baseClass": "TTC" },
      "MINI Cooper S": { "baseClass": "TTS" },
      "MINI JCW ": { "baseClass": "TTE" },
      "135i Coupe ('08-12)": { "baseClass": "TTE" },
      "1 M Coupe (3.0L turbo)": { "baseClass": "TTE*" },
      "E30/E36/E46 Non M": { "baseClass": "TTS" },
      "F8x Non M": { "baseClass": "TTS*" },
      "G8x Non M": { "baseClass": "TTE" },
      "G8x M240/M340/M440": { "baseClass": "TTC" },
      "M235i/M240i": { "baseClass": "TTE*" },
    },
    "Cadillac": {
      "ATSV": { "baseClass": "TTC" },
      "CT4-V Blackwing": { "baseClass": "TTC" },
      "CT5-V Blackwing": { "baseClass": "TTB" },
    },
    "Chevrolet": {
      "Camaro ZL1 & Z28  (5th Gen)": { "baseClass": "TTC" },
      "Camaro ZL1 (6th Gen)": { "baseClass": "TTB" },
      "Camaro ZL1 (6th Gen 1LE)": { "baseClass": "TTB*" },
      "Camaro SS (5th Gen)": { "baseClass": "TTD" },
      "Camaro SS (6h Gen)": { "baseClass": "TTC" },
      "Camaro SS (6h Gen 1LE)": { "baseClass": "TTC*" },
      "Corvetts C5/C6": { "baseClass": "TTC" },
      "Corvetts C6 Z06 & GS": { "baseClass": "TTC*" },
      "Corvetts C7 Z06": { "baseClass": "TTB*" },
      "Corvetts C5/C6": { "baseClass": "TTC" },
      "Corvetts C6 Z06 & GS": { "baseClass": "TTC*" },
      "Corvetts C7 ": { "baseClass": "TTB" },
      "Corvetts C7 Z06": { "baseClass": "TTB*" },
      "Corvetts C7 ZR1": { "baseClass": "TTA" },
      "Corvetts C8 (inc. Z51)": { "baseClass": "TTB" },
      "Corvetts C8 Z06": { "baseClass": "TTA*" }
    },
    "Dodge": {
      "Viper": { "baseClass": "TTB" },
      "Viper ACR": { "baseClass": "TTA" }
    },
    "Ferrari": {
      "458": { "baseClass": "TTB*" },
      "488": { "baseClass": "TTA*" },
      "F430": { "baseClass": "TTB" }
    },
    "Fiat": {
      "124 & 128": { "baseClass": "TTE" }
    },
    "Ford": {
      "Mustang GT V8 (5th Gen)": { "baseClass": "TTD" },
      "Mustang GT V8 (6th Gen)": { "baseClass": "TTD*" },
      "Mustang GT350": { "baseClass": "TTB*" },
      "Mustang GT350R": { "baseClass": "TTA" },
      "Mustang GT500": { "baseClass": "TTA" },
      "Fiesta ST ('14)(turbo)": { "baseClass": "TTS*" },
      "Focus RS": { "baseClass": "TTD" },
      "Focus ST 2.0L ": { "baseClass": "TTS*" },
      "Mustang 2.3L turbo ('15)": { "baseClass": "TTD" },
      "Mustang Boss 302": { "baseClass": "TTC" }
    },
    "Honda": {
      "Civic & SI  (Pre-'05)": { "baseClass": "TTS" },
      "Civic & SI  (‘06 -Present)": { "baseClass": "TTS*" },
      "CTR FK8 & FL5": { "baseClass": "TTD*" },
      "S2000 ('00-'08)": { "baseClass": "TTE" },
      "S2000 CR (2.2L)('08)": { "baseClass": "TTE*" }
    },
    "Hyundai": {
      "Elantra/Kona/Veloster  N": { "baseClass": "TTE" },
      "Elantra 2.0L ('00-'08)": { "baseClass": "TTS" },
      "Genesis 3.8L ": { "baseClass": "TTS*" }
    },
    "Infiniti": {
      "G35 ": { "baseClass": "TTS*" },
      "G37": { "baseClass": "TTE" }
    },
    "Lamborghini": {
      "Huracan": { "baseClass": "TTA" },
      "Gallardo": { "baseClass": "TTA" },
      "Aventador": { "baseClass": "TTA" }
    },
    "Lexus": {
      "LC500": { "baseClass": "TTD" },
      "IS F ('08-'present)": { "baseClass": "TTD" },
      "RCF": { "baseClass": "TTD" },
      "IS350": { "baseClass": "TTS*" }
    },
    "Lotus": {
      "Elise": { "baseClass": "TTD" },
      "Evora": { "baseClass": "TTE*" },
      "Evora 400": { "baseClass": "TTC" },
      "Emira": { "baseClass": "TTC" },
      "Exige ": { "baseClass": "TTC" }
    },
    "Maserati": { "GranTurismo": { "baseClass": "TTD" } },
    "Mazda": {
      "RX-7 FB & FC": { "baseClass": "TTS" },
      "RX-7 FD": { "baseClass": "TTE" },
      "RX-8 ": { "baseClass": "TTE" },
      "Mazdaspeed3": { "baseClass": "TTE" },
      "NA": { "baseClass": "TTS" },
      "NB": { "baseClass": "TTS" },
      "NB (mazdaspeed)": { "baseClass": "TTS*" },
      "NC": { "baseClass": "TTS*" },
      "ND": { "baseClass": "TTE" }
    },
    "Mclaren": {
      "MP4-12C": { "baseClass": "TTA" },
      "570S": { "baseClass": "TTA" },
      "600LT": { "baseClass": "TTA" },
      "650S": { "baseClass": "TTA" },
      "765LT": { "baseClass": "TTX" },
      "Senna": { "baseClass": "TTX" }
    },
    "Mercedes": {
      "CLA45 AMG": { "baseClass": "TTD*" },
      "C63 S AMG": { "baseClass": "TTC*" },
      "C63 AMG": { "baseClass": "TTC" },
      "AMG GT R Black Series": { "baseClass": "TTX" },
      "AMG GT R": { "baseClass": "TTA" },
      "AMG GT S": { "baseClass": "TTB" }
    },
    "Mitsubishi": {
      "Lancer Evo VIII ": { "baseClass": "TTD" },
      "Lancer Evo VII": { "baseClass": "TTD" },
      "Lancer Evo X ": { "baseClass": "TTD*" }
    },
    "Nissan": {
      "350Z ": { "baseClass": "TTC*" },      
      "350Z Nismo ('07-'08)": { "baseClass": "TTE" },
      "370Z ": { "baseClass": "TTD" },
      "GT-R": { "baseClass": "TTA" }
    },
    "Pontiac": { "GTO ": { "baseClass": "TTC" } },
    "Porsche": {
      "996": { "baseClass": "TTC" },
      "997": { "baseClass": "TTC" },
      "997 GT3": { "baseClass": "TTB" },
      "997 Turbo": { "baseClass": "TTB" },
      "997 GT3 RS": { "baseClass": "TTA" },
      "991 All Models": { "baseClass": "TTB" },
      "991 GT3": { "baseClass": "TTA" },
      "991 GT3RS, GT2RS": { "baseClass": "TTX" },
      "992 All Models": { "baseClass": "TTB" },
      "992 GT3 & RS": { "baseClass": "TTX" },
      "981/982 Cayman/Boxster": { "baseClass": "TTC" },
      "981/982/718 GTS": { "baseClass": "TTC" },
      "981/982/718 GT4": { "baseClass": "TTC*" },
      "986/987 Cayman/Boxster": { "baseClass": "TTD" },
      "Cayman GT4 RS": { "baseClass": "TTA" },
      "Cayman R 3.4L": { "baseClass": "TTD*" }
    },
"Scion": {
  "FR-S Coupe ('13-'16)": { "baseClass": "TTS" } },
    "Subaru": {
      "BRZ Coupe ('13-'16)": { "baseClass": "TTS" },
      "BRZ 2.4": { "baseClass": "TTE*" },
      "WRX": { "baseClass": "TTE" },
      "STi": { "baseClass": "TTD" },
    },
    "Toyota": {
      "MR S/2": { "baseClass": "TTS" },
      "Supra 3.0": { "baseClass": "TTC" },
      "Supra 2.0": { "baseClass": "TTD" },
      "GR 86 2.4": { "baseClass": "TTE*" },
      "GR Corolla": { "baseClass": "TTC" }
    },
    "Tesla": {
      "Model 3 SM": { "baseClass": "TTD" },
      "Model 3 DM": { "baseClass": "TTC" },
      "Model S DM": { "baseClass": "TTB" },
      "Model S Plaid": { "baseClass": "TTA" }
    },
    "VW": {
      "Golf R": { "baseClass": "TTD" },
      "GTI": { "baseClass": "TTE" },
      "Jetta GLI": { "baseClass": "TTE" }
    }
  },
  "engine": [
    "Aftermarket Air Intake (1)",
    "Cat-back Exhaust  (2)",
    "Header/Downpipe  (2)",
    "Removal of Catalytic Converter  (3)",
    "Aftermarket Turbocharger/Supercharger  (5)",
    "NA Vehicle ECU Tuning  (3)",
    "FI Vehicle ECU Tuning  (6)"
  ],
  "drivetrain": [
    "Aftermarket driveshaft (1)",
    "Aftermarket LSD  (2)",

  ],
  "suspension": [
    "Lowering Springs (1)",
    "Aftermarket or modified Front Swaybar (1)",
    "Aftermarket or modified Rear Swaybar (1)",
    "Aftermarket Front suspension arms (ie. control arm, toe arm, upper/lower trailing arm) (2)",
    "Aftermarket Rear suspension arms(ie. control arm, toe arm, upper/lower trailing arm) (2)",
    "Coilover 1-Way (3)",
    "Coilover 2-Way (4)",
    "Coilover 3-Way (5)",
    "Coilover 4-Way (6)",
  ],
  "chassis": [
    "Paragon Performance BBK  (0)",
    "Big Brake Kit (2)"
  ],
  "areo": [
    "OEM Aero (Aero components come from Manufacturer or OEM optioned) (0)",
    "Front Aero (Extended front lip, Spliter, Airdam, Non OEM hood vents, Canards,) (3)",
    "Rear Aero A (Non-OEM Wing, Spoiler, ducktail and etc) (3)",
    "Rear Aero B (Non-OEM Diffuser, Flat Bottom) (1)"
  ],
  "tires": [
    "Original OEM equipped tires (0)",
    "140-200TW (2)",
    "Super 200TW (A052,CRS V2,Hoosier TrackAttack) (3)",
    "40-100TW (5)",
    "Non DOT Slicks (10)"
  ],
  "weight": [
    "Interior A (Door panel, roof liner, heater core, trim panel) (1)",
    "Interior B (carpet, dashboard) (1)",
    "Interior C (Seats, Belts, Airbag. Excl. Driver bucket seat, Must be FIA Approved) (2)",
    "Exterior A (Removal or replace OEM body panel with non OEM intended replacement. ie. carbon fiber replacements) (1)",
    "Exterior B (Removal of convertible tops, No point if a hardtop is in place) (1)",
    "Exterior C (Sunroof/moonroof delete) (1)",
    "Exterior D (lexan glass, Excel. Hardtop glass) (1)",
    "Roll Bar 4 points or less (-1)",
    "Roll Bar 6 points or more (-2)"
  ],
  "classesScore": {
    "TTX": 84,
    "TTA": 70,
    "TTB": 56,
    "TTC": 42,
    "TTD": 28,
    "TTE": 14,
    "TTS": 0
  },
  "classes": ["TTS", "TTE", "TTD", "TTC", "TTB", "TTA", "TTX"],
  "categories": [
    { "name": "Move up 1 class", "score": "14 - 27 points" },
    { "name": "Move up 2 class", "score": "28 - 41 points" },
    { "name": "Move up 3 class", "score": "42 - 55 points" },
    { "name": "Move up 4 class", "score": "56 - 69 points" },
    { "name": "Move up 5 class", "score": "70 - 83 points" },
    { "name": "Move up 6 class", "score": "84 - 99 points" }
  ],
  "scoreLookupTable": {
    "engine": {
      "Aftermarket Air Intake (1)": 1,
      "Cat-back Exhaust  (2)": 1,
      "Header/Downpipe  (2)": 2,
      "Removal of Catalytic Converter  (3)": 3,
      "Aftermarket Turbocharger/Supercharger  (5)": 5,
      "NA Vehicle ECU Tuning  (3)": 3,
      "FI Vehicle ECU Tuning  (6)": 6
    },
    "drivetrain": {
      "Aftermarket driveshaft (1)": 1,
      "Aftermarket LSD  (2)": 2,
    },
    "suspension": {
      "Lowering Springs (1)": 1,
      "Aftermarket or modified Front Swaybar (1)": 1,
      "Aftermarket or modified Rear Swaybar (1)": 1,
      "Aftermarket Front suspension arms (ie. control arm, toe arm, upper/lower trailing arm) (2)": 2,
      "Aftermarket Rear suspension arms(ie. control arm, toe arm, upper/lower trailing arm) (2)": 2,
      "Coilover 1-Way (3)": 3,
      "Coilover 2-Way (4)": 4,
      "Coilover 3-Way (5)": 5,
      "Coilover 4-Way (6)": 6,
    },
    "areo": {
      "OEM Aero (Aero components come from Manufacturer or OEM optioned) (0)": 0,
      "Front Aero (Extended front lip, Spliter, Airdam, Non OEM hood vents, Canards,) (3)": 3,
      "Rear Aero A (Non-OEM Wing, Spoiler, ducktail and etc) (3)": 3,
      "Rear Aero B (Non-OEM Diffuser, Flat Bottom) (1)": 1
    },
    "tires": {
      "Original OEM equipped tires (0)": 0,
      "140-200TW (2)": 2,
      "Super 200TW (A052,CRS V2,Hoosier TrackAttack) (3)": 3,
      "40-100TW (5)": 5,
      "Non DOT Slicks (10)": 10
    },
    "weight": {
      "Interior A (Door panel, roof liner, heater core, trim panel) (1)": 0,
      "Interior B (carpet, dashboard) (1)": 1,
      "Interior C (Seats, Belts, Airbag. Excl. Driver bucket seat, Must be FIA Approved) (2)": 2,
      "Exterior A (Removal or replace OEM body panel with non OEM intended replacement. ie. carbon fiber replacements) (1)": 1,
      "Exterior B (Removal of convertible tops, No point if a hardtop is in place) (1)": 1,
      "Exterior C (Sunroof/moonroof delete) (1)": 1,
      "Exterior D (lexan glass, Excel. Hardtop glass) (1)": 1,
      "Roll Bar 4 points or less (-1)": 1,
      "Roll Bar 6 points or more (-2)": 1
    }
  }
}))(window);
