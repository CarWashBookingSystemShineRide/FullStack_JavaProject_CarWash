import React, { useState, useEffect, useRef } from 'react'

export default function Carousel({ images = [], interval = 5000 }) {
    const [idx, setIdx] = useState(0)
    const timeoutRef = useRef(null)

    useEffect(() => {
        if (!images || images.length === 0) return
        timeoutRef.current = setInterval(() => {
            setIdx(i => (i + 1) % images.length)
        }, interval)
        return () => clearInterval(timeoutRef.current)
    }, [images, interval])

    return (
        <div className="carousel-view" style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
            <div
                className="carousel-track"
                style={{
                    display: 'flex',
                    width: `${images.length * 100}%`,
                    height: '100%',
                    transform: `translateX(-${(idx * 100) / images.length}%)`,
                    transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                {images.map((img, i) => (
                    <div key={i} style={{ width: `${100 / images.length}%`, height: '100%' }}>
                        <img
                            src={img}
                            alt={`slide-${i}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }}
                        />
                    </div>
                ))}
            </div>

            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 20, display: 'flex', justifyContent: 'center', gap: 10, zIndex: 10 }}>
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => { clearInterval(timeoutRef.current); setIdx(i) }}
                        style={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            background: i === idx ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.4)',
                            border: 'none',
                            padding: 0,
                            cursor: 'pointer',
                            transition: 'background 0.3s ease'
                        }}
                        aria-label={`dot-${i}`}
                    />
                ))}
            </div>
        </div>
    )
}
