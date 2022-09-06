<template>
  <div class="page-wrapper">
    <h2 class="spacer-large">Kickstart your Ergo Names journey</h2>

    <br />
    <div class="col-sm-8">
      <b-form @submit="submitWaitList" @reset="onReset">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <b-form-input
            id="input-1"
            v-model="form.emailAddress"
            placeholder="Enter email address"
            type="email"
            class="form-control"
            required
          ></b-form-input>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputMessage" class="form-label">Message</label>
          <b-form-input
            id="input-2"
            v-model="form.message"
            placeholder="Enter your message (optional)"
            type="text"
            class="form-control"
          ></b-form-input>
        </div>

        <br />
        <b-button type="submit" variant="primary" class="btn btn-primary">Join the waitlist</b-button>
      </b-form>
      <p v-if="registrationSuccessful">
          {{form.emailAddress}} waitlist registration is successful.
      </p>
      <p v-if="registrationFailure">
          Sorry, {{form.emailAddress}} waitlist registration is not successful.
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from "axios"

export default {
  head() {
    return {
      title: {
        inner: 'Waitlist',
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} waitlist`,
          id: 'desc',
        },
      ],
    }
  },
  data() {
    return {
      form: {
        emailAddress: ''
      },
      registrationSuccessful: false,
      registrationFailure: false,
      assetTransmissionSuccessful: false,
      assetTransmissionFailure: false,
      endpoint: 'https://submit-form.com/O0wBckPZ',
    }
  },
  computed: mapState('app', ['appTitle']),
  methods: {
    submitWaitList(event) {
      event.preventDefault()
      // eslint-disable-next-line
      // alert(JSON.stringify(this.form))
      // AJAX Call
      const data = {
        email: this.form.emailAddress,
        message: this.form.message
      }
      axios.post(this.endpoint, data);

      this.registrationSuccessful = true
      this.registrationFailure = false
    },
    sendAsset(event) {
      event.preventDefault()
      // eslint-disable-next-line
      alert(JSON.stringify(this.form))
      // AJAX Call
      this.assetTransmissionSuccessful = true
      this.assetTransmissionFailure = false
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.emailAddress = ''
      // Trick to reset/clear native browser form validation state
      this.registrationSuccessful = false
      this.registrationFailure = false
      // TODO: validate if nextTick logic is correct
      this.$nextTick(() => {
        this.registrationSuccessful = false
        this.registrationFailure = false
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .spacer-large {
    margin-top:60px;
  }

  .logo {
    margin-bottom: 3rem;
  }

  .home-page-title {
    text-align: center;
  }

  .documentation-link {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #5d6788;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    text-decoration: none;
    width: fit-content;
    font-weight: 500;
  }
}
</style>
