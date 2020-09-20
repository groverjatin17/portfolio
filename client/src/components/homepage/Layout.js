import React, { Component, createRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { Divider, Grid, Icon, Image, List } from 'semantic-ui-react';

import { connect } from 'react-redux';
import Hero from './Hero';
import Cards from './Cards';
import SideProjects from './SideProjects';
import workformoney from '../../assets/images/workformoney.gif';
import SocialMedia from './SocialMedia.js';
import { setMediaDevice } from '../../actions/actions_info';

const interestsList = [
    'Mixed Martial Arts',
    'Backpacking',
    'Badminton/Working out',
    'Reading books',
    'Sketching Portraits',
    'Bhangra-Punjabi Folk Dance',
];
class Layout extends Component {
    constructor(props) {
        super(props);
        this.titleRef = createRef();
    }

    componentDidMount() {
        const { addMediaDevice } = this.props;
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            addMediaDevice('mobile');
        }
    }

    scrollToTitleRef = () =>
        this.titleRef.current.scrollIntoView({ behavior: 'smooth' });

    render() {
        console.log('process.envs ', process.env);
        return (
            <>
                <Hero scrollIntoView={this.scrollToTitleRef} />
                <div className='layout'>
                    <Divider horizontal className='section-divider'>
                        <h1 className='section-title'>
                            <FormattedMessage
                                id='heading.techStack'
                                defaultMessage='Tech Stack'
                            />
                        </h1>
                    </Divider>
                    <Cards />
                    <Divider horizontal className='section-divider'>
                        <h1 className='section-title' ref={this.titleRef}>
                            <FormattedMessage
                                id='heading.myProjects'
                                defaultMessage='My Projects'
                            />
                        </h1>
                    </Divider>
                    <SideProjects />
                    <Grid>
                        <Grid.Row columns='2'>
                            <Grid.Column>
                                <Image src={workformoney} />
                            </Grid.Column>
                            <Grid.Column>
                                <div>
                                    <h1>Co-curricular interests</h1>
                                    {interestsList.map((item) => (
                                        <List key={item}>
                                            <Icon
                                                name='angle right'
                                                size='large'
                                            />
                                            <List.Content>{item}</List.Content>
                                        </List>
                                    ))}
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <SocialMedia />
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addMediaDevice: (device) => dispatch(setMediaDevice(device)),
});
const mapStateToProps = ({ reducerInfo, potterReducer }) => ({
    reducerInfo,
    potterReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
