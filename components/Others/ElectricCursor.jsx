"use client";
import React, { useEffect, useRef } from "react";
const ElectricCursor = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const sparks = [];
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        class Spark {
            x;
            y;
            length;
            alpha;
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.length = Math.random() * 10 + 5;
                this.alpha = 1;
            }
            update() {
                this.length -= 0.5;
                this.alpha -= 0.03;
            }
            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(
                    this.x + Math.random() * this.length,
                    this.y + Math.random() * this.length,
                );
                ctx.strokeStyle = `rgba(0, 200, 255, ${this.alpha})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = sparks.length - 1; i >= 0; i--) {
                sparks[i].update();
                sparks[i].draw();
                if (sparks[i].alpha <= 0) {
                    sparks.splice(i, 1);
                }
            }
            requestAnimationFrame(animate);
        };
        const onMove = (e) => {
            for (let i = 0; i < 3; i++) {
                sparks.push(new Spark(e.clientX, e.clientY));
            }
        };
        window.addEventListener("mousemove", onMove);
        animate();
        return () => {
            window.removeEventListener("mousemove", onMove);
        };
    }, []);
    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-50"
        />
    );
};
export default ElectricCursor;
