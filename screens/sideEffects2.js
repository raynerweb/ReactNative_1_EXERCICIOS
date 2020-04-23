import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const SideEffects2 = () => {
    const [name, setName] = useState('');

    /**
     * Obtenha a reposta de 'https://jsonplaceholder.typicode.com/todos/1'
     * Pegue a chave `title` do objeto e coloque dentro do estado `name`
     * Utilizem fetch e o conceito de promise.
     * */

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(async (response) => {
            data = await response.json();
            console.log(data);
            setName(data.title)
        });
    }, [])

    return (
        <>
            <Text>Texto: {name}</Text>
        </>
    );
};

export default SideEffects2;
