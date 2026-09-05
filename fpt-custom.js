document.addEventListener(
"DOMContentLoaded",
function(){


    /* =====================================================
       HOME ONLY
    ===================================================== */

    var path =
        window.location.pathname;


    var isHome =
        path === "/"
        ||
        path === ""
        ||
        path === "/trang-chu";


    if(!isHome){
        return;
    }



    /* =====================================================
       CLEAN OLD CUSTOM DOM
    ===================================================== */

    [
        "fpt-new-hero",
        "fpt-editorial-hero",
        "fpt-modern-hero",
        "fpt-iq4s-hero",
        "fpt-iq4s-v5",
        "fpt-iq4s-v6",
        "fpt-iq4s-v7",
        "fpt-iq4s-v8",

        "fptHomeMenuButton",
        "fptMobileDrawer",
        "fptMobileOverlay",
        "fpt7-home-bars",
        "fpt8-home-bars",
        "fpt8-home-overlay"

    ].forEach(
        function(id){

            var el =
                document.getElementById(id);

            if(el){
                el.remove();
            }

        }
    );


    document.body.classList.add(
        "fpt8-home"
    );



    /* =====================================================
       CAMERA URL
    ===================================================== */

    var cameraURL =

        "https://fptmientay.vn/upload/product/camera-iq4s_1788406429.png";



    /* =====================================================
       CREATE HERO
    ===================================================== */

    var hero =
        document.createElement(
            "section"
        );


    hero.id =
        "fpt-iq4s-v8";


    hero.innerHTML = `

        <div
            class="fpt8-bg-glow"
        ></div>


        <div
            class="
                fpt8-dots
                fpt8-dots-left
            "
        ></div>


        <div
            class="
                fpt8-dots
                fpt8-dots-right
            "
        ></div>


        <div
            class="fpt8-container"
        >


            <!-- LEFT -->

            <div
                class="fpt8-left"
            >


                <div
                    class="fpt8-brand"
                >

                    <strong>
                        FPT
                    </strong>

                    <span>
                        CAMERA IQ4S
                    </span>

                </div>


                <h1
                    class="fpt8-title"
                >

                    <span
                        class="fpt8-title-orange"
                    >
                        AN TÂM
                    </span>

                    <span
                        class="fpt8-title-white"
                    >
                        MỌI GÓC
                    </span>

                    <span
                        class="fpt8-title-white"
                    >
                        NHÌN
                    </span>

                </h1>


                <div
                    class="fpt8-desc"
                >

                    Camera IQ4S giúp bạn
                    giám sát không gian
                    mọi lúc, mọi nơi.

                    Hình ảnh rõ nét,
                    vận hành ổn định và
                    quản lý thuận tiện
                    ngay trên điện thoại.

                </div>


                <div
                    class="fpt8-features"
                >

                    <div
                        class="fpt8-feature"
                    >
                        FULL HD
                    </div>


                    <div
                        class="fpt8-feature"
                    >
                        QUAN SÁT 24/7
                    </div>


                    <div
                        class="fpt8-feature"
                    >
                        CAMERA IQ4S
                    </div>

                </div>


                <div
                    class="fpt8-actions"
                >


                    <a
                        href="/san-pham/fpt-camera"

                        class="fpt8-btn"
                    >

                        KHÁM PHÁ

                        <span
                            class="fpt8-arrow"
                        >
                            →
                        </span>

                    </a>


                    <a
                        href="tel:0916005459"

                        class="fpt8-phone"
                    >

                        <span
                            class="fpt8-phone-icon"
                        >
                            ☎
                        </span>

                        <span>
                            0916.005.459
                        </span>

                    </a>


                </div>


            </div>



            <!-- RIGHT -->

            <div
                class="fpt8-right"
            >


                <div
                    class="fpt8-glass"

                    id="fpt8Glass"
                >


                    <div
                        class="fpt8-glass-body"
                    >


                        <div
                            class="
                                fpt8-depth
                                fpt8-depth-1
                            "
                        ></div>


                        <div
                            class="
                                fpt8-depth
                                fpt8-depth-2
                            "
                        ></div>


                        <div
                            class="fpt8-halo"
                        ></div>


                        <div
                            class="fpt8-shadow"
                        ></div>


                        <div
                            class="fpt8-camera-wrap"

                            id="fpt8CameraWrap"
                        >

                            <img

                                src="${cameraURL}"

                                alt="FPT Camera IQ4S"

                                class="fpt8-camera"

                                loading="eager"

                                fetchpriority="high"

                            >

                        </div>


                        <div
                            class="
                                fpt8-tag
                                fpt8-security
                            "
                        >
                            BẢO MẬT CAO
                        </div>


                        <div
                            class="
                                fpt8-tag
                                fpt8-hd
                            "
                        >
                            FULL HD
                        </div>


                        <div
                            class="
                                fpt8-tag
                                fpt8-camera-tag
                            "
                        >
                            CAMERA IQ4S
                        </div>


                        <div
                            class="
                                fpt8-tag
                                fpt8-watch
                            "
                        >
                            QUAN SÁT 24/7
                        </div>


                    </div>

                </div>


            </div>


        </div>

    `;



    /* =====================================================
       INSERT HERO
    ===================================================== */

    var siteHeader =
        document.querySelector(
            "header.header"
        )
        ||
        document.querySelector(
            ".header"
        );


    if(siteHeader){

        siteHeader.insertAdjacentElement(
            "afterend",
            hero
        );

    }



    /* =====================================================
       HIDE ORIGINAL SLIDER ONLY
    ===================================================== */

    var oldSlider =
        document.querySelector(
            ".main-slider"
        );


    if(oldSlider){

        var sliderSection =
            oldSlider.closest(
                "section"
            );


        if(sliderSection){

            sliderSection.style.display =
                "none";

        }
        else{

            oldSlider.style.display =
                "none";

        }

    }



    /* =====================================================
       DESKTOP 3D TILT
    ===================================================== */

    var glass =
        document.getElementById(
            "fpt8Glass"
        );


    var cameraWrap =
        document.getElementById(
            "fpt8CameraWrap"
        );


    var canTilt =
        window.matchMedia(
            "(min-width: 992px) and (pointer: fine)"
        ).matches;


    if(
        glass
        &&
        cameraWrap
        &&
        canTilt
    ){


        glass.addEventListener(
            "mousemove",
            function(event){


                var rect =
                    glass.getBoundingClientRect();


                var x =
                    (
                        event.clientX
                        -
                        rect.left
                    )
                    /
                    rect.width
                    -
                    .5;


                var y =
                    (
                        event.clientY
                        -
                        rect.top
                    )
                    /
                    rect.height
                    -
                    .5;


                var ry =
                    x * 6;


                var rx =
                    y * -4.5;


                glass.style.transform =

                    "rotateX(" +
                    rx +
                    "deg) " +

                    "rotateY(" +
                    ry +
                    "deg) " +

                    "translateY(-3px)";


                cameraWrap.style.transform =

                    "translateZ(82px) " +

                    "translateX(" +
                    (x * 13) +
                    "px) " +

                    "translateY(" +
                    (y * 8) +
                    "px)";


            }
        );


        glass.addEventListener(
            "mouseleave",
            function(){


                glass.style.transform =
                    "rotateX(0deg) rotateY(0deg) translateY(0)";


                cameraWrap.style.transform =
                    "translateZ(70px)";


            }
        );

    }



    /* =====================================================
       MOBILE MENU RECOVERY
       CHỜ MENU.MIN.JS GỐC CHẠY TRƯỚC
    ===================================================== */

    function recoverOriginalMobileMenu(){


        if(
            !window.matchMedia(
                "(max-width: 991px)"
            ).matches
        ){
            return;
        }


        var headerMenu =
            document.querySelector(
                "header.header .header-menu"
            );


        if(!headerMenu){
            return;
        }


        var originalUL =
            headerMenu.querySelector(
                "ul"
            );


        if(!originalUL){
            return;
        }



        /*
          Nếu template đã sinh fa-bars
          thì để nó hoạt động bình thường.
        */

        var originalBars =
            headerMenu.querySelector(
                ".fa-bars"
            );


        if(originalBars){

            console.log(
                "FPT V8: ORIGINAL MOBILE MENU FOUND"
            );

            return;

        }



        /*
          Homepage thiếu hamburger:
          bật fallback nhưng vẫn dùng UL gốc.
        */

        document.body.classList.add(
            "fpt8-menu-fallback"
        );


        var bars =
            document.createElement(
                "i"
            );


        bars.id =
            "fpt8-home-bars";


        bars.className =
            "fa fa-bars";


        bars.setAttribute(
            "role",
            "button"
        );


        bars.setAttribute(
            "tabindex",
            "0"
        );


        bars.setAttribute(
            "aria-label",
            "Mở menu"
        );


        headerMenu.appendChild(
            bars
        );



        /* overlay */

        var overlay =
            document.createElement(
                "div"
            );


        overlay.id =
            "fpt8-home-overlay";


        document.body.appendChild(
            overlay
        );



        function updateMenuTop(){

            if(!siteHeader){
                return;
            }


            var rect =
                siteHeader
                .getBoundingClientRect();


            originalUL.style.top =

                Math.max(
                    0,
                    Math.round(
                        rect.bottom + 2
                    )
                )

                +

                "px";

        }



        function openMenu(){

            updateMenuTop();


            document.body
                .classList
                .add(
                    "fpt8-menu-open"
                );

        }


        function closeMenu(){

            document.body
                .classList
                .remove(
                    "fpt8-menu-open"
                );

        }


        function toggleMenu(event){

            if(event){

                event.preventDefault();

                event.stopPropagation();

            }


            if(
                document.body
                .classList
                .contains(
                    "fpt8-menu-open"
                )
            ){

                closeMenu();

            }
            else{

                openMenu();

            }

        }



        bars.addEventListener(
            "click",
            toggleMenu
        );


        bars.addEventListener(
            "keydown",
            function(event){

                if(
                    event.key === "Enter"
                    ||
                    event.key === " "
                ){

                    toggleMenu(
                        event
                    );

                }

            }
        );


        overlay.addEventListener(
            "click",
            closeMenu
        );


        originalUL
            .querySelectorAll("a")
            .forEach(
                function(link){

                    link.addEventListener(
                        "click",
                        closeMenu
                    );

                }
            );


        window.addEventListener(
            "resize",
            function(){

                if(
                    document.body
                    .classList
                    .contains(
                        "fpt8-menu-open"
                    )
                ){

                    updateMenuTop();

                }

            },
            {
                passive:true
            }
        );


        console.log(
            "FPT V8: HOMEPAGE MOBILE MENU RECOVERED"
        );

    }


    /*
      Đợi menu.min.js của template hoàn tất.
    */

    setTimeout(
        recoverOriginalMobileMenu,
        650
    );



    console.log(
        "FPT CAMERA IQ4S HERO V8 LOADED"
    );


});
/* =====================================================
   FPT PROMOTION MODERN V1
===================================================== */


