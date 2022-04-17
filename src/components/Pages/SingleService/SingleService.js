import React from 'react';
import { useParams } from 'react-router-dom';

const SingleService = () => {
    const params = useParams();
    return (
        <div>
            <h1 className="text-5xl">hello single service {params.id}</h1>
        </div>
    );
};

export default SingleService;