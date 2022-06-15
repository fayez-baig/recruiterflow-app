import { FC } from 'react';
import { CardProps } from './types';

const Card: FC<CardProps> = ({ fullName, designation, handleDelete, id }) => {
    return (
        <>
            <div className="max-w-xs">
                <div className="py-3 bg-white rounded-lg shadow-xl">
                    <div className="p-2 photo-wrapper">
                        <img
                            className="mx-auto rounded-full w-28 h-28"
                            src={`https://gravatar.com/avatar/${id}?s=200&d=robohash&r=x`}
                            alt={fullName}
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-medium leading-8 text-center text-gray-900">
                            {fullName}
                        </h3>
                        <div className="text-xs font-semibold text-center text-gray-400">
                            <p>{designation}</p>
                        </div>

                        <div className="my-3 text-center">
                            <span
                                className="text-xs italic font-medium text-red-500 hover:underline hover:text-red-600"
                                onClick={handleDelete}
                            >
                                Delete Contact
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
