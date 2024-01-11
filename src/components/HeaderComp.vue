<script setup lang="ts">
</script>
<script>
export default {
    data() {
        return {
            actioner: false,
        }
    },
    methods: {
    },
}
</script>
<template>
<header>
    <router-link to="/"><img src="../assets/images/bbcLogo.png" alt="BigBlueCar" class="logo"></router-link>
    <div class="header-links">
        <div class="header-link">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><g color="#00AFF5"><path fill="currentColor" fill-rule="evenodd" d="M2.95454 10.6363c0-4.2425 3.43927-7.68177 7.68186-7.68177 4.2425 0 7.6818 3.43927 7.6818 7.68177 0 4.2426-3.4393 7.6819-7.6818 7.6819-4.24259 0-7.68186-3.4393-7.68186-7.6819Zm7.68186-8.68177c-4.79487 0-8.68186 3.88698-8.68186 8.68177 0 4.7949 3.88699 8.6819 8.68186 8.6819 2.2175 0 4.2408-.8314 5.7753-2.1995l4.7802 4.7803c.1953.1953.5118.1953.7071 0 .1953-.1953.1953-.5119 0-.7071l-4.7802-4.7803c1.368-1.5344 2.1994-3.5578 2.1994-5.7753 0-4.79479-3.887-8.68177-8.6818-8.68177Z" clip-rule="evenodd"></path></g></svg>
            <h3>Искать</h3>
        </div>
        <div class="header-link">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g color="#00AFF5"><path stroke-width="0" fill="#00AFF5" fill-rule="evenodd" d="M1.14 11.5a10.36 10.36 0 1120.72 0 10.36 10.36 0 01-20.72 0zM11.5 0a11.5 11.5 0 100 23 11.5 11.5 0 000-23zm.57 6.53a.57.57 0 00-1.14 0v4.4h-4.4a.57.57 0 100 1.14h4.4v4.4a.57.57 0 101.14 0v-4.4h4.4a.57.57 0 000-1.14h-4.4z"></path></g></svg>
            <h3>Опубликовать поездку</h3>
        </div>
        <div class="header-profile" @click="actioner = !actioner">
            <img src="https://cdn.blablacar.com/kairos/assets/images/signin-640a2bdb09c085fd1d8e.svg" alt="">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g color="var(--_1gzv7bhc)"><path fill="currentColor" fill-rule="evenodd" d="M8.29289 6.70711c-.39052-.39053-.39052-1.02369 0-1.41422.39053-.39052 1.02369-.39052 1.41422 0l5.99999 6.00001c.3905.3905.3905 1.0237 0 1.4142l-5.99999 6c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.0237 0-1.4142L13.5858 12 8.29289 6.70711Z" clip-rule="evenodd" transform="rotate(90 12 12)"></path></g></svg>
        </div>
    </div>
</header>
    <div class="profile-actioner" v-if="actioner">
        <router-link to="/auth" class="actioner-select">
            <h2>Вход</h2>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g color="var(--_1gzv7bhc)"><path fill="currentColor" fill-rule="evenodd" d="M8.29289 6.70711c-.39052-.39053-.39052-1.02369 0-1.41422.39053-.39052 1.02369-.39052 1.41422 0l5.99999 6.00001c.3905.3905.3905 1.0237 0 1.4142l-5.99999 6c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.0237 0-1.4142L13.5858 12 8.29289 6.70711Z" clip-rule="evenodd" transform="rotate(0 12 12)"></path></g></svg>
        </router-link>
        <router-link to="/auth" class="actioner-select">
            <h2>Регистрация</h2>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g color="var(--_1gzv7bhc)"><path fill="currentColor" fill-rule="evenodd" d="M8.29289 6.70711c-.39052-.39053-.39052-1.02369 0-1.41422.39053-.39052 1.02369-.39052 1.41422 0l5.99999 6.00001c.3905.3905.3905 1.0237 0 1.4142l-5.99999 6c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.0237 0-1.4142L13.5858 12 8.29289 6.70711Z" clip-rule="evenodd" transform="rotate(0 12 12)"></path></g></svg>
        </router-link>
    </div>
</template>

<style scoped lang="scss">
.profile-actioner{
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    background-color: rgb(255, 255, 255);
    right: 15%;
    width: 23%;
    top: 70px;
    z-index: 0;
    .actioner-select{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%; 
        text-decoration: none;
        h2{
            color: #23272e;
            font-family: "Exo 2";
        }
        svg{
            width: 35px;
            height: 35px;
            margin-right: 8px;
            color: rgb(80, 80, 80);
            
        }
    }
}

header{
    height: 70px;
    padding: 0 15%;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: black 0px -7px 20px 0px;
    z-index: 10;
    .logo{
        height: 35px;
    }
    .header-links{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header-profile{
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            svg{
                width: 30px;
                height: 30px;
            }
        }
        .header-link{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 20px;
            svg{
                width: 24px;
                height: 24px;
                margin-right: 8px;
            }
            h3{
                color: #00AFF5;
                font-family: "Exo 2";
            }
        }
    }
}

</style>