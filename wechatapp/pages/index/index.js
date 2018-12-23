// pages/index/index.js


const app = getApp();
const currentPages = getCurrentPages();

Page(Object.assign({}, app.Methods, {
    data: Object.assign({}, app.Variables, {
        gadgetProducts: [],
        currentItemId: 1,
        currency: app.data.currency,
    }),

    swiperChange:function(e){
        var currentItemId = e.detail.currentItemId;
        this.setData({
            currentItemId:currentItemId
        })
    },
    clickChange:function(e){
        var itemId = e.currentTarget.dataset.itemId;
        this.setData({
            currentItemId: itemId
        })
    },
    addToCart(e) {
        this.doAddToCart(e);
    },
    // 跳转产品详情页
    goProductDetail(e) {
        app.goProductDetail(e);
    },
    loginSuccess() {
        app.refreshOrdersInfo();
    },
    onLoad() {
        app.Util.network.GET({
            url: app.API('product_list'),
            params: Object.assign({
                category: 15,
            }),
            success: gadgetProducts => {
                this.setData({ gadgetProducts });
            }
        });
    },
    onPullDownRefresh() {
        this.onLoad();
    },
    onShow() {
        if (app.data.cart != null) {
            app.updateCart(app.data.cart);
        }
    },
    onShareAppMessage() {
        var path = '/pages/index/index';
        if (app.isLoggedIn()) {
            path = path + '?uid=' + app.data.user_id;
        }
        return {
            path: path
        }
    }
}))