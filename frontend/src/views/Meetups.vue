<template>
    <div>
        <link rel="preconnect" href="https://fonts.gstatic.com"> 
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap" rel="stylesheet">
        <h4 class="heading" style="padding-left:580px; padding-top:20px; padding-bottom:10px; font-family: 'Baloo 2'">Attend a meetup to connect with other bright women!</h4>
        <div style="display:flex;">
    
        <v-text-field v-model="searchsubject" label="Subject" filled rounded style="width:150px; padding-left:20px;"></v-text-field>
        <v-text-field v-model="searchlocation" label="Location" filled rounded style="width:150px; padding-left:20px;"></v-text-field>
        <v-text-field v-model="searchdate" label="Date" filled rounded style="width:150px; padding-left:20px; padding-right:20px;"></v-text-field>
        <span style="padding-top:10px">
        <v-btn 
      rounded
      color="green"
      dark
      @click="search"
    >
      Search
    </v-btn>
    </span>

    <span class="meetup" style="padding-right:20px; font-size:20px">
        <a @click="dialogVisible = true">Create a meetup!</a>
    <!--<el-card>
      <h2>Can't find the perfect meet up? Create one yourself!</h2>
      <el-form
        class="meetup-form"
        :model="model"
        :rules="rules"
        ref="form"
        @submit.native.prevent="create">

        <el-form-item>
          <v-text-field v-model="model.subject" label="Subject" filled rounded style="padding-left: 20px; padding-right: 20px"></v-text-field>
        </el-form-item>
        <el-form-item>
          <v-text-field v-model="model.location" label="Location" filled rounded style="padding-left: 20px; padding-right: 20px"></v-text-field>
        </el-form-item>
        <el-form-item>
          <v-text-field v-model="model.date" label="Date" filled rounded style="padding-left: 20px; padding-right: 20px"></v-text-field>
        </el-form-item>
        <el-form-item>
          <v-textarea v-model="model.description" label="Description" filled rounded style="width:600px"></v-textarea>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="create-button"
            type="primary"
            native-type="submit"
            block
          >Create</el-button>
        </el-form-item>
      </el-form>
    </el-card>-->
    </span>
    </div>
    <el-dialog
        :visible.sync="dialogVisible"
        width="25%"
    >
            <el-form>
            <el-form-item>
                <span style="font-family: 'Baloo 2'; color:black; font-size:30px; padding-left:80px">Create Meetup</span>
            </el-form-item>
            <el-form-item>
                <v-text-field v-model="subject" label="Subject" filled rounded style="width:90%;padding-left: 20px; padding-right: 20px"></v-text-field>
            </el-form-item>
            <el-form-item>
                <v-text-field v-model="location" label="Location" filled rounded style="width:90%;padding-left: 20px; padding-right: 20px"></v-text-field>
            </el-form-item>
            <el-form-item>
                <v-text-field v-model="date" label="Date" filled rounded style="width:90%;padding-left: 20px; padding-right: 20px"></v-text-field>
            </el-form-item>
            <el-form-item>
                <v-textarea v-model="description" label="Description" filled rounded style="width:350px"></v-textarea>
            </el-form-item>
            <el-form-item>
                <el-button
                :loading="loading"
                class="create-button"
                type="primary"
                @click="dialogVisible = false"
                native-type="submit"
                style="background-color:red; font-size:20px"
                block
                >Cancel</el-button>
            </el-form-item>
            <el-form-item>
            <el-button
                :loading="loading"
                class="create-button"
                type="primary"
                @click="createMeetup"
                native-type="submit"
                style="background-color:green; font-size:20px"
                block
            >Create</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>

    <div v-if="this.coding" style="padding-left:600px; font-size:20px">
        <el-card class="card" style="width:40%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    Coding and Coffee</b>
                </span><br>
                <span>
                    2/3/2021
                </span><br>
                <span>
                    591 Lexington Ave, New York, NY 10022
                </span>
            </div>
        </el-card><br>

        <el-card class="card" style="width:40%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    Coding Circle</b>
                </span><br>
                <span>
                    2/3/2021
                </span><br>
                <span>
                    10 E 53rd St, New York, NY 10022
                </span>
            </div>
        </el-card><br>

        <el-card class="card" style="width:40%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    Coding Together</b>
                </span><br>
                <span>
                    2/3/2021
                </span><br>
                <span>
                    2289 Broadway, New York, NY 10024
                </span>
            </div>
        </el-card><br>

        <div v-if="this.meetupCreated">
            <el-card class="card" style="width:40%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    Coding Together for Motivation</b>
                </span><br>
                <span>
                    2/3/2021
                </span><br>
                <span>
                    1000 Broadway, New York, NY 10024
                </span>
            </div>
        </el-card><br>
        </div>    
        
        <div style="padding-left:180px;"><u>1</u>  <u>2</u>  <u>3</u>
        </div>
    </div>

    <div v-if="this.fishing" style="padding-left:600px; font-size:20px">
        <el-card class="card" style="width:40%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    Fishing with Friends</b>
                </span><br>
                <span>
                    2/1/2021
                </span><br>
                <span>
                    653 Del Monte Ave, Monterey, CA 93940
                </span>
            </div>
        </el-card><br>

        <el-card class="card" style="width:40%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    Fishing Beginners!</b>
                </span><br>
                <span>
                    2/1/2021
                </span><br>
                <span>
                    135 Ward St, San Francisco, CA 94134
                </span>
            </div>
        </el-card><br>

        <el-card class="card" style="width:40%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    Learn Fishing</b>
                </span><br>
                <span>
                    2/1/2021
                </span><br>
                <span>
                    154 W 10th St, Tracy, CA 95376
                </span>
            </div>
        </el-card><br>
        <div style="padding-left:180px;"><u>1</u>  <u>2</u>  <u>3</u>
        </div>
    </div>   
  </div>
</template>

<script>
export default {
  name: "Meetups",
  data() {
    return {
        subject: "",
        location: "",
        date: "",
        description: "",
        searchsubject: "",
        searchlocation: "",
        searchdate: "",
      coding: false,
      fishing: false,
      dialogVisible: false,
      meetupCreated: false,
      model: {
        subject: "",
        location: "",
        date: "",
        description: "",
      },
      loading: false,
      rules: {
      }
    };
  },
  methods: {
    search() {
        if (this.searchsubject == "coding") {
            this.fishing = false;
            this.coding = true;
        } else if (this.searchsubject == "fishing") {
            this.coding = false;
            this.fishing = true;
        }
    },
    createMeetup() {
        this.dialogVisible = false;
        this.meetupCreated = true;
    }   
  }
};
</script>

<style scoped>
.meetup {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.create-button {
  width: 100%;
  margin-top: 10px;
}
.meetup-form {
  width: 290px;
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
.meetup .el-input__inner:hover {
  border-color: $teal;
}
.meetup .el-input__prefix {
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
.meetup .el-input input {
  padding-left: 35px;
}
.meetup .el-card {
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
.meetup .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
}
</style>



