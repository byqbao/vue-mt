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

        <!-- 轮播图 -->
        <div class="index-banner">
            <div class="index-bannerimg">
                <a href="#"><img src="../assets/banner_01.jpg" alt="banner"></a>
                <a href="#"><img src="../assets/banner_01.jpg" alt="banner"></a>
                <a href="#"><img src="../assets/banner_01.jpg" alt="banner"></a>
            </div>
            <div class="index-bannernum">
                <a href="#"></a>
                <a class="index-bannernum-active" href="#"></a>
                <a href="#"></a>
            </div>
        </div>
        <!-- 轮播图 -->

        <!-- 分类 -->
        <div class="index-cls">
            <!-- 主分类 -->
            <div class="index-clsmain">
                <a href="#">美食</a>
                <a class="icon-dy" href="#">电影/演出</a>
                <a class="icon-jd" href="#">酒店住宿</a>
                <a class="icon-yl" href="#">休闲娱乐</a>
                <a class="icon-wm" href="#">外卖</a>
            </div>

            <!-- 副分类 -->
            <div class="index-clssub">
                <a href="#">打车</a>
                <a class="icon-ms" href="#">民宿/公寓</a>
                <a class="icon-zb" href="#">周边游/旅游</a>
                <a class="icon-jp" href="#">机票/火车票</a>
                <a class="icon-dc" href="#">摩拜单车</a>
                <a class="icon-mp" href="#">景点/门票</a>
                <a class="icon-lr" href="#">丽人/美发</a>
                <a class="icon-sg" href="#">闪购</a>
                <a class="icon-js" href="#">健身中心</a>
                <a class="icon-qb" href="#">全部分类</a>
            </div>
        </div>
        <!-- 分类 -->

        <!-- 专题 -->
        <div class="index-special">
            <a href="#"><img src="../assets/special_01.jpg" alt="专题"></a>
            <a href="#"><img src="../assets/special_02.jpg" alt="专题"></a>
            <a href="#"><img src="../assets/special_03.jpg" alt="专题"></a>
            <a href="#"><img src="../assets/special_04.jpg" alt="专题"></a>
        </div>
        <!-- 专题 -->

        <!-- 广告 -->
        <div class="index-advert">
            <a href="#"><img src="../assets/advert_01.jpg" alt="广告"></a>
        </div>
        <!-- 广告 -->

        <!-- 猜你喜欢 -->
        <div class="index-like">
            <h3 class="index-liketit"><span class="tit">猜你喜欢</span><span class="line"></span></h3>
            <ul class="index-likelis">
                <li>
                    <a href="#">
                        <img class="index-likelis-img" src="../assets/like_01.jpg" alt="商品">
                        <div class="index-likeli-txt">
                            <h4 class="index-likelis-tit">元气少女<span class="index-likelis-distance">12.9km</span></h4>
                            <p class="index-likelis-des">[朝外大街/世贸天阶] 单人洗浴</p>
                            <p class="index-likelis-pricebox"><em>￥</em><strong class="index-likelis-price">78</strong><span class="index-likelis-num">已售2452</span></p>
                            <p class="index-likelis-discount"><span>4.5折</span></p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="index-likelis-img" src="../assets/like_01.jpg" alt="商品">
                        <div class="index-likeli-txt">
                            <h4 class="index-likelis-tit">元气少女<span class="index-likelis-distance">12.9km</span></h4>
                            <p class="index-likelis-des">[朝外大街/世贸天阶] 单人洗浴</p>
                            <p class="index-likelis-pricebox"><em>￥</em><strong class="index-likelis-price">78</strong><span class="index-likelis-num">已售2452</span></p>
                            <p class="index-likelis-discount"><span>4.5折</span></p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="index-likelis-img" src="../assets/like_01.jpg" alt="商品">
                        <div class="index-likeli-txt">
                            <h4 class="index-likelis-tit">元气少女<span class="index-likelis-distance">12.9km</span></h4>
                            <p class="index-likelis-des">[朝外大街/世贸天阶] 单人洗浴</p>
                            <p class="index-likelis-pricebox"><em>￥</em><strong class="index-likelis-price">78</strong><span class="index-likelis-num">已售2452</span></p>
                            <p class="index-likelis-discount"><span>4.5折</span></p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="index-likelis-img" src="../assets/like_01.jpg" alt="商品">
                        <div class="index-likeli-txt">
                            <h4 class="index-likelis-tit">元气少女<span class="index-likelis-distance">12.9km</span></h4>
                            <p class="index-likelis-des">[朝外大街/世贸天阶] 单人洗浴</p>
                            <p class="index-likelis-pricebox"><em>￥</em><strong class="index-likelis-price">78</strong><span class="index-likelis-num">已售2452</span></p>
                            <p class="index-likelis-discount"><span>4.5折</span></p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 猜你喜欢 -->

        <!-- 底部 -->
        <div class="index-foot">
            <ul>
                <li class="index-footact"><a class="icon-foot-home" href="#" @click="go('/')">首页</a></li>
                <li><a class="icon-foot-enclosure" href="#" @click="go('/nearby')">附近</a></li>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body {
    }
    h3 {
        margin: 0;
        font-weight: 500;
    }
    a {
        text-decoration: none;
    }
    ul,li,h3,h4,p {
        margin: 0;
        padding: 0;
    }

    /*顶部搜索*/
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

    /*分类*/
    .index-cls {
        font-size: 0.36rem;
        padding: 0.66rem 0 0 0;
        border-bottom: 0.3rem solid #f4f4f4;
        text-align: center;
    }
    /*主分类*/
    .index-clsmain {
        overflow: hidden;
        margin: 0 0.22rem;
        border-bottom: 0.01rem solid #eeeeee;
    }
    .index-clsmain a {
        float: left;
        display: block;
        width: 20%;
        color: #666666;
        background: url("../assets/icon_cls_01.jpg") no-repeat center 0;
        background-size: 1.53rem 1.65rem;
        padding: 1.78rem 0 0.56rem;
    }
    .index-clsmain .icon-dy { background-image: url("../assets/icon_cls_dy.jpg"); }
    .index-clsmain .icon-jd { background-image: url("../assets/icon_cls_jd.jpg"); }
    .index-clsmain .icon-yl { background-image: url("../assets/icon_cls_yl.jpg"); }
    .index-clsmain .icon-wm { background-image: url("../assets/icon_cls_wm.jpg"); }
    /*副分类*/
    .index-clssub {
        overflow: hidden;
        padding-top: 0.4rem;
    }
    .index-clssub a {
        float: left;
        display: block;
        width: 20%;
        color: #666666;
        background: url("../assets/icon_cls_02.jpg") no-repeat center 0;
        background-size: 0.84rem 0.64rem;
        padding: 1rem 0 0.55rem;
    }
    .index-clssub .icon-ms { background-image: url("../assets/icon_cls_ms.jpg"); }
    .index-clssub .icon-zby { background-image: url("../assets/icon_cls_zby.jpg"); }
    .index-clssub .icon-jp { background-image: url("../assets/icon_cls_jp.jpg"); }
    .index-clssub .icon-dc { background-image: url("../assets/icon_cls_dc.jpg"); }
    .index-clssub .icon-mp { background-image: url("../assets/icon_cls_mp.jpg"); }
    .index-clssub .icon-lr { background-image: url("../assets/icon_cls_lr.jpg"); }
    .index-clssub .icon-sg { background-image: url("../assets/icon_cls_sg.jpg"); }
    .index-clssub .icon-js { background-image: url("../assets/icon_cls_js.jpg"); }
    .index-clssub .icon-qb { background-image: url("../assets/icon_cls_qb.jpg"); }
    /*分类*/

    /*专题*/
    .index-special {
        overflow: hidden;
        padding: 0.26rem 0.29rem;
        border-bottom: 0.3rem solid #f4f4f4;
    }
    .index-special a {
        float: left;
        display: block;
        width: 5.74rem;
        height: 3.8rem;
        margin: 0.09rem;
    }
    .index-special img {
        display: block;
        width: 100%;
    }
    /*专题*/

    /*广告*/
    .index-advert {
        border-bottom: 0.3rem solid #f4f4f4;
    }
    .index-advert a {
        display: block;
    }
    .index-advert img {
        display: block;
        width: 100%;
    }
    /*广告*/

    /*猜你喜欢*/
    .index-like {
        padding: 0 0.38rem;
        border-bottom: 1.68rem solid #f4f4f4;
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
        width: 2.64rem;
        height: 2.64rem;
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
    }
    .index-likelis-des {
        font-size: 0.38rem;
        color: #6b6b6b;
        margin-bottom: 0.3rem;
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

    /*猜你喜欢*/

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
    .index-foot .icon-foot-home { background-image: url("../assets/icon_foot_01.jpg"); }
    .index-foot .icon-foot-enclosure { background-image: url("../assets/icon_foot_02.jpg"); }
    .index-foot .icon-foot-find { background-image: url("../assets/icon_foot_03.jpg"); }
    .index-foot .icon-foot-order { background-image: url("../assets/icon_foot_04.jpg"); }
    .index-foot .icon-foot-me { background-image: url("../assets/icon_foot_05.jpg"); }
    .index-foot .index-footact a {
        color: #55b4a5;
    }
    /*底部*/
</style>
