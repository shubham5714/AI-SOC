"use client"

import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState, useEffect, useMemo } from "react";
import { Col, Form, Nav, Tab, Card, Alert } from "react-bootstrap";
import { supabase } from '@/shared/lib/supabase';
import { toast } from 'react-toastify';

interface ProfileSettingsProps { }

const ProfileSettings: React.FC<ProfileSettingsProps> = () => {
    const [toggles, setToggles] = useState<{ [key: string]: string }>({});
    
    // MFA State
    const [mfaFactors, setMfaFactors] = useState<any[]>([]);
    const [mfaEnrollment, setMfaEnrollment] = useState<{
        qrCode: string | null;
        secret: string | null;
        factorId: string | null;
        isEnrolling: boolean;
        isVerifying: boolean;
    }>({
        qrCode: null,
        secret: null,
        factorId: null,
        isEnrolling: false,
        isVerifying: false
    });
    const [verificationCode, setVerificationCode] = useState('');

    const toggle = (toggleKey: string) => {
        setToggles((prevState) => ({
            ...prevState,
            [toggleKey]: prevState[toggleKey] === 'on' ? 'off' : 'on',
        }));
    };

    // Load MFA factors on component mount
    useEffect(() => {
        loadMfaFactors();
    }, []);

    const loadMfaFactors = async () => {
        try {
            const { data: factors, error } = await supabase.auth.mfa.listFactors();
            if (error) {
                console.error('Error loading MFA factors:', error);
                return;
            }
            setMfaFactors(factors?.totp || []);
        } catch (error) {
            console.error('Error loading MFA factors:', error);
        }
    };

    const startMfaEnrollment = async () => {
        try {
            setMfaEnrollment(prev => ({ ...prev, isEnrolling: true }));
            
            const { data, error } = await supabase.auth.mfa.enroll({
                factorType: 'totp'
            });
            
            if (error) {
                throw error;
            }
            
            setMfaEnrollment(prev => ({
                ...prev,
                qrCode: data.qr_code,
                secret: data.secret,
                factorId: data.id,
                isEnrolling: false
            }));
            
            toast.success('MFA enrollment started. Scan the QR code with your authenticator app.', {
                position: 'top-right',
                autoClose: 5000,
            });
        } catch (error: any) {
            console.error('Error starting MFA enrollment:', error);
            toast.error(error.message || 'Failed to start MFA enrollment', {
                position: 'top-right',
                autoClose: 3000,
            });
            setMfaEnrollment(prev => ({ ...prev, isEnrolling: false }));
        }
    };

    const verifyMfaEnrollment = async () => {
        if (!mfaEnrollment.factorId || !verificationCode) {
            toast.error('Please enter the verification code', {
                position: 'top-right',
                autoClose: 3000,
            });
            return;
        }

        try {
            setMfaEnrollment(prev => ({ ...prev, isVerifying: true }));
            
            const { data, error } = await supabase.auth.mfa.verify({
                factorId: mfaEnrollment.factorId,
                code: verificationCode
            });
            
            if (error) {
                throw error;
            }
            
            // Clear enrollment state
            setMfaEnrollment({
                qrCode: null,
                secret: null,
                factorId: null,
                isEnrolling: false,
                isVerifying: false
            });
            setVerificationCode('');
            
            // Reload factors
            await loadMfaFactors();
            
            toast.success('MFA successfully enabled!', {
                position: 'top-right',
                autoClose: 3000,
            });
        } catch (error: any) {
            console.error('Error verifying MFA enrollment:', error);
            toast.error(error.message || 'Invalid verification code', {
                position: 'top-right',
                autoClose: 3000,
            });
            setMfaEnrollment(prev => ({ ...prev, isVerifying: false }));
        }
    };

    const removeMfaFactor = async (factorId: string) => {
        try {
            const { error } = await supabase.auth.mfa.unenroll({
                factorId: factorId
            });
            
            if (error) {
                throw error;
            }
            
            // Reload factors
            await loadMfaFactors();
            
            toast.success('MFA factor removed successfully', {
                position: 'top-right',
                autoClose: 3000,
            });
        } catch (error: any) {
            console.error('Error removing MFA factor:', error);
            toast.error(error.message || 'Failed to remove MFA factor', {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    };

    interface Languageoptions1 {
        value: string;
        label: string;
    }
    const Languagedata: Languageoptions1[] = [
        { value: 'Arabic', label: 'Arabic' },
        { value: 'Korean', label: 'Korean' },
        { value: 'Us English', label: 'Us English' },
        { value: 'Hindi', label: 'Hindi' },

    ];
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Pages-ProfileSettings" />

            <Pageheader title="Pages" currentpage="Profile Settings" activepage="Profile Settings" />

            {/* <!-- End::page-header --> */}
            {/*<!-- Start::row-1 -->*/}
            <div className="row gap-3 justify-content-center">
                <div className="col-xl-9">
                    <div className="card custom-card">
                        <Tab.Container defaultActiveKey="account">
                            <Nav className="nav-tabs tab-style-7 scaleX rounded m-3 profile-settings-tab gap-2" id="myTab4" role="tablist">
                                <Nav.Item className=" me-1" role="presentation">
                                    <Nav.Link eventKey="account" className=" px-4 border border-dashed rounded-bottom-0" id="account" data-bs-toggle="tab" data-bs-target="#account-pane" type="button" role="tab" aria-controls="account-pane" aria-selected="true">Account</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className=" me-1" role="presentation">
                                    <Nav.Link eventKey="notification" className=" px-4 border border-dashed rounded-bottom-0" id="notification-tab" data-bs-toggle="tab" data-bs-target="#notification-tab-pane" type="button" role="tab" aria-controls="notification-tab-pane" aria-selected="false">Notification</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="" role="presentation">
                                    <Nav.Link eventKey="security" className=" px-4 border border-dashed rounded-bottom-0" id="security-tab" data-bs-toggle="tab" data-bs-target="#security-tab-pane" type="button" role="tab" aria-controls="security-tab-pane" aria-selected="false" tabIndex={-1}>Security</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className="p-3 border-bottom border-top border-block-end-dashed">
                                <Tab.Pane eventKey="account" className="overflow-hidden p-0 border-0" id="account-pane" role="tabpanel" aria-labelledby="account" tabIndex={0}>
                                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1">
                                        <div className="fw-semibold d-block fs-15">Account Settings :</div>
                                        <div className="btn btn-primary btn-sm"><i className="ri-loop-left-line lh-1 me-2"></i>Restore Changes</div>
                                    </div>
                                    <div className="row gy-3">
                                        <Col xl={12}>
                                            <div className="d-flex align-items-start flex-wrap gap-3">
                                                <div>
                                                    <span className="avatar avatar-xxl custom-width">
                                                        <Image fill src="../../assets/images/faces/9.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="fw-medium d-block mb-2">Profile Picture</span>
                                                    <div className="btn-list mb-1">
                                                        <SpkButton Buttonvariant="primary" Size="sm"><i className="ri-upload-2-line me-1"></i>Change Image</SpkButton>
                                                        <SpkButton Buttonvariant="success-light" Size="sm"><i className="ri-delete-bin-line me-1"></i>Remove</SpkButton>
                                                    </div>
                                                    <span className="d-block fs-12 text-muted">Use JPEG, PNG, or GIF. Best size: 200x200 pixels. Keep it under 5MB</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="profile-user-name" className="">User Name :</Form.Label>
                                            <Form.Control type="text" className="" id="profile-user-name" defaultValue="" placeholder="Enter Name" />
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="profile-email" className="">Email :</Form.Label>
                                            <Form.Control type="email" className="" id="profile-email" defaultValue="" placeholder="Enter Email" />
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="profile-designation" className="">Designation :</Form.Label>
                                            <Form.Control type="text" className="" id="profile-designation" defaultValue="" placeholder="Enter Designation" />
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="profile-language" className="">Language :</Form.Label>
                                            <SpkSelect searchable name="colors" option={Languagedata}
                                                menuplacement='auto' classNameprefix="Select2" defaultvalue={[Languagedata[2]]}
                                            />
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="profile-phn-no" className="">Phone No :</Form.Label>
                                            <Form.Control type="text" className="" id="profile-phn-no" defaultValue="" placeholder="Enter Number" />
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="website" className="">Website :</Form.Label>
                                            <Form.Control type="text" className=" bg-light" id="website" placeholder="https://" defaultValue="https://www.website.com" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="profile-address" className="">Address :</Form.Label>
                                            <Form.Control as="textarea" defaultValue="" className="" id="profile-address" rows={3} placeholder="Address" />
                                        </Col>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="notification" className="overflow-hidden p-0 border-0" id="notification-tab-pane" role="tabpanel" aria-labelledby="notification-tab" tabIndex={0}>
                                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1">
                                        <div className="fw-semibold d-block fs-15">Notifications Settings:</div>
                                        <div className="btn btn-primary btn-sm"><i className="ri-loop-left-line lh-1 me-2"></i>Restore Changes</div>
                                    </div>
                                    <div className="row gx-5 gy-3">
                                        <Col xl={12}>
                                            <p className="fs-14 mb-1 fw-medium">Configure Notifications</p>
                                            <p className="fs-12 mb-0 text-muted">Users can tailor their experience to receive alerts for the types of events that matter to them.</p>
                                        </Col>
                                        <Col xl={12}>
                                            <div className="d-flex align-items-top justify-content-between mt-3">
                                                <div className="mail-notification-settings">
                                                    <p className="fs-14 mb-1 fw-medium">Push Notifications</p>
                                                    <p className="fs-12 mb-0 text-muted">Alerts sent to the user's mobile device or desktop.</p>
                                                </div>
                                                <div className={`toggle mb-0 float-sm-end  toggle-success ${toggles['Notifications'] === 'on' || !toggles['Notifications'] ? 'on' : ''}`} onClick={() => toggle('Notifications')} >
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-top justify-content-between mt-3">
                                                <div className="mail-notification-settings">
                                                    <p className="fs-14 mb-1 fw-medium">Email Notifications</p>
                                                    <p className="fs-12 mb-0 text-muted">Messages sent to the user's email address.</p>
                                                </div>
                                                <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['address'] === 'on' ? 'on' : ''}`} onClick={() => toggle('address')}>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-top justify-content-between mt-3">
                                                <div className="mail-notification-settings">
                                                    <p className="fs-14 mb-1 fw-medium">In-App Notifications</p>
                                                    <p className="fs-12 mb-0 text-muted">Alerts that appear within the application interface.</p>
                                                </div>
                                                <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['appear'] === 'on' ? 'on' : ''}`} onClick={() => toggle('appear')}>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-top justify-content-between mt-3">
                                                <div className="mail-notification-settings">
                                                    <p className="fs-14 mb-1 fw-medium">SMS Notifications</p>
                                                    <p className="fs-12 mb-0 text-muted">Text messages sent to the user's mobile phone.</p>
                                                </div>
                                                <div className={`toggle mb-0 float-sm-end  toggle-success ${toggles['messages'] === 'on' || !toggles['messages'] ? 'on' : ''}`} onClick={() => toggle('messages')} >
                                                    <span></span>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="security" className="overflow-hidden p-0 border-0" id="security-tab-pane" role="tabpanel" aria-labelledby="security-tab" tabIndex={0}>
                                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1">
                                        <div className="fw-semibold d-block fs-15">Security Settings :</div>
                                        <div className="btn btn-primary btn-sm"><i className="ri-loop-left-line lh-1 me-2"></i>Restore Changes</div>
                                    </div>
                                    <div className="d-sm-flex d-block align-items-top justify-content-between">
                                        <div className="w-50">
                                            <p className="fs-14 mb-1 fw-medium">Verification</p>
                                            <p className="fs-12 mb-0 text-muted">Control how your profile information is verified for security purposes.</p>
                                        </div>
                                        <div className="d-flex gap-4">
                                            <div className="form-check ">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="email-notifications01" defaultChecked />
                                                <label className="form-check-label" htmlFor="email-notifications01">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="sms-notifications01" />
                                                <label className="form-check-label" htmlFor="sms-notifications01">
                                                    SMS
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="phone-notifications" />
                                                <label className="form-check-label" htmlFor="phone-notifications">
                                                    Phone
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                        <div className="w-50">
                                            <p className="fs-14 mb-1 fw-medium">Multi-Factor Authentication (MFA)</p>
                                            <p className="fs-12 mb-0 text-muted">Add an extra layer of security to your account using Google Authenticator or similar apps.</p>
                                        </div>
                                        <div className="d-flex flex-column gap-2">
                                            {mfaFactors.length === 0 ? (
                                                <SpkButton 
                                                    Buttonvariant="primary" 
                                                    Size="sm"
                                                    onClick={startMfaEnrollment}
                                                    disabled={mfaEnrollment.isEnrolling}
                                                >
                                                    {mfaEnrollment.isEnrolling ? 'Setting up...' : 'Enable MFA'}
                                                </SpkButton>
                                            ) : (
                                                <div className="d-flex flex-column gap-2">
                                                    <Alert variant="success" className="mb-0 py-2">
                                                        <i className="ri-shield-check-line me-2"></i>
                                                        MFA is enabled ({mfaFactors.length} factor{mfaFactors.length > 1 ? 's' : ''})
                                                    </Alert>
                                                    {mfaFactors.map((factor) => (
                                                        <div key={factor.id} className="d-flex align-items-center justify-content-between p-2 border rounded">
                                                            <span className="fs-12">
                                                                <i className="ri-smartphone-line me-2"></i>
                                                                TOTP Factor
                                                            </span>
                                                            <SpkButton 
                                                                Buttonvariant="danger" 
                                                                Size="sm"
                                                                onClick={() => removeMfaFactor(factor.id)}
                                                            >
                                                                Remove
                                                            </SpkButton>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* MFA Enrollment UI */}
                                    {mfaEnrollment.qrCode && (
                                        <Card className="mt-3">
                                            <Card.Body>
                                                <h6 className="mb-3">Complete MFA Setup</h6>
                                                <div className="row">
                                                    <Col md={6}>
                                                        <p className="fs-12 mb-2">1. Scan this QR code with your authenticator app:</p>
                                                        <div className="text-center p-3 border rounded bg-light">
                                                            <img 
                                                                src={mfaEnrollment.qrCode} 
                                                                alt="MFA QR Code" 
                                                                style={{ maxWidth: '200px', height: 'auto' }}
                                                            />
                                                        </div>
                                                        <p className="fs-12 mt-2 text-muted">
                                                            Or manually enter this secret: <code className="fs-11">{mfaEnrollment.secret}</code>
                                                        </p>
                                                    </Col>
                                                    <Col md={6}>
                                                        <p className="fs-12 mb-2">2. Enter the 6-digit code from your app:</p>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="000000"
                                                            value={verificationCode}
                                                            onChange={(e) => setVerificationCode(e.target.value)}
                                                            maxLength={6}
                                                            className="mb-3"
                                                        />
                                                        <div className="d-flex gap-2">
                                                            <SpkButton 
                                                                Buttonvariant="success" 
                                                                Size="sm"
                                                                onClick={verifyMfaEnrollment}
                                                                disabled={mfaEnrollment.isVerifying || verificationCode.length !== 6}
                                                            >
                                                                {mfaEnrollment.isVerifying ? 'Verifying...' : 'Verify & Enable'}
                                                            </SpkButton>
                                                            <SpkButton 
                                                                Buttonvariant="secondary" 
                                                                Size="sm"
                                                                onClick={() => setMfaEnrollment({
                                                                    qrCode: null,
                                                                    secret: null,
                                                                    factorId: null,
                                                                    isEnrolling: false,
                                                                    isVerifying: false
                                                                })}
                                                            >
                                                                Cancel
                                                            </SpkButton>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    )}
                                    <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                        <div className="w-50">
                                            <p className="fs-14 mb-1 fw-medium">Password Verification</p>
                                            <p className="fs-12 mb-0 text-muted">This additional step helps ensure that the person attempting to modify account details is the legitimate account owner.</p>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="personal-details" />
                                            <label className="form-check-label" htmlFor="personal-details">
                                                Require Personal Details
                                            </label>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                        <div className="card-footer border-top-0">
                            <div className="btn-list float-end">
                                <SpkButton Buttonvariant="info">Deactivate Account</SpkButton>
                                <SpkButton Buttonvariant="primary">Save Changes</SpkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!--End::row-1 -->*/}

        </Fragment>
    )
};

export default ProfileSettings;