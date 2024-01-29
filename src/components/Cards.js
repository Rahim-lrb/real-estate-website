import React, { useState } from 'react';

export default function Cards() {
    const [activeCardIndex, setActiveCardIndex] = useState(null);

    const toggleCard = (index) => {
        setActiveCardIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const cardsData = [
        {
            title: 'Best interest rates on the market',
            content:
                'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.',
        },
        {
            title: 'Flexible Payment Options',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt, velit eget mattis viverra, nisi odio tincidunt turpis, vel porta libero justo id nunc.',
        },
        {
            title: '24/7 Customer Support',
            content:
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        },
    ];

    return (
        <div className='flex flex-col space-y-8'>
            {cardsData.map((card, index) => (
                <div key={index} className={`border border-[#ededed] p-4 rounded-md ${index === activeCardIndex? 'shadow-[0_35px_60px_-15px_rgba(64,102,255,0.3)]': 'none'}`}>
                    <div className='flex justify-between items-center pb-5'>
                        <div className='bg-[#eeeeff] p-2 rounded-lg cursor-pointer' onClick={() => toggleCard(index)}>
                            <svg className='fill-current text-blue cursor w-4 h-4 rounded-sm' stroke='' fill='blue'stroke-width='0'viewBox='0 0 20 20'aria-hidden='true'height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clip-rule='evenodd'></path></svg>
                        </div>
                        <h3 className='text-lg text-primary font-bold'>{card.title}</h3>
                        <div className='bg-[#eeeeff] p-2 rounded-lg cursor-pointer' onClick={() => toggleCard(index)}><svg className='fill-current text-blue' stroke='' fill='blue' stroke-width='0' viewBox='0 0 24 24' height='20' width='20' xmlns='http://www.w3.org/2000/svg'><path fill='none' d='M0 0h24v24H0V0z'></path><path d='M7 10l5 5 5-5H7z'></path></svg></div>
                    </div>
                    <p className={`${index === activeCardIndex ? 'block' : 'hidden'} text-sm text-slate-500`}>{card.content}</p>
                </div>
            ))}
        </div>
    );
}
