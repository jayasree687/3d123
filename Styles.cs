canvas {
    width: 100%;
    height: 100px;
    display: block;
}

.annotation {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    margin-left: 15px;
    margin-top: 15px;
    padding: 1em;
    width: 200px;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    border-radius: .5em;
    font-size: 12px;
    line-height: 1.2;
    transition: opacity .5s;
    &::before {
        content: '1';
        position: absolute;
        top: -30px;
        left: -30px;
        width: 30px;
        height: 30px;
        border: 2px solid #fff;
        border-radius: 50%;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        background: rgba(0, 0, 0, 0.8);
    }
}

#number {
    position: absolute;
    z-index: -1;
}
