<template>
    <div class="wrapper">
        <div class="title">
            Registration Form
        </div>
        <h5 class="sub-text">Silahkan lengkapi form registrasi dibawah ini</h5>
        <form class="form" @submit.prevent="postData" method="post">
            <div class="inputfield">
                <label>Nama Lengkap</label>
                <input type="text" class="input" name="name" v-model="posts.name" required>
            </div>
            <div class="inputfield">
                <label>Email</label>
                <input type="text" class="input" name="email" v-model="posts.email" required>
            </div>
            <div class="inputfield">
                <label>Kelas</label>
                <input type="text" class="input" name="kelas" v-model="posts.kelas" required>
            </div>
            <div class="inputfield">
                <label>NPM</label>
                <input type="text" class="input" name="npm" v-model="posts.npm" required>
            </div>
            <div class="inputfield">
                <label>Program Studi</label>
                <div class="custom_select">
                    <select name="jurusan" v-model="posts.jurusan">
                        <option value="">Prodi</option>
                        <option value="Teknik Informatika">Teknik Informatika</option>
                        <option value="Teknik Industri">Teknik Industri</option>
                        <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
                        <option value="Bisnis Digital">Bisnis Digital</option>
                    </select>
                </div>
            </div>
            <div class="inputfield">
                <label>Nomor Handphone</label>
                <input type="text" class="input" name="no_hp" v-model="posts.no_hp" required>
            </div>
            <div class="inputfield">
                <label>Motivasi Masuk Oxigen</label>
                <textarea class="textarea" name="motivasi" v-model="posts.motivasi" required></textarea>
            </div>
            <div class="inputfield">
                <button v-on:click="submit" type="submit" class="btn">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Swal from 'sweetalert2';

const app = Vue.createApp()
app.use(VueAxios, axios)


export default {
    name: 'RegisterComponent',
    data() {
        return {
            posts: {
                name: '',
                email: '',
                kelas: '',
                npm: '',
                jurusan: '',
                no_hp: '',
                motivasi: ''
            }
        }
    },
    methods: {
        postData(e) {
            axios.post("https://api.oxigen.web.id/public/api/members", this.posts)
                .then((result) => {
                    console.warn(result)
                })
            e.preventDefault();
            e.target.reset();
            Swal.fire({
                icon: 'success',
                title: 'Thanks You!',
                text: 'Datamu berhasil disimpan, yuk masuk grup WA untuk informasi selanjutnya!',
                footer: '<a href="https://chat.whatsapp.com/I3y56QMFVSJ7Yxc4tyVP00">Whatsapp Group</a>'
            })
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    background: #ecf0f1;
    padding: 0 10px;
}

.sub-text {
    margin-top: 20px;
    margin-bottom: 20px;
}

.wrapper {
    max-width: 500px;
    width: 100%;
    background: #fff;
    margin: 50px auto;
    margin-top: 150px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.125);
    padding: 30px;
}

.wrapper .title {
    text-align: center;
    font-size: 35px;
    font-weight: 600;
    background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.wrapper .form {
    width: 100%;
}

.wrapper .form .inputfield {
    margin-bottom: 25px;
    display: flex;
    align-items: center;
}

.wrapper .form .inputfield label {
    width: 200px;
    color: #757575;
    margin-right: 10px;
    font-size: 14px;
}

.wrapper .form .inputfield .input,
.wrapper .form .inputfield .textarea {
    width: 100%;
    outline: none;
    border: 1px solid #d5dbd9;
    font-size: 15px;
    padding: 8px 10px;
    border-radius: 3px;
    transition: all 0.3s ease;
}

.wrapper .form .inputfield .textarea {
    width: 100%;
    height: 125px;
    resize: none;
}

.wrapper .form .inputfield .custom_select {
    position: relative;
    width: 100%;
    height: 37px;
}

.wrapper .form .inputfield .custom_select:before {
    content: "";
    position: absolute;
    top: 12px;
    right: 10px;
    border: 8px solid;
    border-color: #d5dbd9 transparent transparent transparent;
    pointer-events: none;
}

.wrapper .form .inputfield .custom_select select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    width: 100%;
    height: 100%;
    border: 0px;
    padding: 8px 10px;
    font-size: 15px;
    border: 1px solid #d5dbd9;
    border-radius: 3px;
}


.wrapper .form .inputfield .input:focus,
.wrapper .form .inputfield .textarea:focus,
.wrapper .form .inputfield .custom_select select:focus {
    border: 1px solid #2980b9;
}

.wrapper .form .inputfield p {
    font-size: 14px;
    color: #757575;
}

.wrapper .form .inputfield .check {
    width: 15px;
    height: 15px;
    position: relative;
    display: block;
    cursor: pointer;
}

.wrapper .form .inputfield .btn {
    width: 100%;
    padding: 8px 10px;
    font-size: 15px;
    border: 0px;
    background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);
    color: #fff;
    cursor: pointer;
    border-radius: 13px;
    outline: none;
}

.wrapper .form .inputfield .btn:hover {
    background: #2980b9;
}

.wrapper .form .inputfield:last-child {
    margin-bottom: 0;
}

@media (max-width:420px) {
    .wrapper .form .inputfield {
        flex-direction: column;
        align-items: flex-start;
    }

    .wrapper .form .inputfield label {
        margin-bottom: 5px;
    }

    .wrapper .form .inputfield.terms {
        flex-direction: row;
    }
}

.container .text {
    text-align: center;
    font-size: 35px;
    font-weight: 600;
    background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>