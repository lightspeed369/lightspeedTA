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
      "R8 (v10)": { "baseClass": "TTC*" }
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
      "M235i": { "baseClass": "TTE" },
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
      "CTR FK8 & FL5": { "baseClass": "TTD" },
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
      "ND": { "baseClass": "TTS*" }
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
      "CLA45 AMG": { "baseClass": "TTC" },
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
      "997 Turbo AWD": { "baseClass": "TTB" },
      "997 GT3 RS": { "baseClass": "TTA" },
      "991 All Models": { "baseClass": "TTB" },
      "991 GT3": { "baseClass": "TTA" },
      "991 GT3RS, GT2RS": { "baseClass": "TTX" },
      "992 All Models": { "baseClass": "TTB" },
      "992 GT3 & RS": { "baseClass": "TTX" },
      "981/982/718": { "baseClass": "TTC" },
      "981/982/718 GT4 & GTS": { "baseClass": "TTC*" },
      "981/982": { "baseClass": "TTD" },
      "Cayman GT4 RS": { "baseClass": "TTA" },
      "Cayman R 3.4L": { "baseClass": "TTD" }
    },
"Scion": {
  "FR-S Coupe ('13-'16)": { "baseClass": "TTS" } },
    "Subaru": {
      "BRZ Coupe ('13-'16)": { "baseClass": "TTS" },
      "BRZ 2.4": { "baseClass": "TTE" },
      "WRX": { "baseClass": "TTE" },
      "STi": { "baseClass": "TTD" },
    },
    "Toyota": {
      "MR S/2": { "baseClass": "TTS" },
      "Supra 3.0": { "baseClass": "TTC" },
      "Supra 2.0": { "baseClass": "TTD" },
      "GR 86 2.4": { "baseClass": "TTE" },
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
    "Aftermarket Air Intake (2)",
    "Cat-back Exhaust  (2)",
    "Header/Downpipe  (3)",
    "Removal of Catalytic Converter  (3)",
    "Aftermarket Turbocharger/Supercharger  (5)",
    "Piggyback Tuner/Chip  (5)",
    "NA Vehicle ECU Tuning  (3)",
    "FI Vehicle ECU Tuning  (7)"
  ],
  "drivetrain": [
    "Aftermarket LSD  (2)",
    "Modification/upgrade from a fixed to a floating rear axle (3)"
  ],
  "suspension": [
    "Lowering Springs (1)",
    "Aftermarket Front Swaybar (1)",
    "Aftermarket Rear Swaybar (1)",
    "Aftermarket Front Control arms (2)",
    "Aftermarket Rear Control arms (2)",
    "Coilover 1-Way (3)",
    "Coilover 2-Way (5)",
    "Coilover 3-Way (7)"
  ],
  "chassis": [
    "Big Brake Kit (2)"
  ],
  "areo": [
    "Front Aero (Spliter, Airdam, and/or Canards (3)",
    "Rear Aero (Wing, Diffuser and etc) (5)",
    "Add or fabricate flat bottom/belly tray (5)"
  ],
  "tires": [
    "140-200TW (2)",
    "100 and lower TW (2)",
    "Racing/DOT Slicks (14)"
  ],
  "weight": [
    "Interior weight reduction (Applies even if you remove single component. Excluding Driver Bucket seat/Steering wheel) (4)",
    "Exterior weight reduction (Applies even if you remove single component) (4)"
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
      "Aftermarket Air Intake (2)": 2,
      "Cat-back Exhaust  (2)": 2,
      "Header/Downpipe  (3)": 3,
      "Removal of Catalytic Converter  (3)": 3,
      "Aftermarket Turbocharger/Supercharger  (5)": 5,
      "Piggyback Tuner/Chip  (5)": 5,
      "NA Vehicle ECU Tuning  (3)": 3,
      "FI Vehicle ECU Tuning  (7)": 7
    },
    "drivetrain": {
      "Aftermarket LSD  (2)": 3,
      "Modification/upgrade from a fixed to a floating rear axle (3)": 3
    },
    "suspension": {
      "Lowering Springs (1)": 1,
      "Aftermarket Front Swaybar (1)": 1,
      "Aftermarket Rear Swaybar (1)": 1,
      "Aftermarket Front Control arms (2)": 2,
      "Aftermarket Rear Control arms (2)": 2,
      "Coilover 1-Way (3)": 3,
      "Coilover 2-Way (5)": 5,
      "Coilover 3-Way (7)": 7
    },
    "chassis": {
      "Big Brake Kit (2)": 2
    },
    "areo": {
      "Front Aero (Spliter, Airdam, and/or Canards (3)": 3,
      "Add or fabricate flat bottom/belly tray (5)": 5,
      "Rear Aero (Wing, Diffuser and etc) (5)": 5
    },
    "tires": {
      "140-200TW (2)": 2,
      "100 and lower TW (5)": 5,
      "Racing/DOT Slicks (14)": 14
    },
    "weight": {
      "Interior weight reduction (Applies even if you remove single component. Excluding Driver Bucket seat/Steering wheel) (4)": 4,
      "Exterior weight reduction (Applies even if you remove single component) (4)": 4
    }
  }
}))(window);
