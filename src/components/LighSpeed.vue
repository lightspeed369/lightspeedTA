<template>
<div>
  <div>
    <template>
  <div>
    <v-app-bar
      color="black"
      height="100%"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>LightSpeed Time Trial Calculator</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn 
        href="https://www.lightspeedclub.com/"
        target="_blank"
        icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn 
        href="https://www.lightspeedclub.com/collections/all"
        target="_blank"
        icon>
        <v-icon>mdi-car</v-icon>
      </v-btn>

      <v-btn 
        href="https://www.lightspeedclub.com/pages/schedule"
        target="_blank"
        icon>
        <v-icon>mdi-calendar</v-icon>
      </v-btn>

      <v-btn 
        herf="https://lightspeed.motorsportreg.com/"
        target="_blank"
        icon>
        <v-icon>mdi-ticket</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
</div>
  <div class="select-box">
    <v-stepper
       v-model="e6"
       vertical
     >
    <v-stepper-step
      :complete="e6 > 1"
      step="1"
    >
      Select Your Make
      <small>Brand of your car</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.make"
          v-bind:items="carmake"
          label="Make"
          solo
        ></v-select>
      </v-col>
      <v-btn
        color="primary"
        @click="e6 = 2"
      >
        Continue
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 2"
      step="2"
    >
      Select Your Model
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.model"
          :items="getModel()"
          label="Model"
          solo
        ></v-select>
      </v-col>
      <v-btn
        color="primary"
        @click="e6 = 3"
      >
        Continue
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 3"
      step="3"
    >
      Select Mods
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-row align="center">
      <v-col
        cols="12"
        sm="6"
      >
      <v-subheader v-text="'Engine'"></v-subheader>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.engine"
          :items="engine"
          label="Select"
          multiple
          small-chips
          hint="That thing looks legal"
          persistent-hint
        ></v-select>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
     <v-subheader v-text="'Drivetrain'"></v-subheader>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.drivetrain"
          :items="drivetrain"
          :menu-props="{ maxHeight: '400' }"
          label="Select"
          multiple
          small-chips
          hint="Pick all your ebay parts"
          persistent-hint
        ></v-select>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
      <v-subheader v-text="'Suspension'"></v-subheader>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.suspension"
          :items="suspension"
          label="Select"
          multiple
          small-chips
          hint="Select all parts applied"
          persistent-hint
        ></v-select>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
      <v-subheader v-text="'Chassis'"></v-subheader>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.chassis"
          :items="chassis"
          label="Select"
          multiple
          small-chips
          hint="What did you do to your shitbox"
          persistent-hint
        ></v-select>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-subheader v-text="'Aerodynamic'"></v-subheader>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.areo"
          :items="areo"
          label="Select"
          multiple
          chips
          hint="Got big Wang?"
          persistent-hint
        ></v-select>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-subheader v-text="'Tires'"></v-subheader>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.tires"
          :items="tires"
          label="Select"
          multiple
          chips
          hint="Cheater Tires"
          persistent-hint
        ></v-select>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-subheader v-text="'Weight Savings'"></v-subheader>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.weight"
          :items="weight"
          label="Select"
          multiple
          chips
          hint="Going cheap?"
          persistent-hint
        ></v-select>
      </v-col>
    </v-row>
      <v-btn
        color="primary"
        @click="calculateScore(); e6 = 4"
      >
        Continue
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      View Your Results
    </v-stepper-step>
    <v-stepper-content step="4">
    <v-banner
      outlined
    >
      If a car accrues 20 or more points it will be bumped up in Class. There is no limit—a car with a high level of modifications might move up several Classes.
    </v-banner>
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Classification
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in categories"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.score }}</td>
        </tr>
      </tbody>
    </template>
    </v-simple-table>
    <v-banner
      outlined
    >
      FORCED INDUCTION VEHICLES will add an additional five (+5) points to the total number of Modification Points to determine the final competition class.
    </v-banner>
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
          @click="reloadPage"
          text
          >
            Reset
          </v-btn>
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
          >View Score</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Opening from the top</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Base class: {{carclass}}</div>
              <div class="text-h2 pa-12">Modification point: {{score}}</div>
              <div class="text-h2 pa-12">Calculated class: {{finalclass}}</div>
              <div class="text-h4 pa-12"><a href="https://lightspeed.motorsportreg.com/" target="_blank">Join the Challenge</a></div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-stepper-content>
  </v-stepper>
  </div>
