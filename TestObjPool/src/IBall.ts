/**
 * 球类接口
 */
interface IBall
{
    hashc : number;
    type : number;
    isIdle : boolean;

    action() : void;                            // do sth
    reset() : void;                             // 重置
    setProtocol(val : IDistributor) : void;     // 设置协议
    dispose() : void;                           // 释放对象内部引用
    del() : void;                               // 彻底释放对象
}



enum BallType
{
    baseball,
    basketball,
    football
}