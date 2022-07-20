<script>
import Card from '../components/Card.vue'
export default{
    name:'HomePage',
    components:{
        Card
    }
}
</script>


<template>
<div class="page-content">
<section id="home-sec" class="main-banner parallax">
    <div class="bg-lefts"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-9">
                <!-- Swiper -->
                <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" data-hash="slide1">
                        <div class="col-md-6">
                            <h3 class="name-intro">PUBG</h3>
                            <span class="hr-intro"></span>
                            <p class="docopation-intro">
                            Встречайте новая мини-игра <br>
                            PUBG теперь и в майнкрафте.
                            </p>
                            <a href="#" class="btn-drop"><span class="ic-sx22"></span> Подробнее</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-lg-3">
                <a href="#" class="block-s1">
                <p class="how-to-games">Как начать играть ?</p>
                <p class="desctops"> В данной теме рассказано как нчать игру на нашем проекте.</p>
                </a>
                <a href="#" class="block-s1 p2">
                <p class="how-to-games">Стать модератором</p>
                <p class="desctops"> В данном разделе вы можете купить модераторку за 900р.</p>
                </a>
            </div>
        </div>
    </div>
    </section>
    <Card />
</div>
</template>