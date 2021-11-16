export default function Navigation(){
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Document</title>
                <link rel="stylesheet" href="D:\temp\Covid-19_Chart\src\components\Navigations"></link>
            </head>
            <body>
                    <div id="main">
                    <div id="header">
                        {/*Begin nav*/}
                        <ul id="nav">
                            <li><a href="">Trang Chủ</a></li>
                            <li><a href="">Band</a></li>
                            <li><a href="">Tour</a></li>
                            <li><a href="">Contact</a></li>
                            <li>
                                <a href="#">
                                    More
                                    <i class="nav-arrow-down ti-angle-down"></i>    
                                </a>
                                <ul class="subnav">
                                    <li><a href="">Merchandise</a></li>
                                    <li><a href="">Extras</a></li>
                                    <li><a href="">Media</a></li>
                                </ul>
                            </li>
                        </ul>
                        {/* End nav */}

                        {/* Begin Search */}
                        <div class="search-btn">
                            <i class="search-icon ti-search">

                            </i>
                        </div>
                        {/*End Search*/}
                        
                    </div>
                    <div id="slider">
                        
                    </div>
                    <div id="content">

                    </div>
                    <div id="footer">

                    </div>
                </div>
            </body>
        </html>
        
    )
}