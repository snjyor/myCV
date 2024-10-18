'use client'
import React, { useState, useEffect } from 'react';
import { Config } from '@/config/config';

export default function EducationExperience() {
    const [educationList, setEducationList] = useState<{ school: string; degree: string; startDate: string; endDate: string }[]>([])

    useEffect(() => {
        setEducationList(Config.educationExperience)
    }, [])

    return (
        <div className="bg-white print:bg-white rounded-lg p-4 print:p-2">
            <h2 className="text-base font-bold text-gray-800 print:text-black mb-2 border-b pb-1 print:border-b-black">教育经历</h2>
            <div className="space-y-2">
                {educationList.map((education, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex flex-row items-center space-x-4">
                                <h3 className="text-base font-medium text-gray-900 print:text-black">{education.school}</h3>
                                <p className="text-sm text-gray-700 print:text-black">{education.degree}</p>
                            </div>
                            <p className="text-xs text-gray-600 print:text-gray-700">{education.startDate} - {education.endDate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
