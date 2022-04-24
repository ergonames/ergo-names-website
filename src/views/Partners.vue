<template>
  <div class="page-wrapper">
    <h2 class="spacer-large">Resources for partners to connect with us</h2>

    <div class="row spacer-large">
      <div class="col-sm-6">
        <div class="card text-center">
          <div class="card-header">
            For General Enqueries
          </div>
          <div class="card-body">
            <a href="mailto:contact@ergonames.com" class="btn btn-primary">contact@ergonames.com</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card text-center">
          <div class="card-header">
            For Marketing Enqueries
          </div>
          <div class="card-body">
            <a href="mailto:marketing@ergonames.com" class="btn btn-primary">marketing@ergonames.com</a>
          </div>
        </div>
      </div>
    </div>
      
      
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: {
        inner: 'For Partners',
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} partners page`,
          id: 'desc',
        },
      ],
    }
  },
  computed: mapState('app', ['appTitle']),
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
    padding-top: 60px;
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
