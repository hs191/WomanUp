<template>
 <div style="height:100%;background-image: url('https://cdn4.vectorstock.com/i/1000x1000/09/73/diverse-international-group-standing-happy-vector-23850973.jpg'); background-size:cover; background-position: -60px;">
    <span style="font-size:60px; padding-left:700px; font-family: 'Baloo 2'">WomanUp</span>
  <div class="login" style="padding-top:180px">
       <link rel="stylesheet" href="http://www.elementscss.com/css/elementscss.min.css">
        <link rel="preconnect" href="https://fonts.gstatic.com"> 
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap" rel="stylesheet">
    <el-card>
      <h2 style="padding-left:90px; font-family: 'Baloo 2'">Log In</h2>
      <el-form
        class="login-form"
        :model="model"
        :rules="rules"
        ref="form"
        @submit.native.prevent="login"
      >
      <span style="font-size:20px; padding-left:80px">Continue using</span><br>
      <a href="https://www.facebook.com" style="font-size:30px; padding-left:100px">
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
      </a>

      <a href="https://www.google.com/gmail/" style="font-size:30px; padding-left:10px">
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google' }"/>
      </a><br><br>

      <span style="font-size:20px; padding-left:135px;">or</span>
      <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous"
    />
        <el-form-item style="padding-top:20px" prop="username">
          <el-input v-model="model.username" placeholder="Username" prefix-icon="fas fa-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="model.password"
            placeholder="Password"
            type="password"
            prefix-icon="fas fa-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="login-button"
            type="primary"
            native-type="submit"
            style="background-color:green; font-size:20px"
            @click="login"
            block
          >Login</el-button>
        </el-form-item>
        <span style="font-size:15px">Don't have an account?</span>
        <a style="font-size:15px" class="sign-up" @click="pushSignUp"> Sign up</a>
      </el-form>
    </el-card>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faFacebook)
library.add(faGoogle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

export default {
  name: "login",
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      loading: false,
      rules: {
        username: [
          {
            required: true,
            message: "Username is required",
            trigger: "blur"
          },
          {
            min: 4,
            message: "Username length should be at least 5 characters",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" },
          {
            min: 5,
            message: "Password length should be at least 5 characters",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    pushSignUp() {
        this.$router.push('/signup')
    },
    login() {
        var r = this.$router
       setTimeout(function(){ r.push('/home') }, 1000);
    }
  }
};
</script>

<style scoped>
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 290px;
}
.forgot-password {
  margin-top: 10px;
}
</style>
<style lang="scss">
$teal: rgb(0, 124, 137);
.el-button--primary {
  background: $teal;
  border-color: $teal;

  &:hover,
  &.active,
  &:focus {
    background: lighten($teal, 7);
    border-color: lighten($teal, 7);
  }
}
.login .el-input__inner:hover {
  border-color: $teal;
}
.login .el-input__prefix {
  background: rgb(238, 237, 234);
  left: 0;
  height: calc(100% - 2px);
  left: 1px;
  top: 1px;
  border-radius: 3px;
  .el-input__icon {
    width: 30px;
  }
}
.login .el-input input {
  padding-left: 35px;
}
.login .el-card {
  padding-top: 0;
  padding-bottom: 30px;
}
h2 {
  font-family: "Open Sans";
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  padding-bottom: 20px;
}
a {
  color: $teal;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    color: lighten($teal, 7);
  }
}
.login .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
}
</style>
