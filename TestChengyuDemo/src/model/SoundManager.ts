/**
 * 声音管理
 */
class SoundManager
{
    private static _instance : SoundManager;

    private _clickSound : egret.Sound;          // 点击声音
    private _wordSound : egret.Sound;           // 字的声音
    private _rightSound : egret.Sound;          // 胜利声音
    private _wrongSound : egret.Sound;          // 错误声音
    private _bgmSound : egret.Sound;            // 背景声音
    private _bgmChannel : egret.SoundChannel;   // 背景声道

    private _url : string = "resource/assets/sound/";
    
    public constructor()
    {
        this.init();
    }


    public static getInstance() : SoundManager
    {
        if(this._instance == null)
            this._instance = new SoundManager();
        return this._instance;
    }


    private init()
    {
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
    }

    public playBgm()
    {
        if(this.isMusic)
            this._bgmChannel = this._bgmSound.play(0, 0);
    }

    public stopBgm()
    {
        if(this._bgmChannel != null)
            this._bgmChannel.stop();
    }

    public playClick()
    {
        if(this.isSound)
            this._clickSound.play(0, 1);
    }

    public playRight()
    {
        if(this.isSound)
            this._rightSound.play(0, 1);
    }

    public playWrong()
    {
        if(this.isSound)
            this._wrongSound.play(0, 1);
    }

    public playWrod()
    {
        if(this.isSound)
            this._wordSound.play(0, 1);
    }

    // 音乐是否播放，保存设置
    public set isMusic(val)
    {
        if(val)
        {
            egret.localStorage.setItem("isMusic", "1");
            this.playBgm();
        }
        else
        {
            egret.localStorage.setItem("isMusic", "0");
            this.stopBgm();
        }
    }
    public get isMusic() : boolean
    {
        var b = egret.localStorage.getItem("isMusic");
        if(b == null || b == "")
            return true;
        else
            return b == "1";
    }

    // 声效是否播放，保存设置
    public set isSound(val)
    {
        if(val)
            egret.localStorage.setItem("isSound", "1");
        else
            egret.localStorage.setItem("isSound", "0");
    }
    public get isSound() : boolean
    {
        var b = egret.localStorage.getItem("isSound");
        if(b == null || b == "")
            return true;
        else
            return b == "1";
    }

}