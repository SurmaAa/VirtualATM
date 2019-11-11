import enviroment from './enviroment';

const envTypes = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development'
};

let env;
// gh pages demo has GET on /VirtualATM
switch (enviroment) {
    case envTypes.PRODUCTION: 
        env = '/VirtualATM'; 
        break;
    case envTypes.DEVELOPMENT:
        env = '';
        break;
    default: 
        env = '';
        break;
} 

const constants = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    LANG_PL: 'PL',
    LANG_EN: 'EN',
    SPACE: ' ',
    GET_HOMEPAGE: `${env}/`,
    GET_BALANCE: `${env}/balance`,
    GET_DEPOSIT: `${env}/deposit`,
    GET_WITHDRAWAL: `${env}/withdrawal`,
    GET_LANGUAGE: `${env}/language`,
    GET_HELP: `${env}/help`,
    GET_CONFIRM: `${env}/confirm`,
    GET_CONFIRM_DEPOSIT: `${env}/confirm-deposit`,
    GET_CONFIRM_WITHDRAWAL: `${env}/confirm-withdrawal`,
    QUESTION_MARK: '?',
};

export default constants;

