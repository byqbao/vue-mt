<template>
	<div class="food-page">
		<!-- 顶部搜索区 -->
        <div class="index-topsearch">

            <!-- 左侧地址区 -->
            <div class="index-leftaddr">
                <h3></h3>
            </div>

            <!-- 搜索部分 -->
            <div class="index-search">
                <input type="search" name="search" placeholder="输入商家名、品类或商圈">
            </div>

            <!-- 右侧下啦菜单 -->
            <div class="index-rightdrapdown">
                <h3></h3>
            </div>
        </div>
        <!-- 顶部搜索区 -->

        <!-- 轮播图 -->
        <div class="index-banner">
            <div class="index-bannerimg">
                <a href="#"><img src="../assets/food_img01.jpg" alt="banner"></a>
                <a href="#"><img src="../assets/food_img01.jpg" alt="banner"></a>
                <a href="#"><img src="../assets/food_img01.jpg" alt="banner"></a>
            </div>
            <div class="index-bannernum">
                <a href="#"></a>
                <a class="index-bannernum-active" href="#"></a>
                <a href="#"></a>
            </div>
        </div>
        <!-- 轮播图 -->

        <!-- 分类 -->
        <div class="index-clsmain">
            <a href="#"><span class="icon icon-disc"></span>优惠团购</a>
            <a href="#"><span class="icon icon-near"></span>附近好券</a>
            <a href="#"><span class="icon icon-rese"></span>预约订座</a>
            <a href="#"><span class="icon icon-take"></span>外卖</a>
            <a href="#"><span class="icon icon-new"></span>新店特惠</a>
            <a href="#"><span class="icon icon-tea"></span>下午茶</a>
            <a href="#"><span class="icon icon-pot"></span>火锅</a>
            <a href="#"><span class="icon icon-snack"></span>小吃快餐</a>
        </div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	/*顶部搜索*/
    .index-topsearch {
        padding: 0.22rem 1.55rem 0.22rem 1.56rem;
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
        width: 1rem;
        height: 1rem;
        background: url("../assets/icon.png") no-repeat;
        background-size: 10rem 10rem;
        background-position: -8rem -1rem;
        margin: .16rem 0 0 .36rem;
    }
    .index-search {
    }
    .index-search input {
        display: block;
        width: 100%;
        border: 0;
        background: #f4f4f4 url("../assets/icon_search_bg.jpg") no-repeat 2.18rem center;
        background-size: 0.42rem 0.42rem; 
        color: #666666;
        text-indent: 2.76rem;
        font-size: 0.42rem;
        height: 0.88rem;
        line-height: 0.88rem;
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
        width: 1rem;
        height: 1rem;
        color: #666666;
        line-height: 1.32rem;
        background: url("../assets/icon.png") no-repeat -9rem -1rem;
        background-size: 10rem 10rem;
        margin: .18rem .18rem 0 0;
    }
    /*顶部搜索*/

	/*轮播图*/
    .index-banner {
        width: 100%;
        height: 3.3rem;
        overflow: hidden;
        position: relative;
    }
    .index-bannerimg {
        overflow: hidden;
        width: 1000%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .index-bannerimg a {
        width: 10%;
        display: block;
        float: left;
    }
    .index-bannerimg img {
        display: block;
        width: 100%;
    }
    .index-bannernum {
        position: absolute;
        bottom: 0.16rem;
        left: 0;
        width: 100%;
        height: 0.2rem;
        font-size: 0;
        text-align: center;
    }
    .index-bannernum a {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: #e1d2d3;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        margin: 0 0.24rem;
    }
    .index-bannernum .index-bannernum-active {
        background: #57beae;
    }
    /*轮播图*/

    /*主分类*/
    .index-clsmain {
        overflow: hidden;
        margin: .45rem 0 0;
        border-bottom: 0.3rem solid #f4f4f4;
    }
    .index-clsmain a {
    	float: left;
    	width: 25%;
    	font-size: .34rem;
    	text-align: center;
        color: #666666;
        margin: 0 0 .53rem;
    }
    .icon {
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        background: url("../assets/icon.png") no-repeat;
        background-size: 10rem 10rem;
        margin: 0 auto .1rem;
    }

    .icon-disc { background-position: 0 -3rem; }
	.icon-near { background-position: -1.5rem -3rem; }
	.icon-rese { background-position: -3rem -3rem; }
	.icon-take { background-position: -4.5rem -3rem; }
	.icon-new { background-position: -6rem -3rem; }
	.icon-tea { background-position: -7.5rem -3rem; }
	.icon-pot { background-position: 0 -4.5rem; }
	.icon-snack { background-position: -1.5rem -4.5rem; }
</style>