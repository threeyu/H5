var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 设置界面
 */
var GameSettingView = (function (_super) {
    __extends(GameSettingView, _super);
    function GameSettingView() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/assets/skin/GameSettingSkin.exml";
        _this.addEvent();
        _this.updateBtnStat();
        return _this;
    }
    GameSettingView.getInstance = function () {
        if (this._instance == null)
            this._instance = new GameSettingView();
        return this._instance;
    };
    // 事件
    GameSettingView.prototype.onAgreeClickHandler = function (e) {
        console.log("--- agree ---");
        if (this.parent) {
            SoundManager.getInstance().playClick();
            this.parent.removeChild(this);
        }
    };
    GameSettingView.prototype.onSoundClickHandler = function (e) {
        console.log("--- sound ---");
        SoundManager.getInstance().playClick();
        SoundManager.getInstance().isSound = !SoundManager.getInstance().isSound;
        this.updateBtnStat();
    };
    GameSettingView.prototype.onMusicClickHandler = function (e) {
        console.log("--- music ---");
        SoundManager.getInstance().playClick();
        SoundManager.getInstance().isMusic = !SoundManager.getInstance().isMusic;
        this.updateBtnStat();
    };
    GameSettingView.prototype.updateBtnStat = function () {
        this.img_music_disable.visible = !SoundManager.getInstance().isMusic;
        this.img_sound_disable.visible = !SoundManager.getInstance().isSound;
    };
    GameSettingView.prototype.addEvent = function () {
        this.btn_agree.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAgreeClickHandler, this);
        this.btn_sound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundClickHandler, this);
        this.btn_music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMusicClickHandler, this);
    };
    GameSettingView.prototype.removeEvent = function () {
        this.btn_agree.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onAgreeClickHandler, this);
        this.btn_sound.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundClickHandler, this);
        this.btn_music.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onMusicClickHandler, this);
    };
    GameSettingView.prototype.destroy = function () {
        this.removeEvent();
    };
    return GameSettingView;
}(eui.Component));
__reflect(GameSettingView.prototype, "GameSettingView");
//# sourceMappingURL=GameSettingView.js.map