</div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
      carmake: [
        'Acura', 'Alfa Roemo', 'Audi',
        'BMW',
        'Chevrolet', 'Cadillac',
        'Dodge',
        'Ferrari', 'Fait', 'Ford',
        'Honda', 'Hyundai',
        'Lamborghini', 'Lotus', 'Lexus',
        'Mazda', 'Mercedes', 'McLaren', 'Mini', 'Mitsubishi',
        'Nissan',
        'Porsche',
        'Subaru',
        'Tesla', 'Toyota',
        'VW'
      ],
      model: {
        'Acura': ['ILX 2.4L(13)', 'Integra 1.6L(86-89)', 'Integra 1.8L(non-VTEC)(90-93)', 'Integra 1.8(non-VTEC)(94-01)',
                  'Integra GSR', 'Integra Type-R', 'NSX 3.0L(91-96)', 'NSX', 'RSX', 'RSX-S'],
        'Alfa Roemo': ['4C', 'Giulia Quadrifoglio'],
        'Audi': ['S4(03-07)(AWD)', 'RS4(4.2L)(AWD)(07)', 'TT(180hp)(00-06)', 'TT(225hp)(02-06)(AWD)', 'TT(250hp)(04-06)',
                 'TT Quatro 3.2L (08-09)(AWD)', 'TTS(09-15)(AWD)(Turbo)', 'TTRS 2.5 Coupe (12-13)(AWD)', 'R8(V8)', 'R8(V10)'],
        'BMW': ['128i Coupe(08-09)', '135i Coupe(08-12)', '328i(E36)', '328i(E46)', '328i(12-14)(2.0Lturbo)', '335i(07-13)(3.0)turbo',
                'M2', 'M2CS', 'M235', 'M240', 'M3(E30)', 'M3(E36)', 'M3(E46)', 'M3(E90,E92,E93)', 'M3/M4(F8X)', 'M3/M4(G8X)',
                'M5 E28 E34(85-93)', 'M5 E39', 'M5 E60', 'M6', 'Z4'],
        'Cadillac': ['CTS-V(04-07)', 'CTS-V(09-11)'],
        'Chevrolet': ['Camaro SS(5th gen)', 'Camaro SS(6th gen)', 'Corvette C4', 'Corvette C5', 'Corvette C6', 'Corvette C7',
                      'Corvette C7 Z06', 'Corvette C7 ZR-1', 'Corvette C8'],
        'Dodge': ['Challenger R/T', 'Challenger SRT8', 'Charger 5.7L', 'Charger SRT8', 'Viper', 'Viper ACR'],
        'Ferrari': ['308', '328', '355', '360', 'F430', '458', '488', 'F12'],
        'Fait': ['124', '500 Abarth'],
        'Ford': ['Fiesta ST', 'Focus ST', 'Focus RS', 'Mustang GT V8(5th gen)', 'Mustang GT V8(6th)', 'Mustang GT350',
                 'Mustang GT350R', 'Mustang GT500'],
        'Honda': ['Accord 3.0 V6', 'Accord 3.5 V6', 'Civic Si', 'Civic Type R(FK8/FL5)', 'Fit', 'S2000(00-08)', 'S2000(K Swap)', 'S2000 CR(2.2L)'],
        'Hyundai': ['Genesis', 'Veloster N', 'Elantra N', 'Kona N'],
        'Lamborghini': ['Huracan', 'Gallardo', 'Aventador', 'Urus'],
        'Lotus': ['Elise', 'Evora', 'Exige'],
        'Lexus': ['IS F', 'GS F', 'LC500'],
        'Mazda': ['Mazdaspeed3(07-09)', 'Mazdaspeed3(10-13)', 'Mazdaspeed6(06-07)', 'Miata 1.6L', 'Miata 1.8L', 'Miata 1.8L VVT',
                  'Miata NC', 'Miata ND', 'Miata Mazdaspeed', 'RX7 13B', 'RX-7 TT(3rd gen)', 'RX-8(04-08)', 'RX-8(09-11)',
                  'RX-8 R3(09-11)', 'RX-8(197hp)(Auto)(04-05)','RX-8(212hp)(Auto)(06-07)'],
        'Mercedes': ['C43AMG', 'C63AMG', 'E55AMG', 'E63AMG', 'GT', 'GTs', 'SLS'],
        'McLaren': ['MP4 12C', '570s', '600LT', '650s', '720s', 'Senna'],
        'Mini': ['Cooper S(02-04)', 'Cooper S(05-10)', 'Cooper S(F56)'],
        'Mitsubishi': ['EVO VIII', 'EVO IX', 'EVO X'],
        'Nissan': ['240Z', '300ZX', '350Z', '370Z', '400Z', 'GTR'],
        'Porsche': ['964', '993', '996', '996GT3', '997.1', '997.2', '997 Turbo', '997.1 GT3', '997.2 GT3', '997 GT3RS',
                    '991.1', '991.2', '991.1 GT3', '991.2 GT3', '991 Turbo', '991 GT3RS', '991 GT2RS', '992', '992 Turbo',
                    '992 GT3', 'Cayman/Boxster 718', 'Cayman/Boxster 981', 'Cayman/Boxter GTS', 'Cayman 981 GT4', '718 GT4'],
        'Subaru': ['BRZ(gen1)', 'BRZ(gen2)', 'STI', 'WRX', 'WRX(02-08)'],
        'Tesla': ['Model 3', 'Model 3 Dual Motor', 'Model S', 'Model S Plaid'],
        'Toyota': ['FRS/FT86', 'GR86', 'Supra(2.0)', 'Supra(3.0)', 'GR Corolla', 'Celica GT-S', 'MR2 (gen1)', 'MR2 2.2L DOCH', 'MR2 SC', 'MR2 Turbo'],
        'VW': ['GTI(06-09)', 'GTI(10-14)', 'GTI(15)', 'GTI(19)', 'GOLF R32', 'GOLF R(12-13)', 'GOLF R(15)', 'GOLF R(19)']
      },
      engine: [
        'Aftermarket computer system natually aspirated (3)',
        'Aftermarket computer system forced induction (10)',
        'Modification of the OEM air intake/box (1)',
        'Changing air filter location (1)',
        'Air piping to turbo/supercharger/intercooler/throttle body/cab (1)',
        'Air piping to hood/fascia/fender air inlets/outlets or vents  (1)',
        'Non-OEM, deleted, or modified/ported throttle body (2)',
        'Independent throttle bodies (4)',
        'Non-OEM or modified carburetor, fuel rail, fuel injectors, fuel pump(s), and/or fuel pressure regulator (2)',
        'Non-OEM, modified/ported, or deleted intake manifold: 4 cyl (1)',
        'Non-OEM, modified/ported, or deleted intake manifold: 6 cyl (2)',
        'Non-OEM, modified/ported, or deleted intake manifold: 8 cyl (3)',
        'Water injection system (alcohol-water mixtures are not permitted) (6)',
        'Replacement pulleys (other than for supercharger) or non-electrical fan removal (1)',
        'Replacement pulley for OEM supercharger or replacement of any pulley that affects OEM supercharger speed (4)',
        'Aftermarket boost controller or modification/alteration of OEM vacuum lines that serve to function as a boost controller (4)',
        'Aftermarket or modified wastegate actuator, wastegate, or vacuum line(s) that serve to control the wastegate actuator function or increase peak boost (3)',
        'Add aftermarket intercooler (7)',
        'Non-OEM or modified intercooler (4)',
        'Modified or non-OEM camshaft(s), rocker arms, push rods, lifters, or cam timing gears (6)',
        'Valve size change, modified, ported or polished OEM head (6)',
        'De-stroked engine (4)',
        'Added dry sump oil system (7)',
        'Modification, porting, or replacement of the BMT exhaust manifold or header(s) (5)',
        'Any modification to the OEM exhaust piping and/or catalytic converter (3)',
        'Non-OEM or modified resonator(s) or muffler(s) only (no exhaust piping modifications)  (1)'
      ],
      drivetrain: [
        'Double clutch transmissions with altered gear ratios  (6)',
        'Modify number of forward gears in transmission or altered gear ratios  (3)',
        'Added paddle/electronic shift  (3)',
        'Added limited slip differential or welded/locked differential  (3)',
        'Changed or modified limited slip differential (or welded/locked OEM LSD) (1)',
        'Added traction control (3)',
        'Relocation of engine/transmission between 1 and 10 inches of the OEM location (7)',
        'Modification/upgrade from a fixed to a floating rear axle (3)'
      ],
      suspension: [
        'Non-OEM shocks/struts/dampers with an external reservoir or more than two ranges of adjustment (8)',
        'Non-OEM shocks/struts/dampers with a “Piggy Back” external reservoir (5)',
        'Non-OEM shocks/struts/dampers with shaft diameter 40mm or greater (5)',
        'Non-OEM or modified/re-valved shocks/struts/dampers (3)',
        'Changing the mounting orientation/design of the OEM shock and/or spring perch in order to invert the front shocks/struts (1)',
        'Non-OEM or modified coil springs, bump stops, leaf springs/spacers/brackets, or torsion bars (2)',
        'Conversion of torsion bar/leaf spring to coil spring and strut/shock suspension (2)',
        'Add, replace, remove, or modify anti-roll bars (“sway” bars—front, rear, or both) or end links (2)',
        'Non-OEM driver/cockpit adjustable sway bar or suspension settings (4)',
        'Replace, modify, or remove control arms or RWD/AWD rear trailing arms (4)',
        'Non-OEM rear control arms on FWD vehicles (1)',
        'Non-OEM rear trailing arms on FWD vehicles (1)',
        'Using the alternate control arm mounting location on cars equipped OEM with multiple choices (6)',
        'Relocation of front suspension mounting points (6)',
        'Relocation of rear suspension mounting points (6)',
        'Front steering tie rod bump steer modifications or shimming of the steering rack (2)',
        'Alteration of ball joints/dive angles (2)',
        'Add panhard rod or Watts link (4)',
        'Replace or modify a OEM panhard rod or Watt’s link (2)',
        'Add torque arm (4)',
        'Replace or modify a OEM torque arm (2)',
        'Add a third link to the rear suspension that does not penetrate the floor (4)',
        'Metallic and/or spherical-design replacement suspension bushings (3)' 
      ],
      chassis: [
        'Non-OEM, modified, or relocated brake calipers and/or brake caliper brackets and/or brake rotor diameter (2)', 
        'Add front lower stress/arm brace (two attachment points maximum) (1)',
        'Add a third or fourth attachment point to a front or rear strut tower bar (1)',
        'Add or modify other chassis stiffening devices or fabricated parts (3)',
        'Increase in track width greater than four (4) inches due to non-OEM axles, control arms, brake rotors/hats, wheel spacers, hubs, wheel offset, and/or camber adjustment (6)'
      ],
      areo: [
        'Add, replace, or modify front fascia and/or air dam (3)', 
        'Add, replace or modify a single flat, horizontal, front splitter (3)', 
        'Add or modify canards/winglets (includes portions of an added/modified/replaced fascia that provide a downward force (2)',
        'Add, replace, or modify rear wing and/or spoiler (4)',
        'Add or fabricate flat bottom/belly tray (5)',
        'Add rear diffuser (2)',
        'Replace or modify OEM rear diffuser, rear bumper cover, or rear “fascia” (1)',
        'Add rear vertical panels in any location (2)',
        'Add or modify side skirts (2)',
        'Add vortex generator to roof, rear window, or rear deck lid (1)',
        'Removal of the front windshield/windshield frame (7)',
        'Front side window frame air dams/diverters (2)',
        'Add a non-OEM hardtop to a convertible that is not the identical shape and size of either the OEM or OEM option hardtop for that car model (5)'
      ],
      tires: [
        'The following DOT-approved R-compound tires: BFG R1S, Goodyear Eagle RS AC (auto- cross), Hoosier A7, Hankook Z214 (C90 & C91 compounds only), Hoosier Wet DOT (22)',
        'The following DOT-approved R-compound tires and those with a UTQG treadwear rating of 40 or less not listed otherwise in these rules: BFG R1, Goodyear Eagle RS (10)',
        'Hankook Z214, Hoosier R7, Kumho V710, Yokohama A055 (10)',
        'BFGoodrich g-Force Rival, Cooper RS3-R, Maxxis Victra RC-1, Michelin Pilot Sport 4S (6)',
        ' Nankang AR-1, Nitto NT01, Toyo Proxes R888/R888R/RA-1/RR (6)',
        'Bridgestone Potenza RE-71R/RE-71RS, BFGoodrich g-Force Rival S, Continental ExtremeContact Force, Dunlop Direzza ZII (3)',
        'Falken Azenis RT615K+, Falken Azenis RT660, Maxxis Victra VR-1, Federa 595 RS-RR (3)',
        'Goodyear Eagle F1 SuperCar 3, Hankook Ventus RS4, Kumho ECSTA V720/V730, Michelin Sport Cup 2 Connect (3)', 
        'Nankang CR-S/NS-2R, Nexen Nfera SUR4G, Yokohama Advan AD09/A052, Valino VR08GP, Toyo Proxes R1R (3)'  
      ],
      weight: [
        '5 lbs (1)', '20 lbs (2)', '35 lbs (3)', '50 lbs (4)', '65 lbs (5)',
        '80 lbs (6)', '95 lbs (7)', '110 lbs (8)', '125 lbs (9)', '140 lbs (10)',
        '155 lbs (11)', '170 lbs (12)', '185 lbs (13)', '200 lbs (14)', '215 lbs (15)',
        '230 lbs (16)', '245 lbs (17)', '260 lbs (18)', '275 lbs (19)', '290 lbs (20)',
        '305 lbs (21)', '320 lbs (22)', '335 lbs (23)', '350 lbs (24)', '365 lbs (25)',
        '380 lbs (26)', '395 lbs (27)', '410 lbs (28)', '425 lbs (29)', '440 lbs (30)',
        '455 lbs (31)', '470 lbs (32)', '485 lbs (33)', '500 lbs (34)' 
      ],
      classesScore: {'TTA': 80, 'TTB': 60, 'TTC': 40, 'TTD': 20, 'TTE': 0},
      classes: ['TTE', 'TTD', 'TTC', 'TTB', 'TTA', 'TTU', 'TTSU'],
      categories: [
        {
          name: 'Move up 1 class',
          score: '20 - 39 points',

        },
        {
          name: 'Move up 2 class',
          score: '40 - 59 points',

        },
        {
          name: 'Move up 3 class',
          score: '60 - 79 points',

        },
        {
          name: 'Move up 4 class',
          score: '80 - 99 points',

        },
        {
          name: 'Move up 5 class',
          score: '100 - 119 points',

        },
      ],
      carspec: {
        make: "",
        model: "",
        engine: [],
        drivetrain: [],
        suspension: [],
        chassis: [],
        areo: [],
        tires: [],
        weight: [],
      },
      score:0,
      carclass: null,
      finalclass: null,
      e6:1,
      e7:[],
      scoreLookupTable: {
        engine: {
        'Aftermarket computer system natually aspirated (3)': 3,
        'Aftermarket computer system forced induction (10)': 10,
        'Modification of the OEM air intake/box (1)': 1,
        'Changing air filter location (1)': 1,
        'Air piping to turbo/supercharger/intercooler/throttle body/cab (1)': 1,
        'Air piping to hood/fascia/fender air inlets/outlets or vents  (1)': 1,
        'Non-OEM, deleted, or modified/ported throttle body (2)': 2,
        'Independent throttle bodies (4)': 4,
        'Non-OEM or modified carburetor, fuel rail, fuel injectors, fuel pump(s), and/or fuel pressure regulator (2)': 2,
        'Non-OEM, modified/ported, or deleted intake manifold: 4 cyl (1)': 1,
        'Non-OEM, modified/ported, or deleted intake manifold: 6 cyl (2)': 2,
        'Non-OEM, modified/ported, or deleted intake manifold: 8 cyl (3)': 3,
        'Water injection system (alcohol-water mixtures are not permitted) (6)': 6,
        'Replacement pulleys (other than for supercharger) or non-electrical fan removal (1)': 1,
        'Replacement pulley for OEM supercharger or replacement of any pulley that affects OEM supercharger speed (4)': 4,
        'Aftermarket boost controller or modification/alteration of OEM vacuum lines that serve to function as a boost controller (4)': 4,
        'Aftermarket or modified wastegate actuator, wastegate, or vacuum line(s) that serve to control the wastegate actuator function or increase peak boost (3)': 3,
        'Add aftermarket intercooler (7)': 7,
        'Non-OEM or modified intercooler (4)': 4,
        'Modified or non-OEM camshaft(s), rocker arms, push rods, lifters, or cam timing gears (6)': 6,
        'Valve size change, modified, ported or polished OEM head (6)': 6,
        'De-stroked engine (4)': 4,
        'Added dry sump oil system (7)': 7,
        'Modification, porting, or replacement of the BMT exhaust manifold or header(s) (5)': 5,
        'Any modification to the OEM exhaust piping and/or catalytic converter (3)': 3,
        'Non-OEM or modified resonator(s) or muffler(s) only (no exhaust piping modifications)  (1)': 1
        },
        drivetrain: {
        'Double clutch transmissions with altered gear ratios  (6)': 6,
        'Modify number of forward gears in transmission or altered gear ratios  (3)': 3,
        'Added paddle/electronic shift  (3)': 3,
        'Added limited slip differential or welded/locked differential  (3)': 3,
        'Changed or modified limited slip differential (or welded/locked OEM LSD) (1)': 1,
        'Added traction control (3)': 3,
        'Relocation of engine/transmission between 1 and 10 inches of the OEM location (7)': 7,
        'Modification/upgrade from a fixed to a floating rear axle (3)': 3 
        },
        suspension: {
        'Non-OEM shocks/struts/dampers with an external reservoir or more than two ranges of adjustment (8)': 8,
        'Non-OEM shocks/struts/dampers with a “Piggy Back” external reservoir (5)': 5,
        'Non-OEM shocks/struts/dampers with shaft diameter 40mm or greater (5)': 5,
        'Non-OEM or modified/re-valved shocks/struts/dampers (3)': 3,
        'Changing the mounting orientation/design of the OEM shock and/or spring perch in order to invert the front shocks/struts (1)': 1,
        'Non-OEM or modified coil springs, bump stops, leaf springs/spacers/brackets, or torsion bars (2)': 2,
        'Conversion of torsion bar/leaf spring to coil spring and strut/shock suspension (2)': 2,
        'Add, replace, remove, or modify anti-roll bars (“sway” bars—front, rear, or both) or end links (2)': 2,
        'Non-OEM driver/cockpit adjustable sway bar or suspension settings (4)': 4,
        'Replace, modify, or remove control arms or RWD/AWD rear trailing arms (4)': 4,
        'Non-OEM rear control arms on FWD vehicles (1)': 1,
        'Non-OEM rear trailing arms on FWD vehicles (1)': 1,
        'Using the alternate control arm mounting location on cars equipped OEM with multiple choices (6)': 6,
        'Relocation of front suspension mounting points (6)': 6,
        'Relocation of rear suspension mounting points (6)': 6,
        'Front steering tie rod bump steer modifications or shimming of the steering rack (2)': 2,
        'Alteration of ball joints/dive angles (2)': 2,
        'Add panhard rod or Watts link (4)': 4,
        'Replace or modify a OEM panhard rod or Watt’s link (2)': 2,
        'Add torque arm (4)': 4,
        'Replace or modify a OEM torque arm (2)': 2,
        'Add a third link to the rear suspension that does not penetrate the floor (4)': 4,
        'Metallic and/or spherical-design replacement suspension bushings (3)': 3
        },
        chassis: {
        'Non-OEM, modified, or relocated brake calipers and/or brake caliper brackets and/or brake rotor diameter (2)': 2, 
        'Add front lower stress/arm brace (two attachment points maximum) (1)': 1,
        'Add a third or fourth attachment point to a front or rear strut tower bar (1)': 1,
        'Add or modify other chassis stiffening devices or fabricated parts (3)': 3,
        'Increase in track width greater than four (4) inches due to non-OEM axles, control arms, brake rotors/hats, wheel spacers, hubs, wheel offset, and/or camber adjustment (6)': 6
        },
        areo: {
        'Add, replace, or modify front fascia and/or air dam (3)': 3, 
        'Add, replace or modify a single flat, horizontal, front splitter (3)': 3, 
        'Add or modify canards/winglets (includes portions of an added/modified/replaced fascia that provide a downward force (2)': 2,
        'Add, replace, or modify rear wing and/or spoiler (4)': 4,
        'Add or fabricate flat bottom/belly tray (5)': 5,
        'Add rear diffuser (2)': 2,
        'Replace or modify OEM rear diffuser, rear bumper cover, or rear “fascia” (1)': 1,
        'Add rear vertical panels in any location (2)': 2,
        'Add or modify side skirts (2)': 2,
        'Add vortex generator to roof, rear window, or rear deck lid (1)': 1,
        'Removal of the front windshield/windshield frame (7)': 7,
        'Front side window frame air dams/diverters (2)': 2,
        'Add a non-OEM hardtop to a convertible that is not the identical shape and size of either the OEM or OEM option hardtop for that car model (5)': 5
        },
        tires: {
        'The following DOT-approved R-compound tires: BFG R1S, Goodyear Eagle RS AC (auto- cross), Hoosier A7, Hankook Z214 (C90 & C91 compounds only), Hoosier Wet DOT (22)': 22,
        'The following DOT-approved R-compound tires and those with a UTQG treadwear rating of 40 or less not listed otherwise in these rules: BFG R1, Goodyear Eagle RS (10)': 10,
        'Hankook Z214, Hoosier R7, Kumho V710, Yokohama A055 (10)': 10,
        'BFGoodrich g-Force Rival, Cooper RS3-R, Maxxis Victra RC-1, Michelin Pilot Sport 4S (6)': 6,
        ' Nankang AR-1, Nitto NT01, Toyo Proxes R888/R888R/RA-1/RR (6)': 6,
        'Bridgestone Potenza RE-71R/RE-71RS, BFGoodrich g-Force Rival S, Continental ExtremeContact Force, Dunlop Direzza ZII (3)': 3,
        'Falken Azenis RT615K+, Falken Azenis RT660, Maxxis Victra VR-1, Federa 595 RS-RR (3)': 3,
        'Goodyear Eagle F1 SuperCar 3, Hankook Ventus RS4, Kumho ECSTA V720/V730, Michelin Sport Cup 2 Connect (3)': 3, 
        'Nankang CR-S/NS-2R, Nexen Nfera SUR4G, Yokohama Advan AD09/A052, Valino VR08GP, Toyo Proxes R1R (3)': 3 
        },
        weight: {
        '5 lbs (1)': 1, '20 lbs (2)': 2, '35 lbs (3)': 3, '50 lbs (4)': 4, '65 lbs (5)': 5,
        '80 lbs (6)': 6, '95 lbs (7)': 7, '110 lbs (8)': 8, '125 lbs (9)': 9, '140 lbs (10)': 10,
        '155 lbs (11)': 11, '170 lbs (12)': 12, '185 lbs (13)': 13, '200 lbs (14)': 14, '215 lbs (15)': 15,
        '230 lbs (16)': 16, '245 lbs (17)': 17, '260 lbs (18)': 18, '275 lbs (19)': 19, '290 lbs (20)': 20,
        '305 lbs (21)': 21, '320 lbs (22)': 22, '335 lbs (23)': 23, '350 lbs (24)': 24, '365 lbs (25)': 25,
        '380 lbs (26)': 26, '395 lbs (27)': 27, '410 lbs (28)': 28, '425 lbs (29)': 29, '440 lbs (30)': 30,
        '455 lbs (31)': 31, '470 lbs (32)': 32, '485 lbs (33)': 33, '500 lbs (34)': 34 
        }
      },
      classLookupTable: {
        'ILX 2.4L(13)': 'TTE', 'Integra 1.6L(86-89)': 'TTE', 'Integra 1.8L(non-VTEC)(90-93)': 'TTE', 'Integra 1.8(non-VTEC)(94-01)': 'TTE',
        'Integra GSR': 'TTE', 'Integra Type-R': 'TTD', 'NSX 3.0L(91-96)': 'TTC', 'NSX': 'TTC', 'RSX': 'TTE', 'RSX-S': 'TTD',
        '4C': 'TTC', 'Giulia Quadrifoglio': 'TTB',
        'S4(03-07)(AWD)': 'TTC', 'RS4(4.2L)(AWD)(07)': 'TTB', 'TT(180hp)(00-06)': 'TTE', 'TT(225hp)(02-06)(AWD)': 'TTD', 'TT(250hp)(04-06)':'TTD',
        'TT Quatro 3.2L (08-09)(AWD)': 'TTD', 'TTS(09-15)(AWD)(Turbo)': 'TTC', 'TTRS 2.5 Coupe (12-13)(AWD)': 'TTB', 'R8(V8)': 'TTA', 'R8(V10)': 'TTA',
        '128i Coupe(08-09)': 'TTD', '135i Coupe(08-12)': 'TTC', '328i(E36)': 'TTE', '328i(E46)': 'TTE', '328i(12-14)(2.0Lturbo)': 'TTD', '335i(07-13)(3.0)turbo': 'TTC',
        'M2': 'TTB', 'M2CS': 'TTA', 'M235': 'TTC', 'M240': 'TTB', 'M3(E30)':'TTE', 'M3(E36)': 'TTD', 'M3(E46)':'TTC', 'M3(E90,E92,E93)': 'TTB', 'M3/M4(F8X)':'TTA', 'M3/M4(G8X)':'TTA',
        'M5 E28 E34(85-93)':'TTD', 'M5 E39':'TTC', 'M5 E60': 'TTA', 'M6': 'TTA', 'Z4':'TTB',
        'CTS-V(04-07)': 'TTC', 'CTS-V(09-11)': 'TTA',
        'Camaro SS(5th gen)': 'TTB', 'Camaro SS(6th gen)': 'TTB', 'Corvette C4': 'TTC', 'Corvette C5': 'TTA', 'Corvette C6': 'TTA', 'Corvette C7': 'TTA',
        'Corvette C7 Z06': 'TTA', 'Corvette C7 ZR-1': 'TTA', 'Corvette C8': 'TTA',
        'Challenger R/T': 'TTD', 'Challenger SRT8': 'TTC', 'Charger 5.7L': 'TTD', 'Charger SRT8': 'TTC', 'Viper': 'TTA', 'Viper ACR': 'TTA',
        '308':'TTD', '328': 'TTC', '355': 'TTA', '360': 'TTA', 'F430': 'TTA', '458': 'TTA', '488': 'TTA', 'F12': 'TTA',
        '124': 'TTE', '500 Abarth': 'TTE',
        'Fiesta ST': 'TTE', 'Focus ST': 'TTD', 'Focus RS': 'TTC', 'Mustang GT V8(5th gen)': 'TTB', 'Mustang GT V8(6th)': 'TTB', 'Mustang GT350': 'TTA',
        'Mustang GT350R': 'TTA', 'Mustang GT500': 'TTA',
        'Accord 3.0 V6': 'TTE', 'Accord 3.5 V6': 'TTD', 'Civic Si': 'TTE', 'Civic Type R(FK8/FL5)': 'TTC', 'Fit': 'TTE', 'S2000(00-08)': 'TTD', 'S2000(K Swap)': 'TTC', 'S2000 CR(2.2L)':'TTC',
        'Genesis': 'TTB', 'Veloster N': 'TTC', 'Elantra N':'TTC', 'Kona N': 'TTC',
        'Huracan': 'TTA', 'Gallardo': 'TTA', 'Aventador':'TTA', 'Urus': 'TTB',
        'Elise': 'TTB', 'Evora': 'TTA', 'Exige': 'TTA',
        'IS F': 'TTB', 'GS F' : 'TTB', 'LC500': 'TTB',
        'Mazdaspeed3(07-09)': 'TTD', 'Mazdaspeed3(10-13)': 'TTD', 'Mazdaspeed6(06-07)':'TTD', 'Miata 1.6L': 'TTE', 'Miata 1.8L': 'TTE', 'Miata 1.8L VVT': 'TTE',
        'Miata NC': 'TTE', 'Miata ND': 'TTE', 'Miata Mazdaspeed': 'TTE', 'RX7 13B': 'TTE', 'RX-7 TT(3rd gen)': 'TTC', 'RX-8(04-08)': 'TTD', 'RX-8(09-11)': 'TTD',
        'RX-8 R3(09-11)': 'TTC', 'RX-8(197hp)(Auto)(04-05)': 'TTE','RX-8(212hp)(Auto)(06-07)': 'TTE',
        'C43AMG': 'TTC', 'C63AMG':'TTB', 'E55AMG':'TTB', 'E63AMG': 'TTB', 'GT': 'TTA', 'GTs': 'TTA', 'SLS':'TTA',
        'MP4 12C': 'TTA', '570s': 'TTA', '600LT': 'TTA', '650s': 'TTA', '720s': 'TTA', 'Senna': 'TTA',
        'Cooper S(02-04)': 'TTE', 'Cooper S(05-10)': 'TTE', 'Cooper S(F56)': 'TTD',
        'EVO VIII': 'TTC', 'EVO IX': 'TTB', 'EVO X': 'TTB',
        '240Z': 'TTE', '300ZX': 'TTE', '350Z': 'TTC', '370Z': 'TTB', '400Z': 'TTB', 'GTR': 'TTA',
        '964': 'TTD', '993': 'TTC', '996': 'TTB', '996GT3': 'TTA', '997.1': 'TTB', '997.2': 'TTA', '997 Turbo': 'TTA', '997.1 GT3': 'TTA', '997.2 GT3': 'TTA', '997 GT3RS': 'TTA',
        '991.1': 'TTA', '991.2': 'TTA', '991.1 GT3': 'TTA', '991.2 GT3': 'TTA', '991 Turbo': 'TTA', '991 GT3RS': 'TTA', '991 GT2RS': 'TTA', '992': 'TTA', '992 Turbo': 'TTA',
        '992 GT3': 'TTA', 'Cayman/Boxster 718': 'TTB', 'Cayman/Boxster 981': 'TTB', 'Cayman/Boxter GTS': 'TTA', 'Cayman 981 GT4': 'TTA', '718 GT4': 'TTA',
        'BRZ(gen1)': 'TTD', 'BRZ(gen2)': 'TTD', 'STI': 'TTB', 'WRX': 'TTB', 'WRX(02-08)': 'TTD',
        'Model 3': 'TTC', 'Model 3 Dual Motor': 'TTB', 'Model S': 'TTB', 'Model S Plaid': 'TTA',
        'FRS/FT86': 'TTD', 'GR86': 'TTD', 'Supra(2.0)': 'TTB', 'Supra(3.0)': 'TTA', 'GR Corolla': 'TTB', 'Celica GT-S': 'TTE', 'MR2 (gen1)': 'TTE', 'MR2 2.2L DOCH': 'TTE', 'MR2 SC': 'TTE', 'MR2 Turbo': 'TTE',
        'GTI(06-09)': 'TTE', 'GTI(10-14)': 'TTE', 'GTI(15)': 'TTE', 'GTI(19)':'TTD', 'GOLF R32': 'TTE', 'GOLF R(12-13)': 'TTD', 'GOLF R(15)': 'TTC', 'GOLF R(19)': 'TTB'
      },
      oneStarModel: ['NSX 3.0L(91-96)', 'NSX', 'RSX', 'Giulia Quadrifoglio', 'RS4(4.2L)(AWD)(07)','TT Quatro 3.2L (08-09)(AWD)', 'TTRS 2.5 Coupe (12-13)(AWD)',
                     '135i Coupe(08-12)', '328i(E36)', '335i(07-13)(3.0)turbo', 'M2', 'M235','M3(E30)', 'M3(E36)', 'M3(E46)', 'M3(E90,E92,E93)', 'M5 E28 E34(85-93)',
                     'M5 E39', 'Cooper S(02-04)', 'Cooper S(05-10)','Camaro SS(5th gen)', 'Camaro SS(6th gen)', 'Corvette C4','Corvette C7 ZR-1', 'Challenger R/T',
                     'Challenger SRT8', 'Charger 5.7L', 'Charger SRT8', '328', '500 Abarth', 'Fiesta ST', 'Focus ST', 'Mustang GT350R', 'Mustang GT500','Civic Si',
                     'S2000(00-08)','S2000 CR(2.2L)','IS F','Mazdaspeed3(07-09)', 'Mazdaspeed3(10-13)', 'Mazdaspeed6(06-07)', 'Miata 1.8L VVT', 'Miata NC', 'Miata ND',
                     'Miata Mazdaspeed', 'RX-7 TT(3rd gen)','RX-8(09-11)', 'RX-8(212hp)(Auto)(06-07)','EVO VIII','EVO X', '370Z', '400Z', '964', '993','997.1','BRZ(gen2)',
                     'WRX(02-08)', 'GR86', 'Supra(2.0)','MR2 Turbo', 'MR2 SC','CTS-V(04-07)', 'GTI(06-09)', 'GTI(10-14)', 'GTI(15)', 'GOLF R32', 'GOLF R(15)', 'GOLF R(12-13)'],
      twoStarModel: []
    }),
    methods: {
      calculateScore() {
        console.log(this.carspec)
        
        // Look up if model needs extra points penalty
        if (this.oneStarModel.includes(this.carspec.model)) {
          this.score += 7;
        }

        if (this.twoStarModel.includes(this.carspec.model)) {
          this.score += 14;
        }

        // Adding engine
        this.carspec.engine.forEach(element => {
          this.score += this.scoreLookupTable.engine[element]
        });

        // Adding drivetain
        this.carspec.drivetrain.forEach(element => {
          this.score += this.scoreLookupTable.drivetrain[element]
        });

        //Adding suspension
        this.carspec.suspension.forEach(element => {
          this.score += this.scoreLookupTable.suspension[element]
        });
        
        // Adding chassis
        this.carspec.chassis.forEach(element => {
          this.score += this.scoreLookupTable.chassis[element]
        });

        // Adding areo
        this.carspec.areo.forEach(element => {
          this.score += this.scoreLookupTable.areo[element]
        });

        //Adding tires
        this.carspec.tires.forEach(element => {
          this.score += this.scoreLookupTable.tires[element]          
        });

        //Adding weight
        this.carspec.weight.forEach(element => {
          this.score += this.scoreLookupTable.weight[element]
        });

        //Getting base car class
        this.carclass = this.classLookupTable[this.carspec.model]
        //Getting final car class
        var totalscore = this.score + this.classesScore[this.carclass]
        var level = parseInt(totalscore/20)
        if (level > 5){
          this.finalclass = 'TTSU'
        }
        else{
          this.finalclass = this.classes[level]
        }
      },

      getModel() {
        return this.model[this.carspec.make]
      },

      reloadPage() {
        window.location.reload();
      }

    },
  }
</script>

<style>
.select-box {
  background-color: black;
  color: rgb(36, 224, 99);
  margin: 1.2rem;
  padding: 1rem;
  border-radius: 1.2rem;
}
</style>