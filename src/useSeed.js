import { useEffect, useState } from 'react';

function useSeed() {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);
    return seed;
}

export default useSeed;
