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
      "Integra 1.6L ('86-'89)": { "baseClass": "TTE" },
      "RSX-S": { "baseClass": "TTD" }
    },
    "Alfa Romeo": {
      "4C": { "baseClass": "TTC" },
      "Giulia Quadrifoglio": { "baseClass": "TTB*" }
    },
    "Audi": {
      "RS 4 (4.2L) (AWD)('07)": { "baseClass": "TTB*" },
      "TT RS ": { "baseClass": "TTA*" },
      "TT": { "baseClass": "TTB" },
      "R8 (v8)": { "baseClass": "TTA**" },
      "R8 (v10)": { "baseClass": "TTU" }
    },
    "BMW": {
      "M3 (E90, E92, E93)": { "baseClass": "TTB**" },
      "M3 / M4 (F8X) ('15)": { "baseClass": "TTA" },
      "M3 / M4 (G8X) ('20)": { "baseClass": "TTA*" },
      "M6 ": { "baseClass": "TTA" },
      "MINI Cooper S ('05-'10)": { "baseClass": "TTE**" },
      "MINI Cooper Works ": { "baseClass": "TTD*" },
      "Z3 ": { "baseClass": "TTD" },
      "Z4 ": { "baseClass": "TTD**" },
      "128i Coupe ('08-'09)": { "baseClass": "TTD" },
      "135i Coupe ('08-12)": { "baseClass": "TTC**" },
      "1 M Coupe (3.0L turbo)": { "baseClass": "TTB**" },
      "E30 Non M": { "baseClass": "TTE" },
      "E36 Non M": { "baseClass": "TTE*" },
      "E46 Non M": { "baseClass": "TTD" },
      "328i ('07-'12) (3.0L 230 hp)": { "baseClass": "TTE*" },
      "328i ('12-'14) (2.0L turbo)": { "baseClass": "TTD" },
      "330 ('01-'06)(225hp)": { "baseClass": "TTE*" },
      "330 ('06)(255hp)": { "baseClass": "TTD" },
      "335i ('07-'13) (3.0L turbo)": { "baseClass": "TTC**" },
      "M2": { "baseClass": "TTA" },
      "M2 Competition / CS": { "baseClass": "TTA*" },
      "M235i Coupe ('14-'15)(3.0L)": { "baseClass": "TTC**" },
      "M3 (E30)": { "baseClass": "TTE*" },
      "M3 (E36)": { "baseClass": "TTD*" },
      "M3 (E46)": { "baseClass": "TTC**" },
      "M3 (E9X)": { "baseClass": "TTB*" }
    },
    "Cadillac": {
      "ATSV": { "baseClass": "TTA" },
      "CTS-V Gen 1": { "baseClass": "TTC**" },
      "CTS-V Gen 2": { "baseClass": "TTA*" },
      "CTS-V Gen 3": { "baseClass": "TTA**" }
    },
    "Chevrolet": {
      "Camaro ZL1&Z28  (5th Gen)": { "baseClass": "TTA*" },
      "Camaro ZL1 (6th Gen)": { "baseClass": "TTA**" },
      "Camaro ZL1 (6th Gen 1LE)": { "baseClass": "TTU" },
      "Camaro SS (5th Gen incl 1LE)": { "baseClass": "TTB*" },
      "Camaro SS (6h Gen)": { "baseClass": "TTB**" },
      "Camaro SS (6h Gen) 1LE": { "baseClass": "TTA" },
      "Corvette C5 (inc. Z06)": { "baseClass": "TTA" },
      "Corvette C6 ": { "baseClass": "TTA" },
      "Corvette C6 Z06 & GS": { "baseClass": "TTA*" },
      "Corvette C7 Z06": { "baseClass": "TTU" },
      "Corvette C7 (incl Z51 & GS)": { "baseClass": "TTA*" },
      "Corvette C7 ZR1": { "baseClass": "TTU*" },
      "Corvette C8 / C8 Z51": { "baseClass": "TTA*" }
    },
    "Dodge": {
      "Viper": { "baseClass": "TTA**" },
      "Viper ACR": { "baseClass": "TTU*" }
    },
    "Ferrari": {
      "355": { "baseClass": "TTA" },
      "360": { "baseClass": "TTA" },
      "430": { "baseClass": "TTU" },
      "458": { "baseClass": "TTU" },
      "488": { "baseClass": "TTU" },
      "360 Challenge": { "baseClass": "TTU" },
      "Enzo": { "baseClass": "TTU" },
      "F430": { "baseClass": "TTU" }
    },
    "Fiat": {
      "124 & 128": { "baseClass": "TTE" },
      "500 Abarth (1.4L T)('12-'13)(USA)": { "baseClass": "TTE*" }
    },
    "Ford": {
      "Mustang GT V8 (5th Gen)": { "baseClass": "TTB" },
      "Mustang GT V8 (6th Gen)": { "baseClass": "TTB*" },
      "Mustang GT350": { "baseClass": "TTA**" },
      "Mustang GT350R": { "baseClass": "TTU" },
      "Mustang GT500 (S550)": { "baseClass": "TTU" },
      "Mustang GT500 (S197)": { "baseClass": "TTU" },
      "Fiesta ST ('14)(turbo)": { "baseClass": "TTE**" },
      "Focus RS": { "baseClass": "TTB*" },
      "Focus ST 2.0L ": { "baseClass": "TTD**" },
      "GT": { "baseClass": "TTU" },
      "Mustang 2.3L turbo ('15)": { "baseClass": "TTB" },
      "Mustang Boss 302": { "baseClass": "TTA" }
    },
    "Honda": {
      "Civic & SI  (Pre-'05)": { "baseClass": "TTE" },
      "Civic & SI  (‘06 -Present)": { "baseClass": "TTD*" },
      "CTR(‘17-Present)": { "baseClass": "TTC" },
      "Prelude VTEC ('93-'01)": { "baseClass": "TTE*" },
      "S2000 ('00-'08)": { "baseClass": "TTD" },
      "S2000 (K Swap)": { "baseClass": "TTD*" },
      "S2000 CR (2.2L)('08)": { "baseClass": "TTD**" }
    },
    "Hyundai": {
      "Veloster 1.6L Turbo ('13-Present)": { "baseClass": "TTE" },
      "Elantra/Veloster  N": { "baseClass": "TTC" },
      "Elantra 2.0L ('00-'08)": { "baseClass": "TTE" },
      "Genesis 3.8L ": { "baseClass": "TTE*" }
    },
    "Infiniti": {
      "G35 ": { "baseClass": "TTD**" },
      "G37": { "baseClass": "TTC**" }
    },
    "Lamborghini": {
      "Diablo VT": { "baseClass": "TTU" },
      "Huracan": { "baseClass": "TTU" },
      "Gallardo": { "baseClass": "TTU" },
      "Aventador": { "baseClass": "TTU" }
    },
    "Lexus": {
      "IS250 ('06-'08)(6sp man.)": { "baseClass": "TTE" },
      "IS250 (AWD)('06-'08)": { "baseClass": "TTE*" },
      "IS F ('08-'present)": { "baseClass": "TTB*" },
      "IS300": { "baseClass": "TTE*" }
    },
    "Lotus": {
      "Elise ('05-'07)": { "baseClass": "TTC**" },
      "Evora ('10-'14)": { "baseClass": "TTC**" },
      "Exige ": { "baseClass": "TTA" }
    },
    "Maserati": { "GranTurismo": { "baseClass": "TTB*" } },
    "Mazda": {
      "RX-7 FB&  FC": { "baseClass": "TTC**" },
      "RX-7 FD": { "baseClass": "TTD" },
      "RX-8 ": { "baseClass": "TTC" },
      "Mazdaspeed3": { "baseClass": "TTD*" },
      "Mazdaspeed6 ": { "baseClass": "TTD*" },
      "NA": { "baseClass": "TTE" },
      "NB": { "baseClass": "TTE" },
      "NB (mazdaspeed)": { "baseClass": "TTE*" },
      "NC": { "baseClass": "TTE*" },
      "ND": { "baseClass": "TTE**" }
    },
    "Mclaren": {
      "MP4-12C": { "baseClass": "TTU" },
      "570S": { "baseClass": "TTU" },
      "600LT": { "baseClass": "TTU*" },
      "650S": { "baseClass": "TTU*" },
      "Senna": { "baseClass": "TTX" }
    },
    "Mercedes": {
      "CLA45 AMG": { "baseClass": "TTA" },
      "C43 AMG ('98-'00)": { "baseClass": "TTC" },
      "C55 AMG ('05-'06)": { "baseClass": "TTC**" },
      "CL55 AMG (5.4L)('01-'02)": { "baseClass": "TTC" },
      "CL65 AMG ('06)": { "baseClass": "TTA" },
      "CLK55 AMG ('04-'06)": { "baseClass": "TTC" },
      "CLK63 AMG ('07)": { "baseClass": "TTA" },
      "E55 AMG ('03-'06)": { "baseClass": "TTB*" },
      "E55 AMG ('99-'02)": { "baseClass": "TTC*" },
      "E63 AMG ('07)": { "baseClass": "TTA" },
      "SL55 AMG ('03-'06)": { "baseClass": "TTB*" },
      "SL55 AMG ('07)": { "baseClass": "TTB*" },
      "SL65 AMG ('07)": { "baseClass": "TTA" },
      "SLK 320 ('01-'04)": { "baseClass": "TTE*" },
      "SLK32 AMG ('02-'04)": { "baseClass": "TTB*" },
      "SLK 350 ('05-'08)": { "baseClass": "TTC" },
      "SLK55 AMG ('05-'07)": { "baseClass": "TTB" }
    },
    "Mitsubishi": {
      "Lancer Evo VIII ": { "baseClass": "TTB" },
      "Lancer Evo VII": { "baseClass": "TTB*" },
      "Lancer Evo X ": { "baseClass": "TTB**" }
    },
    "Nissan": {
      "350Z Nismo ('07-'08)": { "baseClass": "TTB" },
      "370Z ": { "baseClass": "TTB**" },
      "370Z Nismo ('09)": { "baseClass": "TTA" },
      "GT-R ('09+)": { "baseClass": "TTU" },
      "350Z ": { "baseClass": "TTC*" }
    },
    "Pontiac": { "GTO ": { "baseClass": "TTC*" } },
    "Porsche": {
      "959": { "baseClass": "TTA" },
      "964": { "baseClass": "TTD*" },
      "996": { "baseClass": "TTB**" },
      "997": { "baseClass": "TTA" },
      "997 GT3": { "baseClass": "TTA**" },
      "997 Turbo AWD": { "baseClass": "TTA*" },
      "997 GT3 RS": { "baseClass": "TTU" },
      "991 All Models": { "baseClass": "TTA**" },
      "991 GT3": { "baseClass": "TTU" },
      "991 GT3RS": { "baseClass": "TTU*" },
      "991 GT2RS": { "baseClass": "TTU**" },
      "992 All Models": { "baseClass": "TTA*" },
      "992 GT3": { "baseClass": "TTU*" },
      "718 Cayman/Boxster": { "baseClass": "TTA*" },
      "981 Cayman/Boxster": { "baseClass": "TTA" },
      "Cayman GT4": { "baseClass": "TTA**" },
      "Cayman GTS": { "baseClass": "TTA" },
      "Cayman/Boxster 986  S": { "baseClass": "TTC*" },
      "Cayman/Boxster 986 Non S": { "baseClass": "TTC" },
      "Carrera GT": { "baseClass": "TTU" },
      "Cayman/Boxster 987 Non S": { "baseClass": "TTB*" },
      "Cayman/Boxster 987  S": { "baseClass": "TTB**" },
      "Cayman R 3.4L ('11-'12)": { "baseClass": "TTA" }
    },
    "Scion": { "FR-S Coupe ('13-'16)": { "baseClass": "TTD" } },
    "Subaru": {
      "BRZ Coupe ('13-'16)": { "baseClass": "TTD" },
      "BRZ 2.4": { "baseClass": "TTD*" },
      "WRX 2.0L ": { "baseClass": "TTB" },
      "WRX 2.5L ": { "baseClass": "TTD*" },
      "WRX STi ('04-'07)(AWD)": { "baseClass": "TTB" },
      "WRX STI ('08-'present)(AWD)": { "baseClass": "TTB**" }
    },
    "Toyota": {
      "Celica": { "baseClass": "TTE*" },
      "MR S/2": { "baseClass": "TTE*" },
      "MR2 Turbo": { "baseClass": "TTE**" },
      "Solara 2.0L ('21)": { "baseClass": "TTB*" },
      "Supra 3.0 L ('20)": { "baseClass": "TTA" },
      "GR 86 2.4": { "baseClass": "TTD*" }
    },
    "Tesla": {
      "Model 3 SM": { "baseClass": "TTC" },
      "Model 3 DM": { "baseClass": "TTB" },
      "Model S DM": { "baseClass": "TTB" },
      "Model S Plaid": { "baseClass": "TTA" }
    },
    "VW": {
      "Golf R": { "baseClass": "TTD" },
      "GTI 2.0L ": { "baseClass": "TTD" },
      "Jetta 2.0L turbo GLI ('12-'15)": { "baseClass": "TTE*" }
    }
  },
  "engine": [
    "Aftermarket computer system natually aspirated (3)",
    "Aftermarket computer system forced induction (10)",
    "Modification of the OEM air intake/box (1)",
    "Changing air filter location (1)",
    "Air piping to turbo/supercharger/intercooler/throttle body/cab (1)",
    "Air piping to hood/fascia/fender air inlets/outlets or vents  (1)",
    "Non-OEM, deleted, or modified/ported throttle body (2)",
    "Independent throttle bodies (4)",
    "Non-OEM or modified carburetor, fuel rail, fuel injectors, fuel pump(s), and/or fuel pressure regulator (2)",
    "Non-OEM, modified/ported, or deleted intake manifold: 4 cyl (1)",
    "Non-OEM, modified/ported, or deleted intake manifold: 6 cyl (2)",
    "Non-OEM, modified/ported, or deleted intake manifold: 8 cyl (3)",
    "Water injection system (alcohol-water mixtures are not permitted) (6)",
    "Replacement pulleys (other than for supercharger) or non-electrical fan removal (1)",
    "Replacement pulley for OEM supercharger or replacement of any pulley that affects OEM supercharger speed (4)",
    "Aftermarket boost controller or modification/alteration of OEM vacuum lines that serve to function as a boost controller (4)",
    "Aftermarket or modified wastegate actuator, wastegate, or vacuum line(s) that serve to control the wastegate actuator function or increase peak boost (3)",
    "Add aftermarket intercooler (7)",
    "Non-OEM or modified intercooler (4)",
    "Modified or non-OEM camshaft(s), rocker arms, push rods, lifters, or cam timing gears (6)",
    "Valve size change, modified, ported or polished OEM head (6)",
    "De-stroked engine (4)",
    "Added dry sump oil system (7)",
    "Modification, porting, or replacement of the BMT exhaust manifold or header(s) (5)",
    "Any modification to the OEM exhaust piping and/or catalytic converter (3)",
    "Non-OEM or modified resonator(s) or muffler(s) only (no exhaust piping modifications)  (1)"
  ],
  "drivetrain": [
    "Double clutch transmissions with altered gear ratios  (6)",
    "Modify number of forward gears in transmission or altered gear ratios  (3)",
    "Added paddle/electronic shift  (3)",
    "Added limited slip differential or welded/locked differential  (3)",
    "Changed or modified limited slip differential (or welded/locked OEM LSD) (1)",
    "Added traction control (3)",
    "Relocation of engine/transmission between 1 and 10 inches of the OEM location (7)",
    "Modification/upgrade from a fixed to a floating rear axle (3)"
  ],
  "suspension": [
    "Non-OEM shocks/struts/dampers with an external reservoir or more than two ranges of adjustment (8)",
    "Non-OEM shocks/struts/dampers with a “Piggy Back” external reservoir (5)",
    "Non-OEM shocks/struts/dampers with shaft diameter 40mm or greater (5)",
    "Non-OEM or modified/re-valved shocks/struts/dampers (3)",
    "Changing the mounting orientation/design of the OEM shock and/or spring perch in order to invert the front shocks/struts (1)",
    "Non-OEM or modified coil springs, bump stops, leaf springs/spacers/brackets, or torsion bars (2)",
    "Conversion of torsion bar/leaf spring to coil spring and strut/shock suspension (2)",
    "Add, replace, remove, or modify anti-roll bars (“sway” bars—front, rear, or both) or end links (2)",
    "Non-OEM driver/cockpit adjustable sway bar or suspension settings (4)",
    "Replace, modify, or remove control arms or RWD/AWD rear trailing arms (4)",
    "Non-OEM rear control arms on FWD vehicles (1)",
    "Non-OEM rear trailing arms on FWD vehicles (1)",
    "Using the alternate control arm mounting location on cars equipped OEM with multiple choices (6)",
    "Relocation of front suspension mounting points (6)",
    "Relocation of rear suspension mounting points (6)",
    "Front steering tie rod bump steer modifications or shimming of the steering rack (2)",
    "Alteration of ball joints/dive angles (2)",
    "Add panhard rod or Watts link (4)",
    "Replace or modify a OEM panhard rod or Watt’s link (2)",
    "Add torque arm (4)",
    "Replace or modify a OEM torque arm (2)",
    "Add a third link to the rear suspension that does not penetrate the floor (4)",
    "Metallic and/or spherical-design replacement suspension bushings (3)"
  ],
  "chassis": [
    "Non-OEM, modified, or relocated brake calipers and/or brake caliper brackets and/or brake rotor diameter (2)",
    "Add front lower stress/arm brace (two attachment points maximum) (1)",
    "Add a third or fourth attachment point to a front or rear strut tower bar (1)",
    "Add or modify other chassis stiffening devices or fabricated parts (3)",
    "Increase in track width greater than four (4) inches due to non-OEM axles, control arms, brake rotors/hats, wheel spacers, hubs, wheel offset, and/or camber adjustment (6)"
  ],
  "areo": [
    "Add, replace, or modify front fascia and/or air dam (3)",
    "Add, replace or modify a single flat, horizontal, front splitter (3)",
    "Add or modify canards/winglets (includes portions of an added/modified/replaced fascia that provide a downward force (2)",
    "Add, replace, or modify rear wing and/or spoiler (4)",
    "Add or fabricate flat bottom/belly tray (5)",
    "Add rear diffuser (2)",
    "Replace or modify OEM rear diffuser, rear bumper cover, or rear “fascia” (1)",
    "Add rear vertical panels in any location (2)",
    "Add or modify side skirts (2)",
    "Add vortex generator to roof, rear window, or rear deck lid (1)",
    "Removal of the front windshield/windshield frame (7)",
    "Front side window frame air dams/diverters (2)",
    "Add a non-OEM hardtop to a convertible that is not the identical shape and size of either the OEM or OEM option hardtop for that car model (5)"
  ],
  "tires": [
    "200TW+ NOT INCLUDING SUPER 200 TW LIST",
    "SUPER 200TW",
    "41TW - 180TW",
    "Dot/Non-Dot Slicks"
  ],
  "weight": [
    "5 lbs (1)",
    "20 lbs (2)",
    "35 lbs (3)",
    "50 lbs (4)",
    "65 lbs (5)",
    "80 lbs (6)",
    "95 lbs (7)",
    "110 lbs (8)",
    "125 lbs (9)",
    "140 lbs (10)",
    "155 lbs (11)",
    "170 lbs (12)",
    "185 lbs (13)",
    "200 lbs (14)",
    "215 lbs (15)",
    "230 lbs (16)",
    "245 lbs (17)",
    "260 lbs (18)",
    "275 lbs (19)",
    "290 lbs (20)",
    "305 lbs (21)",
    "320 lbs (22)",
    "335 lbs (23)",
    "350 lbs (24)",
    "365 lbs (25)",
    "380 lbs (26)",
    "395 lbs (27)",
    "410 lbs (28)",
    "425 lbs (29)",
    "440 lbs (30)",
    "455 lbs (31)",
    "470 lbs (32)",
    "485 lbs (33)",
    "500 lbs (34)"
  ],
  "classesScore": {
    "TTX": 140,
    "TTSU": 120,
    "TTU": 100,
    "TTA": 80,
    "TTB": 60,
    "TTC": 40,
    "TTD": 20,
    "TTE": 0
  },
  "classes": ["TTE", "TTD", "TTC", "TTB", "TTA", "TTU", "TTSU", "TTX"],
  "categories": [
    { "name": "Move up 1 class", "score": "20 - 39 points" },
    { "name": "Move up 2 class", "score": "40 - 59 points" },
    { "name": "Move up 3 class", "score": "60 - 79 points" },
    { "name": "Move up 4 class", "score": "80 - 99 points" },
    { "name": "Move up 5 class", "score": "100 - 119 points" },
    { "name": "Move up 6 class", "score": "120 - 139 points" },
    { "name": "Move up 7 class", "score": "140 - 159 points" }
  ],
  "scoreLookupTable": {
    "engine": {
      "Aftermarket computer system natually aspirated (3)": 3,
      "Aftermarket computer system forced induction (10)": 10,
      "Modification of the OEM air intake/box (1)": 1,
      "Changing air filter location (1)": 1,
      "Air piping to turbo/supercharger/intercooler/throttle body/cab (1)": 1,
      "Air piping to hood/fascia/fender air inlets/outlets or vents  (1)": 1,
      "Non-OEM, deleted, or modified/ported throttle body (2)": 2,
      "Independent throttle bodies (4)": 4,
      "Non-OEM or modified carburetor, fuel rail, fuel injectors, fuel pump(s), and/or fuel pressure regulator (2)": 2,
      "Non-OEM, modified/ported, or deleted intake manifold: 4 cyl (1)": 1,
      "Non-OEM, modified/ported, or deleted intake manifold: 6 cyl (2)": 2,
      "Non-OEM, modified/ported, or deleted intake manifold: 8 cyl (3)": 3,
      "Water injection system (alcohol-water mixtures are not permitted) (6)": 6,
      "Replacement pulleys (other than for supercharger) or non-electrical fan removal (1)": 1,
      "Replacement pulley for OEM supercharger or replacement of any pulley that affects OEM supercharger speed (4)": 4,
      "Aftermarket boost controller or modification/alteration of OEM vacuum lines that serve to function as a boost controller (4)": 4,
      "Aftermarket or modified wastegate actuator, wastegate, or vacuum line(s) that serve to control the wastegate actuator function or increase peak boost (3)": 3,
      "Add aftermarket intercooler (7)": 7,
      "Non-OEM or modified intercooler (4)": 4,
      "Modified or non-OEM camshaft(s), rocker arms, push rods, lifters, or cam timing gears (6)": 6,
      "Valve size change, modified, ported or polished OEM head (6)": 6,
      "De-stroked engine (4)": 4,
      "Added dry sump oil system (7)": 7,
      "Modification, porting, or replacement of the BMT exhaust manifold or header(s) (5)": 5,
      "Any modification to the OEM exhaust piping and/or catalytic converter (3)": 3,
      "Non-OEM or modified resonator(s) or muffler(s) only (no exhaust piping modifications)  (1)": 1
    },
    "drivetrain": {
      "Double clutch transmissions with altered gear ratios  (6)": 6,
      "Modify number of forward gears in transmission or altered gear ratios  (3)": 3,
      "Added paddle/electronic shift  (3)": 3,
      "Added limited slip differential or welded/locked differential  (3)": 3,
      "Changed or modified limited slip differential (or welded/locked OEM LSD) (1)": 1,
      "Added traction control (3)": 3,
      "Relocation of engine/transmission between 1 and 10 inches of the OEM location (7)": 7,
      "Modification/upgrade from a fixed to a floating rear axle (3)": 3
    },
    "suspension": {
      "Non-OEM shocks/struts/dampers with an external reservoir or more than two ranges of adjustment (8)": 8,
      "Non-OEM shocks/struts/dampers with a “Piggy Back” external reservoir (5)": 5,
      "Non-OEM shocks/struts/dampers with shaft diameter 40mm or greater (5)": 5,
      "Non-OEM or modified/re-valved shocks/struts/dampers (3)": 3,
      "Changing the mounting orientation/design of the OEM shock and/or spring perch in order to invert the front shocks/struts (1)": 1,
      "Non-OEM or modified coil springs, bump stops, leaf springs/spacers/brackets, or torsion bars (2)": 2,
      "Conversion of torsion bar/leaf spring to coil spring and strut/shock suspension (2)": 2,
      "Add, replace, remove, or modify anti-roll bars (“sway” bars—front, rear, or both) or end links (2)": 2,
      "Non-OEM driver/cockpit adjustable sway bar or suspension settings (4)": 4,
      "Replace, modify, or remove control arms or RWD/AWD rear trailing arms (4)": 4,
      "Non-OEM rear control arms on FWD vehicles (1)": 1,
      "Non-OEM rear trailing arms on FWD vehicles (1)": 1,
      "Using the alternate control arm mounting location on cars equipped OEM with multiple choices (6)": 6,
      "Relocation of front suspension mounting points (6)": 6,
      "Relocation of rear suspension mounting points (6)": 6,
      "Front steering tie rod bump steer modifications or shimming of the steering rack (2)": 2,
      "Alteration of ball joints/dive angles (2)": 2,
      "Add panhard rod or Watts link (4)": 4,
      "Replace or modify a OEM panhard rod or Watt’s link (2)": 2,
      "Add torque arm (4)": 4,
      "Replace or modify a OEM torque arm (2)": 2,
      "Add a third link to the rear suspension that does not penetrate the floor (4)": 4,
      "Metallic and/or spherical-design replacement suspension bushings (3)": 3
    },
    "chassis": {
      "Non-OEM, modified, or relocated brake calipers and/or brake caliper brackets and/or brake rotor diameter (2)": 2,
      "Add front lower stress/arm brace (two attachment points maximum) (1)": 1,
      "Add a third or fourth attachment point to a front or rear strut tower bar (1)": 1,
      "Add or modify other chassis stiffening devices or fabricated parts (3)": 3,
      "Increase in track width greater than four (4) inches due to non-OEM axles, control arms, brake rotors/hats, wheel spacers, hubs, wheel offset, and/or camber adjustment (6)": 6
    },
    "areo": {
      "Add, replace, or modify front fascia and/or air dam (3)": 3,
      "Add, replace or modify a single flat, horizontal, front splitter (3)": 3,
      "Add or modify canards/winglets (includes portions of an added/modified/replaced fascia that provide a downward force (2)": 2,
      "Add, replace, or modify rear wing and/or spoiler (4)": 4,
      "Add or fabricate flat bottom/belly tray (5)": 5,
      "Add rear diffuser (2)": 2,
      "Replace or modify OEM rear diffuser, rear bumper cover, or rear “fascia” (1)": 1,
      "Add rear vertical panels in any location (2)": 2,
      "Add or modify side skirts (2)": 2,
      "Add vortex generator to roof, rear window, or rear deck lid (1)": 1,
      "Removal of the front windshield/windshield frame (7)": 7,
      "Front side window frame air dams/diverters (2)": 2,
      "Add a non-OEM hardtop to a convertible that is not the identical shape and size of either the OEM or OEM option hardtop for that car model (5)": 5
    },
    "tires": {
      "200TW+ NOT INCLUDING SUPER 200 TW LIST": 0,
      "SUPER 200TW": 4,
      "41TW - 180TW": 10,
      "Dot/Non-Dot Slicks": 22
    },
    "weight": {
      "5 lbs (1)": 1,
      "20 lbs (2)": 2,
      "35 lbs (3)": 3,
      "50 lbs (4)": 4,
      "65 lbs (5)": 5,
      "80 lbs (6)": 6,
      "95 lbs (7)": 7,
      "110 lbs (8)": 8,
      "125 lbs (9)": 9,
      "140 lbs (10)": 10,
      "155 lbs (11)": 11,
      "170 lbs (12)": 12,
      "185 lbs (13)": 13,
      "200 lbs (14)": 14,
      "215 lbs (15)": 15,
      "230 lbs (16)": 16,
      "245 lbs (17)": 17,
      "260 lbs (18)": 18,
      "275 lbs (19)": 19,
      "290 lbs (20)": 20,
      "305 lbs (21)": 21,
      "320 lbs (22)": 22,
      "335 lbs (23)": 23,
      "350 lbs (24)": 24,
      "365 lbs (25)": 25,
      "380 lbs (26)": 26,
      "395 lbs (27)": 27,
      "410 lbs (28)": 28,
      "425 lbs (29)": 29,
      "440 lbs (30)": 30,
      "455 lbs (31)": 31,
      "470 lbs (32)": 32,
      "485 lbs (33)": 33,
      "500 lbs (34)": 34
    }
  }
}))(window);
