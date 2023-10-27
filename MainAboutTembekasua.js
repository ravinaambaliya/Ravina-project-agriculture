import React from 'react'
import { Link } from 'react-router-dom'
import MainAboutTmbekasuaTitle from "../assets/MainAboutTmbekasuaTitle.png"
import { MainAboutTembekasuaData } from '../data/MainAboutTembekasuaData'

export default function MainAboutTembekasua() {
  return (
    <div className='p-4 mt-8 flex flex-col'>
        <div className='mb-3'>
            <img src={MainAboutTmbekasuaTitle} alt="MainAboutTmbekasuaTitle" />
        </div>
        <div>
            {MainAboutTembekasuaData.map((data, index)=> (
                <div key={index}>
                    <p className='text-xl'>{data.text}</p>
                </div>
            ))}
        </div>
        <div className='text-blue-500 mt-4'>
            <Link to="about">View More {'>>'}</Link>
        </div>
    </div>
  )
}
