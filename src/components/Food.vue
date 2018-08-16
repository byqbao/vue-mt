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
        <!-- 分类 -->

        <!-- 特价 -->
       	<div class="spec">
       		<div class="spec-list">
       			<div class="spec-item">
       				<a href="#">
       					<img class="spec-img" src="../assets/food_img02.jpg" alt="">
       					<h3>名店抢购</h3>
       					<h4>东来顺饭店</h4>
       					<div class="disc-box">
       						<span class="disc-txt">2.9折</span>
       						<span class="disc-meal">109元双人餐</span>
       					</div>
       				</a>
       			</div>
       			<div class="spec-item">
       				<a href="#">
       					<img class="spec-img" src="../assets/food_img03.jpg" alt="">
       					<h3 class="spec-brown">特价快餐</h3>
       					<h4>吉野家</h4>
       					<div class="disc-box">
       						<span class="disc-meal">109元双人餐</span>
       					</div>
       				</a>
       			</div>
       			<div class="spec-item">
       				<a href="#">
       					<img class="spec-img" src="../assets/food_img04.jpg" alt="">
       					<h3 class="spec-green">抢告白兔</h3>
       					<h4>易烊千玺同款</h4>
       					<div class="disc-box">
       						<span class="disc-meal">109元双人餐</span>
       					</div>
       				</a>
       			</div>
       		</div>
       		<div class="spec-side">
       			<div class="spec-item side-item">
       				<a href="#">
       					<img class="spec-img" src="../assets/food_img05.jpg" alt="">
       					<div class="spec-txts">
	       					<h3 class="spec-green"><span class="icon-time"></span>限时秒杀<div class="count"><span>14</span> : <span>14</span> : <span>52</span></div></h3>
	       					<h4>易烊千玺同款</h4>
	       					<div class="disc-box">
	       						<span class="disc-meal">109元双人餐</span>
	       					</div>
       					</div>
       				</a>
       			</div>
       		</div>
       	</div>
        <!-- 特价 -->

        <!-- 商品列表 -->
        <div class="goods">
        	<div class="title">
        		<div class="tit-item">全部<span class="icon-drop"></span></div>
        		<div class="tit-item">附近<span class="icon-drop"></span></div>
        		<div class="tit-item">智能排序<span class="icon-drop"></span></div>
        		<div class="tit-item">筛选<span class="icon-drop"></span></div>
        	</div>
        	<div class="content">
        		<div class="index-like">
		            <ul class="index-likelis">
		                <li>
		                    <a href="#">
		                        <img class="index-likelis-img" src="../assets/shop_01.jpg" alt="商品">
		                        <div class="index-likeli-txt">
		                            <h4 class="index-likelis-tit">老陕小馆<span class="icon-wai"></span></h4>
		                            <p class="star-box"><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-off"></span><span class="index-likelis-distance">465m</span></p>
		                            <p class="pos"><span>五道口</span> | <span>快餐</span><span class="pop">当前人气76</span></p>
		                            <p class="labs"><span>新店特惠</span></p>
		                            <p class="index-likelis-des"><i class="icon-tuan"></i>18店内爆款，19.8元店长推荐套餐，21.8元老陕特色套餐，双人餐103.8起</p>
		                            <p class="index-likelis-des"><i class="icon-vouch"></i>27代30</p>
		                        </div>
		                    </a>
		                </li>
		                <li>
		                    <a href="#">
		                        <img class="index-likelis-img" src="../assets/shop_01.jpg" alt="商品">
		                        <div class="index-likeli-txt">
		                            <h4 class="index-likelis-tit">老陕小馆<span class="icon-wai"></span></h4>
		                            <p class="star-box"><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-off"></span><span class="index-likelis-distance">465m</span></p>
		                            <p class="pos"><span>五道口</span> | <span>快餐</span><span class="pop">当前人气76</span></p>
		                            <p class="labs"><span>新店特惠</span></p>
		                            <p class="index-likelis-des"><i class="icon-vouch"></i>27代30</p>
		                        </div>
		                    </a>
		                </li>
		            </ul>
		        </div>
        	</div>
        </div>
        <!-- 商品列表 -->


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
	/*分类*/

	/*特价*/
	.spec {
		padding: .3rem .33rem .3rem .36rem;
		border-bottom: .3rem solid #f4f4f4;
	}
	.spec-list {
		overflow: hidden;
		margin-right: -.15rem;
	}
	.spec-item {
		width: 3.81rem;
		background: #f8f8f8;
		overflow: hidden;
		float: left;
		margin-right: .15rem;
	}
	.spec-item a {
		display: block;
	}
	.spec-img {
		width: 100%;
	}
	.spec-item h3 {
		font-size: .46rem;
		margin-bottom: .25rem;
		text-indent: .13rem;
		color: #ff7b42;
	}
	.spec-item .spec-brown {
		color: #cc8659;
	}
	.spec-item .spec-green {
		color: #78c352;
	}
	.spec-item h4 {
		font-size: .36rem;
		margin-bottom: .13rem;
		text-indent: .13rem;
		color: #333;
	}
	.disc-box {
		font-size: .28rem;
		margin-left: .15rem;
		border: 1px solid #fd9595;
		float: left;
		border-radius: .06rem;
		margin-bottom: .42rem;
	}
	.disc-txt {
		display: inline-block;
		padding: .06rem .08rem;
		background: #ff6868;
		color: #fff;
	}
	.disc-meal {
		display: inline-block;
		padding: .06rem .08rem;
		color: #ff6868;
	}
	.side-item {
		width: 100%;
		margin-right: .15rem;
		margin-top: .15rem;
		background: #f66;
		padding-bottom: .3rem;
	    float: initial;
	}
	.side-item .spec-img {
		width: 3.42rem;
		height: 2.7rem;
		float: left;
		margin-right: .15rem;
		display: block;
	}
	.side-item h3 {
		padding: .25rem 0 0;
		color: #fff!important;
	}
	.side-item h4 {
		color: #fff!important;
	}
	.spec-txts {
		float: left;
		width: 8rem;
	}
	.side-item .disc-box {
		border-color: #fff;
		margin-bottom: 0;
	}
	.side-item a {
		overflow: hidden;
	}
	.side-item .disc-box span {
		color: #fff;
	}
	.icon-time {
		display: inline-block;
        width: .5rem;
        height: .5rem;
        background: url("../assets/icon.png") no-repeat 0 -6rem;
        background-size: 10rem 10rem;
        vertical-align: middle;
	}
	.count {
		display: inline-block;
		float: right;
	}
	.count span {
		display: inline-block;
		width: .51rem;
		height: .51rem;
		background: #333;
		color: .26rem;
		padding: .09rem;
		text-indent: 0;
		font-weight: 500;
		border-radius: .08rem;
	}
	/*特价*/

	/*商品列表*/
	.goods {
		padding: .46rem 0 0 0;
		font-size: .4rem;
		color: #666;
	}
	.goods .title {
		overflow: hidden;
		margin: 0 0 .16rem;
	}
	.goods .tit-item {
		float: left;
		width: 25%;
		text-align: center;
	}
	.icon-drop {
		display: inline-block;
		width: .5rem;
		height: .5rem;
		background: url("../assets/icon.png") no-repeat -.5rem -6rem;
		background-size: 10rem 10rem;
		vertical-align: middle;
		margin-left: .06rem;
	}

	/*商品列表*/
    .index-like {
        padding: 0 0.38rem;
    }
    .index-liketit {
        width: 100%;
        height: 1.3rem;
        line-height: 1.3rem;
        border-bottom: 0.01rem solid #e5e5e5;
        color: #999999;
        font-size: 0.36rem;
        position: relative;
        text-align: center;
    }
    .index-liketit .tit {
        position: relative;
        z-index: 2;
        background:#fff;
        padding: 0 0.28rem;
    }
    .line {
        display: block;
        width: 2.8rem;
        height: 1px;
        background: #979797;
        position: absolute;
        top: 45%;
        left: 50%;
        margin: 0 0 0 -1.4rem;
    }
    .index-likelis {
    }
    .index-likelis li {
        display: block;
        border-bottom: 1px solid #ececec;
    }
    .index-likelis a {
        display: block;
        padding: 0.46rem 0 0.52rem;
    }
    .index-likelis-img {
        float: left;
        width: 2.4rem;
        height: 1.8rem;
    }
    .index-likeli-txt {
        margin-left: 3rem;
    }
    .index-likeli-txt .pos {
    	font-size: .34rem;
    	color: #666;
    	margin-bottom: .31rem;
    }
    .index-likeli-txt .pos span {}
    .index-likeli-txt .pop {
    	float: right;
    	color: #f2a23c;
    }
    .index-likeli-txt .labs {
    	font-size: .3rem;
    	color: #9c9b9c;
    }
    .index-likeli-txt .labs span {
    	display: inline-block;
    	border: 1px solid #cacaca;
    	padding: .05rem .08rem;
    	border-radius: .06rem;
    	margin-right: .15rem;
    	margin-bottom: .45rem;
    }
    .index-likelis-tit {
        font-size: 0.42rem;
        color: #333;
        margin-bottom: 0.3rem;
        line-height: 0.48rem;
    }
    .icon-wai {
    	display: inline-block;
    	width: .5rem;
    	height: .5rem;
    	background: url("../assets/icon.png") no-repeat -1rem -6rem;
    	background-size: 10rem 10rem;
    	vertical-align: middle;
    	margin-left: .2rem;
    }
    .index-likelis-distance {
        float: right;
        color: #6b6b6b;
        font-weight: 500;
        font-size: 0.28rem;
        color: #7a7a7b;
    }
    .index-likelis-des {
        font-size: 0.34rem;
        color: #6b6b6b;
        margin-bottom: 0.3rem;
    	line-height: 0.6rem;
    }
    .index-likelis-pricebox {
        font-size: 0.38rem;
        margin-bottom: 0.24rem;
    }
    .index-likelis-pricebox em {
        font-size: 0.28rem;
        color: #ed702d;
        font-weight: bold;
    }
    .index-likelis-price {
        font-size: 0.44rem;
        color: #ed702d;
        font-weight: bold;
    }
    .index-likelis-num {
        color: #6b6b6b;
        font-size: 0.36rem;
        float: right;
    }
    .index-likelis-discount {
        font-size: 0.3rem;
    }
    .index-likelis-discount span {
        font-size: 0.3rem;
        display: inline-block;
        background: #fdf5d5;
        border: 1px solid #f6cdc9;
        padding: 0.04rem 0.16rem;
        -webkit-border-radius: 0.17rem;
        -moz-border-radius: 0.17rem;
        border-radius: 0.06rem;
        color: #e85b4d;
    }
    .star-box {
    	overflow: hidden;
    	margin-bottom: 0.38rem;
    }
    .star-box span {
    	margin-right: 0.06rem;
    }
    .star-on{
    	display: block;
    	float: left;
    	width: 0.27rem;
    	height: 0.28rem;
    	background: url("../assets/icon_star.png") no-repeat center;
    	background-size: 0.27rem 0.28rem;
    }
    .star-off{
    	display: block;
    	float: left;
    	width: 0.27rem;
    	height: 0.28rem;
    	background: url("../assets/icon_star_off.png") no-repeat center;
    	background-size: 0.27rem 0.28rem;
    }
    .icon-tuan {
    	display: inline-block;
    	width: 0.45rem;
    	height: 0.46rem;
    	background: url("../assets/icon_tuan.png") no-repeat center;
    	background-size: 0.45rem 0.46rem;
    	vertical-align: middle;
    	margin-right: 0.18rem;
    	position: relative;
    	top: -2px;
    }
    .icon-vouch {
    	display: inline-block;
    	width: 0.45rem;
    	height: 0.46rem;
    	background: url("../assets/icon_vouch.png") no-repeat center;
    	background-size: 0.45rem 0.46rem;
    	vertical-align: middle;
    	margin-right: 0.18rem;
    	position: relative;
    	top: -2px;
    }
	/*商品列表*/
</style>