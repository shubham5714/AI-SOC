import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons'
import Link from 'next/link'
import React, { Fragment } from 'react'

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    currentpage: string;
    activepage: string;
    Filter?: boolean;
}
const Pageheader: React.FC<PageHeaderProps> = (props) => {
    return (
        <Fragment>
            <div className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
                <div>
                    <nav>
                        <ol className="breadcrumb mb-1">
                            <li className="breadcrumb-item"><a href="#!">{props.title}</a></li>
                            {props.subtitle && (
                                <li className="breadcrumb-item">
                                    <Link scroll={false} href="#!">{props.subtitle}</Link>
                                </li>
                            )}
                            <li className="breadcrumb-item active" aria-current="page">{props.currentpage}</li>
                        </ol>
                    </nav>
                    <h1 className="page-title fw-medium fs-18 mb-0">{props.activepage}</h1>
                </div>
                <div className="btn-list">
                    {props.Filter === true ?
                        <>
                            <SpkButton Buttonvariant='white' Customclass="btn btn-wave waves-effect waves-light"> <i className="ri-filter-3-line align-middle me-1 lh-1"></i> Filter </SpkButton>
                            <SpkButton Buttonvariant='primary' Customclass="btn  btn-wave me-0 waves-effect waves-light"> <i className="ri-share-forward-line me-1"></i> Share </SpkButton>
                        </> :
                        <>
                            <SpkButton Customclass="btn btn-wave" Buttonvariant='primary-light' >
                                <i className="ri-upload-cloud-line align-middle me-1"></i> Export report
                            </SpkButton>
                            <SpkButton Customclass="btn btn-wave me-0" Buttonvariant='info-light '>
                                <i className="bx bx-crown align-middle me-1"></i> Upgrade plan
                            </SpkButton>
                        </>}
                </div>
            </div>
        </Fragment>
    )
}

export default Pageheader