import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import SpkListgroup from '../spk-listgroup'

interface ListGroup {
    Headertext?: string
    children?: React.ReactNode;
    CardHeader?: boolean;
    Footertext?: string;
    Listvariant?: string
    CardFooter?: boolean;
    ListClass?: string;
    Customfooterclass?: string;
    Id?: string;
}
const SpkListgroupcards: React.FC<ListGroup> = ({ Headertext, children, CardHeader = false, Footertext, Listvariant, CardFooter = false, ListClass, Customfooterclass, Id }) => {
    return (
        <Fragment>
            <Card className="custom-card overflow-hidden">
                {CardHeader ?
                    <Card.Header>
                        {Headertext}
                    </Card.Header>
                    : ""}
                <SpkListgroup Variant={Listvariant} CustomClass={ListClass} Id={Id}>
                    {children}
                </SpkListgroup>
                {CardFooter ?
                    <Card.Footer className={Customfooterclass}>
                        {Footertext}
                    </Card.Footer> : ""}
            </Card>
        </Fragment>
    )
}

export default SpkListgroupcards