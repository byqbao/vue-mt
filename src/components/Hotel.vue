<template>
	<div class="hotel-page">
		<!-- 轮播图 -->
        <div class="banner">
            <div class="bannerimg">
                <a href="#"><img src="../assets/banner_01.jpg" alt="banner"></a>
                <a href="#"><img src="../assets/banner_01.jpg" alt="banner"></a>
                <a href="#"><img src="../assets/banner_01.jpg" alt="banner"></a>
            </div>
            <div class="bannernum">
                <a href="#"></a>
                <a class="bannernum-active" href="#"></a>
                <a href="#"></a>
            </div>
        </div>
        <!-- 轮播图 -->

        <!-- 表单内容 -->
        <div class="order">
        	<ul class="title">
        		<li><a href="#">国内</a></li>
        		<li><a href="#">国际/港澳台</a></li>
        		<li><a href="#">名宿公寓</a></li>
        		<li><a href="#">租房</a></li>
        	</ul>
        </div>
        <!-- 表单内容 -->
	</div>
</template>

<script>
	
</script>

<style scoped>
	/*轮播图*/
    .banner {
        width: 100%;
        height: 3.3rem;
        overflow: hidden;
        position: relative;
    }
    .bannerimg {
        overflow: hidden;
        width: 1000%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .bannerimg a {
        width: 10%;
        display: block;
        float: left;
    }
    .bannerimg img {
        display: block;
        width: 100%;
    }
    .bannernum {
        position: absolute;
        bottom: 0.16rem;
        left: 0;
        width: 100%;
        height: 0.2rem;
        font-size: 0;
        text-align: center;
    }
    .bannernum a {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: #e1d2d3;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        margin: 0 0.24rem;
    }
    .bannernum .bannernum-active {
        background: #57beae;
    }
    /*轮播图*/

	/*表单内容*/
	.order {
		padding-top: .22rem;
		border-radius: .22rem .22rem 0 0;
		background-color: #fff;
		margin-top: -.22rem;
		position: relative;
	}
	.title {
		font-size: .42rem;
	}
	.title a {
		color: #212121;
	}
	.title li {
		width: 25%;
		text-align: center;
		float: left;
	}
	/*表单内容*/

</style>