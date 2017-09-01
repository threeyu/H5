class FootBall extends egret.HashObject implements IBall
{
    private _isIdle : boolean = true;
    private _type : number = BallType.football;

    private _distributor : IDistributor = null;
    private _msg : string = "";

    public constructor()
    {
        super();
    }

    public get hashc() : number { return this.hashCode; }
    public get type() : number { return this._type; }
    public get isIdle() : boolean { return this._isIdle; }

    public action() : void
    {
        // todo: sth
        console.log(this._msg);
    }

    public reset() : void
    {
        this._isIdle = false;
        this._distributor.distribution(this);

        this._msg = "这个足球，很皮";
    }

    public setProtocol(val : IDistributor) : void
    {
        this._distributor = val;
    }

    public dispose() : void
    {
        this._isIdle = true;
        this._distributor.distribution(this);
    }

    public del() : void
    {
        this.dispose();
        this._distributor = null;
    }
}