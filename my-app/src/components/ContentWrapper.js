import React from "react"

import ContentRowTop from "./ContentRowTop";
import Chart from "./Chart";
import Footer from "./Footer";
import TopBar from './TopBar';
function ContentWrapper(){

    return(
            <div id="content-wrapper" class="d-flex flex-column">
			<div id="content">
            <TopBar />
            <ContentRowTop />
            <Chart />
            <Footer />
            </div>
            </div>
			

		
    )
}
export default ContentWrapper;