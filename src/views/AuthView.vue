<script lang="ts">
export default {
    data() {
        return {
            form: false,
        }
    },
    methods: {
        changeForm(){
            this.form = !this.form;
        }
    },
}
</script>
<template>
    <div class="forms">
        <div class="register form" v-if="!form">
            <div class="textpart">
                <h1>Здесь вы можете </h1><h2 @click="changeForm()">войти</h2> <h1> или зарегистрироваться</h1>
            </div>
            <div class="inputpart">
                <input type="text" placeholder="Имя">
                <input type="text" placeholder="Логин">
                <input type="email" placeholder="Почта">
                <input type="password" placeholder="Пароль">
                <input type="password" placeholder="Повтор пароля">
                <button>Зарегистрироваться</button>
            </div>
        </div>
        <div class="login form" v-if="form">
            <div class="textpart">
                <h1>Здесь вы можете войти или</h1><h2 @click="changeForm()" style="margin-right: 0;">зарегистрироваться</h2>
            </div>
            <div class="inputpart">
                <input type="text" placeholder="Логин">
                <input type="password" placeholder="Пароль">
                <button>Войти</button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.forms{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 120px;
}
.form{
    display: flex;
    align-items: center;
    flex-direction: column;
    .inputpart{
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #cecece;
        width: 350px;
        padding: 30px;
        border-radius: 10px;
        input{
            margin-bottom: 10px;
            outline: none;
            border: none;
            padding: 10px;
            width: 70%;
            border-radius: 5px;
            font-size: 18px;
            color: #23272e;
            font-family: "Exo 2"; 
            transition: 0.3s;
        }
        button{
            padding: 10px 15px;
            margin: 0;
            color: #23272e;
            font-family: "Exo 2"; 
            font-size: 24px;
            font-weight: bold;
            outline: none;
            border: none;
            background-color: #8cd1ff;
            border-radius: 10px;
            box-shadow: 0 0 8px 0 rgb(129, 129, 129);
            cursor: pointer;
            transition: 0.3s;
        }
        button:hover{
            padding: 8px 13px;
            margin: 2px;
            box-shadow: 0 0 10px 5px rgb(129, 129, 129);
            transition: 0.3s;
        }
        input:hover{
            padding: 8px 13px;
            margin: 2px;
            margin-bottom: 12px;
            box-shadow: 0 0 10px 5px rgb(129, 129, 129);
            transition: 0.3s;
        }
    }
    .textpart{
        display: flex;
        align-items: center;
        margin-bottom: 50px;
        h1{
            color: #23272e;
            font-family: "Exo 2"; 
            font-size: 36px;
        }
        h2{
            color: #6797eb;
            font-family: "Exo 2"; 
            font-size: 36px;
            margin: 0 5px;
            cursor: pointer;
            text-decoration: underline;
        }
    }
}
.login{
    margin-bottom: 156px;
}

</style>