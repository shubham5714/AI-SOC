"use client"
import SpkCryptoCard from "@/shared/@spk-reusable-components/reusable-dashboard/spk-crypto";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkSwiperJs from "@/shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButtongroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { Buysell1, Buysell2, CoinStatisticsOptions, CoinStatisticsSeries, CryptoCardData, CryptoSwiper, CurrencyPrices, Investments, MyBalance, RecentTrades } from "@/shared/data/dashboards/cryptodata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { ButtonGroup, Card, Col, Dropdown, Nav, Row, Tab } from "react-bootstrap";

interface CryptoProps { }

const Crypto: React.FC<CryptoProps> = () => {
    const breakpoints = {
        320: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
        1600: {
            slidesPerView: 5,
        },
        1800: {
            slidesPerView: 6,
        },
    }
    return (
        <Fragment>
            <Seo title="Dashboards Crypto" />
            <Pageheader title='Dashboards' currentpage='Crypto' activepage='Crypto' />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between">
                                <SpkSwiperJs slides={CryptoSwiper} className="crypto-swiper swiper-basic mySwiper" loop={true} slidesPerView={3} spaceBetween={20} freemode={true} autoplay={true} breakpoint={breakpoints} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* <!-- Start::row-1 --> */}
            <Row>
                {CryptoCardData.map((idx) => (
                    <Col xxl={3} xl={6} lg={6} md={6} key={idx.id}>
                        <SpkCryptoCard card={idx} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="align-items-center justify-content-between">
                            <div>
                                <div className="mb-1">Wallet Value</div>
                                <div className="fs-12 text-muted">
                                    <SpkBadge variant="success-transparent" Customclass="fs-10 text-success p-1"><i className="ri-arrow-up-s-line align-middle me-1"></i>12.2%</SpkBadge> Increased
                                </div>
                            </div>
                            <div className="text-end">
                                <div className="fs-20 fw-semibold">$132,12933.000</div>
                                <small className="text-muted fw-semibold">12 BTC</small>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey='buy'>
                                <Nav as='ul' className="nav-tabs tab-style-1 d-sm-flex d-block nav-justified" role="tablist">
                                    <Nav.Item as='li' className="me-sm-2 me-0">
                                        <Nav.Link as='a' data-bs-toggle="tab" eventKey='buy' data-bs-target="#buy-crypto" aria-current="page" href="#buy-crypto">Buy</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link as='a' data-bs-toggle="tab" eventKey='sell' data-bs-target="#sell-crypto" href="#sell-crypto">Sell</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="tab-content buy-crypto">
                                    <Tab.Pane className="border-0 p-0" eventKey='buy' id="buy-crypto" role="tabpanel" aria-labelledby="buy-crypto">
                                        <div className="input-group mb-3 d-flex flex-nowrap">
                                            <input type="text" className="form-control form-control-sm crypto-buy-sell-input" aria-label="crypto buy select" placeholder="Select Currency" />
                                            <SpkSelect name="state" option={Buysell1} mainClass="basic-multi-select custom-currency" searchable menuplacement='auto' classNameprefix="Select2" defaultvalue={[Buysell1[0]]} />
                                        </div>
                                        <div className="input-group mb-3 d-flex flex-nowrap">
                                            <input type="text" className="form-control form-control-sm crypto-buy-sell-input" aria-label="crypto buy select" placeholder="36,335.00" />
                                            <SpkSelect name="state" option={Buysell2} mainClass="basic-multi-select custom-currency" searchable menuplacement='auto' classNameprefix="Select2" defaultvalue={[Buysell2[0]]} />
                                        </div>
                                        <div>
                                            <div className="fs-14 py-2"><span className="fw-semibold text-dark">Price:</span><span className="text-muted ms-2 fs-14 d-inline-block">6.003435</span><span className="text-dark fw-semibold float-end">BTC</span></div>
                                            <div className="fs-14 py-2"><span className="fw-semibold text-dark">Amount:</span><span className="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span><span className="text-dark fw-semibold float-end">LTC</span></div>
                                            <div className="fw-semibold fs-14 py-2">Total: <span className="fs-14 d-inline-block">22.00 BTC</span></div>
                                            <div className="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                                            <label className="fw-semibold fs-12 mt-4 mb-2">SELECT PAYMENT METHOD :</label>
                                            <div className="row g-2">
                                                <div className="col-xl-6">
                                                    <div className="p-2 border rounded">
                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                                            <label className="form-check-label fs-12" htmlFor="flexRadioDefault1">
                                                                Credit / Debit Cards
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="p-2 border rounded">
                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                            <label className="form-check-label fs-12" htmlFor="flexRadioDefault2">
                                                                Paypal
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-grid mt-4 pt-1">
                                            <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn btn-wave">BUY</SpkButton>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane className="border-0 p-0" eventKey='sell' id="sell-crypto" role="tabpanel"
                                        aria-labelledby="sell-crypto">
                                        <div className="input-group mb-3 d-flex flex-nowrap">
                                            <input type="text" className="form-control form-control-sm crypto-buy-sell-input" aria-label="crypto buy select" placeholder="Select Currency" />
                                            <SpkSelect name="state" option={Buysell1} mainClass="basic-multi-select custom-currency" searchable menuplacement='auto' classNameprefix="Select2" defaultvalue={[Buysell1[0]]} />
                                        </div>
                                        <div className="input-group mb-3 d-flex flex-nowrap">
                                            <input type="text" className="form-control form-control-sm crypto-buy-sell-input" aria-label="crypto buy select" placeholder="36,335.00" />
                                            <SpkSelect name="state" option={Buysell2} mainClass="basic-multi-select custom-currency" searchable menuplacement='auto' classNameprefix="Select2" defaultvalue={[Buysell2[0]]} />
                                        </div>
                                        <div>
                                            <div className="fs-14 py-2"><span className="fw-semibold text-dark">Price:</span><span className="text-muted ms-2 fs-14 d-inline-block">6.003435</span><span className="text-dark fw-semibold float-end">BTC</span></div>
                                            <div className="fs-14 py-2"><span className="fw-semibold text-dark">Amount:</span><span className="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span><span className="text-dark fw-semibold float-end">LTC</span></div>
                                            <div className="fw-semibold fs-14 py-2">Total: <span className="fs-14 d-inline-block">22.00 BTC</span></div>
                                            <div className="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                                            <label className="fw-semibold fs-12 mt-4 mb-2">SELECT PAYMENT METHOD :</label>
                                            <div className="row g-2">
                                                <div className="col-xl-6">
                                                    <div className="p-2 border rounded">
                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input" type="radio" name="sellcrypto" id="sellcrypto1" />
                                                            <label className="form-check-label fs-12" htmlFor="sellcrypto1">
                                                                Credit / Debit Cards
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="p-2 border rounded">
                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input" type="radio" name="sellcrypto" id="sellcrypto2" defaultChecked />
                                                            <label className="form-check-label fs-12" htmlFor="sellcrypto2">
                                                                Paypal
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-grid mt-4 pt-1">
                                            <SpkButton Buttontype="button" Customclass="btn btn-danger btn-wave">SELL</SpkButton>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title className="flex-fill">
                                Coin Statistics
                            </Card.Title>
                            <SpkButtongroup Buttongrplabel="Basic example">
                                <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn btn-sm btn-wave">1D</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave">1W</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave">1M</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave">1Y</SpkButton>
                            </SpkButtongroup>
                            <Dropdown className="btn-group ms-2">
                                <Dropdown.Toggle as={ButtonGroup} className="btn btn-outline-light border btn-sm" variant="" id="dropdown-basic" aria-expanded="false">
                                    <span className="avatar avatar-xs avatar-rounded me-2 align-middle"><Image fill src="../../assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg" alt="" /></span>Bitcoin
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul'>
                                    <li><Dropdown.Item href="#!"><span className="avatar avatar-xs avatar-rounded me-2 align-middle"><Image width={20} height={17} src="../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="" /></span>Etherium</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!"><span className="avatar avatar-xs avatar-rounded me-2 align-middle"><Image fill src="../../assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg" alt="" /></span>Tether</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!"><span className="avatar avatar-xs avatar-rounded me-2 align-middle"><Image fill src="../../assets/images/crypto-currencies/crypto-icons/xrp-xrp-logo.svg" alt="" className="qr-image" /></span>XRP</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!"><span className="avatar avatar-xs avatar-rounded me-2 align-middle"><Image fill src="../../assets/images/crypto-currencies/crypto-icons/tron-trx-logo.svg" alt="" /></span>TRON</Dropdown.Item></li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="p-3 mb-3 d-flex align-items-center gap-4 border border-dashed rounded flex-wrap">
                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <span className="avatar avatar-sm" >
                                        <Image fill src="../../assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg" alt="" />
                                    </span>
                                    <div><span className="fw-medium">Bitcoin</span> - <span className="text-muted">BTC</span></div>
                                </div>
                                <h6 className="fw-medium mb-0">$42,761.32 USD<span className="text-success mx-2">0.14%</span>(24H)</h6>
                                <div className="d-flex gap-4 align-items-center flex-wrap">
                                    <div>Open - <span className="text-success fw-medium">6612.98</span></div>
                                    <div>High - <span className="text-success fw-medium">6625.97</span></div>
                                    <div>Low - <span className="text-danger fw-medium">6612.34</span></div>
                                    <div>Close - <span className="text-success fw-medium">6623.45</span></div>
                                </div>
                            </div>
                            <div id="coin-statistics">
                                <Spkapexcharts chartOptions={CoinStatisticsOptions} chartSeries={CoinStatisticsSeries} type='candlestick' width={'100%'} height={375} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Recent Trades
                            </div>
                            <div>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn btn-sm">View All</SpkButton>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table card-table table-vcenter text-nowrap mb-0" tBodyClass='active-tab'>
                                    {RecentTrades.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className={idx.tdClass}>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded custom-width">
                                                            <Image fill src={idx.avatar} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="ms-2">
                                                        <span className="fw-medium d-block">{idx.name}</span>
                                                        <span className="mb-0 fs-12 text-muted">{idx.currency} - {idx.amount}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={idx.tdClass}>
                                                <span className="text-muted">{idx.date}</span>
                                            </td>
                                            <td className={idx.tdClass}>
                                                <div className="align-items-center text-end">
                                                    <span className="fs-12 text-muted mb-1">{idx.progress}</span>
                                                    <p className="mb-0">{idx.time} -
                                                        <span className={`ms-1 d-inline-block fs-11 text-${idx.color} fw-medium`}>{idx.status}</span></p>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                My Balance
                            </div>
                            <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap">
                                    {MyBalance.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className={idx.tdClass}>
                                                <div className="d-flex align-items-start gap-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <Image fill src={idx.logo} alt="" />
                                                    </span>
                                                    <div>
                                                        <Link scroll={false} href="#!" className="fw-medium">{idx.name}</Link>
                                                        <span className="text-muted d-block fs-12">{idx.symbol}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={idx.tdClass}>
                                                {idx.amount}
                                            </td>
                                            <td className={idx.tdClass}>
                                                <span className="fw-medium fs-14">{idx.price} </span>
                                            </td>
                                            <td className={idx.tdClass}>
                                                <span className={`text-${idx.priceChange.startsWith('-') ? 'danger' : 'success'}`}>{idx.priceChange}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card overflow-hidden">
                        <div className="card-header">
                            <div className="card-title">
                                Investments
                            </div>
                        </div>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap">
                                    {Investments.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className={idx.tdClass}>
                                                <div className="d-flex align-items-center">
                                                    <div className="fs-20 me-3 lh-1">
                                                        <span className={`avatar avatar-md bg-${idx.iconColor}-transparent svg-${idx.iconColor} crypto-investments`}>{idx.icon}</span>
                                                    </div>
                                                    <div className="mt-1">
                                                        <h6 className="mb-0 fs-12 mb-0">{idx.name}</h6>
                                                        <span className={`text-${idx.change ? 'success' : 'danger'} fs-11`}>{idx.changePercent}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={idx.tdClass}>
                                                <h6 className="mb-0">{idx.price}</h6>
                                                <small className="fs-11 text-muted">{idx.amount}</small>
                                            </td>
                                            <td className={idx.tdClass}>
                                                <div className="mb-0 d-flex align-items-center gap-1 lh-1"><span className="text-danger fw-medium fs-12">USD</span><span className="rtl-rotate"> <i className="bi bi-arrow-right-short text-muted fs-16"></i> </span> <span className="fw-medium fs-12 text-success">{idx.symbol}</span></div>
                                                <small className="fs-11 text-muted">{idx.rate}</small>
                                            </td>
                                            <td className={idx.tdClass}>
                                                <SpkBadge variant={`${idx.statusColor}-transparent`}>{idx.status}</SpkBadge>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Crypto Currency Prices</div>
                            <SpkButtongroup Buttongrplabel="Basic example">
                                <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn  btn-sm btn-wave waves-effect waves-light">1D</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">1W</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">1M</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">1Y</SpkButton>
                            </SpkButtongroup>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table table-hover text-nowrap nft-table" header={[{ title: '' }, { title: '#' }, { title: 'Currency Name' }, { title: 'Price' }, { title: '24h %' }, { title: '7d %' }, { title: 'Circulating supply' }, { title: 'Volume' }, { title: 'Market Cap' }, { title: '1 Week change' },]}>
                                    {CurrencyPrices.map((idx) => (
                                        <tr key={idx.id} className={idx.customborder}>
                                            <td className="text-center">
                                                <span className="fs-15 text-muted"><i className="ri-star-line"></i></span>
                                            </td>
                                            <td>
                                                {idx.id}
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm" >
                                                            <Image width={28} height={28} src={idx.logo} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fs-14">{idx.name}</div>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.price}
                                            </td>
                                            <td>
                                                <span className="text-success">{idx.priceChange}</span>
                                            </td>
                                            <td>
                                                <span className="text-success">{idx.volumeChange}</span>
                                            </td>
                                            <td>
                                                {idx.supply}
                                            </td>
                                            <td>
                                                {idx.marketCap}
                                            </td>
                                            <td>
                                                {idx.totalMarketCap}
                                            </td>
                                            <td>
                                                <div id={idx.trendingId}>
                                                    <Spkapexcharts chartOptions={idx.chertOption} chartSeries={idx.chertSries} type='line' width={120} height={20} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 6 Entries <i className="bi bi-arrow-right ms-2"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link scroll={false} className="page-link" href="#!">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item active"><Link scroll={false} className="page-link" href="#!">1</Link></li>
                                            <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
                                            <li className="page-item">
                                                <Link scroll={false} className="page-link text-primary" href="#!">
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}
        </Fragment>
    );
};
export default Crypto;