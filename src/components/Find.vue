<template>
	<div class="find-page">

		<!-- 顶部标题 -->
		<div class="head">
			<h1>发现</h1>
		</div>
		<!-- 顶部标题 -->

		<!-- 导航菜单 -->
		<div class="nav">
			<ul>
				<li><a class="active" href="#">精选</a></li>
				<li><a href="#">关注</a></li>
				<li><a href="#">爱美食</a></li>
				<li><a href="#">出去浪</a></li>
				<li><a href="#">生活控</a></li>
				<li><a href="#">变漂亮</a></li>
			</ul>
		</div>
		<!-- 导航菜单 -->

		<!-- 内容列表 -->
		<div class="content">
			<ul>
				<li>
					<h3>国外小伙第一次在中国吃火锅国外小伙第一次在中国吃火锅国外小伙第一次在中国吃火锅</h3>
					<div class="img-li">
						<img src="../assets/shop_01.jpg" alt="">
						<img src="../assets/shop_01.jpg" alt="">
						<img src="../assets/shop_01.jpg" alt="">
					</div>
					<div class="cls-box">
						<h4>厨房的生活</h4>
						<span><i class="icon-look"></i>1.4万人看过</span>
					</div>
				</li>
				<li>
					<h3>国外小伙第一次在中国吃火锅国外小伙第一次在中国吃火锅国外小伙第一次在中国吃火锅</h3>
					<div class="img-li">
						<img src="../assets/shop_01.jpg" alt="">
						<img src="../assets/shop_01.jpg" alt="">
						<img src="../assets/shop_01.jpg" alt="">
					</div>
					<div class="cls-box">
						<h4>厨房的生活</h4>
						<span><i class="icon-look"></i>1.4万人看过</span>
					</div>
				</li>
				<li>
					<h3>国外小伙第一次在中国吃火锅国外小伙第一次在中国吃火锅国外小伙第一次在中国吃火锅</h3>
					<div class="img-li">
						<img src="../assets/shop_01.jpg" alt="">
						<img src="../assets/shop_01.jpg" alt="">
						<img src="../assets/shop_01.jpg" alt="">
					</div>
					<div class="cls-box">
						<h4>厨房的生活</h4>
						<span><i class="icon-look"></i>1.4万人看过</span>
					</div>
				</li>
				<li>
					<h3>国外小伙第一次在中国吃火锅国外小伙第一次在中国吃火锅国外小伙第一次在中国吃火锅</h3>
					<div class="img-li">
						<img src="../assets/shop_01.jpg" alt="">
						<img src="../assets/shop_01.jpg" alt="">
						<img src="../assets/shop_01.jpg" alt="">
					</div>
					<div class="cls-box">
						<h4>厨房的生活</h4>
						<span><i class="icon-look"></i>1.4万人看过</span>
					</div>
				</li>
			</ul>
		</div>
		<!-- 内容列表 -->

		<!-- 底部 -->
        <div class="index-foot">
            <ul>
                <li><a class="icon-foot-home" href="#" @click="go('/')">首页</a></li>
                <li><a class="icon-foot-enclosure" href="#" @click="go('/nearby')">附件</a></li>
                <li class="index-footact"><a class="icon-foot-find" href="#" @click="go('/find')">发现</a></li>
                <li><a class="icon-foot-order" href="#">订单</a></li>
                <li><a class="icon-foot-me" href="#">我的</a></li>
            </ul>
        </div>
        <!-- 底部 -->
	</div>
</template>

<script>
export default {
    name: 'Find',
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

<style>
	/*顶部标题*/
	.head {}
	.head h1 {
		height: 1.2rem;
		line-height: 1.2rem;
		color: #000;
		font-size: 0.48rem;
		text-align: center;
		border-bottom: 1px solid #aaa;
	}
	/*顶部标题*/

	/*导航菜单*/
	.nav {
		overflow: hidden;
		border-bottom: 1px solid #e5e5e5;
	}
	.nav ul {
		overflow: hidden;
		padding-left: 0.6rem;
		width: 200%;
	}
	.nav li {
		float: left;
		display: block;
	}
	.nav a {
		color: #999;
		font-size: 0.46rem;
		display: block;
		padding: 0.4rem 0 0.38rem;
		margin-right: 0.78rem;
		border-bottom: 0.08rem solid #fff;
	}
	.nav .active {
		border-color: #65cfc0;
		color: #222;
		font-weight: bold;
	}
	/*导航菜单*/

	/*内容列表*/
	.content {
		border-bottom: 1.68rem solid #f4f4f4;
	}
	.content ul {}
	.content li {
		padding: 0.37rem 0 0.47rem;
		border-bottom: 1px solid #efefef;
	}
	.content h3 {
		font-size: 0.46rem;
		padding: 0 0.38rem;
		margin-bottom: 0.2rem;
		color: #3d424a;
	}
	.content .img-li {
		text-align: center;
	}
	.content .img-li img {
		width: 3.46rem;
		height: 2.52rem;
	}
	.content .cls-box {
		font-size: 0.3rem;
		color: #999;
	}
	.content .cls-box h4 {
		float: left;
		padding-left: 0.37rem;
		font-weight: 500;
		margin-right: 0.42rem;
	}
	.content .cls-box span {}
	.icon-look {
		display: inline-block;
		width: 0.36rem;
		height: 0.3rem;
		background: url("../assets/icon_look.png") no-repeat center;
		background-size: 0.36rem 0.3rem;
		vertical-align: middle;
		position: relative;
	    top: -1px;
	    margin-right: 0.1rem;
	}
	/*内容列表*/

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
    .index-foot .icon-foot-find { background-image: url("../assets/icon_foot_on_03.png"); }
    .index-foot .icon-foot-order { background-image: url("../assets/icon_foot_04.jpg"); }
    .index-foot .icon-foot-me { background-image: url("../assets/icon_foot_05.jpg"); }
    .index-foot .index-footact a {
        color: #55b4a5;
    }
    /*底部*/
</style>