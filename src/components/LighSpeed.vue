<template>
  <div>
    <div>
      <template>
        <div>
          <v-app-bar color="black" height="100%" dense dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>LightSpeed Time Trial Calculator</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn href="https://www.lightspeedclub.com/" target="_blank" icon>
              <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-btn
              href="https://www.lightspeedclub.com/collections/all"
              target="_blank"
              icon
            >
              <v-icon>mdi-car</v-icon>
            </v-btn>

            <v-btn
              href="https://www.lightspeedclub.com/pages/schedule"
              target="_blank"
              icon
            >
              <v-icon>mdi-calendar</v-icon>
            </v-btn>

            <v-btn
              herf="https://lightspeed.motorsportreg.com/"
              target="_blank"
              icon
            >
              <v-icon>mdi-ticket</v-icon>
            </v-btn>
          </v-app-bar>
        </div>
      </template>
    </div>
    <div class="select-box">
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
          Select Your Make
          <small>Brand of your car</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-col class="d-flex" cols="12" sm="6">
            <v-select
              v-model="carspec.make"
              v-bind:items="carmake"
              label="Make"
              solo
            ></v-select>
          </v-col>
          <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">
          Select Your Model
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-col class="d-flex" cols="12" sm="6">
            <v-select
              v-model="carspec.model"
              :items="getModel()"
              label="Model"
              solo
            ></v-select>
          </v-col>
          <v-btn color="secondary" @click="e6 = 1"> Back </v-btn>
          <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3">
          Select Mods
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-row align="center">
            <v-col cols="12" sm="6">
              <v-subheader v-text="'Engine'"></v-subheader>
            </v-col>

            <v-col cols="12" sm="6">
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
            <v-col cols="12" sm="6">
              <v-subheader v-text="'Drivetrain'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6">
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

            <v-col cols="12" sm="6">
              <v-subheader v-text="'Suspension'"></v-subheader>
            </v-col>

            <v-col cols="12" sm="6">
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
            <v-col cols="12" sm="6">
              <v-subheader v-text="'Chassis'"></v-subheader>
            </v-col>

            <v-col cols="12" sm="6">
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

            <v-col cols="12" sm="6">
              <v-subheader v-text="'Aerodynamic'"></v-subheader>
            </v-col>

            <v-col cols="12" sm="6">
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

            <v-col cols="12" sm="6">
              <v-subheader v-text="'Tires'"></v-subheader>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select
                v-model="carspec.tires"
                :items="tires"
                label="Select"
                multiple
                chips
                hint="Cheater Tires"
                persistent-hint
              >
                <template v-slot:item="{ item }">
                  <v-checkbox
                    inline
                    :input-value="carspec.tires.includes(item)"
                    class="tire-item-template-checkbox"
                    :label="`${item} (${scoreLookupTable.tires[item]})`"
                    :messages="
                      item == 'SUPER 200TW'
                        ? 'SUPER 200TW LIST: CR1/S, RT660, A052, SUR4G, V730, Rival S1.5, RE71-R/RS, GY SC3, Continental ECF, Dir ZIII, 494RS-RR, Michelin cup2 connect.'
                        : ''
                    "
                  >
                  </v-checkbox></template
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-subheader v-text="'Weight Savings'"></v-subheader>
            </v-col>

            <v-col cols="12" sm="6">
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
          <v-btn color="secondary" @click="e6 = 2"> Back </v-btn>
          <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-step step="4"> View Your Results </v-stepper-step>
        <v-stepper-content step="4">
          <v-banner outlined>
            If a car accrues 20 or more points it will be bumped up in Class.
            There is no limit—a car with a high level of modifications might
            move up several Classes.
          </v-banner>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Classification</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in categories" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.score }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-banner outlined>
            FORCED INDUCTION VEHICLES will add an additional five (+5) points to
            the total number of Modification Points to determine the final
            competition class.
          </v-banner>
          <v-radio-group
            inline
            :class="carspec.nafi == '' ? 'red-label' : ''"
            label="* Is your vehicle NA or FI?"
            v-model="carspec.nafi"
          >
            <v-radio label="NA" value="NA"></v-radio>
            <v-radio label="FI" value="FI"></v-radio>
          </v-radio-group>
          <v-dialog transition="dialog-top-transition" max-width="600">
            <template v-slot:activator="{ on, attrs }">
              <v-btn @click="reloadPage" text> Reset </v-btn>
              <v-btn
                color="primary"
                v-bind="attrs"
                v-on="on"
                @click="calculateScore"
                :disabled="carspec.nafi == ''"
                >View Score</v-btn
              >
              <v-btn color="secondary" @click="e6 = 3"> Back </v-btn>
            </template>
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="primary" dark
                  >View your score and join the challenge</v-toolbar
                >
                <v-card-text class="score-panel">
                  <div class="base-class">Base class: {{ carclass }}</div>
                  <div class="modification-score">
                    Modification point: {{ score }}
                  </div>
                  <div class="calculated-score">
                    Calculated class: {{ finalclass }}
                  </div>
                  <div class="challenge">
                    <hr />
                    <p>Submit your modification info and join the challenge.</p>
                    <form @submit.prevent="joinChallenge">
                      <div class="form-group">
                        <label for="submit-email">Email</label>
                        <input
                          id="submit-email"
                          type="email"
                          v-model="email"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label for="submit-firstname">First Name</label>
                        <input
                          id="submit-firstname"
                          type="text"
                          v-model="firstName"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label for="submit-lastname">Last Name</label>
                        <input
                          id="submit-lastname"
                          type="text"
                          v-model="lastName"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label for="submit-carnumber">Car Number</label>
                        <input
                          id="submit-carnumber"
                          type="text"
                          v-model="carnumber"
                          required
                        />
                      </div>
                      <br />
                      <v-btn type="submit" color="primary"
                        >Join the Challenge</v-btn
                      >
                    </form>
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-stepper-content>
      </v-stepper>
    </div>
    <form
      id="googleform"
      action="https://docs.google.com/forms/d/e/1FAIpQLSfrxF4fbhj1-6i8ZetEW8y8bZaJ1z_tpyOXNjHbEKwQib2i7A/formResponse"
      method="POST"
      @submit.prevent="submitGoogleForm"
    >
      <input type="text" name="entry.40609722" id="make" placeholder="make" />
      <input
        type="text"
        name="entry.1281760678"
        id="model"
        placeholder="model"
      />
      <input type="text" name="entry.1712825003" id="mods" placeholder="mods" />
      <input
        type="text"
        name="entry.1423215431"
        id="engine"
        placeholder="engine"
      />
      <input
        type="text"
        name="entry.1624417641"
        id="drivetrain"
        placeholder="drivetrain"
      />
      <input
        type="text"
        name="entry.618590664"
        id="suspension"
        placeholder="suspension"
      />
      <input
        type="text"
        name="entry.243170770"
        id="chassis"
        placeholder="chassis"
      />
      <input
        type="text"
        name="entry.1365604446"
        id="aero"
        placeholder="aerodynamic"
      />
      <input
        type="text"
        name="entry.128405044"
        id="tires"
        placeholder="tires"
      />
      <input type="text" name="entry.636352486" id="nafi" placeholder="nafi" />
      <input
        type="text"
        name="entry.413973931"
        id="firstname"
        placeholder="firstname"
      />
      <input
        type="text"
        name="entry.1022827596"
        id="lastname"
        placeholder="lastname"
      />
      <input type="text" name="entry.44168671" id="email" placeholder="email" />
      <input
        type="text"
        name="entry.1688656240"
        id="carnumber"
        placeholder="carnumber"
      />
      <input
        type="text"
        name="entry.394340936"
        id="timetrialclass"
        placeholder="timetrialclass"
      />
      <input
        type="text"
        name="entry.978014260"
        id="modpoints"
        placeholder="modpoints"
      />
      <input
        type="text"
        name="emailAddress"
        id="emailAddress"
        placeholder="email"
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    // consts
    ...window.config,
    // app state
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
      nafi: "",
    },
    score: 0,
    carclass: null,
    finalclass: null,
    e6: 1,
    e7: [],
  }),
  // google form submission
  email: "",
  firstName: "",
  lastName: "",
  carnumber: "",
  // Max note:
  // I used a new "models" JSON to integrate multiple original data source,
  // now map to the original data definition to fit the existing code.
  computed: {
    carmake() {
      return Object.keys(this.models);
    },
    model() {
      let model = {};
      for (let make in this.models) {
        if (!model[make]) {
          model[make] = [];
        }
        model[make].push(...Object.keys(this.models[make]));
      }
      return model;
    },
    // deprecated, query with this.models[make].baseClass instead
    classLookupTable() {
      return {};
    },
    // deprecated, query with this.models[make].baseClass instead
    oneStarModel() {
      return [];
    },
    // deprecated, query with this.models[make].baseClass instead
    twoStarModel() {
      return [];
    },
  },
  methods: {
    calculateScore() {
      console.log(this.carspec);

      // always reset
      this.score = 0;

      // Look up if model needs extra points penalty
      // if (this.oneStarModel.includes(this.carspec.model)) {
      //   this.score += 7;
      // }
      // if (this.twoStarModel.includes(this.carspec.model)) {
      //   this.score += 14;
      // }
      let baseClass =
        this.models[this.carspec.make][this.carspec.model].baseClass;
      let startCount = (baseClass.match(/\*/g) || []).length;

      this.score += startCount * 7;

      // Check NA or FI
      if (this.carspec.nafi == "FI") {
        this.score += 5;
      }

      // Adding engine
      this.carspec.engine.forEach((element) => {
        this.score += this.scoreLookupTable.engine[element];
      });

      // Adding drivetain
      this.carspec.drivetrain.forEach((element) => {
        this.score += this.scoreLookupTable.drivetrain[element];
      });

      // Adding suspension
      this.carspec.suspension.forEach((element) => {
        this.score += this.scoreLookupTable.suspension[element];
      });

      // Adding chassis
      this.carspec.chassis.forEach((element) => {
        this.score += this.scoreLookupTable.chassis[element];
      });

      // Adding areo
      this.carspec.areo.forEach((element) => {
        this.score += this.scoreLookupTable.areo[element];
      });

      // Adding tires
      this.carspec.tires.forEach((element) => {
        this.score += this.scoreLookupTable.tires[element];
      });

      // Adding weight
      this.carspec.weight.forEach((element) => {
        this.score += this.scoreLookupTable.weight[element];
      });

      // Getting base car class
      // this.carclass = this.classLookupTable[this.carspec.model];
      this.carclass = baseClass.replace(/\*/g, "");

      // Getting final car class
      var totalscore = this.score + this.classesScore[this.carclass];
      var level = parseInt(totalscore / 20);
      if (level > 7) {
        this.finalclass = "TTX";
      } else {
        this.finalclass = this.classes[level];
      }
    },

    joinChallenge() {
      // fill the google form, submit
      // then navigate to the lightspeed website homepage

      // FIXME:
      // direct DOM operation should be avoid in vue.js,
      // however I'm not an expert in vue, I had some issue in variable binding,
      // and I don't have time to debug on it,
      // so I hack it this way.

      // identity fields
      document.querySelector("#email").value = this.email;
      document.querySelector("#emailAddress").value = this.email;
      document.querySelector("#firstname").value = this.firstName;
      document.querySelector("#lastname").value = this.lastName;
      document.querySelector("#carnumber").value = this.carnumber;

      // simple fields
      document.querySelector("#make").value = this.carspec.make;
      document.querySelector("#model").value = this.carspec.model;
      document.querySelector("#nafi").value = this.carspec.nafi;
      document.querySelector("#model").value = this.carspec.model;
      document.querySelector("#timetrialclass").value = this.finalclass;
      document.querySelector("#modpoints").value = this.score;

      // array fields
      document.querySelector("#engine").value = this.carspec.engine.join(",");
      document.querySelector("#suspension").value =
        this.carspec.suspension.join(",");
      document.querySelector("#drivetrain").value =
        this.carspec.drivetrain.join(",");
      document.querySelector("#chassis").value = this.carspec.chassis.join(",");
      document.querySelector("#aero").value = this.carspec.areo.join(",");
      document.querySelector("#tires").value = this.carspec.tires.join(",");
      // document.querySelector("#weight").value = this.carspec.weight.join(",");

      // composite fields
      document.querySelector("#mods").value = JSON.stringify(this.carspec);

      // submit the form
      this.submitGoogleForm();
    },

    submitGoogleForm(e) {
      const form = (e && e.target) || document.querySelector("#googleform");
      const formData = new FormData(form);
      const url = form.getAttribute("action");

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            console.log(response);
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        })
        .catch((e) => {
          // alert("error:" + e.message);
          console.log("error:", e);
        })
        .finally(() => {
          // FIXME:
          // http request failed for unknown reason,
          // ignore it for now see what happens.
          //
          // navigate to the lightspeed page
          const lightspeedUrl = "https://lightspeed.motorsportreg.com/";
          window.open(lightspeedUrl, "_blank");
        });
    },

    getModel() {
      return this.model[this.carspec.make];
    },

    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style>
.display-none {
  display: none;
}
.v-list-item__title {
  white-space: inherit !important;
}
.select-box {
  background-color: black;
  color: rgb(36, 224, 99);
  margin: 1.2rem;
  padding: 1rem;
  border-radius: 1.2rem;
}
.v-btn {
  margin: 0 1rem 0 0;
}
.red-label legend.v-label {
  color: red;
}
.tire-item-template-checkbox label {
  color: rgba(0, 0, 0, 0.87) !important;
  margin: 0 0 0 1.5rem;
}
.tire-item-template-checkbox .v-messages {
  margin: 0 0 0 3.5rem;
}
.v-list-item {
  flex-wrap: wrap;
}
.score-panel > div {
  margin: 1rem;
}
.challenge hr {
  margin: 3rem 0 2rem 0;
}
.form-group {
  margin: 1rem 0;
}
.form-group label {
  display: inline-block;
  width: 100px;
}
.form-group input {
  border: 1px solid grey;
  border-radius: 2px;
}
#googleform {
  display: none;
}
</style>
