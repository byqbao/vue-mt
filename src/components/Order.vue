<template>
	<div class="order-page">
		<!-- 顶部标题 -->
		<div class="head">
			<h1>我的订单</h1>
		</div>
		<!-- 顶部标题 -->

		<!-- 分类 -->
        <div class="clsmain">
            <a href="#">美食</a>
            <a class="icon-dy" href="#">电影/演出</a>
            <a class="icon-jd" href="#">酒店住宿</a>
            <a class="icon-yl" href="#">休闲娱乐</a>
            <a class="icon-wm" href="#">外卖</a>
        </div>
		<!-- 分类 -->

		<!-- 最近订单 -->
		<div class="late-order">
			<h2>最近订单</h2>
			<ul>
				<li>
					<div class="head">
						<h3><i class="icon-house"></i>美团酒店</h3>
						<span class="order-act">待评价</span>
					</div>
					<div class="cont">
						<img src="../assets/order_img01.png" alt="订单">
						<div class="txt">
							<h4>7天连锁酒店(西安东大街)</h4>
							<p>1间，自主大床房(限时优惠)</p>
							<p>使用时间: 2018-06-18至20</p>
							<p>总价: ￥252.00</p>
							<div class="btn">
								<a class="evaluate" href="#">评价</a>
								<a href="#">再次预定</a>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="head">
						<h3><i class="icon-takeout"></i>美团外卖</h3>
						<span class="order-act">待评价</span>
					</div>
					<div class="cont">
						<img src="../assets/order_img01.png" alt="订单">
						<div class="txt">
							<h4>7天连锁酒店(西安东大街)</h4>
							<p>1间，自主大床房(限时优惠)</p>
							<p>使用时间: 2018-06-18至20</p>
							<p>总价: ￥252.00</p>
							<div class="btn">
								<a href="#">评价</a>
								<a href="#">再次预定</a>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!-- 最近订单 -->

		<!-- 底部 -->
        <div class="index-foot">
            <ul>
                <li><a class="icon-foot-home" href="#" @click="go('/')">首页</a></li>
                <li><a class="icon-foot-enclosure" href="#" @click="go('/nearby')">附近</a></li>
                <li><a class="icon-foot-find" href="#" @click="go('/find')">发现</a></li>
                <li class="index-footact"><a class="icon-foot-order" href="#" @click="go('/order')">订单</a></li>
                <li><a class="icon-foot-me" href="#" @click="go('/me')">我的</a></li>
            </ul>
        </div>
        <!-- 底部 -->

	</div>
</template>

<script>
export default {
    name: 'Order',
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
	/*顶部标题*/
	.head {}
	.head h1 {
		height: 1.2rem;
		line-height: 1.2rem;
		color: #000;
		font-size: 0.48rem;
		text-align: center;
	}
	/*顶部标题*/

	/*分类*/
    .clsmain {
        overflow: hidden;
        margin: 0 0.22rem;
        padding-top: 0.36rem;
    }
    .clsmain a {
        float: left;
        display: block;
        width: 20%;
        color: #333;
        background: url("../assets/order_icon_01.png") no-repeat center 0;
        background-size: 0.85rem 0.85rem;
        padding: 1.12rem 0 1.24rem;
        font-size: 0.36rem;
        text-align: center;
    }
    .clsmain .icon-dy { background-image: url("../assets/order_icon_02.png"); }
    .clsmain .icon-jd { background-image: url("../assets/order_icon_03.png"); }
    .clsmain .icon-yl { background-image: url("../assets/order_icon_04.png"); }
    .clsmain .icon-wm { background-image: url("../assets/order_icon_05.png"); }
    /*分类*/

    /*最近订单*/
    .late-order {
    	padding: 0 0.44rem;
    	margin-bottom: 2.6rem;
    }
    .late-order h2 {
    	font-size: 0.48rem;
    	color: #222;
    	font-weight: bold;
    	margin-bottom: 0.48rem;
    }
    .late-order ul {
    	font-size: 0.4rem;
    }
    .late-order li {
    	border: 1px solid #eee;
    	padding: 0 .38rem;
    	-webkit-border-radius: .32rem;
    	border-radius: .32rem;
    	box-shadow: 0 .1rem .96rem #e4deda;
    	margin-bottom: 1.04rem;
    }
    .late-order li .head {
    	height: 1.62rem;
    	line-height: 1.62rem;
    	margin-bottom: .4rem;
    	border-bottom: 1px solid #eee;
    }
    .late-order li .head h3 {
    	display: inline-block;
    	color: #333;
    }
    .icon-house {
    	display: inline-block;
    	width: .69rem;
    	height: .69rem;
    	background: url("../assets/order_icon_06.png") no-repeat center;
    	background-size: .69rem .69rem;
    	vertical-align: middle;
    	margin-right: .14rem;
    }
    .icon-takeout {
    	display: inline-block;
    	width: .69rem;
    	height: .69rem;
    	background: url("../assets/order_icon_07.png") no-repeat center;
    	background-size: .69rem .69rem;
    	vertical-align: middle;
    	margin-right: .14rem;
    }
    .late-order li .head .order-act {
    	float: right;
    	color: #555;
    }
    .late-order li .cont {
    	overflow: hidden;
    }
    .late-order li .cont img {
    	float: left;
    	width: 1rem;
    }
    .late-order li .cont .txt {
    	padding-left: 1.38rem;
    }
    .late-order li .cont .txt h4 {
    	font-size: .46rem;
    	height: 1rem;
    	line-height: 1rem;
    }
    .late-order li .cont .txt p {
    	line-height: .84rem;
    }
    .late-order li .cont .txt .btn {
    	padding-top: .52rem;
    	text-align: right;
    	padding-bottom: .66rem;
    }
    .late-order li .cont .txt .btn a {
    	display: inline-block;
    	width: 3.06rem;
    	height: 1.06rem;
    	line-height: 1.06rem;
    	border: 1px solid #c6c6c6;
    	-webkit-border-radius: 1.06rem;
    	border-radius: 1.06rem;
    	text-align: center;
    	color: #333;
    }
    .late-order li .cont .txt .btn .evaluate {
    	margin-right: .34rem;
    }
    /*最近订单*/

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
    .index-foot .icon-foot-home { background-image: url("../assets/icon_foot_on_01.png"); }
    .index-foot .icon-foot-enclosure { background-image: url("../assets/icon_foot_02.jpg"); }
    .index-foot .icon-foot-find { background-image: url("../assets/icon_foot_03.jpg"); }
    .index-foot .icon-foot-order { background-image: url("../assets/icon_foot_on_04.png"); }
    .index-foot .icon-foot-me { background-image: url("../assets/icon_foot_05.jpg"); }
    .index-foot .index-footact a {
        color: #55b4a5;
    }
    /*底部*/
</style>