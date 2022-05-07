<template>
    <section>
        <!--是否登录-->
        <login-welcome />

        <!--今日赠言-->
        <tip-card />

        <!--资源推介-->
        <promotion-card />

        <!--赞赏作者-->
        <praise-card />
    </section>
</template>

<script>
// @ is an alias to /src
import LoginWelcome from "@/views/card/LoginWelcome";
import PromotionCard from "@/views/card/Promotion";
import TipCard from "@/views/card/Tip";
import PraiseCard from "@/views/card/Praise";
export default {
    name: 'CardBar',
    // eslint-disable-next-line vue/no-unused-components
    components: {LoginWelcome, PromotionCard, TipCard, PraiseCard},
    data() {
        return{
        }
    },
    created() {
    },
    methods: {
    }
}
</script>
