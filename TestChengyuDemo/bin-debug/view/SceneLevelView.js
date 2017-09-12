var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 选关界面
 */
var SceneLevelView = (function (_super) {
    __extends(SceneLevelView, _super);
    function SceneLevelView() {
        var _this = _super.call(this) || this;
        _this._iconList = []; // 关卡icon
        _this.skinName = "resource/assets/skin/SceneLevelSkin.exml";
        _this.init();
        _this.addEvent();
        return _this;
    }
    SceneLevelView.getInstance = function () {
        if (this._instance == null)
            this._instance = new SceneLevelView();
        return this._instance;
    };
    SceneLevelView.prototype.init = function () {
        var num = 10;
        var row = 20;
        var col = 10;
        var spanx = 720 / col;
        var spany = 1136 / row;
        var group = new eui.Group();
        group.width = 720;
        group.height = (spany * 400);
        // 背景
        var img;
        var len = group.height / 1138;
        for (var i = 0; i <= len; ++i) {
            img = new eui.Image();
            img.source = RES.getRes("GameBG2_jpg");
            img.y = i * 1138;
            img.touchEnabled = false;
            this.group_levels.addChildAt(img, 0);
        }
        // icon 这部分当 icon位置显示到容器以下时 icon会不显示
        // icon
        var milestone = LevelDataManager.getInstance().getMilestone();
        for (var i = 0; i < num; ++i) {
            var icon = new LevelIcon();
            icon.Level = i + 1;
            icon.y = spany * i / 2;
            icon.x = Math.sin(icon.y / 180 * Math.PI) * 200 + group.width / 2;
            // icon.y += spany * i / 2;
            icon.y += spany * i;
            // icon.y = group.height - icon.y - spany;
            icon.enabled = i < milestone;
            group.addChild(icon);
            this._iconList.push(icon);
        }
        group.cacheAsBitmap = true;
        this.group_levels.addChild(group);
        //this.group_levels.scrollV = group.height - 1100;// 容器滚动到最后一页
        //跟踪箭头
        this.img_arrow = new eui.Image();
        this.img_arrow.source = RES.getRes("PageDownBtn_png");
        this.img_arrow.anchorOffsetX = 124 / 2 - group.getChildAt(0).width / 2;
        this.img_arrow.anchorOffsetY = 76;
        this.img_arrow.touchEnabled = false;
        this.img_arrow.x = group.getChildAt(0).x;
        this.img_arrow.y = group.getChildAt(0).y;
        group.addChild(this.img_arrow);
    };
    // 打开指定关卡
    SceneLevelView.prototype.openLevel = function (level) {
        var icon = this._iconList[level - 1];
        icon.enabled = true;
        this.img_arrow.x = icon.x;
        this.img_arrow.y = icon.y;
        this._curLevel = icon.Level;
        if (level > LevelDataManager.getInstance().getMilestone()) {
            LevelDataManager.getInstance().setMildstone(level);
        }
    };
    // 事件
    SceneLevelView.prototype.onBackHandler = function (e) {
        if (this.parent) {
            SoundManager.getInstance().playClick();
            this.parent.addChild(SceneStartView.getInstance());
            this.parent.removeChild(this);
        }
    };
    SceneLevelView.prototype.onIconClickHandler = function (e) {
        SoundManager.getInstance().playClick();
        var icon = e.currentTarget;
        if (this._curLevel != icon.Level) {
            this.img_arrow.x = icon.x;
            this.img_arrow.y = icon.y;
            this._curLevel = icon.Level;
        }
        else {
            console.log("------进入关卡： " + icon.Level);
            if (this.parent) {
                this.parent.addChild(SceneGameView.getInstance());
                SceneGameView.getInstance().initLevel(icon.Level);
                this.parent.removeChild(this);
            }
        }
    };
    SceneLevelView.prototype.addEvent = function () {
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackHandler, this);
        for (var i = 0; i < this._iconList.length; ++i) {
            this._iconList[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onIconClickHandler, this);
        }
    };
    SceneLevelView.prototype.removeEvent = function () {
        this.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackHandler, this);
        for (var i = 0; i < this._iconList.length; ++i) {
            this._iconList[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onIconClickHandler, this);
        }
    };
    SceneLevelView.prototype.destroy = function () {
        this.removeEvent();
    };
    return SceneLevelView;
}(eui.Component));
__reflect(SceneLevelView.prototype, "SceneLevelView");
//# sourceMappingURL=SceneLevelView.js.map