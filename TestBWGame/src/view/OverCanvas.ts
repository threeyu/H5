class OverCanvas extends egret.Sprite
{

    private _bg : egret.Shape;
    private _txtScore : egret.TextField;
    private _btnAgain : egret.TextField;

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

        this._txtScore = new egret.TextField();
        this._txtScore.text = "Score: ";
        this._txtScore.size = 50;
        this._txtScore.textColor = 0xffffff;
        this._txtScore.x = 50;
        this._txtScore.y = 50;
        this.addChild(this._txtScore);


        this._btnAgain = new egret.TextField();
        this._btnAgain.text = "Again";
        this._btnAgain.size = 50;
        this._btnAgain.textColor = 0xffffff;
        this._btnAgain.x = 180;
        this._btnAgain.y = 200;
        this._btnAgain.touchEnabled = true;
        this.addChild(this._btnAgain);
        this._btnAgain.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAgain, this);
    }

    public showScore()
    {
        this._txtScore.text = "分数： " + GameData.getScore();
    }

    private onAgain(e : egret.TouchEvent) : void
    {
        console.log("Game Again");
        var event : GameEvent = new GameEvent(GameEvent.GAME_START);
        this.dispatchEvent(event);
    }

    private removeEvent() : void
    {
        this._txtScore.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAgain, this);
    }

    public destroy() : void
    {
        this.removeEvent();

        this._txtScore = null;
    }
}