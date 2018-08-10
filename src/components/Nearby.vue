<template>
	<div class="nearby-page">
		<!-- 顶部搜索区 -->
        <div class="index-topsearch">

            <!-- 左侧地址区 -->
            <div class="index-leftaddr">
                <h3><i class="icon-pos"></i>清枫华景园</h3>
            </div>

            <!-- 搜索部分 -->
            <div class="index-search">
                <input type="search" name="search" placeholder="找附近的吃喝玩乐">
            </div>
        </div>
        <!-- 顶部搜索区 -->

        <!-- 特色 -->
        <div class="feature">
        	<div class="feat-cont">
	        	<a class="feat-current" href="#"><img src="../assets/fj_banner01.png" alt="特色"></a>
	        	<a href="#"><img src="../assets/fj_banner01.png" alt="特色"></a>
	        	<a href="#"><img src="../assets/fj_banner01.png" alt="特色"></a>
        	</div>
        </div>
        <!-- 特色 -->

        <!-- 分类菜单 -->
        <div class="classmenu">
    		<ul class="main-menu">
    			<li><a class="active" href="#">享美食</a></li>
    			<li><a href="#">惠生活</a></li>
    			<li><a href="#">爱玩乐</a></li>
    			<li><a href="#">住酒店</a></li>
    			<li><a href="#">全部</a></li>
    		</ul>
    		<ul class="sub-menu">
    			<li><a class="active" href="#">热门</a></li>
    			<li><a href="#">甜点饮品</a></li>
    			<li><a href="#">小吃快餐</a></li>
    			<li><a href="#">火锅烧烤</a></li>
    			<li><a href="#">川湘菜</a></li>
    		</ul>
        </div>
        <!-- 分类菜单 -->

        <!-- 商品列表 -->
        <div class="index-like">
            <ul class="index-likelis">
                <li>
                    <a href="#">
                        <img class="index-likelis-img" src="../assets/shop_01.jpg" alt="商品">
                        <div class="index-likeli-txt">
                            <h4 class="index-likelis-tit">老陕小馆<span class="index-likelis-distance">465m</span></h4>
                            <p class="star-box"><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-off"></span></p>
                            <p class="index-likelis-des"><i class="icon-tuan"></i>18店内爆款，19.8元店长推荐套餐，21.8元老陕特色套餐，双人餐103.8起</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="index-likelis-img" src="../assets/shop_01.jpg" alt="商品">
                        <div class="index-likeli-txt">
                            <h4 class="index-likelis-tit">老陕小馆<span class="index-likelis-distance">465m</span></h4>
                            <p class="star-box"><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span></p>
                            <p class="index-likelis-des"><i class="icon-vouch"></i>27代30</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="index-likelis-img" src="../assets/shop_01.jpg" alt="商品">
                        <div class="index-likeli-txt">
                            <h4 class="index-likelis-tit">老陕小馆<span class="index-likelis-distance">465m</span></h4>
                            <p class="star-box"><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span></p>
                            <p class="index-likelis-des"><i class="icon-vouch"></i>27代30</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="index-likelis-img" src="../assets/shop_01.jpg" alt="商品">
                        <div class="index-likeli-txt">
                            <h4 class="index-likelis-tit">老陕小馆<span class="index-likelis-distance">465m</span></h4>
                            <p class="star-box"><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span></p>
                            <p class="index-likelis-des"><i class="icon-vouch"></i>27代30</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="index-likelis-img" src="../assets/shop_01.jpg" alt="商品">
                        <div class="index-likeli-txt">
                            <h4 class="index-likelis-tit">老陕小馆<span class="index-likelis-distance">465m</span></h4>
                            <p class="star-box"><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span></p>
                            <p class="index-likelis-des"><i class="icon-vouch"></i>27代30</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="index-likelis-img" src="../assets/shop_01.jpg" alt="商品">
                        <div class="index-likeli-txt">
                            <h4 class="index-likelis-tit">老陕小馆<span class="index-likelis-distance">465m</span></h4>
                            <p class="star-box"><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span><span class="star-on"></span></p>
                            <p class="index-likelis-des"><i class="icon-vouch"></i>27代30</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 商品列表 -->

        <!-- 底部 -->
        <div class="index-foot">
            <ul>
                <li><a class="icon-foot-home" href="#" @click="go('/')">首页</a></li>
                <li class="index-footact"><a class="icon-foot-enclosure-on" href="#" @click="go('/nearby')">附近</a></li>
                <li><a class="icon-foot-find" href="#" @click="go('/find')">发现</a></li>
                <li><a class="icon-foot-order" href="#">订单</a></li>
                <li><a class="icon-foot-me" href="#">我的</a></li>
            </ul>
        </div>
        <!-- 底部 -->
	</div>
</template>

<script>
export default {
    name: 'Nearby',
    data () {
        return {
        }
    },
    methods: {
        go(path) {
            this.$router.push(path);
        }
    }
}
</script>