function fptPromotionV1(){


    if(document.querySelector(".fpt-promo-modern")){
        return;
    }


    let sections =
    Array.from(document.querySelectorAll("section,div"));



    let target =
    sections.find(function(el){


        return el.innerText &&
        el.innerText.includes("KHUYẾN MÃI");


    });



    if(!target){

        console.log("FPT PROMOTION NOT FOUND");

        return;

    }



    target.classList.add("fpt-promo-modern");



    target.innerHTML = `


<div class="fpt-promo-head">

<div class="fpt-promo-brand">
FPT TELECOM
</div>


<h2>
KHUYẾN MÃI HOT
</h2>


<div class="fpt-promo-desc">
Cập nhật ưu đãi & chương trình mới nhất từ FPT Telecom
</div>


</div>



<div class="fpt-promo-grid">



<div class="fpt-promo-feature">


<img src="https://fptmientay.vn/upload/product/camera-iq4s_1788406429.png">


<div class="fpt-promo-content">


<span class="fpt-promo-tag">
CAMERA FPT
</span>



<h3>
Giải pháp Internet, Camera và giải trí thông minh cho gia đình
</h3>


<p>
Trải nghiệm hệ sinh thái dịch vụ số từ FPT Telecom.
</p>


</div>


</div>





<div class="fpt-promo-side">


<div class="fpt-promo-card">

<img src="https://fptmientay.vn/upload/product/camera-iq4s_1788406429.png">

<h4>
Internet FPT tốc độ cao
</h4>

</div>




<div class="fpt-promo-card">

<img src="https://fptmientay.vn/upload/product/camera-iq4s_1788406429.png">

<h4>
FPT Play giải trí đa dạng
</h4>

</div>




<div class="fpt-promo-card">

<img src="https://fptmientay.vn/upload/product/camera-iq4s_1788406429.png">

<h4>
Camera FPT bảo vệ toàn diện
</h4>

</div>



</div>



</div>



<a href="#" class="fpt-promo-more">
XEM TẤT CẢ KHUYẾN MÃI →
</a>


`;



console.log(
"FPT PROMOTION MODERN V1 LOADED"
);


}



