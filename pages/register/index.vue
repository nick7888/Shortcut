<template>
  <section class="container">
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-row>
          <b-col col md="6">
            <b-form-group label="FULL NAME" label-for="input-fullname">
              <b-form-input
                id="input-fullname"
                v-model="form.fullname"
                required
                placeholder="SASITHORN SINJAROENPONG"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col col md="6">
            <b-form-group label="NICKNAME" label-for="input-name">
              <b-form-input id="input-name" v-model="form.name" required placeholder="CHOMPOO"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col col md="6">
            <b-form-group label="PHONE NUMBER" label-for="input-phone">
              <b-form-input id="input-phone" v-model="form.phone" required placeholder="0836674545"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col col md="6">
            <b-form-group label="EMAIL" label-for="input-email">
              <b-form-input
                id="input-email"
                v-model="form.email"
                type="email"
                required
                placeholder="SASITHORN@SHORYCUT.COM"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col col md="6">
            <b-form-group label="Sex">
              <b-row>
                <b-col col md="6">
                  <b-form-radio v-model="form.sex" name="some-radios" value="male">MALE</b-form-radio>
                </b-col>
                <b-col col md="6">
                  <b-form-radio v-model="form.sex" name="some-radios" value="female">FEMALE</b-form-radio>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col col md="6">
            <b-form-file
              v-model="file"
              :state="Boolean(file)"
              placeholder="Choose a file..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
          </b-col>
        </b-row>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>

        <b-button variant="primary" @click="writeToFirestore" :disabled="writeSuccessful">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </b-button>
      </b-form>
    </div>
  </section>
</template>

<script>
import { fireDb } from "~/plugins/firebase.js";
export default {
  data() {
    return {
      form: {
        fullname: "",
        name: "",
        phone: null,
        email: "",
        sex: "male"
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true,
      file: null,
      writeSuccessful: false
    };
  },
  methods: {
    async writeToFirestore() {
      const ref = fireDb.collection("users").doc();
      // const document = {
      //   text: "This is a test message."
      // };
      try {
        await ref.set(this.form);
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      this.writeSuccessful = true;
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      console.log(this.users);
      // this.users.push(this.form);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.fullname = "";
      this.form.name = "";
      this.form.phone = "";
      this.form.email = "";
      this.form.sex = "male";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
