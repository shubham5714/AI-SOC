"use client"
import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
import { Drag, Drag1, Drag10, Drag11, Drag2, Drag3, Drag4, Drag5, Drag6, Drag7, Drag8, Drag9 } from "@/shared/data/adavanec-ui/sortablejsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { ReactSortable, Sortable } from "react-sortablejs";

interface SortablejsProps { }

const Sortablejs: React.FC<SortablejsProps> = () => {

    // Initialize all lists in one object
    const [lists, setLists] = useState({
        list: Drag,
        list1: Drag1,
        list2: Drag2,
        list3: Drag3,
        list4: Drag4,
        list5: Drag5,
        list6: Drag6,
        list7: Drag7,
        list8: Drag8,
        list9: Drag9,
        list10: Drag10,
        list11: Drag11
    });

    // Function to update a list by its key
    const updateList = (key: string, newList: string[]) => {
        setLists(prev => ({
            ...prev,
            [key]: newList
        }));
    };

    type ListItem = {
        id: number;
        text: string;
    };

    const [sortlist, setsortList] = React.useState<ListItem[]>([
        { id: 1, text: "Analyze market trends." },
        { id: 2, text: "Edit video content." },
        { id: 3, text: "Plan social media calendar." },
        { id: 4, text: "Update company policies." },
        { id: 5, text: "Compile sales reports." },
        { id: 6, text: "Schedule client calls." },
    ]);



    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title={"Sortable JS"} />

            <Pageheader title="Advanced Ui" currentpage="Sortable JS" activepage="Sortable JS" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Simple List
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ol className="list-group sortable-list list-group-numbered" id="simple-list">
                                <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" list={lists.list} setList={newList => updateList('list', newList)} group="shared" animation={200} easing="ease-out">
                                    {lists.list.map(item => (
                                        <ListGroup.Item className="mb-1" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                    ))}
                                </ReactSortable>
                            </ol>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Shared Lists</div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={6}>
                                    <ol className="list-group sortable-list list-group-numbered" id="simple-list">
                                        <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" list={lists.list1} group={'shared'} setList={newList => updateList('list1', newList)} animation={200} easing="ease-out">
                                            {lists.list1.map(item => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>
                                    </ol>
                                </Col>
                                <Col xl={6}>
                                    <ol className="list-group sortable-list list-group-numbered" id="simple-list">
                                        <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" list={lists.list2} group={'shared'} setList={newList => updateList('list2', newList)} animation={200} easing="ease-out">
                                            {lists.list2.map(item => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>
                                    </ol>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Disabling Sorting
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={6}>
                                    <SpkListgroup as="ul" CustomClass="sortable-list" Id="disabling-sorting-left">
                                        <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" list={lists.list3} group={{ name: 'shared', pull: 'clone', put: false }} setList={newList => updateList('list3', newList)} animation={200} easing="ease-out">
                                            {lists.list3.map((item) => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>
                                    </SpkListgroup>
                                </Col>
                                <Col xl={6}>
                                    <SpkListgroup as="ul" CustomClass="sortable-list" Id="disabling-sorting-right">
                                        <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" list={lists.list4} setList={newList => updateList('list4', newList)} animation={200} easing="ease-out" group={'shared'}>
                                            {lists.list4.map(item => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>
                                    </SpkListgroup>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Cloning
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={6}>
                                    <SpkListgroup as="ul" CustomClass="sortable-list" Id="cloning-left">
                                        <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" group={{ name: 'shared', pull: 'clone' }} list={lists.list8} setList={newList => updateList('list8', newList)} direction={'horizontal'} animation={200} easing="ease-out">
                                            {lists.list8.map(item => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>

                                    </SpkListgroup>
                                </Col>
                                <Col xl={6}>
                                    <SpkListgroup as="ul" CustomClass="sortable-list" Id="cloning-right">
                                        <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" group={{ name: 'shared', pull: 'clone' }} list={lists.list9} setList={newList => updateList('list9', newList)} direction={'horizontal'} animation={150} swapThreshold={1} easing="ease-out">
                                            {lists.list9.map(item => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>

                                    </SpkListgroup>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Sorting With Filter
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkListgroup as="ul" CustomClass="sortable-list" Id="sorting-with-filter">
                                <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" list={lists.list4} setList={newList => updateList('list4', newList)} animation={200} easing="ease-out">
                                    {lists.list4.map(item => (
                                        <li className={`list-group-item ${item.filter}`} key={item.id}>{item.name}</li>
                                    ))}
                                </ReactSortable>
                            </SpkListgroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Sorting With  Handle
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactSortable list={sortlist} setList={setsortList} handle=".handle" animation={150} className="list-group sortable-list list-item-numbered sortable-with-handle" tag="ol">
                                {sortlist.map((item) => (
                                    <li key={item.id} className="list-group-item d-flex align-items-center" data-id={item.id}>
                                        <i className="ri-drag-move-2-fill me-2 text-dark fs-16 handle lh-1"></i>
                                        {item.text}
                                    </li>
                                ))}
                            </ReactSortable>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        Multiple Drag
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <SpkListgroup as="ul" CustomClass="sortable-list" Id="multiple-drag">
                                        <ReactSortable filter=".addImageButtonContainer" multiDrag={true} fallbackTolerance={3} dragClass="sortableDrag" list={lists.list5} setList={newList => updateList('list5', newList)} animation={200} easing="ease-out">
                                            {lists.list5.map(item => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>
                                    </SpkListgroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        SWAP
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <SpkListgroup as="ul" CustomClass="sortable-list" Id="sortable-swap">
                                        <ReactSortable multiDrag filter=".addImageButtonContainer" dragClass="sortableDrag" list={lists.list6} swap={true} setList={newList => updateList('list6', newList)} animation={200} easing="ease-out">
                                            {lists.list6.map(item => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>
                                    </SpkListgroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Nested Sortable
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="nestedSortables" className="list-group col nested-sortable">
                                <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" list={lists.list11} group={'nested'} fallbackOnBody={true} setList={newList => updateList('list11', newList)} animation={200} easing="ease-out">
                                    {lists.list11.map(item => (
                                        <div key={item.id} className={`list-group-item nested-1 ${item.children ? 'nested-1' : ''}`} draggable={item.draggable === false ? 'false' : 'true'}>
                                            {item.name}
                                            {item.children && (
                                                <div className="list-group nested-sortable">
                                                    {item.children.map(child => (
                                                        <div key={child.id} className={`list-group-item nested-2 ${child.children ? 'nested-2' : ''}`} draggable={child.draggable === false ? 'false' : 'true'}>
                                                            {child.name}
                                                            {child.children && (
                                                                <div className="list-group nested-sortable">
                                                                    {child.children.map(grandchild => (
                                                                        <div key={grandchild.id} className="list-group-item nested-3" draggable={grandchild.draggable === false ? 'false' : 'true'}>
                                                                            {grandchild.name}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </ReactSortable>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}

            {/* <!-- Start:: row-5 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Sortable Grid
                            </div>
                        </Card.Header>
                        <Card.Body id="sortable-grid">
                            <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" list={lists.list7} setList={newList => updateList('list7', newList)} animation={200} easing="ease-out">
                                {lists.list7.map(item => (
                                    <div className="grid-square" key={item.id}>
                                        <span className="fw-medium">{item.name}</span>
                                    </div>
                                ))}
                            </ReactSortable>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-5 --> */}
        </Fragment>
    )
}
export default Sortablejs;