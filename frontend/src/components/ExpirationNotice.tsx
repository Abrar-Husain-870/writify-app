import React from 'react';

interface ExpirationNoticeProps {
    expirationNotified: boolean;
}

const ExpirationNotice: React.FC<ExpirationNoticeProps> = ({ expirationNotified }) => {
    if (!expirationNotified) return null;
    
    return (
        <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-700 p-4 mb-4" role="alert">
            <div className="flex">
                <div className="py-1">
                    <svg className="fill-current h-6 w-6 text-amber-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 10.32 10.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                    </svg>
                </div>
                <div>
                    <p className="font-bold">Account Expiration Notice</p>
                    <p className="text-sm">
                        Your account will be automatically deleted in approximately 15 days due to our data retention policy. 
                        To keep your account active, please continue using the application. 
                        All inactive accounts are automatically removed after 6 months to optimize database usage.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExpirationNotice;
