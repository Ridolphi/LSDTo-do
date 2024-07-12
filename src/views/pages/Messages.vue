<script>
const gaston = "es feo";
console.log(gaston);

</script>
<template>

    <div class="container">
        <div class="sidebar">
            <div class="card" style="background-color: #007bff; border: none;">
                <AvatarGroup>
                    <Avatar :image="'/demo/images/avatar/amyelsner.png'" size="large" shape="circle"></Avatar>
                    <Avatar :image="'/demo/images/avatar/asiyajavayant.png'" size="large" shape="circle"></Avatar>
                    <Avatar :image="'/demo/images/avatar/onyamalimba.png'" size="large" shape="circle"></Avatar>
                    <Avatar :image="'/demo/images/avatar/ionibowcher.png'" size="large" shape="circle"></Avatar>
                    <Avatar :image="'/demo/images/avatar/xuxuefeng.png'" size="large" shape="circle"></Avatar>
                    <Avatar label="+2" shape="circle" size="large"
                        :style="{ 'background-color': '#9c27b0', color: '#ffffff' }"></Avatar>
                </AvatarGroup>
            </div>
            <ul class="user-list">
                <li class="mb-5">
                    Gastón <span class="notification-bubble">3</span>
                </li>
                <li class="mb-5">
                    Adri <span class="notification-bubble">1</span>
                </li>
                <li class="focusedChat mb-5">
                    Sandy
                </li>
                <li class="mb-5">
                    Bruno <span class="notification-bubble">5</span>
                </li>
                <li class="mb-5">
                    Tincho <span class="notification-bubble">2</span>
                </li>
                <li class="mb-5">
                    Rafaela <span class="notification-bubble">3</span>
                </li>
                <li class="mb-5">
                    Mirian
                </li>
                <li class="mb-5">
                    Dani <span class="notification-bubble">9</span>
                </li>

            </ul>
        </div>
        <div class="chat-container">
            <div class="chat-header" style="position: relative; height: 50px;">
                <h3 style="color:white"> Sandy's chat</h3>
                <i class="pi pi-bell mr-4 "
                    style="font-size: 2rem; color: white; position: absolute; top: 15px; right: 5px;" v-badge="2"></i>
            </div>
            <div class="chat-messages px-5 py-5">
                <div class="message received">
                    <p>Hola, ¿cómo estás?</p>
                    <span class="timestamp">10:30 AM</span>
                </div>
                <div class="message sent">
                    <p>Estoy bien, gracias. ¿Y tú?</p>
                    <span class="timestamp">10:32 AM</span>
                </div>
                <div class="message received">
                    <p>¡Todo bien también!</p>
                    <span class="timestamp">10:33 AM</span>
                </div>
            </div>
            <div class="chat-input">
                <input type="text" placeholder="Escribe tu mensaje...">
                <button>Enviar</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    display: flex;
    width: 100vw;
    max-width: 1400px;
    margin: auto;
    height: 80vh;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.sidebar {
    /* width: 200px; */
    padding: 20px;
    background-color: #007bff;
    color: #fff;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.sidebar h2 {
    margin-top: 0;
}

.user-list {
    list-style-type: none;
    padding: 0;
}

.user-list li {
    padding: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.notification-bubble {
    background-color: #ff6347;
    color: #fff;
    border-radius: 50%;
    padding: 5px 10px;
    font-size: 0.8em;
}

.chat-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}

.chat-header {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    text-align: center;
    border-top-right-radius: 8px;
}

.chat-messages {
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto;
    border-bottom: 1px solid #f2f2f2;
}

.message {
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px;
    max-width: 80%;
}

.message.received {
    background-color: #f1f1f1;
    align-self: flex-start;
}

.message.sent {
    background-color: #007bff;
    color: #fff;
    align-self: flex-end;
}

.timestamp {
    display: block;
    font-size: 0.8em;
    color: #666;
    margin-top: 5px;
}

.chat-input {
    display: flex;
    padding: 10px;
    background-color: #f2f2f2;
    border-bottom-right-radius: 8px;
}

.chat-input input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;
}

.chat-input button {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
}

.chat-input button:hover {
    background-color: #0056b3;
}

.focusedChat {
    background-color: #ffffff !important;
    color: black;
    padding: 20px !important;
    border-radius: 8px;
}
</style>