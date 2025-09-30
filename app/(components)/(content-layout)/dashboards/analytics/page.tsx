"use client"
import SpkAnalyticsCard from '@/shared/@spk-reusable-components/reusable-dashboard/spk-analytics';
import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkBadge from '@/shared/@spk-reusable-components/reusable-uiElements/spk-badge';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import { Activity, AnalyticsCardData, LandingPages, SalesGrowthRateOptions, SalesGrowthRateSeries, SiteReferrals, SiteReferralsOptions, SiteReferralsSeries, UsersByCountries, VisitorAnalyticsOptions, VisitorAnalyticsSeries, VisitorsStatistics } from '@/shared/data/dashboards/analyticsdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, Col, Dropdown, ProgressBar, Row } from 'react-bootstrap';

interface AnalyticsProps { }

const Analytics: React.FC<AnalyticsProps> = () => {
  return (
    <Fragment>
      <Seo title="Dashboards Analytics" />
      <Pageheader title='Dashboards' currentpage='Analytics' activepage='Analytics' />
      {/* <!-- Start:: row-1 --> */}
      <Row>
        <Col xxl={4}>
          <Row>
            <Col xl={12}>
              <Card className="custom-card main-dashboard-banner main-dashboard-banner2 overflow-hidden shadow-none">
                <Card.Body className="p-4">
                  <Row className="justify-content-between">
                    <Col xxl={8} lg={7}>
                      <h4 className="mb-3 fw-medium text-fixed-white">Upgrade to get more</h4>
                      <p className="mb-3 text-fixed-white">Upgrade Now for Premium Access and Unlock Exclusive Features!</p>
                      <Link scroll={false} href="#!" className="fw-medium text-fixed-white text-decoration-underline">Upgrade Now<i className="ti ti-arrow-narrow-right"></i></Link>
                    </Col>
                    <Col xxl={4} xl={7} lg={7} md={7} sm={7} className="d-sm-block d-none text-end my-auto">
                      <Image width={220} height={220} src="../../assets/images/media/media-79.png" alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            {AnalyticsCardData.map((idx) => (
              <div className="col-xl-6" key={idx.id}>
                <SpkAnalyticsCard card={idx} />
              </div>
            ))}
          </Row>
        </Col>
        <Col xxl={5}>
          <Card className="custom-card">
            <Card.Header className=" justify-content-between">
              <Card.Title className="card-title">
                Visitor Analytics
              </Card.Title>
              <div>
                <SpkButton Buttonvariant='primary-light' Buttontype="button" Customclass="btn btn-sm"><i className="ri-share-forward-line me-1 align-middle d-inline-block"></i>Export</SpkButton>
              </div>
            </Card.Header>
            <Card.Body className=" pb-0">
              <div id="audienceMetric">
                <Spkapexcharts chartOptions={VisitorAnalyticsOptions} chartSeries={VisitorAnalyticsSeries} type="area" width={'100%'} height={342} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3}>
          <Card className="custom-card">
            <Card.Header className=" justify-content-between">
              <Card.Title className="card-title">
                Users By Countries
              </Card.Title>
              <div className="">
                <Link scroll={false} href="#!" className="btn btn-light btn-sm text-muted">
                  View All
                </Link>
              </div>
            </Card.Header>
            <Card.Body className="">
              <ul className="list-unstyled mb-0 analytics-visitors-countries">
                {UsersByCountries.map((idx) => (
                  <li key={idx.id}>
                    <div className="d-flex align-items-center gap-2">
                      <div className="lh-1">
                        <span className="avatar avatar-xs avatar-rounded text-default">
                          <Image width={28} height={28}  src={idx.flag} alt="" />
                        </span>
                      </div>
                      <div className="ms-1 flex-fill lh-1">
                        <span className="fs-14">{idx.countryName}</span>
                      </div>
                      <div className={`text-${idx.arrow === 'up' ? 'success' : 'danger'} ms-1`}>{idx.percentageChange}<i className={`ti ti-arrow-narrow-${idx.arrow}`}></i></div>
                      <div>
                        <SpkBadge variant='light' Customclass="text-default fw-medium">{idx.visitors}</SpkBadge>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End:: row-1 --> */}

      {/* <!-- Start::row-3 --> */}
      <Row>
        <Col xxl={3}>
          <Card className="custom-card">
            <Card.Header className=" justify-content-between">
              <Card.Title className="card-title">
                Sales Growth Rate
              </Card.Title>
              <SpkDropdown toggleas='a' Customtoggleclass='btn btn-light btn-icons btn-sm text-muted no-caret' Icon={true} IconClass='fe fe-more-vertical'>
                <li className="border-bottom"><Dropdown.Item className="dropdown-item" href="#!">Today</Dropdown.Item></li>
                <li className="border-bottom"><Dropdown.Item className="dropdown-item" href="#!">This Week</Dropdown.Item></li>
                <li><Dropdown.Item className="dropdown-item" href="#!">Last Week</Dropdown.Item></li>
              </SpkDropdown>
            </Card.Header>
            <Card.Body className=" pb-0">
              <div className="d-flex align-items-center p-3 bg-light rounded">
                <div>
                  <p className="mb-1 fs-13">Comparison: 2024 vs. 2023</p>
                  <div className="d-flex align-items-center gap-3">
                    <h5 className="mb-0">20% </h5>
                    <div className="text-muted fs-12"><span className="text-success fs-12 me-1"> 2.62%<i className="ti ti-arrow-narrow-up fs-16"></i></span>This year</div>
                  </div>
                </div>
                <div className="ms-auto">
                  <div className="p-2 bg-primary-transparent rounded-circle">
                    <div className="avatar-md avatar bg-primary svg-white avatar-rounded shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div id="sales-growth" className="mt-1">
                <Spkapexcharts chartOptions={SalesGrowthRateOptions} chartSeries={SalesGrowthRateSeries} type="line" width={'100%'} height={205} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4}>
          <Card className="custom-card">
            <Card.Header className=" justify-content-between">
              <h5 className="card-title">Top Landing Pages</h5>
              <Link scroll={false} href="#!" className="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">View All</Link>
            </Card.Header>
            <Card.Body className="">
              <ul className="list-unstyled top-landing-pages-list">
                {LandingPages.map((idx) => (
                  <li key={idx.id}>
                    <div className="d-flex mb-1">
                      <span>{idx.path}</span>
                      <span className="ms-auto fs-14 fw-semibold">{idx.visits} Visits</span>
                    </div>
                    <ProgressBar className="progress progress-sm">
                      <ProgressBar className={`progress-bar progress-bar-striped progress-bar-animated bg-${idx.progressColor}`} role="progressbar" style={{ width: `${idx.progress}%` }} aria-valuenow={idx.progress} aria-valuemin={0} aria-valuemax={100}></ProgressBar>
                    </ProgressBar>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={5}>
          <Card className="custom-card">
            <Card.Header className=" justify-content-between">
              <Card.Title className="card-title">
                Site Referrals
              </Card.Title>
              <Link scroll={false} href="#!" className="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">View All</Link>
            </Card.Header>
            <Card.Body className=" d-sm-flex align-items-center">
              <div className="table-responsive flex-fill">
                <SpkTables tableClass='table text-nowrap table-bordered me-1' header={[{ title: 'Source' }, { title: 'Total', headerClassname: 'text-center' }, { title: 'Growth' },]}>
                  {SiteReferrals.map((idx) => (
                    <tr key={idx.id}>
                      <td>{idx.source}</td>
                      <td className="text-center fw-medium">{idx.value}</td>
                      <td className={`text-${idx.change.startsWith('-') ? 'danger' : 'success'}`}>{idx.change}</td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
              <div id="referrals-chart" className="p-3 flex-shrink-0 px-0">
                <Spkapexcharts chartOptions={SiteReferralsOptions} chartSeries={SiteReferralsSeries} type="polarArea" width={'100%'} height={320} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End::row-3 --> */}

      {/* <!-- Start::row-4 --> */}
      <Row>
        <div className="col-xl-9">
          <Card className="custom-card">
            <Card.Header className=" justify-content-between">
              <Card.Title className="card-title">
                Visitors Statistics
              </Card.Title>
              <div className="d-flex flex-wrap gap-2">
                <div>
                  <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                </div>
                <SpkDropdown toggleas='a' Customtoggleclass='btn btn-primary btn-sm no-caret' Toggletext='Sort By' Icon={true} IconClass='ri-arrow-down-s-line align-middle ms-1 d-inline-block'>
                  <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                  <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                  <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                </SpkDropdown>
              </div>
            </Card.Header>
            <Card.Body className="">
              <div className="table-responsive">
                <SpkTables tableClass='table table-hover text-nowrap table-bordered' header={[{ title: 'Total Visitors' }, { title: 'Sessions Duration' }, { title: 'New Visitors' }, { title: 'Returning Visitors' }, { title: 'Bounce Rate' }, { title: 'Conversion %' }, { title: 'Avg Session Time' }, { title: 'Top Sources' },]}>
                  {VisitorsStatistics.map((idx) => (
                    <tr key={idx.id}>
                      <td>{idx.visitors}</td>
                      <td>{idx.avgSessionDuration}</td>
                      <td>{idx.pageViews}</td>
                      <td>{idx.totalSessions}</td>
                      <td>{idx.bounceRate}</td>
                      <td>{idx.conversionRate}</td>
                      <td>{idx.time}</td>
                      <td>{idx.sources}</td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
            <div className="card-footer">
              <div className="d-flex align-items-center">
                <div>
                  Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
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
            </div>
          </Card>
        </div>
        <Col xl={3}>
          <Card className="custom-card">
            <div className="card-header justify-content-between flex-wrap">
              <Card.Title className="card-title">
                Activity
              </Card.Title>
              <SpkDropdown toggleas='a' Customtoggleclass='btn btn-light btn-icons btn-sm text-muted no-caret' Icon={true} IconClass='fe fe-more-vertical'>
                <li className="border-bottom"><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                <li className="border-bottom"><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
              </SpkDropdown>
            </div>
            <Card.Body className="">
              <div className="analytics-timeline">
                <ul className="list-unstyled analytics-activity mb-0">
                  {Activity.map((idx) => (
                    <li key={idx.id} className={idx.liclasss}>
                      <div className="d-flex align-items-center gap-2">
                        <div>
                          <span className={`avatar avatar-md avatar-rounded bg-${idx.bgColor}-transparent`}>
                            <i className={`ri-${idx.icon} fs-18`}></i>
                          </span>
                        </div>
                        <div className="flex-fill">
                          <span className="d-block fw-medium">{idx.title}</span>
                          <span className="fs-13 text-muted">{idx.type} by <span className={`text-${idx.type === 'Increased' ? 'success' : 'danger'} fw-medium ms-1`}>{idx.percentageChange} <i className={`ti ti-arrow-narrow-${idx.type === 'Increased' ? 'up' : 'down'}`}></i></span></span>
                        </div>
                        <div>
                          <span className="d-block fs-15 mb-0 fw-medium">{idx.stat}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End::row-4 --> */}
    </Fragment>
  )
}

export default Analytics;
