import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

const colourStyles = {
    control: (styles) => ({
        ...styles,
        backgroundColor: 'white',
        width: '20%',
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => ({
        ...styles,
        backgroundColor: isSelected ? 'yellow' : isFocused ? 'black' : null,
        color: isFocused ? 'brown' : 'black',
        fontSize: isFocused ? '20px' : 'default',
        cursor: isFocused ? 'pointer' : 'default',
        ':active': {
            ...styles[':active'],
            backgroundColor: !isDisabled && (isSelected ? 'green' : 'yellow'),
        },
    }),
    menu: (styles) => ({ ...styles, width: '20%' }),
};

let tranformedOptionSet = [];
class PotterCharacterSearch extends Component {
    transformOptions = (characters) => {
        tranformedOptionSet = characters.map((item) => {
            const tempObj = {};
            tempObj.value = item.name;
            tempObj.label = item.name;
            tempObj.id = item._id;
            return tempObj;
        });
        return tranformedOptionSet;
    };

    render() {
        const { potterCharacters, handleSelectedCharacter } = this.props;
        if (potterCharacters.length > 0) {
            tranformedOptionSet = this.transformOptions(potterCharacters);
        }
        return (
            <Select
                options={tranformedOptionSet}
                styles={colourStyles}
                isClearable
                onChange={handleSelectedCharacter}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    potterCharacters: state.potterReducer.potterCharacters.data,
});

export default connect(mapStateToProps)(PotterCharacterSearch);
