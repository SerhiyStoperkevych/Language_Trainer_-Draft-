import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../features/slice';

const Main = () => {
    const [flippedStates, setFlippedStates] = useState({});
    const languages = useSelector((state) => state.languages.language);
    const dispatch = useDispatch();

    useEffect(() => {
        const initialState = {};
        languages.forEach((language) => {
            initialState[language.id] = false;
        });
        setFlippedStates(initialState);
    }, [languages]);

    const toggleFlip = (id) => {
        setFlippedStates((prevStates) => ({
            ...prevStates,
            [id]: !prevStates[id],
        }));
    };

    return (
        <>
        <ul>
            {languages.map((language) => (
                <li key={language.id}>
                    <h1>Your Card:</h1>
                    {flippedStates[language.id] ? (
                        <>
                            <h2>{language.back}</h2>
                            <button onClick={() => toggleFlip(language.id)}>Front</button>
                        </>
                    ) : (
                        <>
                            <h2>{language.front}</h2>
                            <button onClick={() => toggleFlip(language.id)}>Back</button>
                        </>
                    )}
                    <button onClick={() => dispatch(remove(language.id))}>Remove</button>
                </li>
            ))}
        </ul>
        </>
    );
};

export default Main;
