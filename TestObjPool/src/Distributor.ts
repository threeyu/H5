/**
 * 分配器
 */
class Distributor implements IDistributor
{

    private _usedPool : Object = null;     // 使用中的对象池
    private _idlePool : Object = null;     // 未使用的对象池

    public constructor()
    {
        this._usedPool = {};
        this._idlePool = {};
    }

    public distribution(val : IBall)
    {
        if(val.isIdle)
        {
            this._idlePool[val.hashc] = val;
            delete this._usedPool[val.hashc];
        }
        else
        {
            this._usedPool[val.hashc] = val;
            delete this._idlePool[val.hashc];
        }
    }

    public addVO(val : IBall)
    {
        val.setProtocol(this);
        if(val.isIdle)
        {
            this._idlePool[val.hashc] = val;
        }
        else
        {
            this._usedPool[val.hashc] = val;
        }
    }

    public getVO(type : number) : IBall
    {
        var ball : IBall = null;
        for(var key in this._idlePool)
        {
            ball = this._idlePool[key] as IBall;
            if(ball.type == type)
            {
                ball.reset();
                return ball;
            }
        }
        return null;
    }

    public clear()
    {
        var ball : IBall = null;
        for(var key in this._idlePool)
        {
            ball = this._idlePool[key] as IBall;
            ball.del();
        }
        this._idlePool = null;
        this._idlePool = {};
    }

    // ----------------------------------------------
    public look():void
    {
        console.log("[LOOK]");
        console.log("---------- IdlePool 空闲对象 ----------");
        let num = 0;
        for (let key in this._idlePool) {
            num++;
            console.log( "KEY: " + key + " ,type: "+ (this._idlePool[key] as IBall).type );
        }
        console.log("共"+num+"个空闲对象");
        num = 0;
        console.log("---------- UsedPool 使用对象 ----------");
        for (let key in this._usedPool) {
            num++;
            console.log( "KEY: " + key + " ,type: "+ (this._usedPool[key] as IBall).type );
        }
        console.log("共"+num+"个使用对象");
        console.log("\n\n");
    }
}