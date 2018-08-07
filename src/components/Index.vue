<template>
    <div class="index-page">
        <!-- 顶部搜索区 -->
        <div class="index-topsearch">

            <!-- 左侧地址区 -->
            <div class="index-leftaddr">
                <h3>北京</h3>
            </div>

            <!-- 搜索部分 -->
            <div class="index-search">
                <input type="search" name="search" placeholder="老陕小馆">
            </div>

            <!-- 右侧下啦菜单 -->
            <div class="index-rightdrapdown">
                <h3></h3>
            </div>
        </div>
        <!-- 顶部搜索区 -->
    </div>
</template>

<script>
export default {
    name: 'Index',
    data () {
        return {
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 0;
        font-weight: 500;
    }
    .index-topsearch {
        padding: 0.22rem 1.44rem 0.22rem 2.1rem;
        border-bottom: 0.02rem solid #e5e5e5;
    }
    .index-leftaddr {
        position: absolute;
        top: 0;
        left: 0;
    }
    .index-leftaddr h3 {
        font-size: 14px;
        color: #666666;
        line-height: 1.32rem;
        background: url("../assets/icon_down.jpg") no-repeat right center;
        background-size: 0.29rem 0.16rem;
        padding: 0 0.42rem 0 0.44rem;
    }
    .index-search {
    }
    .index-search input {
        display: block;
        width: 100%;
        border: 0;
        background: #f4f4f4 url("../assets/icon_search_bg.jpg") no-repeat 0.27rem center;
        background-size: 0.42rem 0.42rem; 
        color: #666666;
        font-size: 0.42rem;
        height: 0.88rem;
        line-height: 0.88rem;
        text-indent: 0.86rem;
        -webkit-border-radius: 0.88rem;
        -moz-border-radius: 0.88rem;
        border-radius: 0.88rem;
        outline: none;
    }
    .index-rightdrapdown {
        position: absolute;
        top: 0;
        right: 0;
    }
    .index-rightdrapdown h3 {
        width: 0.5rem;
        height: 1.32rem;
        color: #666666;
        line-height: 1.32rem;
        background: url("../assets/icon_drapdown.jpg") no-repeat center center;
        background-size: 0.5rem 0.5rem;
        padding: 0 0.46rem 0 0.46rem;
    }
</style>
