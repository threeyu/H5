class StartCanvas extends egret.Sprite
{
    private _bg : egret.Shape;
    private _btnStart : egret.TextField;


    public constructor()
    {
        super();

        this.init();
    }

    private init() : void
    {
        this._bg = new egret.Shape();
        this._bg.graphics.beginFill(0);
        this._bg.graphics.drawRect(0, 0, GameData.getStageWidth(), GameData.getStageHeight());
        this._bg.graphics.endFill();
        this.addChild(this._bg);

        this._btnStart = new egret.TextField();
        this._btnStart.text = "Start";
        this._btnStart.size = 50;
        this._btnStart.x = 180;
        this._btnStart.y = 200;
        this._btnStart.touchEnabled = true;
        this.addChild(this._btnStart);

        this._btnStart.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBtnClick, this);
    }

    private onBtnClick(e : egret.TouchEvent) : void
    {
        var event : GameEvent = new GameEvent(GameEvent.GAME_START);
        this.dispatchEvent(event);
    }

    private removeEvent() : void
    {
        this._btnStart.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBtnClick, this);
    }

    public destroy() : void
    {
        this.removeEvent();

        this._bg = null;
        this._btnStart = null;
    }

}