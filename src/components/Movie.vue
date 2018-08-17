<template>
	<div class="movie-page">
		<!-- 头部 -->
		<div class="head">
			<a class="back" href="#"><span class="icon icon-back"></span></a>
			<h1><span class="on">电影</span><span>点播</span><span>商城</span><span>演出</span></h1>
			<a class="search" href="#"><span class="icon icon-search"></span></a>
		</div>
		<!-- 头部 -->

		<!-- 轮播图 -->
        <div class="index-banner">
            <div class="index-bannerimg">
                <a href="#"><img src="../assets/movie_img01.jpg" alt="banner"></a>
                <a href="#"><img src="../assets/movie_img01.jpg" alt="banner"></a>
                <a href="#"><img src="../assets/movie_img01.jpg" alt="banner"></a>
            </div>
            <div class="index-bannernum">
                <a href="#"></a>
                <a class="index-bannernum-active" href="#"></a>
                <a href="#"></a>
            </div>
        </div>
        <!-- 轮播图 -->

        <!-- 分类卡片 -->
        <div class="card">
        	<div class="content">
	        	<div class="item">
	        		<h2 class="changered">实时票房</h2>
	        		<h3>即时更新</h3>
	        	</div>
	        	<div class="item">
	        		<h2 class="changeyellow">领券中心</h2>
	        		<h3>优惠享不停</h3>
	        	</div>
	        	<div class="item">
	        		<h2 class="changepurple">抓娃娃</h2>
	        		<h3>正版免费抓</h3>
	        	</div>
        	</div>
        </div>
        <!-- 分类卡片 -->

        <!-- 热门电影 -->
        <div class="hot">
        	<div class="title">
        		<h2>热门影片</h2>
        		<a class="lookall" href="#">查看全部<span class="icon icon-sm icon-all"></span></a>
        	</div>
        	<div class="content">
        		<div class="slide">
	        		<ul>
	        			<li>
	        				<a href="#">
	        					<div class="img-box">
		        					<img src="../assets/movie_img02.jpg" alt="">
		        					<p class="eval">8.2分</p>
	        					</div>
	        					<h3>一出好戏</h3>
	        				</a>
	        			</li>
	        			<li>
	        				<a href="#">
	        					<div class="img-box">
		        					<img src="../assets/movie_img02.jpg" alt="">
		        					<p class="eval">8.2分</p>
	        					</div>
	        					<h3>一出好戏</h3>
	        				</a>
	        			</li>
	        			<li>
	        				<a href="#">
	        					<div class="img-box">
		        					<img src="../assets/movie_img02.jpg" alt="">
		        					<p class="eval">8.2分</p>
	        					</div>
	        					<h3>一出好戏</h3>
	        				</a>
	        			</li>
	        			<li>
	        				<a href="#">
	        					<div class="img-box">
		        					<img src="../assets/movie_img02.jpg" alt="">
		        					<p class="eval">8.2分</p>
	        					</div>
	        					<h3>一出好戏</h3>
	        				</a>
	        			</li>
	        			<li>
	        				<a href="#">
	        					<div class="img-box">
		        					<img src="../assets/movie_img02.jpg" alt="">
		        					<p class="eval">8.2分</p>
	        					</div>
	        					<h3>一出好戏</h3>
	        				</a>
	        			</li>
	        			<li>
	        				<a href="#">
	        					<div class="img-box">
		        					<img src="../assets/movie_img02.jpg" alt="">
		        					<p class="eval">8.2分</p>
	        					</div>
	        					<h3>一出好戏</h3>
	        				</a>
	        			</li>
	        		</ul>
        		</div>
        	</div>
        </div>
        <!-- 热门电影 -->

        <!-- 商品列表 -->
        <div class="goods">
        	<div class="title">
        		<div class="tit-item">全部<span class="icon-drop"></span></div>
        		<div class="tit-item">附近<span class="icon-drop"></span></div>
        		<div class="tit-item">智能排序<span class="icon-drop"></span></div>
        		<div class="tit-item">筛选<span class="icon-drop"></span></div>
        	</div>
        	<div class="content">
        		<div class="like">
		            <ul class="likelis">
		                <li>
		                    <a href="#">
		                        <div class="likeli-txt">
		                            <h4 class="likelis-tit">嘉华国际影城<span class="likelis-distance">465m</span></h4>
		                            <p class="price-box"><span class="price">￥29起</span><span class="lab yel">小吃</span><span class="lab blu">巨幕厅</span></p>
		                        </div>
		                    </a>
		                </li>
		                <li>
		                    <a href="#">
		                        <div class="likeli-txt">
		                            <h4 class="likelis-tit">嘉华国际影城<span class="likelis-distance">465m</span></h4>
		                            <p class="price-box"><span class="price">￥29起</span><span class="lab yel">小吃</span><span class="lab blu">巨幕厅</span></p>
		                        </div>
		                    </a>
		                </li>
		                <li>
		                    <a href="#">
		                        <div class="likeli-txt">
		                            <h4 class="likelis-tit">嘉华国际影城<span class="likelis-distance">465m</span></h4>
		                            <p class="price-box"><span class="price">￥29起</span><span class="lab yel">小吃</span><span class="lab blu">巨幕厅</span></p>
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
	.movie-page {
		line-height: 1;
	}

	/*头部*/
	.head {
		padding: .2rem 0 .18rem;
		text-align: center;
		line-height: 0;
	}

	.head .back,.head .search  {
		position: absolute;
		top: .16rem;
	}
	.head .back {
		left: .36rem;
	}
	.head .search {
		right: .36rem;
	}

	.icon {
		display: block;
		width: 1rem;
		height: 1rem;
		background: url("../assets/icon.png") no-repeat;
		background-size: 10rem 10rem;
	}
	.icon-back { background-position: -8rem -1rem; }
	.icon-search { background-position: -1rem -2rem; }
	.head .search {
		display: block;
		position: absolute;
		top: .16rem;
		right: .36rem;
		width: 1rem;
		height: 1rem;
		background: url("../assets/icon.png") no-repeat;
		background-size: 10rem 10rem;
	}
	.head h1 {
		height: .88rem;
		line-height: .88rem;
		display: inline-block;
		border: .03rem solid #03c1ae;
		color: #03c1ae;
		font-size: .36rem;
		font-weight: 500;
		border-radius: .12rem;
		overflow: hidden;
	}
	.head h1 span {
		display: block;
		float: left;
		padding: 0 .3rem;
		border-right: .03rem solid #03c1ae;
		margin-right: -.03rem;
	}
	.head h1 .on {
		background: #03c1ae;
		color: #fff;
	}
	/*头部*/

	/*轮播图*/
    .index-banner {
        width: 100%;
        height: 2.91rem;
        overflow: hidden;
        position: relative;
        margin-bottom: .3rem;
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

    /*分类卡片*/
    .card {
    	overflow: hidden;
    	padding: 0 .3rem;
    	margin-bottom: .74rem;
    }
    .card .content {
    	margin-right: -.24rem;
    }
    .card .item {
    	float: left;
    	width: 3.7rem;
    	border: 1px solid #d8d8d8;
    	padding-top: .3rem;
    	border-radius: .12rem;
    	margin-right: .24rem;
    }
    .card .item h2 {
    	width: 2.64rem;
    	height: .66rem;
    	line-height: .66rem;
    	font-size: .4rem;
    	color: #fff;
    	border-radius: 0 .33rem .33rem 0;
    	padding-left: .36rem;
    	margin-bottom: .18rem;

    }
    .card .item .changered {
		background: -webkit-linear-gradient(to right,#ff3b42, #fe3d7a);
		background: -o-linear-gradient(to right,#ff3b42, #fe3d7a);
		background: -moz-linear-gradient(to right,#ff3b42, #fe3d7a);
		background: linear-gradient(to right,#ff3b42, #fe3d7a);
    }
    .card .item .changeyellow {
    	background: -webkit-linear-gradient(to right,#ffaf5a, #f8a902);
		background: -o-linear-gradient(to right,#ffaf5a, #f8a902);
		background: -moz-linear-gradient(to right,#ffaf5a, #f8a902);
		background: linear-gradient(to right,#ffaf5a, #f8a902);
    }
    .card .item .changepurple {
    	background: -webkit-linear-gradient(to right,#c164fe, #9363f2);
		background: -o-linear-gradient(to right,#c164fe, #9363f2);
		background: -moz-linear-gradient(to right,#c164fe, #9363f2);
		background: linear-gradient(to right,#c164fe, #9363f2);
    }
    .card .item h3 {
    	font-size: .34rem;
    	color: #333;
    	line-height: 1;
    	margin-left: .36rem;
    	margin-bottom: .36rem;
    }
    /*分类卡片*/

    /*热门影片*/
    .hot {
    	border-bottom: .33rem solid #f0efed;
    }
    .hot .title {
    	overflow: hidden;
    	margin: 0 .36rem .36rem;
    }
    .hot .title h2{
    	color: #333;
    	font-size: .42rem;
    	line-height: 1.2;
    	float: left;
    }
    .hot .title .lookall {
    	color: #a1a1a1;
    	font-size: .34rem;
    	float: right;
    }
    .hot .content {
    	/*padding-left: .3rem;*/
    }
    .hot .slide {
    	overflow-x: scroll;
    	margin-left: .3rem;
    }
    .hot .content ul {
    	overflow: hidden;
    	width: 1000%;
    }
    .hot .content li {
    	float: left;
    	margin-right: .24rem;
    }
    .hot .content a {
    	display: block;
    }
    .hot .content .img-box {
    	position: relative;
    	margin-bottom: .28rem;
    }
    .hot .content .img-box img {
    	display: block;
    	width: 2.61rem;
    	height: 3.66rem;
    }
    .hot .content .eval {
    	font-size: .34rem;
    	color: #fd9800;
    	position: absolute;
    	bottom: .14rem;
    	left: .14rem;
    }
    .hot .content h3 {
    	font-size: .4rem;
    	color: #222;
    	margin-bottom: .38rem;
    }
    .icon-all {
    	background-position: -1.5rem -6rem;
    	display: inline-block;
    	vertical-align: text-bottom;
    }
    .icon-sm {
    	width: .5rem;
    	height: .5rem;
    }
    /*热门影片*/

    /*商品列表*/
	.goods {
		font-size: .4rem;
		color: #666;
	}
	.goods .title {
		overflow: hidden;
		margin: 0 0 .16rem;
		padding: .29rem 0;
		margin-right: -1px;
		border-bottom: 1px solid #d8d8d8;
	}
	.goods .tit-item {
		float: left;
		width: 25%;
		text-align: center;
		border-right: 1px solid #d8d8d8;
		box-sizing: border-box;
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

    .like {}
    .likelis {
	    margin-top: -7px;
    }
    .likelis li {

    }
    .likelis a {
    	display: block;
    	padding: .54rem .48rem .58rem .4rem;
    	border-top: 1px solid #d8d8d8;
    }
    .likeli-txt {}
    .likelis-tit {
    	font-size: .44rem;
    	color: #000;
    	margin-bottom: .4rem;
    }
    .likelis-distance {
    	float: right;
    	font-size: .26rem;
    	color: #999;
    }
    .price-box {}
    .price {
    	font-size: .4rem;
    	color: #03c1ae;
    	font-weight: bold;
    	margin-right: .18rem;
    }
    .lab {
    	display: inline-block;
    	padding: .08rem;
    	border: 1px solid #ccc;
    	border-radius: .06rem;
    	margin-right: .15rem;
    	font-size: .28rem;
    	color: #ccc;
    }
    .yel {
    	border-color: #ff9900;
    	color: #ff9900;
    }
    .blu {
    	border-color: #6dbd05;
    	color: #6dbd05;
    }
	/*商品列表*/

</style>