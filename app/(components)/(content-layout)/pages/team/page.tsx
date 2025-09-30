"use client"
import SpkTeamcards from "@/shared/@spk-reusable-components/reusable-pages/spk-teamcards";
import { teamMembers } from "@/shared/data/pages/teamdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import { Row, Col, Card } from "react-bootstrap";

interface TeamProps { }

const Team: React.FC<TeamProps> = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Pages-Team" />

            <Pageheader title="Pages" currentpage="Team" activepage="Team" />

            {/* <!-- End::page-header --> */}
            {/*<!-- Start:: row-1 -->*/}
            <Row>
                {teamMembers.map((card, index) => (
                    <Col xl={3} lg={3} md={6} sm={6} className="col-12" key={index}>
                        <SpkTeamcards card={card} />
                    </Col>
                ))}
            </Row>
            {/*<!-- End:: row-1 -->*/}

        </Fragment>
    )
};

export default Team;