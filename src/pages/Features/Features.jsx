import FeatureCard from '../../components/FeatureCard/FeatureCard'
import features from '../../features'

import './Features.css'
import React from 'react'

const Features = () => {
    return (
        <div className='features-bg'>
            <div className='features-div1'>
                <h2 className='feature-div1-title'>Kalite ve Süreç Yönetimi</h2>
                <p className='feature-div1-content'>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
            </div>
            <div className='features-div-2'>
                {
                    features.map((feature)=><FeatureCard key = {feature.id} title = {feature.title} content = {feature.content} icon={feature.icon}/>)
                }
            </div>
        </div>
    )
}

export default Features
