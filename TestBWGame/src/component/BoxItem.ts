class BoxItem extends egret.Shape
{
    private _canTouch : boolean = false;


    public constructor()
    {
        super();

        this.init();
    }

    private init() : void
    {
        this.touchEnabled = true;
        this.width = GameData.getBoxWidth();
        this.height = GameData.getBoxHeight();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchDown, this);
    }

    public drawBox(canTouch : boolean = false) : void
    {
        this._canTouch = canTouch;
        this.graphics.clear();
        if(canTouch)
        {
            this.graphics.beginFill(0);
        }
        else
        {
            this.graphics.beginFill(0xffffff);
        }
        this.graphics.lineStyle(2, 0);
        this.graphics.drawRect(0, 0, GameData.getBoxWidth(), GameData.getBoxHeight());
        this.graphics.endFill();
    }

    private onTouchDown(e : egret.TouchEvent) : void
    {
        this.graphics.clear();
        if(this._canTouch)
        {
            this.graphics.beginFill(0xcccccc);
        }
        else
        {
            this.graphics.beginFill(0xff0000);
        }
        this.graphics.lineStyle(1, 0);
        this.graphics.drawRect(0, 0, GameData.getBoxWidth(), GameData.getBoxHeight());
        this.graphics.endFill();

        var event : GameEvent;
        if(this._canTouch)
        {
            event = new GameEvent(GameEvent.GAME_HIT);
        }
        else
        {
            event = new GameEvent(GameEvent.GAME_OVER);
        }
        this.dispatchEvent(event);
    }

    private removeEvent() : void
    {
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchDown, this);
    }

    public destroy() : void
    {
        this.removeEvent();


    }

}