<template>
<div style="height:100%;background-image: url('https://www.wealthmanagement.com/sites/wealthmanagement.com/files/diverse-women-illustration.jpg'); background-size:cover; background-position: -60px;">
    <span style="font-size:60px; padding-left:700px; font-family: 'Baloo 2'">WomanUp</span>
  <div class="signup" style="padding-top:180px">
      <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="http://www.elementscss.com/css/elementscss.min.css">
        <link rel="preconnect" href="https://fonts.gstatic.com"> 
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap" rel="stylesheet">
    <el-card>
        <v-alert type="success" :value="alertVisible" >
            Account successfully created!
        </v-alert>
      <h2 style="height:50px;padding-left:80px; font-family: 'Baloo 2'">Sign Up</h2>
      <el-form
        class="signup-form"
        :model="model"
        :rules="rules"
        ref="form"
        @submit.native.prevent="signup"
      >
        <el-form-item prop="email">
            <el-input v-model="model.email" placeholder="Email" prefix-icon="fas fa-envelope"></el-input>
        </el-form-item>    

        <el-form-item prop="username">
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

        <el-form-item prop="confirmpassword">
          <el-input
            v-model="model.confirmpassword"
            placeholder="Confirm Password"
            type="password"
            prefix-icon="fas fa-lock"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            :loading="loading"
            class="signup-button"
            type="primary"
            native-type="submit"
            style="background-color:green; font-size:20px"
            @click="showAlert"
            block
          >Sign Up</el-button>
        </el-form-item>
        <span style="font-size:15px">Already have an account? </span>
        <a style="font-size:15px" class="log-in">Log in</a>
      </el-form>
    </el-card>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "SignUp",
  data() {
    return {
      alertVisible: false,
      model: {
        email: "",
        username: "",
        password: "",
        confirmpassword: ""
      },
      loading: false,
      rules: {
        email: [
            {
            required: true,
            message: "Email is required",
            trigger: "blur"
          },
        ],
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
        ],
        confirmpassword: [
          { required: true, message: "Please confirm your password", trigger: "blur" },
        ]
      }
    };
  },
  methods: {
    showAlert() {
        this.alertVisible = true
        var r = this.$router
        setTimeout(function(){ r.push('/login') }, 2000);
    },
    simulateSignUp() {
      return new Promise(resolve => {
        setTimeout(resolve, 800);
      });
    },
    pushLogin() {
        this.$router.push('/login')
    },
    async signup() {
        const json = JSON.stringify({
            Username: this.username,
            Password: this.password,
            ConfirmPassword: this.confirmpassword,
            Google: null,
            Facebook: null,
            EmailID: this.email
        })
    }
  }
};
</script>

<style scoped>
.signup {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup-button {
  width: 100%;
  margin-top: 40px;
}
.signup-form {
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
.signup .el-input__inner:hover {
  border-color: $teal;
}
.signup .el-input__prefix {
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
.signup .el-input input {
  padding-left: 35px;
}
.signup .el-card {
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
.signup .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
}
</style>
