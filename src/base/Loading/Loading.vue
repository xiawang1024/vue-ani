<template>
    <div class="loading">
        <img src="./Pacman-1s-200px.svg" alt="" class="img" width="160" height="160">
        <p class="tips">正在打开</p>
    </div>
</template>


<script>
export default {
    name:'Loading'
}
</script>

<style lang="scss" scoped>
.loading{
    position: relative;
    margin: 300px auto 0;
    padding:40px 20px;
    width: 400px;
    border-radius: 20px;
    color:#fff;
    background: rgba(0,0,0,0.8);
    .tips{
      font-size: 36px;
    }
}
</style>

