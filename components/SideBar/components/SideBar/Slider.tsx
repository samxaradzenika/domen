"use client"
import React from 'react';
import { Slider } from 'antd';
import './Slider.module.scss';

const SliderComponent: React.FC = () => (
    <div style={{ width: '303px', opacity: 1 }}>
        <Slider
            trackStyle={[{ backgroundColor: '#99CC66' }, { backgroundColor: '#99CC66' }]}
            range={{ draggableTrack: true }}
            defaultValue={[20, 50]}
        />
    </div>
);

export default SliderComponent;
