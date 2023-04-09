<main class="main">
    <p id="this-is-rantages-outer">this is rantages</p>
    <div class="not-facebook-box-outer">
        <p id="this-is-rantages">this is rantages</p>
        <div class="not-facebook-box-inner">
            <div id="marker-container">
                <img src="marker.png"  alt=""/>
            </div>
        </div>
        <div class="white-box">
            <div class="navbar">
                <div class="window-controls">
                    <div class="window-control"></div>
                    <div class="window-control"></div>
                    <div class="window-control"></div>
                </div>
                <div class="window-title">
                    <p>notfacebook.app</p>
                </div>
                <div class="icon">
                    <img src="icon.png" alt="user-icon"/>
                </div>
            </div>

            <div class="to-the-audience">
                <div class="top">
                    <p>glad you are here</p>
                </div>
                <div class="bottom">
                    <div class="almost-here">
                        <p>we are almost here too! coming back real soon!</p>
                    </div>
                    <div class="been-here-outer">
                        <div class="been-here-inner">
                            <p>Been here</p>
                            <p><span>10+</span><span>years</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="aus-x-bd-container">
            <div class="aus-x-bd">
                <p>aus x bd</p>
                <img src="world.png" alt="world-icon">
                <p>planetearth</p>
            </div>
        </div>
        <img id="monalisa" src="monalisa.png" alt="mona-lisa painting">
        <div class="buttons-and-names">
            <div class="buttons">
                <a href="https://www.facebook.com/groups/1685062184888011" target="_blank">
                    <div class="button">
                        goatposting
                    </div>
                </a>
                <a href="https://www.facebook.com/Rantages" target="_blank">
                    <div class="button">
                        rantages.fb
                    </div>
                </a>
            </div>
        </div>
    </div>
</main>
<div class="names">
    <p>TEHGOATLORD</p>
    <p>OBVIOUSNOODLES</p>
</div>

