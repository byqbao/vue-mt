<template>
	<div class="me-page">

		<!-- 顶部 -->
		<div class="head">
			<div class="clear">
				<div class="head-l">
					<span class="icon icon-set"></span>
				</div>
				<div class="head-r">
					<span class="icon icon-theme"></span>
					<span class="icon icon-news"></span>
				</div>
			</div>

			<div class="info">
				<div class="arc"></div>
				<div class="avitar-box">
					<div class="avitar">
						<img src="../assets/avitar.png">
					</div>
					<strong>蜗牛</strong>
				</div>
			</div>
		</div>
		<!-- 顶部 -->

		<!-- 分类 -->
		<div class="index-clsmain">
	        <a href="#"><span class="icon icon-coll"></span>收藏</a>
	        <a href="#"><span class="icon icon-eval"></span>评价</a>
	        <a href="#"><span class="icon icon-brow"></span>最近浏览</a>
	    </div>
		<!-- 分类 -->

		<!-- 美团钱包 -->
		<div class="wallet-box">
			<h3>美团钱包</h3>
			<div class="wallet-list">
		        <a href="#"><span class="icon icon-wall"></span>我的钱包</a>
		        <a href="#"><span class="icon icon-red"></span>红包/卡券</a>
		        <a href="#"><span class="icon icon-pay"></span>闪付</a>
		        <a href="#"><span class="icon icon-card"></span>美团信用卡</a>
		        <a href="#"><span class="icon icon-rech"></span>手机充值</a>
		    </div>
		</div>
		<!-- 美团钱包 -->

		<!-- 美团钱包 -->
		<div class="wallet-box mb200">
			<h3>美团服务</h3>
			<div class="wallet-list nobor">
		        <a href="#"><span class="icon icon-mem"></span>会员中心</a>
		        <a href="#"><span class="icon icon-pub"></span>美团公益</a>
		        <a href="#"><span class="icon icon-serv"></span>客服中心</a>
		        <a href="#"><span class="icon icon-free"></span>免流用美团</a>
		        <a href="#"><span class="icon icon-invo"></span>发票助手</a>
		        <a href="#"><span class="icon icon-coop"></span>我要合作</a>
		        <a href="#"><span class="icon icon-about"></span>关于美团</a>
		    </div>
		</div>
		<!-- 美团钱包 -->

		<!-- 底部 -->
        <div class="index-foot">
            <ul>
                <li><a class="icon-foot-home" href="#" @click="go('/')">首页</a></li>
                <li><a class="icon-foot-enclosure" href="#" @click="go('/nearby')">附近</a></li>
                <li><a class="icon-foot-find" href="#" @click="go('/find')">发现</a></li>
                <li><a class="icon-foot-order" href="#" @click="go('/order')">订单</a></li>
                <li class="index-footact"><a class="icon-foot-me" href="#" @click="go('/me')">我的</a></li>
            </ul>
        </div>
        <!-- 底部 -->
		
	</div>
</template>

<script>
export default {
    name: 'Index',
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
	/*顶部*/
	.head {
		background: -webkit-linear-gradient(to bottom, #53a8b0, #5dbcbb);
		background: linear-gradient(to bottom, #53a8b0, #5dbcbb);
		overflow: hidden;
	}
	.clear {
		padding: .13rem .59rem 0;
		overflow: hidden;
	}
	.head-l {
		float: left;
	}
	.icon {
		display: block;
		width: 1rem;
		height: 1rem;
		background: url("../assets/icon.png") no-repeat;
		background-size: 10rem 10rem;
	}
	.icon-set { background-position: 0 0; }
	.head-r {
		float: right;
		overflow: hidden;
	}
	.head-r .icon {
		float: left;
	}
	.head-r .icon-theme {
		margin-right: .37rem;
	}
	.icon-theme { background-position: -1rem 0; }
	.icon-news { background-position: -2rem 0; }

	.info {
		clear: both;
		margin-top: 1.6rem;
		background-size: 100%;
		background: #fff;
		position: relative;
		height: 1.92rem;
	}
	.arc {
		width: 100%;
		height: 1.04rem;
		border-radius: 50%;
		background: #fff;
		position: absolute;
		top: -0.52rem;
		left: 0;
	}
	.avitar {
		margin-bottom: .2rem;
	}
	.avitar img {
		width: 1.55rem;
		height: 1.55rem;
		border: .08rem solid #fff;
		border-radius: 50%;
		display: block;
	}
	.info strong {
		font-size: .44rem;
		color: #222;
		float: left;
		text-align: center;
		width: 1.55rem;

	}
	.avitar-box {
		position: absolute;
		top: -1.64rem;
		left: 50%;
		margin-left: -0.775rem;
	}
	/*顶部*/

	/*主分类*/
    .index-clsmain {
        overflow: hidden;
        margin: 0 0.68rem .54rem;
        padding-bottom: .7rem;
        border-bottom: 1px solid #e5e5e5;
    }
    .index-clsmain a {
        float: left;
        display: block;
        width: 33.33%;
        color: #333;
        text-align: center;
        font-size: .38rem;

    }
    .index-clsmain .icon {
    	margin: 0 auto .3rem;
    }
    .icon-coll { background-position: -3rem 0; }
	.icon-eval { background-position: -4rem 0; }
	.icon-brow { background-position: -5rem 0; }

	/*美团钱包*/
	.wallet-box {
		margin-bottom: .54rem;
	}
	.mb200 { margin-bottom: 2rem; }
	.wallet-box h3 {
		font-size: .4rem;
		margin-bottom: .7rem;
		margin-left: .68rem;
	}
	.wallet-list {
		overflow: hidden;
		border-bottom: 1px solid #e5e5e5;
		margin: 0 .68rem;
	}
	.nobor {
		border: none;
	}
	.wallet-list a {
		width: 25%;
		font-size: .38rem;
		float: left;
		text-align: center;
		color: #333;
		margin-bottom: 1.22rem;
	}
	.wallet-list .icon {
		margin: 0 auto;
		margin-bottom: .3rem;
	}
	.icon-wall { background-position: -6rem 0; }
	.icon-red { background-position: -7rem 0; }
	.icon-pay { background-position: -8rem 0; }
	.icon-card { background-position: -9rem 0; }
	.icon-rech { background-position: 0rem -1rem; }
	.icon-mem { background-position: -1rem -1rem; }
	.icon-pub { background-position: -2rem -1rem; }
	.icon-serv { background-position: -3rem -1rem; }
	.icon-free { background-position: -4rem -1rem; }
	.icon-invo { background-position: -5rem -1rem; }
	.icon-coop { background-position: -6rem -1rem; }
	.icon-about { background-position: -7rem -1rem; }
	/*美团钱包*/

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
    .index-foot .icon-foot-order { background-image: url("../assets/icon_foot_04.jpg"); }
    .index-foot .icon-foot-me { background-image: url("../assets/icon_foot_on_05.png"); }
    .index-foot .index-footact a {
        color: #55b4a5;
    }
    /*底部*/
</style>