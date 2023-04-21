<template>
  <section class="content">
    <div class="content__header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xxl-6">
            <h1>Настройки</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xxl-6">
          <div class="settings">
            <div class="settings__head">
              Учётная запись
            </div>
            <div class="settings__block">
              <div class="settings__block-param">
                <label for="company">Компания</label>
                <input type="text" name="company" id="company" v-model="userData.companyname">
              </div>
              <div class="settings__block-param">
                <label for="login">Логин</label>
                <input type="text" name="login" id="login" v-model="userData.login">
              </div>
              <div class="settings__block-param">
                <label for="phone">Номер телефона</label>
                <input type="text" name="phone" id="phone" v-model="userData.phone">
              </div>
              <div class="settings__block-param">
                <label for="name">Имя</label>
                <input type="text" name="name" id="name" v-model="userData.fname">
              </div>
              <div class="settings__block-param none">
                <label for="lastname">Фамилия</label>
                <input type="text" name="lastname" id="lastname" v-model="userData.lname">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-6">
          <div class="settings">
            <div class="settings__head">
              Оповещения о новых подборках
            </div>
            <div class="settings__block">
              <span>Выберите, куда будут приходить уведомления при появлении автомобилей, которые подходят под критерии вашей подборки.</span>
              <p class="heading">Уведомления</p>
              <div class="settings__block-radiogroup">
                <div class="group">
                  <div>
                    <input type="radio" id="off" value="off" v-model="userData.notifytypestring" >
                    <label for="off">Выкл</label>
                  </div>
                </div>
                <div class="group" v-if="userData.notifytypestring === 'Push'">
                  <div>
                    <input type="radio" id="push" value="Push" v-model="userData.notifytypestring">
                    <label for="push">Push</label>
                  </div>
                </div>
                <div class="group last">
                  <div>
                    <input type="radio" id="email" value="Email" v-model="userData.notifytypestring">
                    <label for="email">Email</label>
                  </div>
                  <input v-if="userData.notifytypestring === 'Email'" type="text" name="phone" id="phone" class="input" v-model="userData.email">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-6">
          <div class="settings">
            <div class="settings__head"></div>
            <div class="settings__block">
              <div class="settings__block-buttons">
                <button @click="putData">Сохранить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NuxtTutorial', 

  async fetch() {
    await this.$store.dispatch('login/fetchUserToken', {login: "9266715863", password: "5731232850"})
    await this.$store.dispatch('user/fetchUserData', {userId: this.userStore.userId, userToken: this.userStore.userToken})
    await this.getUserData()
  },

  data() {
    return {
      userData: {}
    }
  },
  computed: {
    userStore() {
      return this.$store.state.login
    },
  },
  methods: {
    async getUserData() {
      const data = JSON.parse(JSON.stringify(this.$store.state.user.userData))
      // Пришлось создать собственноручный JSON, ибо АПИ не принимала JSON из запроса выше
      this.userData = {
        "autoru": data.autoru,
        "companyid": data.companyid,
        "companyname": data.companyname,
        "email": data.email ? data.email : '',
        "fname": data.fname,
        "id": data.id,
        "lname": data.lname,
        "login": data.login,
        "notifytypestring": data.notifytypestring,
        "phone": data.phone,
        "sendMethod": data.sendMethod
      }
    },
    async putData() {
      await this.$store.dispatch('user/putUserData', {user: {userId: this.userStore.userId, userToken: this.userStore.userToken}, userData: this.userData})
    }
  }
}
</script>


<style lang="scss" scoped>
.content {
  input {
    color: #222;
    font-size: 15px;
    font-weight: 500;
    padding: 10px 15px;

    transition: all .3s;
    border-radius: 5px;
    border: 1px solid #e1e1e3;

    &:focus {
      border: 1px solid #2dc574;
      outline: none;
    }
    &:active {
      border: 1px solid #2dc574;
    }
  }
  &__header {
    background-color: #f9f9fc;
    margin-bottom: 20px;

    h1 {
      color: #000;
      font-weight: 600;
      font-size: 28px;
    }
  }
  .settings {
    display: flex;
    flex-direction: row;

    &__head {
      font-size: 18px;
      font-weight: 600;
      color: #222;

      flex: 0 0 250px;
      -webkit-flex: 0 0 250px;
      -webkit-box-flex: 0;
    }
    &__block {
      display: flex;
      flex-direction: column;
      width: 50%;

      span {
        color: #686869;
        font-size: 15px;
        line-height: 17px;
        font-weight: 500;
      }
      .heading {
        color: #222;
        font-size: 15px;
        font-weight: 600;
      }
      &-buttons {
        margin-top: 20px;
        border-top: 1px solid #e1e1e3;
        width: 100%;

        button {
          margin-top: 15px;
          width: 100%;
          font-size: 15px;
          font-weight: 600;
          padding: 15px 0;
          border-radius: 5px;
          background-color: #2dc574;
          color: #fff;
          border: 0;
          cursor: pointer;
        }
      }
      &-radiogroup {
        .group {
          padding: 10px 0;
          border-bottom: 1px solid #e1e1e3;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all .3s;

          label {
            cursor: pointer;
            padding-left: 5px;
            color: #222;
            font-size: 15px;
            font-weight: 500;
          }
        }
        .last {
          border-bottom: 0;
        }
      }
      &-param {
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;

        label {
          color: #222;
          font-size: 15px;
          font-weight: 500;
          max-width: 12rem;
          flex: 0 0 12rem;
          -webkit-flex: 0 0 12rem;
          -webkit-box-flex: 0;
        }
        input {
          flex: 1;
          -webkit-flex: 1;
          -webkit-box-flex: 1;
        }
      }
    }
  }
}
</style>