<style>
    p {
        margin: 0;
    }

    a {
        text-decoration: none;
        cursor: inherit;
    }

    .main {
        width: 100%;
        display: grid;
        justify-items: center;
    }

    .main #this-is-rantages-outer {
        color: #202020;
        font-family: 'Changa One', cursive;
        font-size: 60px;
        text-align: center;
        text-transform: uppercase;
    }

    .main > .not-facebook-box-outer {
        width: calc(100% - 4rem);
        height: 540px;
        /*height: 494px;*/
        background-color: white;
        border: 5px solid black;
        -webkit-box-shadow: 15px 12px 0 0 rgb(0, 0, 0);
        -moz-box-shadow: 15px 12px 0 0 rgb(0, 0, 0);
        box-shadow: 15px 12px 0 0 rgb(0, 0, 0);
        position: relative;
    }

    .main > .not-facebook-box-outer > p#this-is-rantages {
        color: #202020;
        font-family: 'Changa One', cursive;
        font-size: 74px;
        position: absolute;
        top: -100px;
        left: 12%;
        text-transform: uppercase;
        display: none;
    }

    .main > .not-facebook-box-outer > img#monalisa {
        display: none;
    }

    .main > .not-facebook-box-outer img:nth-of-type(2) {
        display: block;
        position: absolute;
        top: 266px;
        left: 25px;
    }

    .main > .not-facebook-box-outer img:nth-of-type(3) {
        display: block;
        position: absolute;
        top: 291px;
        left: 45px;
    }

    .main > .not-facebook-box-outer img:nth-of-type(4) {
        display: block;
        position: absolute;
        top: 288px;
        left: 88px;
    }

    .main > .not-facebook-box-outer img:nth-of-type(5) {
        display: block;
        position: absolute;
        top: 339px;
        left: 70px;
    }

    .main > .not-facebook-box-outer > .not-facebook-box-inner {
        height: 100%;
        background-size: 50px 50px;
        background-image:
                linear-gradient(to right, #e6e6e6 2px, transparent 1px),
                linear-gradient(to bottom, #e6e6e6 2px, transparent 1px);
        overflow: hidden;
        margin-bottom: 40px;
    }

    .main > .not-facebook-box-outer .not-facebook-box-inner div#marker-container {
        display: none;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 999;
        top: 63px;
        left: 610px;
    }

    .main > .not-facebook-box-outer .not-facebook-box-inner div#marker-container img {
        display: none;
    }

    .main > .not-facebook-box-outer > .white-box {
        width: 100%;
        height: calc(100% - 90px);
        background-color: white;
        border-bottom: 2px solid #6d6d6d;
        position: absolute;
        top: 0;
        z-index: 0;
        overflow: hidden;
    }

    .main > .not-facebook-box-outer > .white-box > .navbar {
        background-color: black;
        width: 100%;
        height: 46px;
        display: inline-grid;
        grid-template-columns: max-content auto 50px;
        grid-column-gap: 5px;
        align-items: center;
    }

    .main > .not-facebook-box-outer > .white-box > .navbar > .window-controls {
        width: inherit;
        display: inline-grid;
        grid-template-columns: max-content max-content max-content;
        grid-column-gap: 8px;
        align-self: center;
        padding-left: 15px;
    }

    .main > .not-facebook-box-outer > .white-box > .navbar > .window-controls > .window-control {
        border-radius: 50%;
        width: 14px;
        height: 14px;
        background-color: white;
    }

    .main > .not-facebook-box-outer > .white-box > .navbar > .window-controls > .window-control:nth-child(1) {
        background-color: #269B4E;
    }

    .main > .not-facebook-box-outer > .white-box > .navbar > .window-controls > .window-control:nth-child(2) {
        background-color: #E9493D;
    }

    .main > .not-facebook-box-outer > .white-box > .navbar > .window-controls > .window-control:nth-child(3) {
        background-color: #FFF052;
    }

    .main > .not-facebook-box-outer > .white-box > .navbar > .window-title > p {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 15px;
        color: white;
        text-transform: uppercase;
        text-align: center;
    }

    .main > .not-facebook-box-outer > .white-box > .navbar > .icon {
        text-align: center;
    }

    .main > .not-facebook-box-outer > .white-box > .to-the-audience {
        display: inline-grid;
        grid-template-columns: 1fr;
        grid-column-gap: 16px;
        grid-row-gap: 25px;
        padding: 25px 0 0 0;
        width: 100%;
    }

    .main > .not-facebook-box-outer > .white-box .to-the-audience .top p {
        font-family: 'IBM Plex Mono', monospace;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 30px;
        text-align: center;
        padding: 0 5px;
    }

    .main > .not-facebook-box-outer > .white-box .to-the-audience .bottom {
        display: inline-grid;
        grid-template-columns: 2fr auto;
        padding: 0 0 1rem 1rem;
    }

    .main > .not-facebook-box-outer > .white-box .to-the-audience .bottom .almost-here {
        background-color: #ffc700;
        padding-bottom: 40px;
    }

    .main > .not-facebook-box-outer > .white-box .to-the-audience .bottom .almost-here p {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 25px;
        line-height: 150%;
    }

    .main > .not-facebook-box-outer > .white-box .to-the-audience .bottom .been-here-outer {
        position: relative;
        background-image: url("markerSmall.png");
        background-repeat: no-repeat;
        background-position: top;
        background-size: contain;
    }

    .main > .not-facebook-box-outer > .white-box .to-the-audience .bottom .been-here-outer .been-here-inner {
        padding: 15px 5px 5px 5px;
        text-align: center;
    }

    .main > .not-facebook-box-outer > .white-box .to-the-audience .bottom .been-here-outer .been-here-inner p:nth-of-type(1) {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 13px;
        line-height: 27px;
    }

    .main > .not-facebook-box-outer > .white-box .to-the-audience .bottom .been-here-outer .been-here-inner p:nth-of-type(2) {
        font-family: 'Changa One', cursive;
        font-size: 19px;
        line-height: 39px;
        text-transform: uppercase;
    }

    .main > .not-facebook-box-outer > .white-box .to-the-audience .bottom .been-here-outer .been-here-inner p:nth-of-type(2) > span:first-child {
        color: #6101FF;
        display: block;
    }

    .main > .not-facebook-box-outer > .aus-x-bd-container {
        position: absolute;
        width: 100%;
        bottom: 29px;
        display: inline-grid;
        justify-content: end;
        font-family: 'IBM Plex Mono', monospace;
        text-transform: uppercase;
    }

    .main > .not-facebook-box-outer > .aus-x-bd-container >.aus-x-bd {
        display: flex;
        gap: 25px;
        padding-right: 15px;
        width: 100%;
        align-items: center;
    }

    .main > .not-facebook-box-outer > .aus-x-bd-container >.aus-x-bd > p:first-child {
        font-weight: 600;
    }

    .main > .not-facebook-box-outer > .aus-x-bd-container >.aus-x-bd > img {
        border-left: 2px solid black;
        padding-left: 25px;
    }

    .main > .not-facebook-box-outer > .aus-x-bd-container >.aus-x-bd > p:nth-of-type(2) {
        font-size: inherit;
    }

    .main .not-facebook-box-outer .buttons-and-names {
        z-index: 100;
    }

    .main .not-facebook-box-outer .buttons-and-names .buttons {
        display: inline-grid;
        grid-template-columns: 1fr;
        grid-row-gap: 1.5rem;
        grid-column-gap: 2.5rem;
        font-family: 'Changa One', cursive;
        font-size: 30px;
        color: white;
        width: calc(100% - 2rem);
        padding-left: 1rem;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 2rem;
    }

    .main .not-facebook-box-outer .buttons-and-names .buttons a .button {
        padding: 15px;
        border-radius: 9px;
        box-shadow: 10px 10px 0 0 rgba(0, 0, 0, 1);
    }

    .main .not-facebook-box-outer .buttons-and-names .buttons a:first-child .button {
        color: #E9493D;
        background-color: #E9493D;
        position: relative;
        -webkit-text-stroke: 2px #fff;
    }

    .main .not-facebook-box-outer .buttons-and-names .buttons a:last-child .button {
        background-color: #6101FF;
        color: white;
    }

    .names {
        display: none;
        font-family: 'IBM Plex Mono', monospace;
        font-weight: 700;
        font-size: 30px;
        grid-template-columns: 1fr;
        height: 50px;
        width: 100%;
        text-align: center;
    }

    @media (min-width: 380px) {
        .main > .not-facebook-box-outer {
            height: 494px;
        }
    }

    @media (min-width: 540px) {
        .main > .not-facebook-box-outer > .white-box > .navbar > .window-title > p {
            font-size: 20px;
        }
    }

    @media (min-width: 1100px) {
        .main {
            width: 100vw;
            display: grid;
            align-items: center;
            justify-items: center;
        }

        .main > .not-facebook-box-outer {
            width: 776px;
        }

        .main #this-is-rantages-outer {
            display: none;
        }

        .main > .not-facebook-box-outer > p#this-is-rantages {
            position: absolute;
            top: -100px;
            left: 12%;
            text-transform: uppercase;
            display: inherit;
        }

        .main > .not-facebook-box-outer > img#monalisa {
            display: block;
            width: 500px;
            position: absolute;
            top: 125px;
            left: -150px;
            z-index: 0;
        }

        .main .not-facebook-box-outer .buttons-and-names .buttons {
            grid-template-columns: 1fr 1fr;
            width: 776px;
            padding-left: 0;
            font-size: 53px;
        }

        .main > .not-facebook-box-outer > .not-facebook-box-inner {
            margin-bottom: 120px;
        }


        .main > .not-facebook-box-outer > .white-box {
            width: inherit;
        }

        .main > .not-facebook-box-outer > .white-box > .navbar > .window-title > p {
            font-size: 24px;
        }

        .main > .not-facebook-box-outer > .white-box > .to-the-audience {
            grid-template-columns: 2fr 1.5fr 1fr;
            grid-row-gap: 0;
        }

        .main > .not-facebook-box-outer > .white-box .to-the-audience .bottom {
            display: flex;
        }

        .main > .not-facebook-box-outer > .white-box .to-the-audience .top p {
            text-align: right;
        }

        .main > .not-facebook-box-outer .not-facebook-box-inner div#marker-container {
            display: inherit;
        }

        .main > .not-facebook-box-outer .not-facebook-box-inner div#marker-container img {
            display: block;
            width: 166px;
        }

        .main > .not-facebook-box-outer > .white-box .to-the-audience .bottom .almost-here p {
            font-size: 32px;
        }

        .main > .not-facebook-box-outer > .white-box .to-the-audience .bottom .been-here-outer .been-here-inner {
            position: absolute;
            left: 35px;
            top: 12px;
            padding: 0;
            text-align: inherit;
        }

        .main > .not-facebook-box-outer > .white-box .to-the-audience .bottom .been-here-outer .been-here-inner p:nth-of-type(1) {
            font-size: 18px;
        }

        .main > .not-facebook-box-outer > .white-box .to-the-audience .bottom .been-here-outer .been-here-inner p:nth-of-type(2) {
            font-size: 33px;
        }

        .main > .not-facebook-box-outer > .white-box .to-the-audience .bottom .been-here-outer .been-here-inner p:nth-of-type(2) > span:first-child {
            display: inline;
        }

        .main > .not-facebook-box-outer > .aus-x-bd-container >.aus-x-bd > p:nth-of-type(2) {
            font-size: 24px;
        }

        .names {
            font-family: 'IBM Plex Mono', monospace;
            font-weight: 700;
            font-size: 30px;
            display: inline-grid;
            grid-template-columns: 1fr 1fr;
            height: 50px;
            position: absolute;
            width: 100%;
            bottom: 15px;
            text-align: inherit;
        }

        .names p:first-child {
            padding: 0 0 0 2rem;
        }

        .names p:last-child {
            padding: 0 2rem 0 0;
            justify-self: end;
        }
    }
</style>
