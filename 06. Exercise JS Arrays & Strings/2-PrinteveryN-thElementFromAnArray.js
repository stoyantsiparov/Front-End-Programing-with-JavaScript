function printArray(array, step) {
    // Създавам празен масив
    let result = [];

    // Обхождам масива от началото до края му {i} заема с-ста на {step} дадена от конзолата, за да вземе само елементите през дадената стъпка 
    for (let i = 0; i < array.length; i += step) {
        // Елементите през дадената стъпка се {push-кат} в празния масив
        result.push(array[i]);
    }
    
    // Връщам го като масив
    return(result);
}

printArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);

printArray(['dsa',
    'asd',
    'test',
    'tset'],
    2
);

printArray(['1',
    '2',
    '3',
    '4',
    '5'],
    6
);