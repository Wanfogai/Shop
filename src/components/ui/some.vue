<template>
    <div class="box"><b></b></div>
</template>

<style lang="scss" scoped>
.box {
    background-color:inherit;
    margin: auto auto;
    width: 100%;
    
    height: 65%;
    position: relative;

}

.box b {
    width: 200px;
    height: 90px;
    background-size: 200px;
   background-image: url("../../images/dvd.png");
   
    position: absolute;
    -webkit-animation: moveX 6s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate;
    -moz-animation: moveX 6s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate;
    -o-animation: moveX 6s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate;
    animation: moveX 6s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate;
}

@-webkit-keyframes moveX {
    from {
        left: 0;
    }

    to {
        left: 100%;
    }
}

@-moz-keyframes moveX {
    from {
        left: 0;
    }

    to {
        left: 100%;
    }
}

@-o-keyframes moveX {
    from {
        left: 0;
    }

    to {
        left: 100%;
    }
}

@keyframes moveX {
    from {
        left: 0;
    }

    to {
        left: 100%;
    }
}

@-webkit-keyframes moveY {
    from {
        top: 0;
    }

    to {
        top: 100%;
    }
}

@-moz-keyframes moveY {
    from {
        top: 0;
    }

    to {
        top: 100%;
    }
}

@-o-keyframes moveY {
    from {
        top: 0;
    }

    to {
        top: 100%;
    }
}

@keyframes moveY {
    from {
        top: 0;
    }

    to {
        top: 100%;
    }
}
</style>