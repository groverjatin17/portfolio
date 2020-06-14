import React, { Component, createRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { Divider } from 'semantic-ui-react';

import { connect } from 'react-redux';
import Hero from './Hero';
import Cards from './Cards';
import SideProjects from './SideProjects';
import workformoney from '../../assets/images/workformoney.gif';
import SocialMedia from './SocialMedia.js';
import { setMediaDevice } from '../../actions/actions_info';

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
                    <div>
                        <img
                            src={workformoney}
                            alt='Loading...'
                            style={{ maxWidth: '100%' }}
                        />
                    </div>
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
