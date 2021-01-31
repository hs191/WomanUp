<template>
    <v-app>
        <v-main>
            <link rel="stylesheet" href="http://www.elementscss.com/css/elementscss.min.css">
            <link rel="preconnect" href="https://fonts.gstatic.com"> 
            <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap" rel="stylesheet">
            <div v-if="$route.name != 'Login' && $route.name != 'SignUp'">
            <span style="font-size:60px; padding-left:700px; font-family: 'Baloo 2'">WomanUp</span>
            </div>
            <el-menu
                v-if="$route.name != 'Login' && $route.name != 'SignUp'"
                class="el-menu-demo"
                mode="horizontal"
                style="display: flex; justify-content: space-between; align-items: center; padding-top:30px"
            >
                <el-menu-item index="1" @click="pushMeetups"
                ><span class="el-icon-users"></span>
                <span style="font-family: 'Baloo 2'; font-size:20px">Meetups</span></el-menu-item>
                <el-menu-item index="2" @click="pushSupportGroups"
                ><span class="el-icon-heart-empty"></span>
                <span style="font-family: 'Baloo 2'; font-size:20px">Support Groups</span></el-menu-item>
                <el-menu-item index="3" @click="pushHome">
                    <span class="el-icon-home"></span>
                    <span style="font-family: 'Baloo 2'; font-size:20px">Home</span>
                </el-menu-item>
                <el-menu-item index="4" @click="pushResources"
                    ><span class="el-icon-star-empty"></span>
                    <span style="font-family: 'Baloo 2'; font-size:20px">Resources</span></el-menu-item>
                <el-menu-item index="5" @click="pushMyProfile"
                ><span class="el-icon-user"></span>
                <span style="font-family: 'Baloo 2'; font-size:20px">My Profile</span></el-menu-item>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

                <el-menu-item index="6" @click="pushLogin"
                ><span class="fa fa-sign-out" style="font-size:24px"></span>
                <span style="font-family: 'Baloo 2'; font-size:20px">   Sign out</span></el-menu-item>
            </el-menu>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
//import { mapActions, mapGetters } from 'vuex'
//import state from './store/index.js'


export default {
    name: 'App',
    data() {
    },
    methods: {
        pushMeetups() {
            this.$router.push('/meetups')
        },
        pushSupportGroups() {
            this.$router.push('/supportgroups')
        },
        pushHome() {
            this.$router.push('/home')
        },
        pushResources() {
            this.$router.push('/resources')
        },
        pushMyProfile() {
            this.$router.push('/myprofile')
        },
        pushLogin() {
            this.$router.push('/login')
        }
    },
}
</script>