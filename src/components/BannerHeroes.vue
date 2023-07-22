<template>
    <header class="header-area">

        <div id="home" class="header-hero bg_cover">
            <div class="container" style="margin-top: 150px;">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="header-hero-content text-center">
                            <h3 class="header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">OXIGEN
                                STTBANDUNG</h3>
                            <h2 class="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">Life with
                                Technology</h2>
                            <!-- <p class="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p> -->
                            <a href="/RegisterView" class="main-btn wow fadeInUp" data-wow-duration="1.3s"
                                data-wow-delay="1.1s">DAFTAR</a>
                        </div> <!-- header hero content -->
                    </div>
                </div> <!-- row -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s"
                            data-wow-delay="1.4s">
                            <img src="../assets/techno.png" width="700" alt="hero">
                        </div> <!-- header hero image -->
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
            <div id="particles-1" class="particles"></div>
        </div> <!-- header hero -->
    </header>
</template>

<script>
export default {
    name: 'LandingPage',
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,700|Lato:300,400,700&display=swap");

body {
    background-image: url('../assets/banner-bg.png');
    font-family: "Lato", sans-serif;
    font-weight: normal;
    font-style: normal;
    color: #6A6972;
    overflow-x: hidden;
}

p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: #6A6972;
    margin: 0px;
}

img {
    max-width: 100%;
}

h1 {
    font-size: 48px;
}

h2 {
    font-size: 36px;
}

h3 {
    font-size: 28px;
}

h4 {
    font-size: 22px;
}

h5 {
    font-size: 18px;
}

h6 {
    font-size: 16px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: #2E2E2E;
    margin: 0px;
}

.bg_cover {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
}

.main-btn {
    text-decoration: none;
    display: inline-block;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0 25px;
    font-size: 16px;
    line-height: 48px;
    border-radius: 8px;
    border: 0;
    color: #fff;
    cursor: pointer;
    z-index: 5;
    -webkit-transition: all 0.4s ease-out 0s;
    -moz-transition: all 0.4s ease-out 0s;
    -ms-transition: all 0.4s ease-out 0s;
    -o-transition: all 0.4s ease-out 0s;
    transition: all 0.4s ease-out 0s;
    background: -webkit-linear-gradient(left, #33c8c1 0%, #119bd2 50%, #33c8c1 100%);
    background: -o-linear-gradient(left, #33c8c1 0%, #119bd2 50%, #33c8c1 100%);
    background: linear-gradient(to right, #33c8c1 0%, #119bd2 50%, #33c8c1 100%);
    background-size: 200%;
}

.main-btn:hover {
    color: #fff;
    background-position: right center;
}

.header-hero {
    position: relative;
    z-index: 5;
    background-position: bottom center;
}


@media (max-width: 767px) {
    .header-hero-content {
        padding-top: 100px;
    }
}

.header-hero-content .header-sub-title {
    font-size: 38px;
    font-weight: 300;
    color: #fff;
}

@media (max-width: 767px) {
    .header-hero-content .header-sub-title {
        font-size: 24px;
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .header-hero-content .header-sub-title {
        font-size: 30px;
    }
}

.header-hero-content .header-title {
    font-size: 38px;
    font-weight: 700;
    color: #fff;
}

@media (max-width: 767px) {
    .header-hero-content .header-title {
        font-size: 24px;
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .header-hero-content .header-title {
        font-size: 30px;
    }
}

.header-hero-content .text {
    color: #fff;
    margin-top: 30px;
}

.header-hero-content .main-btn {
    margin-top: 40px;
}

.header-hero-image {
    padding-top: 45px;
}

.header-hero-image img {
    max-width: 650px;
}

@media (max-width: 767px) {
    .header-hero-image img {
        max-width: 100%;
    }
}

@media (max-width: 767px) {
    .header-hero-image {
        padding-top: 30px;
    }
}</style>