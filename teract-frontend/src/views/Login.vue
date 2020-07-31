<template>
  <div id="login">
    <div>
      <el-card>
        <header slot="header" class="clearfix">
          <img src="../assets/logo.png" />
          Company
        </header>
        <main>
          <el-form :model="loginForm" :rules="validationRules" ref="loginForm">
            <el-form-item prop="id">
              <el-input v-model="loginForm.id" :placeholder="$t('user.id')" prefix-icon="el-icon-user-solid" @keyup.enter.native="login" autofocus></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="loginForm.password" :placeholder="$t('user.password')" prefix-icon="el-icon-lock" @keyup.enter.native="login" show-password></el-input>
            </el-form-item>
            <div id="login-button-container">
              <el-button type="primary" @click="login">{{ $t('login.login') }}</el-button>
            </div>
          </el-form>
        </main>
      </el-card>
      <footer>
        <a href="https://github.com/alex-c/teract" target="_blank">
          <GithubIcon size="14" color="white"></GithubIcon>
          Teract
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
import GithubIcon from '@/components/reusable/icons/GithubIcon.vue';

export default {
  name: 'Login',
  components: { GithubIcon },
  data() {
    return {
      loginForm: {
        id: '',
        password: '',
      },
    };
  },
  computed: {
    uiCollapsed() {
      return this.$store.state.ui.uiCollapsed;
    },
    validationRules() {
      return {
        id: { required: true, message: this.$t('login.validation.id'), trigger: 'blur' },
        password: { required: true, message: this.$t('login.validation.password'), trigger: 'blur' },
      };
    },
  },
  methods: {
    login: function() {
      /*this.$refs['loginForm'].validate(valid => {
        if (valid) {
          this.$api
            .login(this.loginForm.id, this.loginForm.password)
            .then(response => {
              const token = response.body.token;
              this.$store.commit('login', token);
              this.$router.push('/dashboard');
            })
            .catch(error => {
              if (error.status === 401) {
                this.badLogin = true;
              } else {
                this.handleApiError(error);
              }
            });
        } else {
          return false;
        }
      });*/
      this.$router.push('/dashboard');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/colors.scss';

#login {
  background-color: $color-primary;
  height: 100%;
  display: grid;
  & > div {
    margin: auto;
    width: 400px;
  }
}

header {
  font-size: 24px;
  img {
    width: 32px;
    height: 32px;
    position: relative;
    top: 8px;
  }
}

main {
  text-align: left;
}

#login-button-container {
  text-align: center;
}

footer {
  margin: 8px;
  color: white;
  a:link {
    color: white;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>