<style scoped>
	/*顶部搜索*/
    .index-topsearch {
        padding: 0.22rem 0.48rem 0.22rem 4.2rem;
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
        padding: 0 0.54rem 0 0.48rem;
    }
    .index-search {
    }
    .index-search input {
        display: block;
        width: 100%;
        border: 0;
        background: #ebeced url("../assets/icon_search_bg.jpg") no-repeat 2.02rem center;
        background-size: 0.42rem 0.42rem; 
        color: #666666;
        font-size: 0.36rem;
        height: 0.88rem;
        line-height: 0.88rem;
        text-indent: 2.5rem;
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
    .icon-pos {
    	display: inline-block;
    	width: 0.42rem;
    	height: 0.5rem;
    	background: url("../assets/icon_pos.png") no-repeat;
    	background-size: 0.42rem 0.5rem;
    	vertical-align: middle;
    	margin-right: 0.16rem;
    }
    /*顶部搜索*/

    /*特色*/
    .feature {
    	position: relative;
    	padding: 0.46rem 0 0.7rem 0.65rem;
    	overflow: hidden;
    }
    .feat-cont {
    	overflow: hidden;
    	width: 1000%;
    }
    .feat-cont a {
    	display: block;
    	float: left;
    	width: 7.95rem;
    	height: 4.04rem;
    	margin-right: 0.3rem;
    	transform: scale(0.91);
    }
    .feat-cont img {
    	display: block;
    	width: 100%;
    }
    .feat-cont .feat-current {
    	transform: scale(1);
    }
    /*特色*/

    /*分类菜单*/
    .classmenu {
    	margin-bottom: 0.52rem;
    }
    .main-menu {
    	font-size: 0.38rem;
    	font-weight: bold;
    	margin-bottom: 0.56rem;
    	overflow: hidden;
    }
    .main-menu li {
    	float: left;
    	width: 20%;
    	text-align: center;
    	line-height: 0.88rem;
    	position: relative;
    }
    .main-menu a {
    	color: #000;
    }
    .main-menu .active {
    	color: #e65035;
    	font-size: 0.5rem;
    }
    .main-menu .active:after {
    	display: block;
    	content: "";
    	width: 0.74rem;
    	height: 0.09rem;
    	border-radius: 0.09rem;
    	background: #e65035;
    	position: absolute;
    	bottom: 0;
    	left: 50%;
    	margin-left: -0.37rem;
    }
    .sub-menu {
    	font-size: 0.36rem;
    	overflow: hidden;
    }
    .sub-menu li {
    	width: 20%;
    	float: left;
    	text-align: center;
    }
    .sub-menu a {
    	color: #555;
    	display: inline-block;
    	padding: 0.26rem 0.34rem;
    	border-radius: 0.88rem;
    }
    .sub-menu .active {
    	background: #fbeae6;
    	color: #e7553a;
    }
    /*分类菜单*/

    /*商品列表*/
    .index-like {
        padding: 0 0.38rem;
        margin-bottom: 1.68rem;
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
    .index-likelis-tit {
        font-size: 0.48rem;
        color: #333;
        margin-bottom: 0.3rem;
        line-height: 0.48rem;
    }
    .index-likelis-distance {
        float: right;
        color: #6b6b6b;
        font-weight: 500;
        font-size: 0.28rem;
        padding: 0.1rem 0.14rem 0.1rem 0.16rem;
        background: #f4f4f6;
        color: #7a7a7b;
        border-bottom-left-radius: 50%; 
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

    /*底部*/
    .index-foot {
        width: 100%;
        height: 1.47rem;
        border-top: 1px solid #e5e5e5;
        position: fixed;
        bottom: 0;
        left: 0;
        background-image:-webkit-linear-gradient(to right, #fbf6f5,#ffffff);
        background-image:linear-gradient(to right, #fbf6f5,#ffffff);
    }
    .index-foot ul {}
    .index-foot li {
        float: left;
        width: 20%;
        list-style: none;
    }
    .index-foot a {
        display: block;
        height: 0.41rem;
        text-align: center;
        padding-top: 0.96rem;
        background: no-repeat center 0;
        background-size: 0.92rem 0.9rem;
        font-size: 0.28rem;
        color: #a09e97;
    }
    .index-foot .icon-foot-home-on { background-image: url("../assets/icon_foot_01.jpg"); }
    .index-foot .icon-foot-home { background-image: url("../assets/icon_foot_on_01.png"); }
    .index-foot .icon-foot-enclosure { background-image: url("../assets/icon_foot_02.jpg"); }
    .index-foot .icon-foot-enclosure-on { background-image: url("../assets/icon_foot_on_02.png"); }
    .index-foot .icon-foot-find { background-image: url("../assets/icon_foot_03.jpg"); }
    .index-foot .icon-foot-order { background-image: url("../assets/icon_foot_04.jpg"); }
    .index-foot .icon-foot-me { background-image: url("../assets/icon_foot_05.jpg"); }
    .index-foot .index-footact a {
        color: #55b4a5;
    }
    /*底部*/
</style>