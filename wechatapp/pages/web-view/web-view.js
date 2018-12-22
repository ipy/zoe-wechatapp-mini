// pages/web-view/web-view.js

/**
 * Project: 啄一小店·微信小程序
 * Description: 啄一网店小程序端
 * Author: 幻想小籽
 * Organization: QwqOffice (https://www.qwqoffice.com)
 */

const app = getApp();

Page(Object.assign({}, app.Methods, {
    data: Object.assign({}, app.Variables, {
        NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
        NAV_BAR_HEIGHT: wx.DEFAULT_HEADER_HEIGHT + 'px',
        pageTitle: app.data.name,
    }),
    onLoad(options) {
        this.setData({
            src: decodeURIComponent(options.src),
            currentPages: getCurrentPages().length
        });
    }
}))