import React, { Fragment, JSX } from 'react';
import SpkTooltips from '../reusable-uiElements/spk-tooltips';
import Link from 'next/link';
import { Card, Col } from 'react-bootstrap';
import { PricingPlan } from '@/shared/data/pages/pricingdata';




interface PricingCardProps {
  plan: PricingPlan;
  billingCycle: string;
}

const SpkPricingCard2 = ({ plan, billingCycle }: PricingCardProps) => {
  return (
    <Fragment>

      <Col lg={4}>
        <Card className={` ${plan.title === "Essential" ? "pricing-card03 reveal" : "reveal"}`}>
          <Card.Body className=" main-card-body">
            <div className={`pricing-icon ${plan.title === "Essential" ? "bg-primary text-fixed-white" : ""}`}>
              {plan.iconPath}
            </div>
            <h4 className="mb-3">{plan.title}</h4>
            <p className="mb-4">{plan.description}</p>
            <h6 className={` ${plan.title === "Essential" ? "mb-4 h1" : "mb-4 fs-3"}`}>
              {plan.price}
              <span className="fs-14 text-muted op-7">&nbsp;/ {billingCycle}</span>
            </h6>
            <ul className="list-unstyled fs-14 fw-600 mb-4">
              {plan.features.map((item, index) => (
                <li className="list-item mb-3" key={index}>
                  <div className="d-flex align-items-center-start">
                    <span className="me-2 text-primary">
                      <i className="fe fe-check-circle"></i>
                    </span>
                    <span className="flex-grow-1">
                      {item.label}
                      {item.icon && (
                        <SpkTooltips placement="top" title="Customized solutions tailored to your specific requirements.">
                          <Link scroll={false} href="#!" data-bs-toggle="tooltip" className="ms-1 op-4 all-ease-03 text-primary">
                            <i className="bi bi-info-circle-fill fs-14"></i>
                          </Link>
                        </SpkTooltips>
                      )}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="d-grid">
              <Link scroll={false} href="#!" className={`btn btn-lg ${plan.title === "Essential" ? "btn-primary" : "btn-primary-light"}`}>
                Buy Now
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>

    </Fragment>
  );
}

export default SpkPricingCard2;
