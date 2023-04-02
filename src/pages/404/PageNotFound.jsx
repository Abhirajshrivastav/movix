import React from "react";

import "./PageNotFound.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = ({search}) => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                {search ? (
                    <span className="smallText">
                        Search result not found!
                    </span>
                ) : (
                    <>
                        <span className="bigText">404</span>
                        <span className="smallText">
                            Page not found!
                        </span>
                    </>
                )}
            </ContentWrapper>
        </div>
    );
};

export default PageNotFound;