<template>
    <div>
        <link rel="preconnect" href="https://fonts.gstatic.com"> 
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap" rel="stylesheet">
        <h2 id="title" class="heading" style="padding-left:300px; padding-top:20px; padding-bottom:10px; font-family:'Baloo 2'">My Profile</h2>
        
        <div style="padding-left:300px">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
            <div id="profile-container">
                <img class="profileImage" id="profileImage" @click="chooseFile" src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" />
            </div>

            <div class="form-control" style="padding-bottom:20px"> 
                <label class="header">Click to add/change profile picture</label>

                <input @change="fasterPreview()" style="display:none" ref="fileInput" id="image" type="file" name="profile_photo" placeholder="Photo" required="" capture>
            </div>
            <span style="font-size:20px; font-family:'Baloo 2'">Name: </span><div style="display: flex; width:500px"><v-text-field label="First Name" filled rounded></v-text-field><v-text-field label="Last Name" filled rounded style="padding-left: 20px; padding-right: 20px"></v-text-field></div>
            <span style="font-size:20px; font-family:'Baloo 2'">Hobbies/Interests: </span><v-textarea label="What are some topics and activities that you're interested in?" filled rounded style="width:600px"></v-textarea>
            <span style="font-size:20px; font-family:'Baloo 2'">Bio: </span>
            <v-textarea label="Introduce yourself!" filled rounded style="width:600px"></v-textarea>
        </div>

        <div class="text-center" style="padding-bottom:20px">
    <v-btn
      rounded
      color="green"
      dark
      @click="saveProfile"
    >
      Save
    </v-btn>
  </div>

    </div>
</template>

<script >
export default {
  name: "MyProfile",
  methods: {
      chooseFile() {
          this.$refs.fileInput.click()
      },
      fasterPreview() {
          let uploader = document.getElementById("image")
          if ( uploader.files && uploader.files[0]) {
              document.getElementById("profileImage").src =window.URL.createObjectURL(uploader.files[0])
          }
      },
      saveProfile() {
          alert("Profile saved!")
      }
    
  }
};
</script>

<style scoped>
.profileImage {
    width: 200px;
    height: 200px;
    overflow: hidden;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
}
</style>