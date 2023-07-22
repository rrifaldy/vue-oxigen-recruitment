<template>
    <div class="container">
        <h1 class="mt-5 text-center">Data Pendaftar Oxigen</h1>
        <hr>
        <div class="table-responsive">
            <table class="table table-hover table-bordered" id="table-data">
                <thead class="table-primary">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Email</th>
                        <th scope="col">Kelas</th>
                        <th scope="col">NPM</th>
                        <th scope="col">Jurusan</th>
                        <th scope="col">No HP</th>
                        <th scope="col">Motivasi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in list" v-bind:key="item.id">
                        <th scope="row">{{ item.id }}</th>
                        <td>{{ item.name }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.kelas }}</td>
                        <td>{{ item.npm }}</td>
                        <td>{{ item.jurusan }}</td>
                        <td>{{ item.no_hp }}</td>
                        <td>{{ item.motivasi }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <button @click="exportData" class="btn btn-primary">Print</button>
</template>

<script>
import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { excelParser } from "../excel-parser";

const app = Vue.createApp()
app.use(VueAxios, axios)

export default {
    name: "MemberComponent",
    data() {
        return { list: undefined }
    },
    mounted() {
        axios.get('https://api.oxigen.web.id/public/api/members')
            .then((resp) => {
                this.list = resp.data.data;
                console.warn(resp.data)
            })
    },
    methods: {
        exportData() {
            excelParser().exportDataFromJSON(this.list, null, null);
        },
    },
};
</script>

<style>
.container {
    padding: 0 !important;
    margin-top: 150px;
}

body {
    background: #ecf0f1;
    padding: 0 10px;
}
</style>