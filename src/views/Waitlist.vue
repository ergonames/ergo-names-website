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

        <br />
        <b-button type="submit" variant="primary" class="btn btn-primary">Join the waitlist</b-button>
      </b-form>
      <p v-if="registrationSuccessful">
          {{form.emailAddress}} registration is successful.
      </p>
      <p v-if="registrationFailure">
          Sorry, {{form.emailAddress}} registration is not successful.
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
      endpoint: 'https://formspree.io/f/xpzbowqg',
    }
  },
  computed: mapState('app', ['appTitle']),
  methods: {
    submitWaitList(event) {
      event.preventDefault()
      // eslint-disable-next-line
      alert(JSON.stringify(this.form))
      // AJAX Call

      // axios.post('https://formspree.io/f/xpzbowqg',{
      //    email: this.form.emailAddress,          
      // ).then((response) => {
      //   alert(response.data); 
      //    this.nameMsg = '';
      //    this.emailMsg = '';
      //    this.messageMsg = '';
      //    this.loadingTxt = false;  
      //    //i redirect my app to '/success' route once payload completed.  
      //    this.$router.push({ path: '/success' });      
      // }).catch((error) => {        
      // if (error.response) {          
      //     // eslint-disable-next-line no-alert
      //     alert(error.response.data); // => the response payload
      // }});
      // const response = await this.$axios.post(this.endpoint, data)
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
