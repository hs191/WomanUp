<template>
    <div>
        <link rel="preconnect" href="https://fonts.gstatic.com"> 
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap" rel="stylesheet">
        <h4 class="heading" style="padding-left:630px; padding-top:20px; padding-bottom:10px; font-family:'Baloo 2'">Learn about upcoming events and opportunities!</h4>
        <div style="display:flex;padding-left:300px; padding-right:300px">
        <v-text-field v-model="search" placeholder="Search categories" filled rounded style="padding-right: 20px;"></v-text-field>
        <span style="padding-top:10px">
        <v-btn
        rounded
        color="green"
        dark
        @click="show"
        >
        Search
        </v-btn>
        </span>
        </div>

        <div style="padding-left:600px; font-size:20px" v-if="this.showResults"> 
        <el-card class="card" style="width:40%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    Women Who Code</b>
                </span><br>
                <a @click="openLink('https://www.meetup.com/Women-Who-Code-Silicon-Valley/events/275648055/')">
                   Software Engineering Interview Preparation: Mindset and Planning
                </a><br>
                <span>
                    5:00 pm PST, 2/1/2021
                </span>
            </div>
        </el-card><br>

        <el-card class="card" style="width:40%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    Women Who Code</b>
                </span><br>
                <a @click="openLink('https://www.meetup.com/Women-Who-Code-SF/events/275160050/')">
                   Algorithms & Interview Prep - Sorting and Searching (Whiteboarding Practice)
                </a><br>
                <span>
                    6:30 pm PST, 2/4/2021
                </span>
            </div>
        </el-card><br>

        <el-card class="card" style="width:40%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    Women Who Code></b>
                </span><br>
                <a @click="openLink('https://www.meetup.com/Women-Who-Code-Mumbai/events/275699197/')">
                   Job Prep Series: Intro to Competitive Programming for Technical Interviews
                </a><br>
                <span>
                    5:00 pm PST, 2/6/2021
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
    data() {
        return {
            showResults: false
        }
    },
    watch: {
        search(value) {
            let search = value.toLowerCase()
        },
    },
    computed: {
    },
    methods: {
        openLink(link) {
            window.open(link, "_blank");  
        },
        show() {
            this.showResults = true
        }
    },
}
</script>
