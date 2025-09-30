"use client"
import { Form, Modal } from "react-bootstrap"
import { Fragment } from "react/jsx-runtime"
import Table from "@mui/material/Table"
import { useState } from "react"
import { Deletedata } from '@/shared/data/tables/datatablesdata';
import { nanoid } from "@reduxjs/toolkit"
import SpkButton from "../../reusable-uiElements/spk-buttons"

interface Contact {
    id: string;
    sno: string;
    Name: string;
    lastname: string;
    position: string;
    email: string;
    salary: string;
}

interface ReadOnlyRowProps {
    contact: Contact;
    handleEditClick: (event: React.MouseEvent<HTMLButtonElement>, contact: Contact) => void;
    handleDeleteClick: (id: string) => void;
}


const Deletetable = () => {
    const [modalShow, setModalShow] = useState(false);

    const [contacts, setContacts] = useState(Deletedata);
    const [addFormData, setAddFormData] = useState({
        sno: "",
        Name: "",
        lastname: "",
        position: "",
        email: "",
        salary: "",
    });

    const [editFormData, setEditFormData] = useState({
        sno: "",
        Name: "",
        lastname: "",
        position: "",
        email: "",
        salary: "",
    });

    const [editContactId, setEditContactId] = useState<string | null>(null);

    const handleAddFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name")!;
        const fieldValue = event.target.value;

        setAddFormData((prevData) => ({
            ...prevData,
            [fieldName]: fieldValue
        }));
    };


    const handleEditFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name")!;
        const fieldValue = event.target.value;

        setEditFormData((prevData) => ({
            ...prevData,
            [fieldName]: fieldValue
        }));
    };

    const handleAddFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const newContact: Contact = {
            id: nanoid(),
            sno: addFormData.sno,
            Name: addFormData.Name,
            lastname: addFormData.lastname,
            position: addFormData.position,
            email: addFormData.email,
            salary: addFormData.salary,
        };

        setContacts((prevContacts) => [...prevContacts, newContact]);
    };


    const handleEditFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const editedContact: Contact = {
            id: editContactId!,
            sno: editFormData.sno,
            Name: editFormData.Name,
            lastname: editFormData.lastname,
            position: editFormData.position,
            email: editFormData.email,
            salary: editFormData.salary,
        };

        setContacts((prevContacts) => {
            const index = prevContacts.findIndex((contact) => contact.id === editContactId);
            const newContacts = [...prevContacts];
            newContacts[index] = editedContact;
            return newContacts;
        });

        setEditContactId(null);  // Reset the edit mode
    };

    const handleEditClick = (
        event: React.MouseEvent<HTMLButtonElement>,
        contact: Contact
    ) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            sno: contact.sno,
            Name: contact.Name,
            lastname: contact.lastname,
            position: contact.position,
            email: contact.email,
            salary: contact.salary,
        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId: string) => {
        setContacts((prevContacts) => {
            const newContacts = prevContacts.filter(contact => contact.id !== contactId);
            return newContacts;
        });
    };
    const ReadOnlyRow: React.FC<ReadOnlyRowProps> = ({ contact, handleEditClick, handleDeleteClick }) => {
        return (
            <tr>
                <td className="wd-5p text-center">{contact.sno}</td>
                <td>{contact.Name}</td>
                <td>{contact.lastname}</td>
                <td>{contact.position}</td>
                <td>{contact.email}</td>
                <td>{contact.salary}</td>
                <td>
                    <SpkButton
                        Buttonvariant=""
                        Customclass="btn btn-primary me-1"
                        Buttontype="button"
                        onClickfunc={(event: React.MouseEvent<HTMLButtonElement>) =>
                            handleEditClick(event, contact)
                        }
                    >
                        Edit
                    </SpkButton>
                    <SpkButton
                        Buttonvariant=""
                        Customclass="btn btn-danger me-1"
                        Buttontype="button"
                        onClickfunc={() => handleDeleteClick(contact.id)}
                    >
                        Delete
                    </SpkButton>
                </td>
            </tr>
        );
    };

    interface EditFormData {
        sno: string;
        Name: string;
        lastname: string;
        position: string;
        email: string;
        salary: string;
    }

    interface EditableRowProps {
        editFormData: EditFormData;
        handleEditFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        handleCancelClick: React.MouseEventHandler<HTMLButtonElement>;
    }

    const EditableRow: React.FC<EditableRowProps> = ({
        editFormData,
        handleEditFormChange,
        handleCancelClick,
    }) => {
        return (
            <tr>
                <td>
                    <Form.Control
                        type="text"
                        required
                        placeholder="S NO"
                        name="Sno"
                        value={editFormData.sno}
                        onChange={handleEditFormChange}
                        className="border"
                    ></Form.Control>
                </td>
                <td>
                    <Form.Control
                        type="text"
                        required
                        placeholder="Enter a name..."
                        name="Name"
                        value={editFormData.Name}
                        onChange={handleEditFormChange}
                        className="border"
                    ></Form.Control>
                </td>
                <td>
                    <Form.Control
                        type="text"
                        required
                        placeholder="Enter an lastname..."
                        name="lastname"
                        value={editFormData.lastname}
                        onChange={handleEditFormChange}
                        className="border"
                    ></Form.Control>
                </td>
                <td>
                    <Form.Control
                        type="text"
                        required
                        placeholder="Enter a phone number..."
                        name="position"
                        value={editFormData.position}
                        onChange={handleEditFormChange}
                        className="border"
                    ></Form.Control>
                </td>
                <td>
                    <Form.Control
                        type="email"
                        required
                        placeholder="Enter an email..."
                        name="email"
                        value={editFormData.email}
                        onChange={handleEditFormChange}
                        className="border"
                    ></Form.Control>
                </td>
                <td>
                    <Form.Control
                        type="salary"
                        required
                        placeholder="Salary..."
                        name="salary"
                        value={editFormData.salary}
                        onChange={handleEditFormChange}
                        className="border"
                    ></Form.Control>
                </td>
                <td>
                    <SpkButton Buttonvariant="primary" Customclass="me-1" Buttontype="submit">
                        Save
                    </SpkButton>
                    <SpkButton
                        Buttonvariant=""
                        Customclass="btn btn-danger me-1"

                        onClickfunc={handleCancelClick}
                    >
                        Cancel
                    </SpkButton>
                </td>
            </tr>
        );
    };
    return (
        <Fragment>
            <div className="app-container">
                <Form onSubmit={handleEditFormSubmit}>
                    <SpkButton
                        Buttonvariant=""
                        Customclass="btn btn-primary mb-3"
                        onClickfunc={() => setModalShow(true)}
                    >
                        Add New Row
                    </SpkButton>
                    <div className="table-responsive">
                        <Table
                            id="delete-datatable"
                            className="table table-bordered text-nowrap border-bottom"
                        >
                            <thead>
                                <tr>
                                    <th className="wd-5p text-center">S NO</th>
                                    <th>Name</th>
                                    <th>Last Name</th>
                                    <th>Position</th>
                                    <th>Email</th>
                                    <th>Salary</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact) => (
                                    <Fragment key={contact.id}>
                                        {editContactId === contact.id ? (
                                            <EditableRow
                                                editFormData={editFormData}
                                                handleEditFormChange={handleEditFormChange}
                                                handleCancelClick={handleCancelClick}
                                            />
                                        ) : (
                                            <ReadOnlyRow
                                                contact={contact}
                                                handleEditClick={handleEditClick}
                                                handleDeleteClick={handleDeleteClick}
                                            />
                                        )}
                                    </Fragment>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Form>

                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="h6" id="contained-modal-title-vcenter">
                            Add New Row
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleAddFormSubmit} className="">
                            <Form.Control
                                type="text"
                                name="sno"
                                required
                                placeholder="S No..."
                                onChange={handleAddFormChange}
                                className="form-control mb-2 border"
                            />
                            <Form.Control
                                type="text"
                                name="Name"
                                required
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                                className="form-control mb-2 border"
                            />
                            <Form.Control
                                type="text"
                                name="lastname"
                                required
                                placeholder="Enter an lastname..."
                                onChange={handleAddFormChange}
                                className="form-control mb-2"
                            />
                            <Form.Control
                                type="text"
                                name="position"
                                required
                                placeholder="Position..."
                                onChange={handleAddFormChange}
                                className="form-control mb-2"
                            />
                            <Form.Control
                                type="email"
                                name="email"
                                required
                                placeholder="Enter an email..."
                                onChange={handleAddFormChange}
                                className="form-control mb-2"
                            />
                            <Form.Control
                                type="salary"
                                name="salary"
                                required
                                placeholder="Salary..."
                                onChange={handleAddFormChange}
                                className="form-control mb-2"
                            />
                            <SpkButton
                                Buttonvariant=""
                                Customclass="btn btn-primary me-2 wd-100p "
                                Buttontype="submit"
                            >
                                Add
                            </SpkButton>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <SpkButton
                            Customclass="btn btn-primary wd-20p"
                            onClickfunc={() => setModalShow(false)}
                        >
                            Close
                        </SpkButton>
                    </Modal.Footer>
                </Modal>
            </div>
        </Fragment>
    )
}

export default Deletetable