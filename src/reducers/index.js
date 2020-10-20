import { act } from "react-dom/test-utils"

export const initialState = {
    additionalPrice: 0,
    car:{
        price: 25000,
        name: '2019 Ford Musting',
        image: 
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-8 engine', price: 5000},
        { id: 2, name: 'Racing detail package', price: 2000},
        { id: 3, name: 'Premium sound system', price: 1000},
        { id: 4, name: 'Rear spoiler', price: 300}
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FEATURE':
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        action.payload
                    ]
                },
                additionalFeatures: [
                    ...state.additionalFeatures.filter(feature => feature.id !== action.payload.id)
                ]
            }
        case 'REMOVE_FEATURE':
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                    ...state.car,
                    feature: [
                        ...state.car.features.filter(feature => feature.id !== action.payload.id)
                    ]
                },
                additionalFeatures: [
                    ...state.additionalFeatures,
                    action.payload
                ]
            }
            default:
                return state;
    }
}