"use client"
import { GalleryList } from "@/shared/data/apps/gallerydata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";

interface GalleryProps { }

const Gallery: React.FC<GalleryProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Gallery" />

            <Pageheader title="Apps" currentpage="Gallery" activepage="Gallery" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <GalleryList />
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default Gallery;