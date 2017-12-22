<template>
  <div class="var-profile-wrapper">
    <div v-if="user" class="var-profile" :style="getBackground">
      <div class="var-profile__avatar-container">
        <img class="image" :src="avatar"/>
      </div>
      <h3 class="name">
        {{ user.name }}
      </h3>
      <div class="var-tabs">
        <h5 
          class="var-tabs__tab"
          :class="[activeTab === 'balance' ? 'active-tab' : '']"
          @click="choseTab('balance')"
        >
          Balance
        </h5>
        <h5
          class="var-tabs__tab"
          :class="[activeTab === 'transactions' ? 'active-tab' : '']"
          @click="choseTab('transactions')"
        >
          Transactions
        </h5>
      </div>
    </div>
    <div class="profile-tab balance" v-if="activeTab === 'balance'">
      <h2 class="amount">324</h2>
    </div>
    <div class="profile-tab" v-if="activeTab === 'transactions'">
      <div class="single-transaction" v-for="(t,i) in transactions" :key="i">
        <div class="single-transaction__header">
          {{ t.date }} {{ t.time }}
        </div>
        <div class="single-transaction__body">
          <div class="top">
            <i v-if="t.type === 'input'" class="fa fa-level-up" style="color: green;"></i>
            <i v-if="t.type === 'withdraw'" class="fa fa-level-down" style="color: red;"></i>
            from {{ t.source }}
          </div>
          <div class="middle">
            <div class="date">
              <b>{{ t.type }} from {{ t.source }}</b>
              <p>{{ t.date }} {{ t.time }}</p>
            </div>
            <h2 class="amount">{{ t.amount }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-undef */
  import { mapGetters } from 'vuex'
  import avatar from '@/assets/ryan.jpg'
  import { transactions } from './transactionsMock'

  export default {
    data() {
      return {
        avatar,
        transactions,
        activeTab: 'balance'
      }
    },
    watch: {
      actTab() {}
    },
    computed: {
      ...mapGetters({
        user: 'user'
      }),
      actTab() {
        const { type } = this.$route.params
        this.activeTab = type || 'balance'
      },
      getBackground() {
        return 'background-image:' + this.getLinear + ', url(' + this.avatar + ');' + this.getBgPos
      },
      getLinear() {
        return '-webkit-linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.8))'
      },
      getBgPos() {
        return 'background-size:cover;background-position: center center;padding-top: 20px;height: auto;'
      }
    },
    methods: {
      choseTab(_tab) {
        // const { type } = this.$route.params
        if (_tab === 'balance') this.activeTab = 'balance'
        else if (_tab === 'transactions') this.activeTab = 'transactions'
      }
    },
    mounted() {
      this.activeTab
    }
  }
</script>

<style scoped lang="scss">
  .active-tab {
    color: rgba(249,99,50,1)!important;
    border-bottom: 2px solid rgba(249,99,50,1)!important;
    transition: ease-in-out all .2s;
  }
  .var-profile-wrapper {
    
    .var-profile {
      text-align: center;
      &__avatar-container {
        width: 123px;
        height: 123px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.3);
        .image {
          max-width: 100%;
          border-radius: 1px;
          margin-bottom: 25px;
        }
      }
      .name {
        font-size: 2em;
        text-align: center;
        margin: 25px 0;
        color: #fff;
      }
    }
    .var-tabs {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      padding: 0 15%;
      justify-content: space-between;
      &__tab {
        font-size: 20px;
        text-align: center;
        margin: 0 0 25px 0;
        color: #fff;
        width: 90px;
        border-bottom: 2px solid #fff;
        padding: 0 0 10px 0;
        transition: ease-in-out all .2s;
      }
    }
  }
  .profile-tab {
    padding: 20px 10px 13% 10px;
    background: #eee;
    min-height: 55vh;
    .single-transaction {
      margin-bottom: 20px;
      text-align: -webkit-center;
      &__header {
        background: rgb(194, 194, 194);
        padding: 2px;
        color: #fff;
        border-radius: 2px;
        width: 70px;
        font-size: 14px;
        margin-bottom: 10px;
      }
      &__body {
        border-radius: 5px;
        border: 1px solid #ddd;
        background: #fff;
        .top {
          border-bottom: 1px solid #ddd;
          padding: 15px;
          text-align: -webkit-left;
          color: #818181;
        }
        .middle {
          border-bottom: 1px solid #ddd;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #818181;
          .date {
            color: rgb(198, 198, 198);
            display: flex;
            flex-direction: column;
            align-self: flex-start;
            b {
              margin: 5px 0;
              color: #818181;
              font-weight: 900;
              text-transform: capitalize;
            }
            p {
              margin: 0;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  .balance {
      display: flex;
      text-align: center;
      justify-content: center;
      padding: 30% 0!important;
      min-height: 55vh;
      .amount {
        font-size: 35px;
      }
    }
  .amount::after {
    content: '元';
  }
</style>
