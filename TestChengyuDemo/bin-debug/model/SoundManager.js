var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 声音管理
 */
var SoundManager = (function () {
    function SoundManager() {
        this._url = "resource/assets/sound/";
        this.init();
    }
    SoundManager.getInstance = function () {
        if (this._instance == null)
            this._instance = new SoundManager();
        return this._instance;
    };
    SoundManager.prototype.init = function () {
        this._clickSound = new egret.Sound();
        this._bgmSound = new egret.Sound();
        this._rightSound = new egret.Sound();
        this._wrongSound = new egret.Sound();
        this._wordSound = new egret.Sound();
        this._clickSound.load(this._url + "buttonclick.mp3");
        this._bgmSound.load(this._url + "Music.mp3");
        this._rightSound.load(this._url + "right.mp3");
        this._wrongSound.load(this._url + "wrong.mp3");
        this._wordSound.load(this._url + "type_word.mp3");
    };
    SoundManager.prototype.playBgm = function () {
        if (this.isMusic)
            this._bgmChannel = this._bgmSound.play(0, 0);
    };
    SoundManager.prototype.stopBgm = function () {
        if (this._bgmChannel != null)
            this._bgmChannel.stop();
    };
    SoundManager.prototype.playClick = function () {
        if (this.isSound)
            this._clickSound.play(0, 1);
    };
    SoundManager.prototype.playRight = function () {
        if (this.isSound)
            this._rightSound.play(0, 1);
    };
    SoundManager.prototype.playWrong = function () {
        if (this.isSound)
            this._wrongSound.play(0, 1);
    };
    SoundManager.prototype.playWrod = function () {
        if (this.isSound)
            this._wordSound.play(0, 1);
    };
    Object.defineProperty(SoundManager.prototype, "isMusic", {
        get: function () {
            var b = egret.localStorage.getItem("isMusic");
            if (b == null || b == "")
                return true;
            else
                return b == "1";
        },
        // 音乐是否播放，保存设置
        set: function (val) {
            if (val) {
                egret.localStorage.setItem("isMusic", "1");
                this.playBgm();
            }
            else {
                egret.localStorage.setItem("isMusic", "0");
                this.stopBgm();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "isSound", {
        get: function () {
            var b = egret.localStorage.getItem("isSound");
            if (b == null || b == "")
                return true;
            else
                return b == "1";
        },
        // 声效是否播放，保存设置
        set: function (val) {
            if (val)
                egret.localStorage.setItem("isSound", "1");
            else
                egret.localStorage.setItem("isSound", "0");
        },
        enumerable: true,
        configurable: true
    });
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
//# sourceMappingURL=SoundManager.js.map