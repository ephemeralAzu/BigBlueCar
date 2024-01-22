<script lang="ts">
import axios from 'axios';
declare interface RegisterForm {name: String; login: String; email: String;  password: String; passwordRepeat: String;};
declare interface LoginForm {login: String; password: String;};
export default {
    mounted() {
        
    },
    data() {
        return {
            token: this.$cookies.get("bbct"),
            form: false,
            reg_user: <RegisterForm>{},
            log_user: <LoginForm>{},
            registerFormErrs:{
            passwords: false,
            login: false,
            email: false,
            },
            loginFormErrs:{
                loginOrPasswd: false
            }
        }
    },
    methods: {
        changeForm(){
            this.form = !this.form;
        },
        cleanFormErrsReg(){
            //passwds
            this.registerFormErrs.passwords = false
            let passwd = document.getElementById("r_passwd")
            let passwdr = document.getElementById("r_passwdr")
            passwd!.style.color = "black";
            passwd!.style.border = "none";
            passwdr!.style.color = "black";
            passwdr!.style.border = "none";

            //login
            this.registerFormErrs.login = false
            let login = document.getElementById("r_login")
            login!.style.color = "black";
            login!.style.border = "none";

            //email
            this.registerFormErrs.email = false
            let email = document.getElementById("r_email")
            email!.style.color = "black";
            email!.style.border = "none";
        },
        cleanFormErrsLog(){
            this.loginFormErrs.loginOrPasswd = false
            let loginErr = document.getElementById("l_login")
            let loginErrp = document.getElementById("l_passwd")
            loginErr!.style.color = "black";
            loginErr!.style.border = "none";
            loginErr!.style.borderWidth = "1px";
            loginErrp!.style.color = "black";
            loginErrp!.style.border = "none";
            loginErrp!.style.borderWidth = "1px";
        },
        //errors
        notSamePasswords(){
            this.registerFormErrs.passwords = true
            let passwd = document.getElementById("r_passwd")
            let passwdr = document.getElementById("r_passwdr")
            passwd!.style.color = "red";
            passwd!.style.border = "solid";
            passwd!.style.borderWidth = "1px";
            passwdr!.style.color = "red";
            passwdr!.style.border = "solid";
            passwdr!.style.borderWidth = "1px";
        },
        thisLoginAlreadyRegistered(){
            this.registerFormErrs.login = true
            let login = document.getElementById("r_login")
            login!.style.color = "red";
            login!.style.border = "solid";
            login!.style.borderWidth = "1px";
        },
        thisEmailAlreadyRegistered(){
            this.registerFormErrs.email = true
            let email = document.getElementById("r_email")
            email!.style.color = "red";
            email!.style.border = "solid";
            email!.style.borderWidth = "1px";
        },
        loginError(){
            this.loginFormErrs.loginOrPasswd = true
            let loginErr = document.getElementById("l_login")
            let loginErrp = document.getElementById("l_passwd")
            loginErr!.style.color = "red";
            loginErr!.style.border = "solid";
            loginErr!.style.borderWidth = "1px";
            loginErrp!.style.color = "red";
            loginErrp!.style.border = "solid";
            loginErrp!.style.borderWidth = "1px";
        },



        //Экшены апи форм
        async registerAction(){
            if(this.reg_user.password != this.reg_user.passwordRepeat){
                this.notSamePasswords()
                return;
            }
            await axios.post('https://api-bigbluecar.azu.su/users/register', {
            user: this.reg_user,
        }, {headers: {'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*'}})
        .then(async (response)=> {
            let resp = response.data
           if(resp == "err_login"){
            this.thisLoginAlreadyRegistered()
            return;
           }
           if(resp == "err_email"){
            this.thisEmailAlreadyRegistered()
            return;
           }
           if(resp == "err_loginerr_email"){
            this.thisLoginAlreadyRegistered()
            this.thisEmailAlreadyRegistered()
            return;
           }
           this.$cookies.set("bbct", resp, "60d")
           console.log(resp);
           await this.$router.push("/");
           this.$forceUpdate();
        })
        },


        async loginAction(){
            await axios.post('https://api-bigbluecar.azu.su/users/login', {
            user: this.log_user,
        }, {headers: {'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*'}})
        .then(async (response)=> {
            let resp = response.data
            console.log(resp);
            
           if(resp == "err_incorrect"){
            this.loginError()
            return;
           }
           this.$cookies.set("bbct", resp, "60d")
           console.log(resp);
           await this.$router.push("/");
           this.$forceUpdate();
        })
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
            <form class="inputpart" @submit.prevent="registerAction()" @click="cleanFormErrsReg()">
                <input type="text" placeholder="Имя" v-model="reg_user.name" required>
                <input type="text" placeholder="Логин" v-model="reg_user.login" required minlength="5" id="r_login">
                <h3 v-if="registerFormErrs.login" class="errText">Этот логин уже занят</h3>
                <input type="email" placeholder="Почта" v-model="reg_user.email" required id="r_email">
                <h3 v-if="registerFormErrs.email" class="errText">Эта почта уже занята</h3>
                <input type="password" placeholder="Пароль" v-model="reg_user.password" minlength="8" required id="r_passwd">
                <input type="password" placeholder="Повтор пароля" v-model="reg_user.passwordRepeat" required id="r_passwdr">
                <h3 v-if="registerFormErrs.passwords" class="errText">Пароли не совпадают</h3>
                <button>Зарегистрироваться</button>
            </form>
        </div>
        <div class="login form" v-if="form">
            <div class="textpart">
                <h1>Здесь вы можете войти или</h1><h2 @click="changeForm()" style="margin-right: 0;">зарегистрироваться</h2>
            </div>
            <form class="inputpart" @submit.prevent="loginAction()" @click="cleanFormErrsLog()">
                <input type="text" placeholder="Логин" v-model="log_user.login" required id="l_login">
                <input type="password" placeholder="Пароль" v-model="log_user.password" required id="l_passwd">
                <h3 v-if="loginFormErrs.loginOrPasswd" class="errText">Неверный логин или пароль</h3>
                <button>Войти</button>
            </form>
        </div>
    </div>
</template>
<style scoped lang="scss">
.errText{
    color: #ff0000;
    font-family: "Exo 2"; 
    font-size: 14px;
    margin: 0 0 10px 0;
}
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
            border:currentColor;
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