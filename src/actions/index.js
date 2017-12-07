import generator from '../generator';

export const generateEquation =(level=0) => {
    return {
        type: 'GENERATE_EQUATION',
        payload: generator(level)
    }
}

