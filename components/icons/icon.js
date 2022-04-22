import PropTypes from 'prop-types';

import IconGitHub from './github';
import IconLinkedin from './linkedin';
import IconInstagram from './instagram';

const Icon = ({ name }) => {
switch (name) {
    case 'GitHub':
        return <IconGitHub />;
    case 'Instagram':
        return <IconInstagram />;
    case 'Linkedin':
        return <IconLinkedin />;
}
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;