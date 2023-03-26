<template>
  <div class="page-wrapper">
    <h2 class="spacer-large">Resources for Developers for Integration with Ergo Names</h2>
    <div class="row spacer-large">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Documentation</h5>
            <p class="card-text">Ergo Names team has curated a detailed repository to kickstart the integration journey for dApp developers.</p>
            <a href="#" class="btn btn-primary">Link</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">GitHub</h5>
            <p class="card-text">Ergo Names team has opensourced the codebase which powers Ergo Names project.</p>
            <a href="https://github.com/ergonames" class="btn btn-primary">Link</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Discord</h5>
            <p class="card-text">Ergo Names team is available on discord to answer any open question or query from the community.</p>
            <a href="https://discord.gg/XfMMM4nXwR" class="btn btn-primary">Link</a>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: {
        inner: 'For Developers',
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} developers page`,
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
    margin-top: 60px;
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
