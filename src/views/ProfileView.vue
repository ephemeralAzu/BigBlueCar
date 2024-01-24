<script setup lang="ts">
import axios from 'axios';

</script>
<script lang="ts">
declare interface User {name: String; login: String; email: String; password: String};
export default {
    data() {
        return {
            token: this.$cookies.get("bbct"),
            user: <User>{},
            nameEditor: {
                editing: false,
                value: <String> "" ,
            },
            loginEditor: {
                editing: false,
                value: <String> "",
            },
            emailEditor: {
                editing: false,
                value: <String> "",
            },
            passwordEditor: {
                editing: false,
                value: <String> "",
                valueNew: "",
                valueNewR: "",
            }
        }
    },
    methods: {
        
    },
    async mounted() {
        await axios.get('https://api-bigbluecar.azu.su/users/token/' + this.token, 
        {headers: 
            {'Content-Type': 'multipart/form-data',
             'Access-Control-Allow-Origin': '*'}
            })
        .then(async (response)=> {
            this.user = response.data
            this.nameEditor.value = this.user.name
            this.loginEditor.value = this.user.login
            this.emailEditor.value = this.user.email
            this.passwordEditor.value = this.user.password
        })
    },
}
</script>
<template>
<section class="profile_section">
    <div class="drives">

    </div>
    <div class="profile_card">
        <h1>Профиль</h1>
        <form class="name_editor editor">
            <input type="text" required :disabled="!nameEditor.editing" :value="nameEditor.value">
            <h3 v-if="!nameEditor.editing && user.name" @click="nameEditor.editing = true; nameEditor.value = ''">Изменить имя</h3>
            <div class="buttons">
                <button v-if="nameEditor.editing">Сохранить</button>
                <h2 v-if="nameEditor.editing" class="cancel" @click="nameEditor.value = user.name; nameEditor.editing = false">Отменить</h2>
            </div>
            
        </form>
        <form class="login_editor editor">
            <input type="text" required :disabled="!loginEditor.editing" :value="loginEditor.value">
            <h3 v-if="!loginEditor.editing && user.name" @click="loginEditor.editing = true; loginEditor.value = ''">Изменить логин</h3>
            <div class="buttons">
                <button v-if="loginEditor.editing">Сохранить</button>
                <h2 v-if="loginEditor.editing" class="cancel" @click="loginEditor.value = user.login; loginEditor.editing = false">Отменить</h2>
            </div>
        </form>
        <form class="email_editor editor">
            <input type="email" required :disabled="!emailEditor.editing" :value="emailEditor.value">
            <h3 v-if="!emailEditor.editing && user.name" @click="emailEditor.editing = true; emailEditor.value = ''">Изменить почту</h3>
            <div class="buttons">
                <button v-if="emailEditor.editing">Сохранить</button>
                <h2 v-if="emailEditor.editing" class="cancel" @click="emailEditor.value = user.email; emailEditor.editing = false">Отменить</h2>
            </div>
        </form>
        <form class="password_editor editor">
            <input type="password" required placeholder="Текущий пароль" :disabled="!passwordEditor.editing" v-model="passwordEditor.value">
            <input type="password" required placeholder="Новый пароль" v-if="passwordEditor.editing" v-model="passwordEditor.valueNew">
            <input type="password" required placeholder="Повторите новый пароль" v-if="passwordEditor.editing" v-model="passwordEditor.valueNewR">
            <h3 v-if="!passwordEditor.editing && user.name" @click="passwordEditor.editing = true; passwordEditor.value = ''">Изменить пароль</h3>
            <div class="buttons">
                <button v-if="passwordEditor.editing">Сохранить</button>
                <button v-if="passwordEditor.editing" class="cancel" @click="passwordEditor.editing = false; passwordEditor.value = user.password; ">Отменить</button>
            </div>
        </form>
    </div>
</section>
</template>

<style scoped lang="scss">
.editor{
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 20px;
    input{
        outline: none;
        border: none;
        height: 30px;
        border-radius: 5px;
        font-size: 18px;
        color: #23272e;
        font-family: "Exo 2"; 
        transition: 0.3s;
        border: currentColor;
        box-shadow: 0 0 5px 2px rgb(129, 129, 129);
    }
    input:hover{
        box-shadow: 0 0 10px 5px rgb(129, 129, 129);
        transition: 0.3s;
    }
    .buttons{
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            color: #23272e;
            font-family: "Exo 2"; 
            font-size: 18px;
            padding: 2px;
            font-weight: bold;
            outline: none;
            border: none;
            background-color: #8cd1ff;
            border-radius: 5px;
            box-shadow: 0 0 8px 0 rgb(129, 129, 129);
            cursor: pointer;
            transition: 0.3s;
            margin-top: 10px;
        }
        .cancel{
            color: #23272e;
            font-family: "Exo 2"; 
            padding: 2px;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
            margin-top: 0px;
            margin-left: 10px;
            background-color: #fd5e5e;
            font-size: 14px;
            margin-bottom: 0;
            margin-top: 15px;
        }
    }
    button:hover{
        box-shadow: 0 0 10px 2px rgb(129, 129, 129);
        transition: 0.3s;
    }
    h3{
        font-size: 18px;
        color: #23272e;
        font-family: "Exo 2";
        margin: 0;
        margin-top: 5px;
        text-decoration: underline;
        cursor: pointer;
    }

}
.password_editor input{
    margin-bottom: 10px;
}
.profile_section{
    display: flex;
    justify-content: space-around;
    align-items: start;
    margin: 50px 150px;
    .drives{
        background-color: blue;
        height: 1000px;
        width: 40%;
    }
    .profile_card{
        background-color: rgb(255, 255, 255);
        height: 1000px;
        width: 20%;
        border-radius: 10px;
        box-shadow: 0 0 10px 0px rgb(107, 107, 107);
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: start;
        
        h1{
            font-size: 18px;
            color: #23272e;
            font-family: "Exo 2";
        }
    }
}
</style>