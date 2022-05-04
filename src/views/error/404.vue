<template>
    <div className="columns mt-6">
        <div className="column mt-6">
            <div className="mt-6">
                <p className="content">UH OH! 页面丢失</p>
                <p className="content subtitle mt-6">
                    您所寻找的页面不存在， {{ times }} 秒后，将返回首页!
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "404",
    data() {
        return {
            times: 5
        }
    },
    created() {
        this.goHome();
    },
    methods: {
        goHome: function () {
            //定时调用函数setInterval
            this.timer = setInterval(() => {
                this.times--;
                if (this.times === 0) {
                    //清除定时调用
                    clearInterval(this.timer);
                    this.$router.push({path: '/'});
                }
            }, 1000)
        }
    }
}
</script>

<style scoped>
</style>
