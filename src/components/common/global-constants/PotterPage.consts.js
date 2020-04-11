import HufflePuff from '../../../assets/images/hufflepuff.png';
import Slytherin from '../../../assets/images/slytherin.png';
import Gryffindor from '../../../assets/images/gryffindor.png';
import Ravenclaw from '../../../assets/images/ravenclaw.png';

import Wand from '../../../assets/images/Wand.png';
import Patronus from '../../../assets/images/Patronus.png';
import Animagus from '../../../assets/images/Animagus.png';
import Boggart from '../../../assets/images/Boggart.png';
import OrderOfThePhoenix from '../../../assets/images/OrderOfThePhoenix.png';
import BloodType from '../../../assets/images/BloodType.png';


const TABLE_HEADER = {
    HASH:'#',
    NAME:'NAME',
    HOUSE:'HOUSE',
    BLOOD:'BLOOD',
    WAND:'WAND',
    BOGGART:'BOGGART',
    PATRONUS:'PATRONUS',
    ARMY:'ARMY'
};

const BLOOD_TYPES = {
    PURE_BLOOD:'pure-blood',
    HALF_BLOOD:'half-blood',
    MUGGLE: 'muggle',
};

const HOUSE_IMAGES = {
    HUFFLEPUFF: HufflePuff,
    SLYTHERIN: Slytherin,
    GRYFFINDOR: Gryffindor,
    REVENCLAW: Ravenclaw
};

const HOUSE_NAMES = {
    HUFFLEPUFF: 'hufflePuff',
    SLYTHERIN: 'slytherin',
    GRYFFINDOR: 'gryffindor',
    RAVENCLAW: 'ravenclaw'
};

const CHARACTER_IMAGES = {
    WAND: Wand,
    PATRONUS: Patronus,
    ANIMAGUS: Animagus,
    BOGGART: Boggart,
    ORDER_OF_THE_PHOENIX: OrderOfThePhoenix,
    BLOOD_TYPE: BloodType,

};


export {TABLE_HEADER, BLOOD_TYPES, HOUSE_IMAGES, HOUSE_NAMES, CHARACTER_IMAGES};
