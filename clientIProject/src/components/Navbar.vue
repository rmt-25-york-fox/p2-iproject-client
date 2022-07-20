<script>
export default{
    name:'Navbar'
}
</script>

<template>
<nav id="main-nav" class="main-nav fixed">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="nav-header d-flex justify-content-between align-items-center">
                <a href="index.html" class="logo" title="LOGO">
                <img class="logo-img" src="../img/logo.png" alt="LOGO">
                <img class="alt-logo-img" src="../img/logo-alt.png" alt="LOGO">
                </a>
                </div>
                <div class="nav-wrap">
                <ul id="nav" class="nav-wrap__list menu">
                    <li class="current"><a href="/" title="Главная">Home</a></li>
                    <li><a href="#" title="Проекте">My Request</a></li>
                    <li><a href="#" title="Контакты">My Task</a></li>
                </ul>
                <div class="riglt-floats-xs">
                    <a href="/how-start.html" class="btn-startgames">Logout</a>
                </div>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>