interface faqsTypes {
    id: string;
    title: string;
    content: string;
}
export const Generaldata: faqsTypes[] = [
    { id: "1", title: "1. Can I customize the admin template?", content: "Yes, the admin template is fully customizable. You can modify the layout, color scheme, typography, and more to match your branding or design preferences." },
    { id: "2", title: "2. How do I install the admin template?", content: "Installing the admin template is straightforward. Simply download the template files and follow the included installation instructions provided in the documentation. " },
    { id: "3", title: "3. Is there a demo version available?", content: "Yes, a demo version of the admin template is available for testing purposes. You can access the demo on our website and explore its features before making a purchase. " },
    { id: "4", title: "4. How do I integrate the admin template with my existing project?", content: "Integrating the admin template with your existing project is simple. You can either copy the template files into your project directory or use package managers like npm or yarn for easy integration. " },
    { id: "5", title: "5. Does the admin template support responsive design?", content: "Yes, the admin template is built with responsive design in mind. It is fully compatible with desktop, tablet, and mobile devices, ensuring a seamless user experience across all screen sizes. " },
]

export const Themedata: faqsTypes[] = [
    { id: "1", title: "1. How do I change the primary color of the theme?", content: " Navigate to the 'Theme Settings' page, where you'll find options to choose a primary color and accent color. Select your desired colors and save the changes." },
    { id: "2", title: "2.  Can I customize the accent color of the theme?", content: "Yes, you can customize the accent color of the theme to complement the primary color. Access the theme customization options and find the setting for 'Accent Color'." },
    { id: "3", title: "3. Is it possible to set a background color for the theme?", content: "Absolutely! You can set a background color for the theme by accessing the background settings in the customization panel. Select your desired color or upload a custom background image for a personalized touch." },
    { id: "4", title: "4. How do I adjust the text color for different elements in the theme?", content: "Yes, you can customize hover and active states for links and buttons to provide visual feedback to users.Look for settings related to link and button states in the customization" },
]

export const Userdata: faqsTypes[] = [
    { id: "1", title: "1.  How do I add new users to the system?", content: "Adding new users to the system is simple. As an admin, you can navigate to the user management section and select the option to add a new user." },
    { id: "2", title: "2. Can I customize user roles and permissions?", content: "Yes, you can customize user roles and permissions to control access to different parts of the system. As an admin, you can create custom roles with specific permissions and assign them to users as needed. " },
    { id: "3", title: "3.  How do I deactivate or delete a user account?", content: " To deactivate or delete a user account, navigate to the user management section and select the option to edit the user account. From there, you can choose to deactivate or delete the account permanently." },
    { id: "4", title: "4. Is there a way to import user data from an external source?", content: " Yes, you can import user data from an external source such as a CSV file. There is usually an option available in the user management section to upload a CSV file" },
    { id: "5", title: "5. Can users reset their own passwords?", content: "Yes, users can typically reset their own passwords using a 'forgot password' feature. They will receive an email with instructions on how to reset their password securely." },
]

export const Securitydata: faqsTypes[] = [
    { id: "1", title: "1.  How do I set up secure authentication for my application?", content: "Setting up secure authentication involves implementing encryption, strong password policies, and secure authentication methods like OAuth or JWT. Our documentation provides step-by-step instructions." },
    { id: "2", title: "2. What are the best practices for securing user passwords?", content: "Best practices for securing user passwords include using strong encryption algorithms (such as bcrypt), enforcing password complexity requirements, and regularly hashing and salting passwords." },
    { id: "3", title: "3. Can I enable two-factor authentication (2FA) for added security?", content: "Yes, session management in the admin template is handled securely to prevent session hijacking and fixation attacks. We use secure cookies, session timeouts, and random session IDs to protect." },
    { id: "4", title: "4.  session management handled securely in the admin template?", content: " Yes, the admin template is fully customizable. You can modify the layout, color scheme, typography, and more to match your branding or design preferences." },
    { id: "5", title: "5. Can I restrict access to certain parts of the application based on user roles and permissions?", content: "Yes, our admin template includes role-based access control (RBAC) functionality that allows you to define user roles and permissions and restrict access to certain features or data based on these roles." },
]

export const Troubledata: faqsTypes[] = [
    { id: "1", title: "1. Can I get help with customizing the admin template to fit my specific requirements?", content: "Yes, our admin template includes role-based access control (RBAC) functionality that allows you to define user roles and permissions and restrict access to certain features or data based on these roles." },
    { id: "2", title: "2. What should I do if I encounter an error while using the admin template?", content: "If you encounter an error, first check the documentation for any troubleshooting tips or known issues. If the problem persists, please contact our support team for assistance." },
    { id: "3", title: "3. How can I report a bug or issue with the admin template?", content: " If you encounter an error, first check the documentation for any troubleshooting tips or known issues. If the problem persists, please contact our support team for assistance." },
    { id: "4", title: "4.  I'm having trouble integrating the admin template with my project. What should I do?", content: "If you're experiencing difficulties integrating the admin template with your project, refer to the documentation for step-by-step integration instructions. If you still need assistance, don't hesitate to reach out to our support team for help." },
    { id: "5", title: "5. How do I troubleshoot performance issues with the admin template?", content: "Performance issues may arise due to factors such as heavy resource usage, inefficient code, or server configuration issues. Check the documentation for optimization tips or contact our support team for assistance in diagnosing and resolving performance issues." },
]