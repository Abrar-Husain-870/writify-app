import React from 'react';
import Header from './Header';

const Tutorial: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header title="Tutorial" />
            
            <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-6 py-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">Writify App Tutorial</h1>
                        
                        <div className="space-y-8">
                            {/* Introduction */}
                            <section>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Welcome to Writify</h2>
                                <p className="text-gray-600 mb-4">
                                    Writify connects students who need help with assignments to skilled writers who can assist them.
                                    This tutorial will guide you through all the features of the app and how to make the most of it.
                                </p>
                            </section>
                            
                            {/* Getting Started */}
                            <section>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Getting Started</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">Setting Up Your Profile</h3>
                                        <p className="text-gray-600">
                                            After signing in with your Google account, complete your profile by adding:
                                        </p>
                                        <ul className="list-disc pl-5 mt-2 text-gray-600">
                                            <li>Your university stream (e.g., Computer Science, Business, etc.)</li>
                                            <li>Your WhatsApp number (required for writers who want to be active)</li>
                                            <li>If you're a writer, upload samples of your work to your portfolio</li>
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">Writer Status</h3>
                                        <p className="text-gray-600">
                                            Writers have three status options:
                                        </p>
                                        <ul className="list-disc pl-5 mt-2 text-gray-600">
                                            <li><strong>Inactive</strong>: Default status for new users. You won't appear in the writer search.</li>
                                            <li><strong>Available</strong>: You're open to taking new assignments. <em>(Requires WhatsApp number)</em></li>
                                            <li><strong>Busy</strong>: You're currently handling assignments but still visible in search. <em>(Requires WhatsApp number)</em></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            
                            {/* For Students */}
                            <section>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-3">For Students</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">Finding a Writer</h3>
                                        <p className="text-gray-600">
                                            To find a writer for your assignment:
                                        </p>
                                        <ol className="list-decimal pl-5 mt-2 text-gray-600">
                                            <li>Click on "Find a Writer" from the dashboard</li>
                                            <li>Browse through the list of available writers</li>
                                            <li>Click on a writer's card to view their full profile, including their portfolio and ratings</li>
                                            <li>If you find a suitable writer, click "Request Assignment" to submit your assignment details</li>
                                            <li>Once the writer accepts, you'll be connected via WhatsApp to discuss details</li>
                                        </ol>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">Submitting Assignment Requests</h3>
                                        <p className="text-gray-600">
                                            When submitting an assignment request, provide detailed information:
                                        </p>
                                        <ul className="list-disc pl-5 mt-2 text-gray-600">
                                            <li>Course name and code</li>
                                            <li>Assignment type (essay, report, etc.)</li>
                                            <li>Number of pages required</li>
                                            <li>Deadline</li>
                                        </ul>
                                        <p className="text-gray-600 mt-2">
                                            The system will calculate an estimated cost based on these details.
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">Managing Your Assignments</h3>
                                        <p className="text-gray-600">
                                            Track all your assignment requests in the "My Assignments" section:
                                        </p>
                                        <ul className="list-disc pl-5 mt-2 text-gray-600">
                                            <li>View open requests that haven't been accepted yet</li>
                                            <li>See assigned requests that writers are working on</li>
                                            <li>Check completed assignments</li>
                                            <li>Rate writers after assignment completion</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            
                            {/* For Writers */}
                            <section>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-3">For Writers</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">Setting Up Your Writer Profile</h3>
                                        <p className="text-gray-600">
                                            To attract students to your services:
                                        </p>
                                        <ol className="list-decimal pl-5 mt-2 text-gray-600">
                                            <li>Add your WhatsApp number (required to be active or busy)</li>
                                            <li>Upload samples of your previous work to your portfolio</li>
                                            <li>Add a detailed description of your expertise and experience</li>
                                            <li>Set your status to "Available" when ready to take assignments</li>
                                        </ol>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">Finding Assignments</h3>
                                        <p className="text-gray-600">
                                            There are two ways to get assignments:
                                        </p>
                                        <ul className="list-disc pl-5 mt-2 text-gray-600">
                                            <li><strong>Direct Requests</strong>: Students can find your profile and send you assignment requests</li>
                                            <li><strong>Browse Requests</strong>: You can browse open assignment requests from the "Browse Requests" section and accept ones that match your skills</li>
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">Managing Your Assignments</h3>
                                        <p className="text-gray-600">
                                            Keep track of your assignments in the "My Assignments" section:
                                        </p>
                                        <ul className="list-disc pl-5 mt-2 text-gray-600">
                                            <li>View all assignments you've accepted</li>
                                            <li>Mark assignments as completed when done</li>
                                            <li>Maintain good ratings by delivering quality work on time</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            
                            {/* Ratings System */}
                            <section>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Ratings System</h2>
                                <p className="text-gray-600 mb-4">
                                    Writify uses a 5-star rating system to help maintain quality and trust in the community:
                                </p>
                                <ul className="list-disc pl-5 text-gray-600">
                                    <li>Students can rate writers after assignment completion</li>
                                    <li>Ratings are displayed on writer profiles as an average score</li>
                                    <li>Higher-rated writers typically attract more assignment requests</li>
                                    <li>Writers can build their reputation through consistently good work</li>
                                </ul>
                            </section>
                            
                            {/* Communication */}
                            <section>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Communication</h2>
                                <p className="text-gray-600 mb-4">
                                    Writify uses WhatsApp for direct communication between students and writers:
                                </p>
                                <ul className="list-disc pl-5 text-gray-600">
                                    <li>When an assignment request is accepted, both parties are connected via WhatsApp</li>
                                    <li>Use WhatsApp to discuss assignment details, share files, and ask questions</li>
                                    <li>WhatsApp numbers are required for writers to be active on the platform</li>
                                    <li>For privacy reasons, WhatsApp numbers are only shared when an assignment is accepted</li>
                                </ul>
                            </section>
                            
                            {/* Account Management */}
                            <section>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Account Management</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">Account Expiration</h3>
                                        <p className="text-gray-600">
                                            To optimize database usage, Writify implements an automatic data cleanup system:
                                        </p>
                                        <ul className="list-disc pl-5 mt-2 text-gray-600">
                                            <li>User accounts are automatically deleted after 6 months of inactivity</li>
                                            <li>You'll receive a notification 15 days before your account is scheduled for deletion</li>
                                            <li>To keep your account active, simply continue using the application</li>
                                            <li>This policy helps us maintain a lean database and focus on active users</li>
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">Updating Your Profile</h3>
                                        <p className="text-gray-600">
                                            You can update your profile information at any time:
                                        </p>
                                        <ul className="list-disc pl-5 mt-2 text-gray-600">
                                            <li>Change your university stream</li>
                                            <li>Update your WhatsApp number</li>
                                            <li>Modify your writer status</li>
                                            <li>Update your portfolio with new work samples</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            
                            {/* Tips for Success */}
                            <section>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Tips for Success</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">For Students</h3>
                                        <ul className="list-disc pl-5 text-gray-600">
                                            <li>Provide clear and detailed assignment requirements</li>
                                            <li>Set realistic deadlines with some buffer time</li>
                                            <li>Communicate promptly with your writer</li>
                                            <li>Leave honest ratings to help the community</li>
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">For Writers</h3>
                                        <ul className="list-disc pl-5 text-gray-600">
                                            <li>Keep your portfolio updated with your best work</li>
                                            <li>Set your status to "Busy" when you have enough assignments</li>
                                            <li>Deliver quality work on time to maintain good ratings</li>
                                            <li>Communicate professionally with students</li>
                                            <li>Only accept assignments you're confident you can complete well</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Tutorial;
