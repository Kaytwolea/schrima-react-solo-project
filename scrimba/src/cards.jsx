import React from 'react';

const Cards = (props) => {
    return (
        <div className='pb-4'>
            <div className='w-5/6 bg-white mx-auto flex gap-3 h-36 mt-8'>
                <div>
                    <img src={props.image}  alt='' className='h-full w-32' />
                </div>
                <div className='h-32 bg-white w-full my-auto'>
                    <div className='flex gap-2'>
                        <img src='./images/location.png' alt=' ' className='' />
                        <p className='text-[11px] text-black uppercase'>{props.title}</p>
                        <a href={props.href} className='text-[8px] text-black'>View on Google Maps</a>
                    </div>
                    <h4 className='text-2xl text-black font-bold'>{props.location}</h4>
                    <h6 className='text-[10px] text-black font-bold pt-2'>{props.start} - {props.end}</h6>
                    <p className='text-[10px] text-black font-normal'>{props.cap}</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;
