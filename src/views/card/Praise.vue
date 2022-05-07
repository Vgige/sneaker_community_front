<template>
    <div>
        <el-card class="box-card" shadow="never">
            <div slot="header" class="has-text-centered">
                <span>🥂 赞赏作者</span>
            </div>
            <div>
                <img :src="praiseImg" alt="logo">
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "Praise",
    data() {
        return {
            praiseImg: require('@/assets/image/praise.jpg'),
        }
    },
}
</script>

<style scoped>

</style>