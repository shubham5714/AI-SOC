"use client";

import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment, useState } from "react";
import { fileupload1 } from "@/shared/data/prism-code/forms-prism";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import ShowCode from "@/shared/layouts-components/showcode/showcode";
import { Card, Col, Form, Row } from "react-bootstrap";


registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

interface FileUploadProps { }

const FileUploads: React.FC<FileUploadProps> = () => {
   
    const [filesState, setFilesState] = useState({
        multipleFiles: [], 
        singleFile: [],    
        dropzoneFiles: []  
    });

    
    const handleFileChange = (category: keyof typeof filesState, updatedFiles: any[]) => {
        setFilesState(prevState => ({
            ...prevState,
            [category]: updatedFiles
        }));
    };

    return (
        <Fragment>
            {/* Page Header */}
            <Seo title="Forms-FileUploads" />
            <Pageheader title="Forms" subtitle="Form Elements" currentpage="File Uploads" activepage="File Uploads" />

            {/* Start:: row-1 */}
            <Row>
                <Col xl={12}>
                    <ShowCode title="Bootstrap File Input" customCardClass="custom-card" customCardBodyClass="" reactCode={fileupload1}>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Multiple files input example</Form.Label>
                            <Form.Control type="file" multiple />
                        </Form.Group>
                        <Form.Group controlId="formFileDisabled" className="mb-3">
                            <Form.Label>Disabled file input example</Form.Label>
                            <Form.Control type="file" disabled />
                        </Form.Group>
                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Small file input example</Form.Label>
                            <Form.Control type="file" size="sm" />
                        </Form.Group>
                        <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label>Large file input example</Form.Label>
                            <Form.Control type="file" size="lg" />
                        </Form.Group>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <h6 className="mb-3">Filepond:</h6>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">Multiple Upload</div>
                                </Card.Header>
                                <Card.Body>
                                    <FilePond
                                        className="multiple-filepond"
                                        files={filesState.multipleFiles}
                                        onupdatefiles={(files) => handleFileChange("multipleFiles", files)}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files"
                                        labelIdle="Drag & Drop your file here or click "
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">Single Upload</div>
                                </Card.Header>
                                <Card.Body>
                                    <FilePond
                                        className="multiple-filepond single-fileupload"
                                        stylePanelLayout="compact circle"
                                        files={filesState.singleFile}
                                        onupdatefiles={(files) => handleFileChange("singleFile", files)}
                                        allowMultiple={false}
                                        maxFiles={1}
                                        server="/api"
                                        name="files"
                                        labelIdle="Drag & Drop your file here or click "
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* End:: row-1 */}

            {/* Start:: row-2 */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Dropzone</div>
                        </Card.Header>
                        <Card.Body>
                            <FilePond
                                className="multiple-filepond"
                                files={filesState.dropzoneFiles}
                                onupdatefiles={(files) => handleFileChange("dropzoneFiles", files)}
                                allowMultiple={true}
                                maxFiles={3}
                                server="/api"
                                name="files"
                                labelIdle="Drag & Drop your file here or click "
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* End:: row-2 */}
        </Fragment>
    );
};

export default FileUploads;
