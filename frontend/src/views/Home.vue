home.vue
<template>
    <div>
        <link rel="preconnect" href="https://fonts.gstatic.com"> 
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap" rel="stylesheet">
        <h4 id="hi" class="heading" style="padding-left:630px; padding-top:20px; padding-bottom:10px; font-family:'Baloo 2'">Learn a new skill by following a tutorial!</h4>
    <div style="display:flex; padding-left:300px; padding-right:300px">
    <v-text-field v-model="searchBar" placeholder="Search tutorials" filled rounded style="padding-right: 20px;"></v-text-field>
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
    </div>

    <div style="padding-left:600px; font-size:20px" v-if="this.python"> 
        <el-card class="card" style="width:50%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    Programiz: Learn Python Programming</b>
                </span><br>
                <a @click="openLink('https://www.programiz.com/python-programming')">
                   https://www.programiz.com/python-programming
                </a>
            </div>
        </el-card><br>

        <el-card class="card" style="width:50%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    Codecademy: Python</b>
                </span><br>
                <a @click="openLink('https://www.codecademy.com/catalog/language/python')">
                   https://www.codecademy.com/catalog/language/python
                </a>
            </div>
        </el-card><br>

        <el-card class="card" style="width:50%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    w3schools: Python Introduction</b>
                </span><br>
                <a @click="openLink('https://www.w3schools.com/python/python_intro.asp')">
                   https://www.w3schools.com/python/python_intro.asp
                </a>
            </div>
        </el-card><br>

        <el-card class="card" style="width:50%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    Udacity: Introduction to Python Programming</b>
                </span><br>
                <a @click="openLink('https://www.udacity.com/course/introduction-to-python--ud1110')">
                   https://www.udacity.com/course/introduction-to-python--ud1110
                </a>
            </div>
        </el-card><br>

        <el-card class="card" style="width:50%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    YouTube: Learn Python - Full Course for Beginners [Tutorial]</b>
                </span><br>
                <a @click="openLink('https://www.youtube.com/watch?v=rfscVS0vtbw')">
                   https://www.youtube.com/watch?v=rfscVS0vtbw
                </a>
            </div>
        </el-card><br>
    <div style="padding-left:180px;"><u>1</u>  <u>2</u>  <u>3</u>
        </div>
    </div>

    <div style="padding-left:600px; font-size:20px" v-if="this.fishing"> 
        <el-card class="card" style="width:50%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    Outside Online: The Absolute Beginner's Guide to Fishing</b>
                </span><br>
                <a @click="openLink('https://www.outsideonline.com/2393713/how-to-start-fishing')">
                   https://www.outsideonline.com/2393713/how-to-start-fishing
                </a>
            </div>
        </el-card><br>

        <el-card class="card" style="width:50%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    YouTube: 6 Beginner Fishing Mistakes (You Don't Realize You're Making)</b>
                </span><br>
                <a @click="openLink('https://www.youtube.com/watch?v=BJnhnJxMwXc')">
                   https://www.youtube.com/watch?v=BJnhnJxMwXc
                </a>
            </div>
        </el-card><br>

        <el-card class="card" style="width:50%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    YouTube: How To Set Up New Fishing Rod</b>
                </span><br>
                <a @click="openLink('https://www.youtube.com/watch?v=c1pWPeoQVls')">
                   https://www.youtube.com/watch?v=c1pWPeoQVls
                </a>
            </div>
        </el-card><br>

        <el-card class="card" style="width:50%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    U.S. Fish and Wildlife Service: A Guide to Fishing for the First Time</b>
                </span><br>
                <a @click="openLink('https://usfws.medium.com/fishing-for-the-first-time-e4b0a551676')">
                   https://usfws.medium.com/fishing-for-the-first-time-e4b0a551676
                </a>
            </div>
        </el-card><br>

        <el-card class="card" style="width:50%;">
            <div
                class="body"
                style="height: 100%;"
            >
                <span class="name"><b>
                    KayakGuru: Ultimate Guide To Fishing</b>
                </span><br>
                <a @click="openLink('https://kayakguru.com/guide-to-fishing/')">
                   https://kayakguru.com/guide-to-fishing/
                </a>
            </div>
        </el-card><br>
        <div style="padding-left:180px;"><u>1</u>  <u>2</u>  <u>3</u>
        </div>
    </div>
    </div>
</template>

<script>
import {BASE_URL} from '../api.js'
export default {
    data() {
        return {
            searchBar: "",
            python: false,
            fishing: false
        }
    },
    /*watch: {
        search(value) {
            let search = value.toLowerCase()
        },
    },*/
    computed: {
    },
    methods: {
        search() {
            if (this.searchBar == "python programming") {
                this.fishing = false;
                this.python = true;
            } else if (this.searchBar == "fishing") {
                this.python = false;
                this.fishing = true;
            }
        },
        openLink(link) {
            window.open(link, "_blank");  
        }
    },
}
</script>