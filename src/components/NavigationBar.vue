<template>
    <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="http://oxigen.web.id">
                <img src="../assets/oxigen-sttbandung.png" alt="Bootstrap" width="100" height="60">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Oxigen</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link" href="/RegisterView">Registrasi</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/memberData">Data Pendaftar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="http://oxigen.web.id">Website Oxigen</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://sttbandung.ac.id">Website STTBandung</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>