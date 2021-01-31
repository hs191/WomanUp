<template>
    <div>
        <link rel="preconnect" href="https://fonts.gstatic.com"> 
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap" rel="stylesheet">
        <h4 class="heading" style="padding-left:600px; padding-top:20px; padding-bottom:10px; font-family: 'Baloo 2'">Chat about a topic you're passionate about!</h4>
        
        <span style="padding-left:1420px; padding-right:50px"><u>
            Search Groups
        </u></span>
        <span><u>
            Create Group
        </u></span>
        
        <div class="chat-container">
            <div class="search-container">
                <input type="text" placeholder="Search messages"/>
            </div>
            <div class="conversation-list">
                <div class="conversation active" style="border:solid black">
                    
                    <div class="title-text">
                        Coding Interview Prep
                    </div><br>
                    <div class="created-date">
                     Jan 30
                    </div>
                    <div id="lastMessage" class="conversation-message">
                        You: Yep!
                    </div>
                </div>
                <div class="conversation" style="border:solid black">
                    <!-- <img src="images/profiles/daryl.png" alt="daryl" /> -->
                    <div class="title-text">
                        Cool Vegan Recipes
                    </div><br>
                    <div class="created-date">
                        Jan 30
                    </div>
                    <div class="conversation-message">
                        You: Thanks for sharing!
                    </div>
                </div>
            </div>
            
            <div class="chat-title">
                <span>Coding Interview Prep</span>
                <!-- <img src="images/icons/trash-logo.svg" alt="Delete Conversation" /> -->
            </div>
            <div class="chat-message-list">
                <div class="message-row you-message">
                    <div class="message-content">
                        <div class="message-text">Yep!</div>
                        <div class="message-time">Jan 30</div>
                    </div>
                    <div class="message-content" v-if="this.showMessage">
                        <div class="message-text">By the way, I compiled a list of interview tips. I'll share it here. Feel free to add to it!</div>
                        <div class="message-time">Jan 30</div>
                    </div>
                </div>
                <div class="message-row other-message">
                    <div class="message-content" style="padding-left:30px">
                        <div class="message-text">I heard it's important to review data structures like stacks and queues!</div>
                        <div class="message-time">Jan 30</div>
                    </div>
                    <img src="https://i.pinimg.com/originals/2d/11/05/2d1105ea7924b31b182313f80e2d3d0a.jpg" width="40px"/> 
                    <span>theCodingQueen123</span>
                </div>
            </div>
            <div class="chat-form" style="padding-left:230px">
                <input id="newMessage" type="text" placeholder="type a message" />
                <div style="padding-left:990px">
                <v-btn
                    rounded
                    color="green"
                    dark
                    width="20px"
                    @click="send"
                    >
                    Send
                </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
export default {
  name: "SupportGroups",
  data() {
    return {
        showMessage: false
    };
  },
  methods: {
      send() {
          this.showMessage = true
          document.getElementById("newMessage").value = ""
          document.getElementById("lastMessage").innerHTML = "You: By the way, I compiled a list of interview tips. I'll share it here. Feel free to add to it!"
      }
  }
};
</script>

<style scoped>
    .chat-container {
        display: grid;
        grid:
            'search-container chat-title' 71px
            'conversation-list chat-message-list' 1fr
            'new-message-container chat-form' 78px
            / 300px 1fr;
        min-width:800px;
        
        max-height: 800px;
        height: 95vh;
        background: #FFF;
        border-radius: 10px;
        width: 100%;
    }

    .search-container,
    .conversation-list,

    .new-message-container {
        background: green
    }

    .search-container {
        display: grid;
        align-items: center;
        padding: 0 20px;
        grid-area: search-container;
        border-radius: 10px 0 0 0;
        box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.75);
        z-index: 1;
    }

    .search-container input {
        color: #eee;
        outline: none;
        font-weight: bold;
        border-radius: 2px;
        height: 30px;
        border: 0;
        padding-left: 48px;
        padding-right: 20px;
        font-size: 1.4rem;
        
    }

    .search-container input::placeholder {
        color: #ddd;
        font-weight: bold;
    }

    .conversation-list {
        grid-area: conversation-list;
        overflow-y: scroll;
    }

    .conversation {
        display: grid;
        grid-template-columns: 40px 1fr max-content;
        grid-gap: 10px;
        color: #ddd;
        font-size: 1.3rem;
        border-bottom: 1px solid green;
        padding: 20px 20px 20px 15px;
    }

    .conversation.active {
        background: rgb(6, 63, 6)
    }

    .conversation:hover {
        background: rgb(6, 63, 6)
    }

    .conversation:hover {
        cursor: pointer;
    }

    .conversation > img {
        grid-row: span 2;
        height: 40px;
        width: 40px;
        border-radius: 100%;
    }

    .title-text {
        font-size:20px;
        font-weight: bold;
        color: #eee;
        padding-left: 5px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .created-date {
        color: #ddd;
        font-size: 1rem;
    }

    .conversation-message {
        grid-column: span 2;
        padding-left: 5px;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
    }

    .new-message-container {
        display: grid;
        grid: 40px / 40px;
        align-content: center;
        grid-area: new-message-container;
        border-top: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 0 0 0 10px;
        padding: 0 15px;
    }

    .new-message-container a {
        display: grid;
        place-content: center center;
        background: #eee;
        border-radius: 100%;
        color: green;
        text-decoration: none;
        font-size: 3.6rem;
    }


    .chat-title {
        display: grid;
        grid: 36px / 1fr 36px;
        grid-area: chat-title;
        align-content: center;
        align-items: center;
        color: green;
        font-weight: bold;
        font-size: 2.0rem;
        border-radius: 0 10px 0 0;
        box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.75);
        padding: 0 20px;
    }

    .chat-title > img {
        cursor: pointer;
    }

    .chat-form {
        display: grid;
        grid: 51px / 32px 1fr;
        align-content: center;
        align-items: center;
        grid-gap: 15px;
        background: #eee;
        grid-area: chat-form;
        border-radius: 0 0 10px 0;
        border-top: 1px solid rgba(0, 0, 0, 0.25);
        padding-left: 42px;
        padding-right: 22px;
    }

    .chat-message-list {
        grid-area: chat-message-list;
        display: flex;
        flex-direction: column-reverse;
        padding: 0 20px;
        overflow-y: scroll;
    }

    .message-row {
        display: grid;
        grid-template-columns: 70%;
        margin-bottom: 20px;
    }

    .message-content {
        display: grid;
    }

    .you-message {
        justify-content: end;
    }

    .you-message .message-content {
        justify-items: end;
    }

    .other-message {
        justify-items: start;
    }

    .other-message .message-content {
        grid-template-columns: 300px 1fr;
        grid-column-gap: 15px;
    }

    .message-row img {
        border-radius: 100%;
        grid-row: span 2;
    }

    .message-text {
        padding: 9px 14px;
        font-size: 1.6rem;
        margin-bottom: 5px;
    }

    .message-time {
        font-size: 1.3rem;
        color: #777;
    }

    .you-message .message-text {
        background: green;
        color: #eee;
        border: 1px solid green;
        border-radius: 14px 14px 0 14px;
    }

    .other-message .message-text {
        background: #eee;
        color: #111;
        border: 1px solid #ddd;
        border-radius: 14px 14px 14px 0;
    }

    .chat-form input {
        width:1000px;
        outline: none;
        padding: 15px;
        border: 2px solid #ddd;
        color: #330;
        border-radius: 6px;
        font-size: 1.4rem;
    }

    ::-webkit-scrollbar {
        display: none;
    }

</style>