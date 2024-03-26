import { Radar } from 'react-chartjs-2';
import './reactchart.css';
import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useMousePosition } from './../../Function/CustomHook';

export function RaderChart(props) {
    const domRef = useRef(null);
    const [rotateDeg, setRotateDeg] = useState({x: 0, y: 0})
    const mousePosition = useMousePosition();
    const constrain = 80;

    const data = {
        labels: ['思考力', '判断力', '表現力', '集中力', '作業時間'],
        datasets: [{
            label: "",
            data: [1, 2, 1, 2, 1000],
            backgroundColor: 'hsl(0, 0%, 100%, 3%)',
            borderColor: 'white',
            borderWidth: 1.5,
            pointBackgroundColor: 'white',
            radius: 2,
        }]
    }
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                min: 0,
                max: 10,
                display: true,
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 6,
                    showLabelBackdrop: false,
                    color: 'hsl(0 0% 100% / 0.75)',
                    font: {
                        size:20
                    }
                },
                angleLines: {
                    color: 'hsl(0 0% 100% / .1)',
                },
                grid: {
                    borderDash: [0, 5],
                    color: 'hsl(0 0% 100% / .15)',
                },
                pointLabels: {
                    color: 'hsl(0 0% 100% / .9)',
                    font: {
                        size: 17
                    }
                }
            },
        },
    }

    useEffect(() => {
        const boundingClientRect = domRef.current.getBoundingClientRect()
        setRotateDeg({
            x: -(mousePosition.y - boundingClientRect.y - (boundingClientRect.height / 2)) / constrain,
            y: (mousePosition.x - boundingClientRect.x - (boundingClientRect.width / 2)) / constrain
        })
    }, [mousePosition])

    return (
        <div className="radar-chart" ref={domRef} style={props.style}>
            <div className="radar-chart-inner" style={{ transform: `perspective(800px) rotateX(${rotateDeg.x}deg) rotateY(${rotateDeg.y}deg)` }}>
                <Radar
                    data={data}
                    options={options}
                    plugins={null}
                    redraw={false}
                    datasetIdKey={'label'}
                    fallbackContent={null}
                    updateMode={null}
                    ref={null}
                    {...props}
                />
            </div>
        </div>
    );
}