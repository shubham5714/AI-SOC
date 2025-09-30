"use client"
import SpkMarketplaceCard from "@/shared/@spk-reusable-components/reusable-apps/spk-marketplace";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { NFTItemdata } from "@/shared/data/apps/nft/market-place-data";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FilePond } from "react-filepond";

interface CreateNftProps { }

const CreateNft: React.FC<CreateNftProps> = () => {

    const [files, setFiles] = useState<any>([]);

    const Royality = [
        { label: 'Choose Royalities', value: 1 },
        { label: 'Flat Royalty', value: 2 },
        { label: 'Graduated Royalty', value: 3 },
        { label: 'Tiered Royalty', value: 4 },
        { label: 'Time-Limited Royalty', value: 5 },
        { label: 'Customized Royalty', value: 6 },
    ]
    return (
        <Fragment>
            <Seo title="Create NFT" />
            <Pageheader title='Apps' subtitle='NFT' currentpage='Create NFT' activepage='Create NFT' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={9} xl={8}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Create NFT</Card.Title>
                        </Card.Header>
                        <Card.Body >
                            <Row className="gy-3 justify-content-between">
                                <Col xxl={6} xl={12}>
                                    <label className="form-label">Upload NFT</label>
                                    <div className="create-nft-item bg-light p-3 rounded">
                                        <FilePond className="single-filepond" files={files} onupdatefiles={setFiles} maxFiles={6} name="files" stylePanelLayout='compact circle' labelIdle='Drag & Drop your file here or click ' />
                                    </div>
                                </Col>
                                <Col xxl={6} xl={12}>
                                    <Row className="gy-3">
                                        <Col xl={12}>
                                            <label htmlFor="input-placeholder" className="form-label">NFT Title</label>
                                            <input type="text" className="form-control" id="input-placeholder" placeholder="eg:Abstract Digital Art" />
                                        </Col>
                                        <Col xl={12}>
                                            <label htmlFor="nft-description" className="form-label">NFT Description</label>
                                            <textarea className="form-control" id="nft-description" rows={3} placeholder="Enter Description"></textarea>
                                        </Col>
                                        <Col xl={12}>
                                            <label htmlFor="nft-link" className="form-label">External Link</label>
                                            <input type="text" className="form-control" id="nft-link" placeholder="External Link Here" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={12}>
                                    <Row className="gy-3">
                                        <Col xl={6}>
                                            <label htmlFor="nft-creator-name" className="form-label">Creator Name</label>
                                            <input type="text" className="form-control" id="nft-creator-name" placeholder="Enter Name" />
                                        </Col>
                                        <Col xl={6}>
                                            <label htmlFor="nft-price" className="form-label">NFT Price</label>
                                            <input type="text" className="form-control" id="nft-price" placeholder="Enter Price" />
                                        </Col>
                                        <Col xl={4}>
                                            <label htmlFor="nft-size" className="form-label">NFT Size</label>
                                            <input type="text" className="form-control" id="nft-size" placeholder="Enter Size" />
                                        </Col>
                                        <Col xl={4}>
                                            <label htmlFor="nft-royality" className="form-label">Royality</label>
                                            <SpkSelect option={Royality} classNameprefix='Select2' menuplacement='auto' mainClass="multi-select"
                                                placeholder="Choose Royalities" />
                                        </Col>
                                        <Col xl={4}>
                                            <label htmlFor="nft-property" className="form-label">Property</label>
                                            <input type="text" className="form-control" id="nft-property" placeholder="Enter Property" />
                                        </Col>
                                        <Col xl={12}>
                                            <label className="form-label d-block">Method</label>
                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" className="btn-check" name="strap-material" id="strap1" defaultChecked />
                                                <label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap1"><i className="ti ti-tag me-1 align-middle fs-15 d-inline-block"></i>Fixed Price</label>
                                                <input type="radio" className="btn-check" name="strap-material" id="strap2" />
                                                <label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap2"><i className="ti ti-users fs-15 me-1 align-middle d-inline-block"></i>Open For Bids</label>
                                                <input type="radio" className="btn-check" name="strap-material" id="strap3" />
                                                <label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap3"><i className="ti ti-hourglass-low fs-15 me-1 align-middle d-inline-block"></i>Timed Auction</label>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                        <div className="card-footer text-end">
                            <Link scroll={false} href="#!" className="btn btn-primary btn-wave waves-effect waves-light">Create NFT</Link>
                        </div>
                    </Card>
                </Col>
                {NFTItemdata.slice(0, 1).map((idx) => (
                    <div className="col-xxl-3 col-xl-4" key={idx.id}>
                        <SpkMarketplaceCard card={idx} AvatarSize="sm"/>
                    </div>
                ))}
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default CreateNft;