document.addEventListener(
"DOMContentLoaded",
function(){


    /* =====================================================
       HOME ONLY
    ===================================================== */

    var path =
        window.location.pathname;


    var isHome =
        path === "/"
        ||
        path === ""
        ||
        path === "/trang-chu";


    if(!isHome){
        return;
    }



    /* =====================================================
       CLEAN OLD CUSTOM DOM
    ===================================================== */

    [
        "fpt-new-hero",
        "fpt-editorial-hero",
        "fpt-modern-hero",
        "fpt-iq4s-hero",
        "fpt-iq4s-v5",
        "fpt-iq4s-v6",
        "fpt-iq4s-v7",
        "fpt-iq4s-v8",

        "fptHomeMenuButton",
        "fptMobileDrawer",
        "fptMobileOverlay",
        "fpt7-home-bars",
        "fpt8-home-bars",
        "fpt8-home-overlay"

    ].forEach(
        function(id){

            var el =
                document.getElementById(id);

            if(el){
                el.remove();
            }

        }
    );


    document.body.classList.add(
        "fpt8-home"
    );



    /* =====================================================
       CAMERA URL
    ===================================================== */

    var cameraURL =

        "https://fptmientay.vn/upload/product/camera-iq4s_1788406429.png";



    /* =====================================================
       CREATE HERO
    ===================================================== */

    var hero =
        document.createElement(
            "section"
        );


    hero.id =
        "fpt-iq4s-v8";


    hero.innerHTML = `

        <div
            class="fpt8-bg-glow"
        ></div>


        <div
            class="
                fpt8-dots
                fpt8-dots-left
            "
        ></div>


        <div
            class="
                fpt8-dots
                fpt8-dots-right
            "
        ></div>


        <div
            class="fpt8-container"
        >


            <!-- LEFT -->

            <div
                class="fpt8-left"
            >


                <div
                    class="fpt8-brand"
                >

                    <strong>
                        FPT
                    </strong>

                    <span>
                        CAMERA IQ4S
                    </span>

                </div>


                <h1
                    class="fpt8-title"
                >

                    <span
                        class="fpt8-title-orange"
                    >
                        AN TÂM
                    </span>

                    <span
                        class="fpt8-title-white"
                    >
                        MỌI GÓC
                    </span>

                    <span
                        class="fpt8-title-white"
                    >
                        NHÌN
                    </span>

                </h1>


                <div
                    class="fpt8-desc"
                >

                    Camera IQ4S giúp bạn
                    giám sát không gian
                    mọi lúc, mọi nơi.

                    Hình ảnh rõ nét,
                    vận hành ổn định và
                    quản lý thuận tiện
                    ngay trên điện thoại.

                </div>


                <div
                    class="fpt8-features"
                >

                    <div
                        class="fpt8-feature"
                    >
                        FULL HD
                    </div>


                    <div
                        class="fpt8-feature"
                    >
                        QUAN SÁT 24/7
                    </div>


                    <div
                        class="fpt8-feature"
                    >
                        CAMERA IQ4S
                    </div>

                </div>


                <div
                    class="fpt8-actions"
                >


                    <a
                        href="/san-pham/fpt-camera"

                        class="fpt8-btn"
                    >

                        KHÁM PHÁ

                        <span
                            class="fpt8-arrow"
                        >
                            →
                        </span>

                    </a>


                    <a
                        href="tel:0916005459"

                        class="fpt8-phone"
                    >

                        <span
                            class="fpt8-phone-icon"
                        >
                            ☎
                        </span>

                        <span>
                            0916.005.459
                        </span>

                    </a>


                </div>


            </div>



            <!-- RIGHT -->

            <div
                class="fpt8-right"
            >


                <div
                    class="fpt8-glass"

                    id="fpt8Glass"
                >


                    <div
                        class="fpt8-glass-body"
                    >


                        <div
                            class="
                                fpt8-depth
                                fpt8-depth-1
                            "
                        ></div>


                        <div
                            class="
                                fpt8-depth
                                fpt8-depth-2
                            "
                        ></div>


                        <div
                            class="fpt8-halo"
                        ></div>


                        <div
                            class="fpt8-shadow"
                        ></div>


                        <div
                            class="fpt8-camera-wrap"

                            id="fpt8CameraWrap"
                        >

                            <img

                                src="${cameraURL}"

                                alt="FPT Camera IQ4S"

                                class="fpt8-camera"

                                loading="eager"

                                fetchpriority="high"

                            >

                        </div>


                        <div
                            class="
                                fpt8-tag
                                fpt8-security
                            "
                        >
                            BẢO MẬT CAO
                        </div>


                        <div
                            class="
                                fpt8-tag
                                fpt8-hd
                            "
                        >
                            FULL HD
                        </div>


                        <div
                            class="
                                fpt8-tag
                                fpt8-camera-tag
                            "
                        >
                            CAMERA IQ4S
                        </div>


                        <div
                            class="
                                fpt8-tag
                                fpt8-watch
                            "
                        >
                            QUAN SÁT 24/7
                        </div>


                    </div>

                </div>


            </div>


        </div>

    `;



    /* =====================================================
       INSERT HERO
    ===================================================== */

    var siteHeader =
        document.querySelector(
            "header.header"
        )
        ||
        document.querySelector(
            ".header"
        );


    if(siteHeader){

        siteHeader.insertAdjacentElement(
            "afterend",
            hero
        );

    }



    /* =====================================================
       HIDE ORIGINAL SLIDER ONLY
    ===================================================== */

    var oldSlider =
        document.querySelector(
            ".main-slider"
        );


    if(oldSlider){

        var sliderSection =
            oldSlider.closest(
                "section"
            );


        if(sliderSection){

            sliderSection.style.display =
                "none";

        }
        else{

            oldSlider.style.display =
                "none";

        }

    }



    /* =====================================================
       DESKTOP 3D TILT
    ===================================================== */

    var glass =
        document.getElementById(
            "fpt8Glass"
        );


    var cameraWrap =
        document.getElementById(
            "fpt8CameraWrap"
        );


    var canTilt =
        window.matchMedia(
            "(min-width: 992px) and (pointer: fine)"
        ).matches;


    if(
        glass
        &&
        cameraWrap
        &&
        canTilt
    ){


        glass.addEventListener(
            "mousemove",
            function(event){


                var rect =
                    glass.getBoundingClientRect();


                var x =
                    (
                        event.clientX
                        -
                        rect.left
                    )
                    /
                    rect.width
                    -
                    .5;


                var y =
                    (
                        event.clientY
                        -
                        rect.top
                    )
                    /
                    rect.height
                    -
                    .5;


                var ry =
                    x * 6;


                var rx =
                    y * -4.5;


                glass.style.transform =

                    "rotateX(" +
                    rx +
                    "deg) " +

                    "rotateY(" +
                    ry +
                    "deg) " +

                    "translateY(-3px)";


                cameraWrap.style.transform =

                    "translateZ(82px) " +

                    "translateX(" +
                    (x * 13) +
                    "px) " +

                    "translateY(" +
                    (y * 8) +
                    "px)";


            }
        );


        glass.addEventListener(
            "mouseleave",
            function(){


                glass.style.transform =
                    "rotateX(0deg) rotateY(0deg) translateY(0)";


                cameraWrap.style.transform =
                    "translateZ(70px)";


            }
        );

    }



    /* =====================================================
       MOBILE MENU RECOVERY
       CHỜ MENU.MIN.JS GỐC CHẠY TRƯỚC
    ===================================================== */

    function recoverOriginalMobileMenu(){


        if(
            !window.matchMedia(
                "(max-width: 991px)"
            ).matches
        ){
            return;
        }


        var headerMenu =
            document.querySelector(
                "header.header .header-menu"
            );


        if(!headerMenu){
            return;
        }


        var originalUL =
            headerMenu.querySelector(
                "ul"
            );


        if(!originalUL){
            return;
        }



        /*
          Nếu template đã sinh fa-bars
          thì để nó hoạt động bình thường.
        */

        var originalBars =
            headerMenu.querySelector(
                ".fa-bars"
            );


        if(originalBars){

            console.log(
                "FPT V8: ORIGINAL MOBILE MENU FOUND"
            );

            return;

        }



        /*
          Homepage thiếu hamburger:
          bật fallback nhưng vẫn dùng UL gốc.
        */

        document.body.classList.add(
            "fpt8-menu-fallback"
        );


        var bars =
            document.createElement(
                "i"
            );


        bars.id =
            "fpt8-home-bars";


        bars.className =
            "fa fa-bars";


        bars.setAttribute(
            "role",
            "button"
        );


        bars.setAttribute(
            "tabindex",
            "0"
        );


        bars.setAttribute(
            "aria-label",
            "Mở menu"
        );


        headerMenu.appendChild(
            bars
        );



        /* overlay */

        var overlay =
            document.createElement(
                "div"
            );


        overlay.id =
            "fpt8-home-overlay";


        document.body.appendChild(
            overlay
        );



        function updateMenuTop(){

            if(!siteHeader){
                return;
            }


            var rect =
                siteHeader
                .getBoundingClientRect();


            originalUL.style.top =

                Math.max(
                    0,
                    Math.round(
                        rect.bottom + 2
                    )
                )

                +

                "px";

        }



        function openMenu(){

            updateMenuTop();


            document.body
                .classList
                .add(
                    "fpt8-menu-open"
                );

        }


        function closeMenu(){

            document.body
                .classList
                .remove(
                    "fpt8-menu-open"
                );

        }


        function toggleMenu(event){

            if(event){

                event.preventDefault();

                event.stopPropagation();

            }


            if(
                document.body
                .classList
                .contains(
                    "fpt8-menu-open"
                )
            ){

                closeMenu();

            }
            else{

                openMenu();

            }

        }



        bars.addEventListener(
            "click",
            toggleMenu
        );


        bars.addEventListener(
            "keydown",
            function(event){

                if(
                    event.key === "Enter"
                    ||
                    event.key === " "
                ){

                    toggleMenu(
                        event
                    );

                }

            }
        );


        overlay.addEventListener(
            "click",
            closeMenu
        );


        originalUL
            .querySelectorAll("a")
            .forEach(
                function(link){

                    link.addEventListener(
                        "click",
                        closeMenu
                    );

                }
            );


        window.addEventListener(
            "resize",
            function(){

                if(
                    document.body
                    .classList
                    .contains(
                        "fpt8-menu-open"
                    )
                ){

                    updateMenuTop();

                }

            },
            {
                passive:true
            }
        );


        console.log(
            "FPT V8: HOMEPAGE MOBILE MENU RECOVERED"
        );

    }


    /*
      Đợi menu.min.js của template hoàn tất.
    */

    setTimeout(
        recoverOriginalMobileMenu,
        650
    );



    console.log(
        "FPT CAMERA IQ4S HERO V8 LOADED"
    );


});
/* =====================================================
   FPT PROMOTION MODERN V1
===================================================== */


