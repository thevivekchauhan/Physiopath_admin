import { useEffect } from 'react';
import TitleCard from '../../components/Cards/TitleCard';

function AboutUs() {
    useEffect(() => {
        document.title = "About Us";
    }, []);

    const aboutUsStyles = {
        container: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        title: {
            fontSize: '2.5rem',
            color: '#2c3e50',
            marginBottom: '20px',
        },
        subTitle: {
            fontSize: '1.5rem',
            color: '#16a085',
            marginBottom: '10px',
        },
        paragraph: {
            fontSize: '1.125rem',
            lineHeight: '1.8',
            color: '#555',
            marginBottom: '20px',
        },
        teamContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            gap: '20px',
            flexWrap: 'wrap',
        },
        teamMemberCard: {
            width: '200px',
            backgroundColor: '#fff',
            padding: '15px',
            textAlign: 'center',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
        },
        teamMemberImage: {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            marginBottom: '15px',
        },
        teamMemberName: {
            fontSize: '1.2rem',
            color: '#2c3e50',
            fontWeight: 'bold',
        },
        teamMemberRole: {
            fontSize: '1rem',
            color: '#7f8c8d',
        },
        teamMemberCardHover: {
            transform: 'scale(1.05)',
        },
    };

    return (
        <TitleCard title="About Us">
            <div style={aboutUsStyles.container}>
                <h2 style={aboutUsStyles.title}>About Our Company</h2>
                <p style={aboutUsStyles.paragraph}>
                    Welcome to our company! Our mission is to drive success and create lasting relationships with our clients.
                </p>

                <h3 style={aboutUsStyles.subTitle}>Our Team</h3>
                <div style={aboutUsStyles.teamContainer}>
                    <div
                        style={aboutUsStyles.teamMemberCard}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img src="/path/to/team-member1.jpg" alt="Team Member 1" style={aboutUsStyles.teamMemberImage} />
                        <div style={aboutUsStyles.teamMemberName}>Aastha</div>
                        <div style={aboutUsStyles.teamMemberRole}>CEO & Founder</div>
                    </div>

                    <div
                        style={aboutUsStyles.teamMemberCard}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img src="/path/to/team-member2.jpg" alt="Team Member 2" style={aboutUsStyles.teamMemberImage} />
                        <div style={aboutUsStyles.teamMemberName}>Yatri</div>
                        <div style={aboutUsStyles.teamMemberRole}>CTO</div>
                    </div>
                    <div
                        style={aboutUsStyles.teamMemberCard}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img src="/path/to/team-member2.jpg" alt="Team Member 2" style={aboutUsStyles.teamMemberImage} />
                        <div style={aboutUsStyles.teamMemberName}>Vivek</div>
                        <div style={aboutUsStyles.teamMemberRole}>CTO</div>
                    </div>

                    <div
                        style={aboutUsStyles.teamMemberCard}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img src="/path/to/team-member3.jpg" alt="Team Member 3" style={aboutUsStyles.teamMemberImage} />
                        <div style={aboutUsStyles.teamMemberName}>Aastha</div>
                        <div style={aboutUsStyles.teamMemberRole}>Project Manager</div>
                    </div>
                </div>
            </div>
        </TitleCard>
    );
}

export default AboutUs;