function fptPromotionV1(){


    if(document.querySelector(".fpt-promo-modern")){
        return;
    }


 let sections =
Array.from(
    document.querySelectorAll("section")
);



    let target =
    sections.find(function(el){


        return el.innerText &&
        el.innerText.includes("KHUYẾN MÃI");


    });



    if(!target){

        console.log("FPT PROMOTION NOT FOUND");

        return;

    }



    target.classList.add("fpt-promo-modern");



    target.innerHTML = `


<div class="fpt-promo-head">

<div class="fpt-promo-brand">
FPT TELECOM
</div>


<h2>
KHUYẾN MÃI HOT
</h2>


<div class="fpt-promo-desc">
Cập nhật ưu đãi & chương trình mới nhất từ FPT Telecom
</div>


</div>



<div class="fpt-promo-grid">



<div class="fpt-promo-feature">


<img src="https://fptmientay.vn/upload/product/camera-iq4s_1788406429.png">


<div class="fpt-promo-content">


<span class="fpt-promo-tag">
CAMERA FPT
</span>



<h3>
Giải pháp Internet, Camera và giải trí thông minh cho gia đình
</h3>


<p>
Trải nghiệm hệ sinh thái dịch vụ số từ FPT Telecom.
</p>


</div>


</div>





<div class="fpt-promo-side">


<div class="fpt-promo-card">

<img src="https://fptmientay.vn/upload/product/camera-iq4s_1788406429.png">

<h4>
Internet FPT tốc độ cao
</h4>

</div>




<div class="fpt-promo-card">

<img src="https://fptmientay.vn/upload/product/camera-iq4s_1788406429.png">

<h4>
FPT Play giải trí đa dạng
</h4>

</div>




<div class="fpt-promo-card">

<img src="https://fptmientay.vn/upload/product/camera-iq4s_1788406429.png">

<h4>
Camera FPT bảo vệ toàn diện
</h4>

</div>



</div>



</div>



<a href="#" class="fpt-promo-more">
XEM TẤT CẢ KHUYẾN MÃI →
</a>


`;



console.log(
"FPT PROMOTION MODERN V1 LOADED"
);


}


document.addEventListener(
    "DOMContentLoaded",
    function(){

        setTimeout(
            fptPromotionV1,
            1500
        );

    }
);
